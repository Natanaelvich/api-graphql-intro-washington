import AppError from '@/errors/AppError';
import db from '../db';

class AccountCadastroService {
  constructor(db) {
    this.db = db;
  }

  async createAccount({ data }) {
    const accountExists = await db('accounts').where({
      email: data.email,
    });
    if (accountExists.length > 0) {
      throw new AppError(`account with email ${data.email} already exists`);
    }

    const idaccount = await db('accounts').insert({ ...data });

    const account = await db('accounts').where('id', idaccount);

    return account[0];
  }

  async updateAccount({ id, data }) {
    const accountExists = await db('accounts').where({
      id,
    });

    if (accountExists.length === 0) {
      throw new AppError(`account not found`);
    }
    const accountEmailExists = await db('accounts').where({
      email: data.email,
    });

    if (accountEmailExists.length > 0) {
      throw new AppError(`account with email ${data.email} already exists`);
    }

    await db('accounts').where('id', id).update(data);
    const account = await db('accounts').where({ id }).first();

    return { ...account, _id: account.id };
  }

  async deleteAccount({ id }) {
    const account = await db('accounts').where({ id }).first();

    if (!account) {
      throw new AppError('Tarefa não encontrada');
    }

    const result = await db('accounts').where('id', id).del();
    return !!result;
  }
}

export default new AccountCadastroService(db);
