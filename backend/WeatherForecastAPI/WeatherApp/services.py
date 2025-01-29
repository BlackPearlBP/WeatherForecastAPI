import requests
from datetime import date
from django.core.cache import cache
from .models import WeatherHistory, FavoriteLocation

def get_weather_forecast(latitude: float, longitude: float, forecast_type: str = "hourly"):
    """
    Consulta a API Open-Meteo com cache e salva o histórico de consultas.
    """
    cache_key = f"weather_{latitude}_{longitude}_{forecast_type}"
    cached_data = cache.get(cache_key)
    if cached_data:
        return cached_data

    base_url = "https://api.open-meteo.com/v1/forecast"
    params = {
        "latitude": latitude,
        "longitude": longitude,
    }

    # Verificando o tipo de previsão (hourly, daily, weekly)
    if forecast_type == "hourly":
        params["hourly"] = "temperature_2m"
    elif forecast_type == "daily":
        params["daily"] = "temperature_2m_max,temperature_2m_min"
    elif forecast_type == "weekly":
        params["daily"] = "temperature_2m_max,temperature_2m_min"
        params["timezone"] = "auto"
    else:
        return {"error": "Invalid forecast type. Use 'hourly', 'daily', or 'weekly'."}

    try:
        response = requests.get(base_url, params=params)
        response.raise_for_status()
        data = response.json()

        # Cache data 30 minutes
        cache.set(cache_key, data, timeout=1800)

        # Encontrar ou criar a localização com base na latitude e longitude
        location, created = FavoriteLocation.objects.get_or_create(
            latitude=latitude,
            longitude=longitude,
            defaults={'name': f"Location at {latitude}, {longitude}"}
        )

        # Salvar os dados de previsão no histórico
        if forecast_type == "hourly":
            for time, temperature in zip(data['hourly']['time'], data['hourly']['temperature_2m']):
                WeatherHistory.objects.create(
                    location=location,
                    date=date.today(),  # Definindo a data como a data de hoje
                    temperature=temperature,
                    description="Data de previsão para hora específica"
                )

        elif forecast_type == "daily":
            for day, max_temp, min_temp in zip(data['daily']['time'], data['daily']['temperature_2m_max'], data['daily']['temperature_2m_min']):
                WeatherHistory.objects.create(
                    location=location,
                    date=day,
                    temperature=(max_temp + min_temp) / 2,
                    description="Data de previsão para o dia específico"
                )

        elif forecast_type == "weekly":
            for week, max_temp, min_temp in zip(data['daily']['time'], data['daily']['temperature_2m_max'], data['daily']['temperature_2m_min']):
                WeatherHistory.objects.create(
                    location=location,
                    date=week,
                    temperature=(max_temp + min_temp) / 2,
                    description="Data de previsão para a semana específica"
                )

        return data
    except requests.exceptions.RequestException as e:
        print(f"API Error: {e}")
        return {"error": "Failed to fetch weather data."}