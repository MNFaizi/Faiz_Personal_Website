FROM node:lts-alpine3.19 as base

WORKDIR /app

COPY package*.json ./

RUN npm ci --production

COPY . .

RUN npm run build
# defining port for access the app
EXPOSE 3010

CMD ["npm", "start"]