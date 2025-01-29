from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .services import get_weather_forecast

class WeatherForecastView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        city = request.query_params.get("city")
        country = request.query_params.get("country")
        forecast_type = request.query_params.get("type", "hourly")

        if not city or not country:
            return Response({"error": "City and country are required."}, status=400)

        forecast_data = get_weather_forecast(city, country, forecast_type)
        return Response(forecast_data)
