import { getRepository, Repository } from 'typeorm';

import ILinksRepository from '@modules/Link/repositories/ILinksRepository';
import Link from '@modules/Link/infra/typeorm/entities/Link';

interface ICreate {
  url: string;
}

/*
  Class responsible for storing all methods of the typeorm that makes the
  connection to the postgres database
*/

class LinksRepository implements ILinksRepository {
  private ormRepository: Repository<Link>;

  constructor() {
    this.ormRepository = getRepository(Link);
  }

  public async create({ url }: ICreate): Promise<Link> {
    const linkData = this.ormRepository.create({ url });

    await this.ormRepository.save(linkData);

    return linkData;
  }

  public async findUrl(url: string): Promise<Link | undefined> {
    const urlData = await this.ormRepository.findOne({
      where: { url },
    });

    return urlData;
  }

  public async listAllLinks(): Promise<Link[] | undefined> {
    const links = await this.ormRepository.find();

    return links;
  }
}

export default LinksRepository;
