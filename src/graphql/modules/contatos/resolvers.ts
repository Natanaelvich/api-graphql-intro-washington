export default {
  Query: {
    contatos: async (_, __, context) => {
      const contatos = await context.contatoListService.findAll();
      return contatos;
    },
    contato: async (_, { id }, context) => {
      const contato = await context.contatoListService.findOne({ id });
      return contato;
    },
  },
  Mutation: {
    createContato: async (_, { data }, context) => {
      const contato = await context.contatoCadastroService.createContato({
        data,
      });
      return contato;
    },
    updateContato: async (_, { id, data }, context) => {
      const contato = await context.contatoCadastroService.updateContato({
        id,
        data,
      });
      return contato;
    },
    deleteContato: async (_, { id }, context) => {
      const contatoDeleted = await context.contatoCadastroService.deleteContato(
        { id }
      );
      return contatoDeleted;
    },
  },
};
