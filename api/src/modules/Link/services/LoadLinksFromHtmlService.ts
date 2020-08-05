import cheerio from 'cheerio';

class LoadLinksFromHtmlService {
  public async execute(html: string): Promise<string[] | undefined> {
    let $ = cheerio.load(html);
    let links: string[] = [];

    $('body a').map(async (_, item) => {
      let str = item.attribs.href ? item.attribs.href.indexOf('http') : -1;

      if (str >= 0) {
        links.push(item.attribs.href);
      }
    });

    return links;
  }
}

export default LoadLinksFromHtmlService;
