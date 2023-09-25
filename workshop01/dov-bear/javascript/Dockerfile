FROM node:20

ARG APP_PORT=3000
ARG INSTANCE_NAME="myapp"
ARG INSTANCE_HASH="1234567890"

LABEL name=${INSTANCE_NAME}

ARG APP_DIR=/app
# mkdir /app && cd /app
WORKDIR ${APP_DIR}
# you are in /app

COPY main.js .
COPY package.json .
COPY package-lock.json .
COPY public public
COPY views views

RUN npm ci
# End of build

ENV PORT=${APP_PORT}
ENV INSTANCE_NAME=${INSTANCE_NAME}
ENV INSTANCE_HASH=${INSTANCE_HASH}
EXPOSE ${PORT}

ENTRYPOINT [ "node", "main.js" ]
