from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WeatherForecastView, FavoriteLocationViewSet, WeatherHistoryViewSet

router = DefaultRouter()
router.register(r'favorites', FavoriteLocationViewSet, basename='favorites')
router.register(r'history', WeatherHistoryViewSet, basename='history')

urlpatterns = [
    path('forecast/', WeatherForecastView.as_view(), name='weather-forecast'),
    path('', include(router.urls)),
]
