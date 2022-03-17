FROM node:16.13.1 as build
WORKDIR /app
COPY . /app
RUN npm i --legacy-peer-deps
RUN npm run build

FROM nginx:1.21.6
EXPOSE 3000
WORKDIR /app
COPY --from=build /dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
