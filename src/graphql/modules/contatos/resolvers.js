export default {
  Query: {
    contatos: async (_, __, context) => {
      return await context.contatoListService.findAll();
    },
    contato: async (_, { id }, context) =>
      await context.contatoListService.findOne({ id }),
  },
  Mutation: {
    createContato: async (_, { data }, context) => {
      return await context.contatoCadastroService.createContato({ data });
    },
    updateContato: async (_, { id, data }, context) => {
      return await context.contatoCadastroService.updateContato({ id, data });
    },
    deleteContato: async (_, { id }, context) => {
      return await context.contatoCadastroService.deleteContato({ id });
    },
  },
};
