from django.urls import path, include
from .views import WeatherForecastView

urlpatterns = [
    path('forecast/', WeatherForecastView.as_view(), name='weather-forecast'),
]
