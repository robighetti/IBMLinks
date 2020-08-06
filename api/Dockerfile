# stage 1
FROM node:lts-alpine
RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home/node/api
WORKDIR /home/node/api
COPY package.json yarn.* ./
USER node
RUN yarn
COPY --chown=node:node . .
COPY . .
COPY ormconfig.docker.json ./ormconfig.json

EXPOSE 3333

CMD ["yarn", "start"]
