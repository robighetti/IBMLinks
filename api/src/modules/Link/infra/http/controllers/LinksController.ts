import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateLinkService from '@modules/Link/services/CreateLinkService';
import ListAllLinksService from '@modules/Link/services/ListAllLinksService';
import SearchHtmlService from '@modules/Link/services/SearchHtmlService';
import LoadLinksFromHtmlService from '@modules/Link/services/LoadLinksFromHtmlService';
import AppError from '@shared/error/AppError';

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

class LinksController {
  public async listAll(_: Request, response: Response): Promise<Response> {
    try {
      const linksService = container.resolve(ListAllLinksService);

      const links = await linksService.execute();

      return response.json(links);
    } catch (err) {
      throw new AppError(err.message);
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const linksCreate = container.resolve(CreateLinkService);

      const { url } = request.body;

      await linksCreate.execute({ url });

      const html = await loadHtml(url);
      const links = await loadLinks(html);

      if (links) {
        for (let link of links) {
          await linksCreate.execute({ url: link });
        }
      }

      return response.json({ url, links });
    } catch (err) {
      return response.status(400).json({ err: err.message });
    }
  }
}

export default LinksController;
