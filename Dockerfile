# Base
FROM node:12.14.1-alpine3.9 AS base

ENV APP_DIR /app/
ENV NPM_CONFIG_PRODUCTION false
ENV NODE_ENV production

WORKDIR $APP_DIR

ADD package.json yarn.lock $APP_DIR
RUN yarn --prod --frozen-lockfile

# Build
FROM base AS build

RUN yarn --frozen-lockfile
ADD . $APP_DIR
RUN npm run build

# Prod
FROM base AS release
LABEL name="goremykina"

COPY --from=build $APP_DIR/dist ./dist
ADD . $APP_DIR

CMD npm start
