import Link from '@modules/Link/infra/typeorm/entities/Link';

interface ICreate {
  url: string;
}

/*
  Interface responsible for instantiating existing methods in the repository
  typeorm
*/

export default interface ILinksRepository {
  listAllLinks(): Promise<Link[] | undefined>;
  create({ url }: ICreate): Promise<Link>;
  findUrl(url: string): Promise<Link | undefined>;
}
