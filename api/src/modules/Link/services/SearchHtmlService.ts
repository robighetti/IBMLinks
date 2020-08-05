import axios from 'axios';

class CreateCrawlerService {
  public async execute(url: string): Promise<string> {
    try {
      const response = await axios({
        url,
        method: 'get',
      });

      return Promise.resolve(response.data);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default CreateCrawlerService;
