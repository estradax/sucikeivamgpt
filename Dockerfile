FROM node:20.17-alpine AS build
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN yarn run build

FROM nginx:alpine AS serve
ADD ./conf/ /etc/nginx/
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

