import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import cors from 'cors';

import '@shared/infra/typeorm';
import '@shared/containers';

import AppError from '@shared/error/AppError';

import routes from './routes';

/*
  Main file that mounts the http server
*/
const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server serror',
  });
});

app.listen(3333, () => console.log('🚀 Server started on port 3333'));
