import db from '../db';

class UserCadastroService {
  constructor(db) {
    this.db = db;
  }

  async createUser(data) {
    const idUser = await db('users').insert(data);

    const user = await db('users').where('id', idUser);

    return user[0];
  }

  async deleteUser({ id }) {
    const result = await db('users').where('id', id).del();
    return !!result;
  }
}

export default new UserCadastroService(db);
