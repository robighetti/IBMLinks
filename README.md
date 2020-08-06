<h1 align="center">
  <strong>IBM CHALLENGE ✍</strong>
</h1>

<h3 align="center">
  Link Finder was the challenge proposed by IBM in the selection process.
  <p>Candidate ➡ Rodrigo Bighetti</p>
  <p>This project aims to develop an API and a WEB project to get links from specific url.</p>
</h3>

## ✨ Starting the API application locally

To start this application you need to have some requirements and follow the procedures below.

### ❗Requirements

- [NodeJS - v12.17.0](https://nodejs.org/en/)
- [npm - 6.14.4](https://www.npmjs.com/)
- [Yarn - 1.22.4 (opcional)](https://yarnpkg.com/)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker-compose](https://docs.docker.com/compose/install/)

## Install and configs

```
To be able to run this application just have the docker installed and run the command:

$ docker-compose up --build

The entire project is containerized, that is, by running the command above, the entire environment will be created automatically.

❗ To run the application, the application runs on port 3333 and 3000, so make sure it is free for use).



🎯 after running the docker compose up just run the migrations, to do this follow the steps below:

* Open the terminal and run:
 - yarn typeorm migration: run

```

## Dependencies

```
"axios": "^0.19.2",
"cheerio": "^1.0.0-rc.3",
"cors": "^2.8.5",
"dotenv": "^8.2.0",
"express": "^4.17.1",
"express-async-errors": "^3.1.1",
"pg": "^8.3.0",
"tsyringe": "^4.3.0",
"typeorm": "^0.2.25",
"uuidv4": "^6.2.1"
```

# Unit test

> To do unit test

- yarn test or npm run test

# Running the front-end

> To run the FRONTEND using YARN:

- yarn (if using yarn) - install all dependencies.
- yarn run:dev (to run the API on port 3000).

> Para rodar o FRONTEND utilizando o NPM:

- npm instal - faz a instalação de todas as dependências.
- npm run start (to run the FRONTEND on port 3333).

## Author

- **Rodrigo Bighetti** - _Full-Stack developer_ - [GitHub profile](https://github.com/robighetti)
