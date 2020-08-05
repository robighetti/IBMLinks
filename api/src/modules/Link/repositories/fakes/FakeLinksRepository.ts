import { uuid } from 'uuidv4';

import ILinksRepository from '@modules/Link/repositories/ILinksRepository';
import Link from '@modules/Link/infra/typeorm/entities/Link';

interface ICreate {
  url: string;
}

class FakeLinksRepository implements ILinksRepository {
  private links: Link[] = [];

  public async create({ url }: ICreate): Promise<Link> {
    const link = new Link();

    Object.assign(link, { id: uuid(), url });

    this.links.push(link);
    return link;
  }

  public async findUrl(url: string): Promise<Link | undefined> {
    const findLink = this.links.find(link => link.url === url);

    return findLink;
  }

  public async listAllLinks(): Promise<Link[] | undefined> {
    return this.links;
  }
}

export default FakeLinksRepository;
