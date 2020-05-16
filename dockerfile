FROM nginx:alpine

LABEL author="Michael Coxeter"
VOLUME /var/cache/nginx
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80