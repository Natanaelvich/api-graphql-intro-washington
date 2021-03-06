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
    const user = await db('users').where('id', id).first();
    return user;
  }
}

export default new UserListService(db);
