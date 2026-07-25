@echo off
cd %~dp0
start "" cmd /k "python manage.py runserver"
