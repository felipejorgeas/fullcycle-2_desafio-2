FROM node:10

WORKDIR /usr/src/fullcycle-2_desafio-2

COPY package*.json ./
COPY database.sqlite ./

RUN npm install
RUN npm run build

COPY dist ./dist

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]