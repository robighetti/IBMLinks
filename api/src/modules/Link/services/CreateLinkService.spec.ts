import FakeLinksRepository from '../repositories/fakes/FakeLinksRepository';
import CreateLinkService from './CreateLinkService';

let fakeLinksRepository: FakeLinksRepository;
let createLink: CreateLinkService;

describe('CreateLinkService', () => {
  beforeEach(() => {
    fakeLinksRepository = new FakeLinksRepository();
    createLink = new CreateLinkService(fakeLinksRepository);
  });

  it('should be able to create a new url', async () => {
    const link = await createLink.execute({
      url: 'thaisfantasias.com.br',
    });

    expect(link).toHaveProperty('id');
    expect(link).toHaveProperty('url');
  });

  it('should not be able to create two same urls', async () => {
    const linkTest = 'thaisfantasias.com.br';

    await createLink.execute({
      url: linkTest,
    });

    await expect(
      createLink.execute({
        url: linkTest,
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
