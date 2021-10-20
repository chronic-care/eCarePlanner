FROM nginx:latest

COPY  dist/providersmartapp /usr/share/nginx/html

EXPOSE 80
# When the container starts replace the env.js with the valies from environment variables
# CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
# CMD ["nginx","-g","daemon off;"]
