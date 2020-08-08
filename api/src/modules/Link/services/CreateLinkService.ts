import { injectable, inject } from 'tsyringe';

import AppError from '@shared/error/AppError';

import Link from '@modules/Link/infra/typeorm/entities/Link';
import ILinksRepository from '@modules/Link/repositories/ILinksRepository';

interface ICreate {
  url: string;
}

/*
  Service responsible for recording data in the repository,
  it does the inversion of responsibility and the injection of dependency.
*/

@injectable()
class CreateLinksService {
  constructor(
    @inject('LinksRepository')
    private linksRepository: ILinksRepository,
  ) {}

  public async execute({ url }: ICreate): Promise<Link> {
    if (!url) {
      throw new AppError('No value to be processed');
    }

    if (url === process.env.API_HOST || url === 'http://localhost') {
      throw new AppError('For localhost request all links are already there');
    }

    const urlData = await this.linksRepository.create({ url });

    return urlData;
  }
}

export default CreateLinksService;
