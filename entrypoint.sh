#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Start the Django development server
python manage.py runserver 0.0.0.0:8000 &

# Wait for a few seconds to ensure the server starts
sleep 5

# Start ngrok with the custom domain
ngrok authtoken 2ImsDoRoWbnYr06q6DIPdvQJcap_6Qd22Hm3qdgrJ5yxQVLmF
ngrok http --hostname=www.julesbong.com 8000
