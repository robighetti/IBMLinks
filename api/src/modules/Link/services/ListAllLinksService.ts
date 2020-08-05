import { injectable, inject } from 'tsyringe';

import Link from '@modules/Link/infra/typeorm/entities/Link';

import ILinksRepository from '@modules/Link/repositories/ILinksRepository';

@injectable()
class ListAllLinksService {
  constructor(
    @inject('LinksRepository')
    private linksRepository: ILinksRepository,
  ) {}

  public async execute(): Promise<Link[] | undefined> {
    const links = await this.linksRepository.listAllLinks();

    return links;
  }
}

export default ListAllLinksService;
