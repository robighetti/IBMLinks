import { container } from 'tsyringe';

import LinksRepository from '@modules/Link/infra/typeorm/repositories/LinksRepository';
import ILinksRepository from '@modules/Link/repositories/ILinksRepository';

container.registerSingleton<ILinksRepository>(
  'LinksRepository',
  LinksRepository,
);
