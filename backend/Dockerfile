FROM node:22 AS base
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install

FROM base AS dev
WORKDIR /usr/src/app
COPY . .
RUN npm install -g ts-node-dev
EXPOSE 8080
CMD ["ts-node-dev", "--respawn", "src/server.ts"]

FROM base AS build
WORKDIR /usr/src/app
COPY . .
RUN npm run build

FROM node:22 AS prod
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist ./dist
COPY package.json package-lock.json ./
RUN npm install --production
EXPOSE 8080
CMD ["node", "dist/server.js"]