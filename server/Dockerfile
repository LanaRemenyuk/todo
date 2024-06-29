FROM python:3.11.0

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ['python', 'manage.py', 'runserver']