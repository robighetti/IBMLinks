import { Router } from 'express';

import linksRouter from '@modules/Link/infra/http/routes/links.router';

const routes = Router();

routes.use('/links', linksRouter);

export default routes;
