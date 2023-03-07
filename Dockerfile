FROM node:19 AS deps
WORKDIR /usr/src/app
RUN npm install -g pnpm
COPY ./app/package.json ./app/pnpm-lock.yaml ./
RUN pnpm install

FROM node:19 AS builder
WORKDIR /usr/src/app
RUN npm install -g pnpm
COPY ./app .
COPY --from=deps /usr/src/app/node_modules ./node_modules
ENV NODE_ENV=production
RUN pnpm build

FROM gcr.io/distroless/nodejs:18 AS runner
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
EXPOSE 3000
CMD ["./node_modules/next/dist/bin/next", "start"]

