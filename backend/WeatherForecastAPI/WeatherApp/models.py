from django.db import models

class FavoriteLocation(models.Model):
    latitude = models.FloatField()
    longitude = models.FloatField()
    name = models.CharField(max_length=255)
    nickname = models.CharField(max_length=255, blank=True, null=True)  # Adicione esse campo para evitar o erro.

    def __str__(self):
        return self.name


class WeatherHistory(models.Model):
    location = models.ForeignKey(FavoriteLocation, related_name='history', on_delete=models.CASCADE)
    date = models.DateField()  # Data da previsão
    temperature = models.FloatField()  # Temperatura registrada
    description = models.CharField(max_length=255)  # Descrição do tempo (ex: ensolarado, nublado)

    def __str__(self):
        return f"{self.location} - {self.date}"