FROM node:18.15.0-alpine as build

WORKDIR /app
COPY . ./
RUN yarn && yarn build

FROM node:18.15.0-alpine as final
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/serve.json ./dist/serve.json

RUN yarn global add serve
EXPOSE 3000
CMD [ "serve", "-s", "dist", "-l", "3000" ]
