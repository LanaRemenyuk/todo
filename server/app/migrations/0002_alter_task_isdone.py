# Generated by Django 5.0.6 on 2024-06-28 18:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='isDone',
            field=models.BooleanField(blank=True, null=True),
        ),
    ]