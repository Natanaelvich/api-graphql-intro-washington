import db from '../db';

class UserListService {
  constructor(db) {
    this.db = db;
  }

  async findAll() {
    const users = await db('users');
    return users.map((u) => ({ _id: u.id, ...u }));
  }
  async findOne({ id }) {
    return await db('users').where('id', id)[0];
  }
}

export default new UserListService(db);
