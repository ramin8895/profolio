FROM node:18-slim AS deps

ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app

COPY package*.json ./

# RUN npm config set registry https://registry.npmmirror.com/


RUN npm install


FROM node:18-slim AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build


FROM node:18-slim AS runner

WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3003

ENV PORT 3003


CMD ["node", "server.js"]
