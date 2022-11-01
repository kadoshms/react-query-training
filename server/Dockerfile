FROM node:14-alpine3.15

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY client/package.json ./
COPY client/yarn.lock ./

RUN yarn config set "strict-ssl" false

COPY models ./
RUN yarn install

COPY server/ ./

EXPOSE 5001

CMD ["yarn", "start"]
