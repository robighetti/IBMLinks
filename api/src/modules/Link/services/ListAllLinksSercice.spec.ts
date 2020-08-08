import FakeLinksRepository from '../repositories/fakes/FakeLinksRepository';
import ListAllLinksService from './ListAllLinksService';

let fakelinksRepository: FakeLinksRepository;
let listAllLinks: ListAllLinksService;

describe('ListAllLinksService', () => {
  beforeEach(() => {
    fakelinksRepository = new FakeLinksRepository();
    listAllLinks = new ListAllLinksService(fakelinksRepository);
  });

  it('should be able to list all links recorded on database', async () => {
    const link1 = await fakelinksRepository.create({
      url: 'ibm.com',
    });

    const link2 = await fakelinksRepository.create({
      url: 'dell.com',
    });

    const link3 = await fakelinksRepository.create({
      url: 'robighetti.com.br',
    });

    const links = await listAllLinks.execute();

    expect(links).toEqual([link1, link2, link3]);
  });

  it('should be able to return withou any value', async () => {
    const links = await listAllLinks.execute();

    expect(links).toEqual([]);
  });
});
