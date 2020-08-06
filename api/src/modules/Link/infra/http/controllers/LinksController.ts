import { Request, Response } from 'express';
import { container } from 'tsyringe';

import Link from '@modules/Link/infra/typeorm/entities/Link';
import CreateLinkService from '@modules/Link/services/CreateLinkService';
import ListAllLinksService from '@modules/Link/services/ListAllLinksService';
import SearchHtmlService from '@modules/Link/services/SearchHtmlService';
import LoadLinksFromHtmlService from '@modules/Link/services/LoadLinksFromHtmlService';

/*
  ile that instantiates services to perform dependency injection and
  redirect each route to your specific service.
*/

const loadHtml = async (url: string): Promise<string> => {
  const searchHtml = container.resolve(SearchHtmlService);
  return await searchHtml.execute(url);
};

const loadLinks = async (html: string): Promise<string[] | undefined> => {
  const loadLinks = container.resolve(LoadLinksFromHtmlService);
  return await loadLinks.execute(html);
};

const fn = async (url: string): Promise<string[] | undefined> => {
  const linksCreate = container.resolve(CreateLinkService);
  const searchHtml = container.resolve(SearchHtmlService);
  const loadLinks = container.resolve(LoadLinksFromHtmlService);

  await linksCreate.execute({ url });
  await searchHtml.execute(url);
  const html = await searchHtml.execute(url);
  const links = await loadLinks.execute(html);

  if (links) {
    for (let url of links) {
      await linksCreate.execute({ url });
    }
  }

  return;
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
          await fn(url);
        }
      }

      return response.json({ url, links });
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export default LinksController;
