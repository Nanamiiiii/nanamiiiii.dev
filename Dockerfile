FROM node:19 AS deps
WORKDIR /usr/src/app
COPY ./app/package.json ./app/yarn.lock ./
RUN yarn install

FROM node:19 AS builder
WORKDIR /usr/src/app
COPY ./app .
COPY --from=deps /usr/src/app/node_modules ./node_modules
ENV NODE_ENV=production
RUN yarn build

FROM gcr.io/distroless/nodejs:18 AS runner
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
EXPOSE 3000
CMD ["./node_modules/next/dist/bin/next", "start"]

