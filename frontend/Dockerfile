FROM node:22 AS base
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install

FROM base AS dev
WORKDIR /usr/src/app
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

FROM base AS build
WORKDIR /usr/src/app
COPY . .
RUN npm run build

FROM node:22 AS prod
WORKDIR /usr/src/app
RUN npm install -g serve
COPY --from=build /usr/src/app/dist /usr/src/app/dist
EXPOSE 3000
CMD ["serve", "-s", "/usr/src/app/dist", "-l", "3000"]