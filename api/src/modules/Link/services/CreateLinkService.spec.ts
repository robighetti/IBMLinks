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
      url: 'ibm.com',
    });

    expect(link).toHaveProperty('id');
    expect(link).toHaveProperty('url');
  });

  it('should not be able to save without url', async () => {
    const url = '';

    await expect(createLink.execute({ url })).rejects.toBeInstanceOf(Error);
  });

  it('should not be able to save localhost using protocol', async () => {
    const url = 'http://localhost';

    await expect(createLink.execute({ url })).rejects.toBeInstanceOf(Error);
  });

  it('should not be able to save localhost url', async () => {
    const linkTest = 'localhost';

    await expect(
      createLink.execute({
        url: linkTest,
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
