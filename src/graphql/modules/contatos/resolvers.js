import db from '../../../db';

export default {
  Query: {
    contatos: async () => await db('contatos'),
    contato: (_, { id }) => {},
  },
  Mutation: {
    createContato: async (_, { data }) => {
      const contatoExists = await db('contatos').where({
        email: data.email,
      });

      if (contatoExists.length > 0) {
        throw new Error(`contato with email ${data.email} already exists`);
      }

      const idContato = await db('contatos').insert(data);

      const contato = await db('contatos').where('id', idContato);

      return contato[0];
    },
    updateContato: async (_, { id, data }) => {
      await db('contatos').where('id', id).update(data);
      const contato = await db('contatos').where({ id });

      return contato[0];
    },
    deleteContato: async (_, { id }) => {
      const result = await db('contatos').where('id', id).del();
      return !!result;
    },
  },
};
