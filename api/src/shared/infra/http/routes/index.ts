import { Router } from 'express';

import linksRouter from '@modules/Link/infra/http/routes/links.router';

/*
  Main route file, responsible for consolidating all existing routes
  in the project and serve to server.ts
*/

const routes = Router();

routes.use('/links', linksRouter);

export default routes;
