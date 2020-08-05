import { injectable, inject } from 'tsyringe';

import Link from '@modules/Link/infra/typeorm/entities/Link';

import ILinksRepository from '@modules/Link/repositories/ILinksRepository';

/*
  Service responsible for list all data in the link repository,
  it does the inversion of responsibility and the injection of dependency.
*/

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
