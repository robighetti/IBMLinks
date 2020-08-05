import Link from '@modules/Link/infra/typeorm/entities/Link';

interface ICreate {
  url: string;
}

export default interface ILinksRepository {
  listAllLinks(): Promise<Link[] | undefined>;
  create({ url }: ICreate): Promise<Link>;
  findUrl(url: string): Promise<Link | undefined>;
}
