import axios from 'axios';

import AppError from '@shared/error/AppError';

/*
  Service responsible for making a connection via axes in the informed url
  using the get method to return an html.
*/

class CreateCrawlerService {
  public async execute(url: string): Promise<string> {
    try {
      const response = await axios({
        url,
        method: 'get',
      });

      return Promise.resolve(response.data);
    } catch (err) {
      throw new AppError(err.message, 401);
    }
  }
}

export default CreateCrawlerService;
