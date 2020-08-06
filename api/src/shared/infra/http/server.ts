import express from 'express';
import { createConnection } from 'typeorm';
import cors from 'cors';

//import '@shared/infra/typeorm';
import '@shared/containers';

import routes from './routes';

/*
  Main file that mounts the http server
*/

const connect = async () => {
  let retries = 5;
  while (retries) {
    try {
      await createConnection({
        type: 'postgres',
        port: 5432,
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
        entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
        migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
        cli: {
          migrationsDir: './src/shared/infra/typeorm/migrations',
        },
      });
      break;
    } catch (err) {
      console.log(err);
      retries -= 1;
      console.log(`retries left: ${retries}`);
      await new Promise(res => setTimeout(res, 2000));

      if (retries === 0) {
        return;
      }
    }
  }
};

connect();

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('🚀 Server started on port 3333'));
