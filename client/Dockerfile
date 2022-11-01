FROM node:14-alpine3.15

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true

COPY client/package.json ./
COPY client/yarn.lock ./

RUN yarn config set "strict-ssl" false

COPY models ./
RUN yarn install

COPY client/ ./

EXPOSE 3000

CMD ["yarn", "start"]
