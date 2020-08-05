import { Request, Response } from 'express';
import { container } from 'tsyringe';

import Link from '@modules/Link/infra/typeorm/entities/Link';
import CreateLinkService from '@modules/Link/services/CreateLinkService';
import ListAllLinksService from '@modules/Link/services/ListAllLinksService';
import SearchHtmlService from '@modules/Link/services/SearchHtmlService';
import LoadLinksFromHtmlService from '@modules/Link/services/LoadLinksFromHtmlService';

const loadHtml = async (url: string): Promise<string> => {
  const searchHtml = container.resolve(SearchHtmlService);
  return await searchHtml.execute(url);
};

const loadLinks = async (html: string): Promise<string[] | undefined> => {
  const loadLinks = container.resolve(LoadLinksFromHtmlService);
  return await loadLinks.execute(html);
};

const saveLinks = async (url: string): Promise<Link> => {
  const linksCreate = container.resolve(CreateLinkService);
  return await linksCreate.execute({ url });
};

class LinksController {
  public async listAll(_: Request, response: Response): Promise<Response> {
    const linksService = container.resolve(ListAllLinksService);

    const links = await linksService.execute();

    return response.json(links);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const linksCreate = container.resolve(CreateLinkService);

      const { url } = request.body;

      await linksCreate.execute({ url });

      const html = await loadHtml(url);
      const links = await loadLinks(html);

      if (links) {
        for (let url of links) {
          await saveLinks(url);
        }
      }

      return response.json({ url, links });
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export default LinksController;
