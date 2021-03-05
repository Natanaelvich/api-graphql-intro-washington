import AppError from '@/errors/AppError';
import db from '../db';

class ContatoCadastroService {
  constructor(db) {
    this.db = db;
  }

  async createContato({ data, user_id }) {
    const contatoExists = await db('contatos').where({
      email: data.email,
    });
    if (contatoExists.length > 0) {
      throw new AppError(`contato with email ${data.email} already exists`);
    }

    const idContato = await db('contatos').insert({ ...data, user_id });

    const contato = await db('contatos').where('id', idContato);

    return contato[0];
  }

  async updateContato({ id, data }) {
    const contatoExists = await db('contatos').where({
      id,
    });

    if (contatoExists.length === 0) {
      throw new AppError(`contato not found`);
    }
    const contatoEmailExists = await db('contatos').where({
      email: data.email,
    });

    if (contatoEmailExists.length > 0) {
      throw new AppError(`contato with email ${data.email} already exists`);
    }

    await db('contatos').where('id', id).update(data);
    const contato = await db('contatos').where({ id });

    return contato[0];
  }

  async deleteContato({ id, user_id }) {
    const contato = await db('contatos').where({ id }).first();

    if (!contato) {
      throw new AppError('Tarefa não encontrada');
    }

    if (contato.user_id !== Number(user_id)) {
      throw new AppError('Você não tem permissão');
    }

    const result = await db('contatos').where('id', id).del();
    return !!result;
  }
}

export default new ContatoCadastroService(db);
