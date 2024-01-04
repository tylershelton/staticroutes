FROM nginx:1.25.3

COPY dist /usr/share/nginx/html
EXPOSE 80
