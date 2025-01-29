import requests
from django.core.cache import cache

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
    headers = {"User-Agent": "WeatherForecastAPI/1.0 (your_email@example.com)"}  # Adicione seu e-mail ou identificação aqui

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
        print(f"Error fetching coordinates: {e}")  # Log de erro para diagnóstico
        return None

def get_weather_forecast(city: str, country: str, forecast_type: str = "hourly"):
    """Obtém a previsão do tempo a partir da cidade/país."""
    coords = get_coordinates(city, country)
    if not coords:
        return {"error": "Location not found."}

    latitude, longitude = coords
    cache_key = f"weather_{latitude}_{longitude}_{forecast_type}"
    cached_data = cache.get(cache_key)
    if cached_data:
        return cached_data

    base_url = "https://api.open-meteo.com/v1/forecast"
    params = {"latitude": latitude, "longitude": longitude, "timezone": "auto"}

    if forecast_type == "hourly":
        params["hourly"] = "temperature_2m"
    elif forecast_type == "daily":
        params["daily"] = "temperature_2m_max,temperature_2m_min"

    try:
        response = requests.get(base_url, params=params)
        response.raise_for_status()
        data = response.json()
        cache.set(cache_key, data, timeout=1800)  # Cache de 30 min
        return data
    except requests.exceptions.RequestException:
        return {"error": "Failed to fetch weather data."}
