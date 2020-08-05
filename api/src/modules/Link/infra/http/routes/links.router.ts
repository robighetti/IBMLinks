import { Router } from 'express';

import LinksController from '../controllers/LinksController';

const linkRouter = Router();
const linksController = new LinksController();

/*
  file that is responsible for storing all link routes
*/

linkRouter.get('/', linksController.listAll);

linkRouter.post('/', linksController.create);

export default linkRouter;
