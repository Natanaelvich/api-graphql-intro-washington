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
    const user = await (await db('users').where('id', id))[0];
    return user;
  }
}

export default new UserListService(db);
