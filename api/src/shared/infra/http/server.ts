import express from 'express';
import cors from 'cors';

import '@shared/infra/typeorm';
import '@shared/containers';

import routes from './routes';

/*
  Main file that mounts the http server
*/

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('🚀 Server started on port 3333'));
