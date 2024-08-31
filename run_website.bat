@echo off
start "" cmd /k "python manage.py runserver"
start "" cmd /k "ngrok http --hostname=www.julesbong.com 8000"
