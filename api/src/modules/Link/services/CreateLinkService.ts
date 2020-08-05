import { injectable, inject } from 'tsyringe';

import Link from '@modules/Link/infra/typeorm/entities/Link';
import ILinksRepository from '@modules/Link/repositories/ILinksRepository';

interface ICreate {
  url: string;
}

@injectable()
class CreateLinksService {
  constructor(
    @inject('LinksRepository')
    private linksRepository: ILinksRepository,
  ) {}

  public async execute({ url }: ICreate): Promise<Link> {
    const findUrl = await this.linksRepository.findUrl(url);

    if (findUrl) {
      throw new Error('url alread exists');
    }

    const urlData = await this.linksRepository.create({ url });

    return urlData;
  }
}

export default CreateLinksService;
