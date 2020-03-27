import AppError from '@/errors/AppError';
import db from '../db';

class ContatoListService {
  constructor(db) {
    this.db = db;
  }

  async findAll(user_id: number) {
    const contatos = await db('contatos').where('user_id', user_id);
    return contatos;
  }

  async findOne({ id }: { id: number }) {
    const contato = await db('contatos').where('id', id);

    if (contato.length === 0) {
      throw new AppError('Tarefa não encontrada');
    }

    return contato;
  }

  async findByUser(user: { id: number }) {
    const contatos = await db('contatos').where('user_id', user.id);
    return contatos;
  }
}

export default new ContatoListService(db);
