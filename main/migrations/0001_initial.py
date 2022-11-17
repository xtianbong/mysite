# Generated by Django 4.1.3 on 2022-11-10 21:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
                ('link', models.CharField(max_length=64)),
                ('image', models.CharField(max_length=256)),
                ('desc', models.CharField(max_length=2048)),
            ],
        ),
    ]
