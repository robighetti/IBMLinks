import { getRepository, Repository } from 'typeorm';

import ILinksRepository from '@modules/Link/repositories/ILinksRepository';
import Link from '@modules/Link/infra/typeorm/entities/Link';

interface ICreate {
  url: string;
}

class LinksRepository implements ILinksRepository {
  private ormRepository: Repository<Link>;

  constructor() {
    this.ormRepository = getRepository(Link);
  }

  public async create({ url }: ICreate): Promise<ICreate> {
    const linkData = this.ormRepository.create({ url });

    await this.ormRepository.save(linkData);

    return { url };
  }

  public async listAllLinks(): Promise<Link[] | undefined> {
    const links = await this.ormRepository.find();

    return links;
  }
}

export default LinksRepository;
