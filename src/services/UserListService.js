import db from '../db';

class UserListService {
  constructor(db) {
    this.db = db;
  }

  async findAll() {
    return await db('users');
  }
  async findOne({ id }) {
    return await db('users').where('id', id)[0];
  }
}

export default new UserListService(db);
