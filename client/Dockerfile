# create base builder layer
FROM node:lts-alpine3.19 as base

WORKDIR /app

COPY package*.json ./

RUN npm ci

# create  builder layer
FROM node:lts-alpine3.19 as builder

WORKDIR /app

COPY --from=base /app/node_modules ./node_modules

COPY . .

RUN npm run build
# defining port for access the app

FROM node:lts-alpine3.19 as runner

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm install pm2 --location=global

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.next/standalone ./

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json


EXPOSE 3000

CMD ["pm2-runtime","node","--","server.js"]