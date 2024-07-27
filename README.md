Run site locally:
python manage.py runserver

Run site @ www.julesbong.com:
ngrok http --hostname=www.julesbong.com 8000

Build Docker Image that does both those thing automatically:
docker build -t mysite .
