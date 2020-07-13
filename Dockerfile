FROM node:latest

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE $PORT

CMD [ "npm", "run", "start:prod" ]