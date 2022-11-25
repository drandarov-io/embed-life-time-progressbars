FROM nginx:latest

LABEL maintainer="Dmitrij Drandarov <drandarov@dmitr.io>"
LABEL version="1.0"
LABEL description="Embeddable Life progress bar minimal nginx wrapper"
LABEL source="https://github.com/drandarov-io/embed-life-time-progressbars"

# Copy the nginx configuration file
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copy the static files
COPY ./docs /usr/share/nginx/html

USER nginx

EXPOSE 8080