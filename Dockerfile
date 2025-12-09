FROM node:current-alpine3.23

RUN mkdir -p /app

WORKDIR /app

COPY . /app

COPY package*.json ./

RUN rm -rf node_modules

RUN npm install

EXPOSE 3001

CMD ["npm", "start"]