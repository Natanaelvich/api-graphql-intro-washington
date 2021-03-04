import db from '../db';

class ContatoListService {
  constructor(db) {
    this.db = db;
  }

  async findAll() {
    return await db('contatos');
  }
  async findOne({ id }) {
    return await db('contatos').where('id', id)[0];
  }
  async findByUser(user) {
    return await db('contatos').where('user_id', user.id);
  }
}

export default new ContatoListService(db);
