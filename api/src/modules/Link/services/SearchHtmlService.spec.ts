import SearchHtmlService from './SearchHtmlService';

let searchHtml: SearchHtmlService;

describe('SearchHtmlService', () => {
  beforeEach(() => {
    searchHtml = new SearchHtmlService();
  });

  it('should be able to return html from url', async () => {
    const link = 'http://www.ibm.com';

    const html = await searchHtml.execute(link);

    expect.stringContaining(html);
  });

  it('should be able to return error in return promise', async () => {
    const link = 'http://not-exists-links';

    await expect(searchHtml.execute(link)).rejects.toBeInstanceOf(Error);
  });
});
