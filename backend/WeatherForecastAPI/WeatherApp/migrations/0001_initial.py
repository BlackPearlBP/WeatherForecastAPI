# Generated by Django 5.1.5 on 2025-01-28 12:28

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FavoriteLocation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('latitude', models.FloatField()),
                ('longitude', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='WeatherHistory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('temperature', models.FloatField()),
                ('description', models.CharField(max_length=255)),
                ('location', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='history', to='WeatherApp.favoritelocation')),
            ],
        ),
    ]
