import db from '../db';

class ContatoCadastroService {
  constructor(db) {
    this.db = db;
  }

  async createContato({ data }) {
    const contatoExists = await db('contatos').where({
      email: data.email,
    });
    if (contatoExists.length > 0) {
      throw new Error(`contato with email ${data.email} already exists`);
    }

    const idContato = await db('contatos').insert(data);

    const contato = await db('contatos').where('id', idContato);

    return contato[0];
  }

  async updateContato({ id, data }) {
    const contatoExists = await db('contatos').where({
      id,
    });

    if (contatoExists.length === 0) {
      throw new Error(`contato not found`);
    }
    const contatoEmailExists = await db('contatos').where({
      email: data.email,
    });

    if (contatoEmailExists.length > 0) {
      throw new Error(`contato with email ${data.email} already exists`);
    }

    await db('contatos').where('id', id).update(data);
    const contato = await db('contatos').where({ id });

    return contato[0];
  }

  async deleteContato({ id }) {
    const result = await db('contatos').where('id', id).del();
    return !!result;
  }
}

export default new ContatoCadastroService(db);
