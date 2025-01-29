from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets

from .models import FavoriteLocation, WeatherHistory
from .serializers import FavoriteLocationSerializer, WeatherHistorySerializer
from .services import get_weather_forecast
from rest_framework.permissions import AllowAny

class WeatherForecastView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        latitude = request.query_params.get("latitude")
        longitude = request.query_params.get("longitude")
        forecast_type = request.query_params.get("type", "hourly")

        if not latitude or not longitude:
            return Response({"error": "Latitude and longitude are required."}, status=400)

        forecast_data = get_weather_forecast(float(latitude), float(longitude), forecast_type)
        return Response(forecast_data)

class FavoriteLocationViewSet(viewsets.ModelViewSet):
    queryset = FavoriteLocation.objects.all()
    serializer_class = FavoriteLocationSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        serializer.save()

class WeatherHistoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = WeatherHistory.objects.all()
    serializer_class = WeatherHistorySerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return self.queryset