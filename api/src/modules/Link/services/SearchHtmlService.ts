import axios from 'axios';

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
      throw new Error(err.message);
    }
  }
}

export default CreateCrawlerService;
