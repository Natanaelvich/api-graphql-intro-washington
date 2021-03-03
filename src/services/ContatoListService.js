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
}

export default new ContatoListService(db);
