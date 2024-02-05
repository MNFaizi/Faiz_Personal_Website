FROM node:current-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build
# defining port for access the app
EXPOSE 3010

CMD ["npm", "start"]