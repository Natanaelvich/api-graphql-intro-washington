export default {
  Query: {
    contatos: async (_, __, { dataSources, user_id }) => {
      const contatos = await dataSources.contatoListService.findAll(user_id);
      return contatos;
    },
    contato: async (_, { id }, { dataSources }) => {
      const contato = await dataSources.contatoListService.findOne({ id });
      return contato;
    },
  },
  Mutation: {
    createContato: async (_, { data }, { dataSources, user_id }) => {
      const contato = await dataSources.contatoCadastroService.createContato({
        data,
        user_id,
      });
      return contato;
    },
    updateContato: async (_, { id, data }, { dataSources }) => {
      const contato = await dataSources.contatoCadastroService.updateContato({
        id,
        data,
      });
      return contato;
    },
    deleteContato: async (_, { id }, { dataSources, user_id }) => {
      const contatoDeleted = await dataSources.contatoCadastroService.deleteContato(
        { id, user_id }
      );
      return contatoDeleted;
    },
  },
};
