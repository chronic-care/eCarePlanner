# THIS IS A TEST OF THE UPDATE

FROM node:16.14.2 as build

WORKDIR /app

ENV PATH /app/node-modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@9.1.12

COPY . /app

RUN ng build --output-path=dist

FROM nginx:latest

COPY default.conf /etc/nginx/conf.d/

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
