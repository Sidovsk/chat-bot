FROM node:18.15.0-alpine as build

WORKDIR /app
COPY . ./
RUN yarn
RUN yarn nlp:train
RUN yarn build

FROM node:18.15.0-alpine as final
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/dist ./dist
COPY --from=build /app/nlp-model/model.nlp ./nlp-model/model.nlp
COPY ./package.json ./package.json
RUN yarn install --production
EXPOSE 4000
CMD [ "yarn", "start" ]
