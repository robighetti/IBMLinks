import { injectable, inject } from 'tsyringe';

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

  public async execute({ url }: ICreate): Promise<void> {
    const urlData = await this.linksRepository.create({ url });

    return urlData;
  }
}

export default CreateLinksService;
