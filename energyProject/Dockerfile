FROM  python:3.9.13-bullseye

ENV PYTHONUNBUFFERED=1

WORKDIR /energyProject

RUN pip install django django-cors-headers

COPY energyProject .

EXPOSE 8000
