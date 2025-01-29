from rest_framework import serializers
from .models import FavoriteLocation, WeatherHistory

class FavoriteLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteLocation
        fields = '__all__'

class WeatherHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = WeatherHistory
        fields = ['id', 'location', 'date', 'temperature', 'description']
        depth = 1
