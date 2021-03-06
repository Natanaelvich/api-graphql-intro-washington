import AppError from '@/errors/AppError';
import { RESTDataSource } from 'apollo-datasource-rest';

class GithubService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.github.com/';
  }

  async getUser(login) {
    try {
      const user = await this.get(`users/${login}`);
      return user;
    } catch (error) {
      if (error.extensions.response.status === 404) {
        throw new AppError(`Usuário não encotrado : ${login}`);
      }
      throw new Error(error);
    }
  }
}
export default new GithubService();
