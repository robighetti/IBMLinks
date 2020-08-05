FROM node:lts-alpine

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home/node/api

WORKDIR /home/node/api

COPY package.json yarn.* ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3333

CMD ["npm", "run", "start"]
