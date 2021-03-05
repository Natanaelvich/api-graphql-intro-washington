import { RESTDataSource } from 'apollo-datasource-rest';

class GithubService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.github.com/';
  }

  async getUser(login) {
    return this.get(`users/${login}`);
  }
}
export default new GithubService();
