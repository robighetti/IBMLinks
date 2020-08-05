import { container } from 'tsyringe';

import LinksRepository from '@modules/Link/infra/typeorm/repositories/LinksRepository';
import ILinksRepository from '@modules/Link/repositories/ILinksRepository';

/*
  this file is responsible for listing the repositories for injection of
  dependencies, in this case it is relating the LinksRepository Interface
  and the Typeorm Repository.
*/
container.registerSingleton<ILinksRepository>(
  'LinksRepository',
  LinksRepository,
);
