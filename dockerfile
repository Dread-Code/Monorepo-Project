FROM node:16.0.0-alpine3.11

WORKDIR /mnt/monorepo-project

COPY package*.json ./

COPY . .

RUN apk add nano

RUN apk add git

EXPOSE 3000

ENTRYPOINT  cd core/ && npm i && npm start