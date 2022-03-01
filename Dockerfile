FROM node:17-alpine as build

RUN mkdir /app
ADD . /app
WORKDIR /app

RUN npm install && \
    npm run build

FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html