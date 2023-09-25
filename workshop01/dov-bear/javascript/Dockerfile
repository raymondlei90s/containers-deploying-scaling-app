FROM node:20

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

ENV PORT=3000
ENV INSTANCE_NAME="myapp"
ENV INSTANCE_HASH="123456"
EXPOSE ${PORT}

ENTRYPOINT [ "node", "main.js" ]
