import AppError from '@/errors/AppError';
import db from '../db';

class AccountListService {
  constructor(db) {
    this.db = db;
  }

  async findAll() {
    const accounts = await db('accounts');
    return accounts.map((a) => ({ ...a, _id: a.id }));
  }

  async findOne({ id }: { id: number }) {
    const account = await db('accounts').where('id', id);

    if (account.length === 0) {
      throw new AppError('Conta não encontrada');
    }

    return account;
  }
}

export default new AccountListService(db);
