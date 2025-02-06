import requests
from django.core.cache import cache
from datetime import datetime

def get_coordinates(city: str, country: str):
    """Converte cidade e país em latitude e longitude."""
    if not city or not country:
        return None

    cache_key = f"coords_{city}_{country}".replace(":", "_")
    cached_coords = cache.get(cache_key)
    if cached_coords:
        return cached_coords

    geocode_url = "https://nominatim.openstreetmap.org/search"
    params = {"q": f"{city}, {country}", "format": "json", "limit": 1}
    headers = {"User-Agent": "WeatherForecastAPI/1.0 (email@email.com)"}

    try:
        response = requests.get(geocode_url, params=params, headers=headers)
        response.raise_for_status()
        data = response.json()

        if not data or "lat" not in data[0] or "lon" not in data[0]:
            return None

        lat, lon = float(data[0]["lat"]), float(data[0]["lon"])
        cache.set(cache_key, (lat, lon), timeout=86400)  # Cache de 24 horas
        return lat, lon
    except requests.exceptions.RequestException as e:
        print(f"Error fetching coordinates: {e}")
        return None

def get_weather_forecast(city: str, country: str, latitude: float, longitude: float, forecast_type: str = "hourly"):
    """
    Consulta a API Open-Meteo com cache e retorna a previsão do tempo com temperatura atual, nome da cidade e data.
    """
    cache_key = f"weather_{latitude}_{longitude}_{forecast_type}"
    cached_data = cache.get(cache_key)
    if cached_data:
        return cached_data

    base_url = "https://api.open-meteo.com/v1/forecast"
    params = {
        "latitude": latitude,
        "longitude": longitude,
        "current_weather": "true",
    }

    # Adicionar parâmetros de previsão
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

        # Capturar temperatura atual e data atual
        current_temperature = data.get("current_weather", {}).get("temperature", "N/A")
        current_date = datetime.utcnow().strftime("%Y-%m-%d")

        response_data = {
            "city": city,
            "country": country,
            "latitude": latitude,
            "longitude": longitude,
            "temperature_now": current_temperature,
            "date": current_date, 
            "forecast": data 
        }

        # Cache por 30 minutos
        cache.set(cache_key, response_data, timeout=1800)

        return response_data
    except requests.exceptions.RequestException as e:
        print(f"API Error: {e}")
        return {"error": "Failed to fetch weather data."}