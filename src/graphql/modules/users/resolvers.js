export default {
  User: {
    contatos(user, _, context) {
      return context.contatoListService.findByUser(user);
    },
  },
  Query: {
    users: async (_, __, context) => {
      return await context.userListService.findAll();
    },
    user: async (_, { login }, { dataSources }) =>
      await dataSources.githubService.getUser(login),
  },
  Mutation: {
    createUser: async (_, { data }, context) => {
      return await context.userCadastroService.createUser({ data });
    },
    deleteUser: async (_, { id }, context) => {
      return await context.userCadastroService.deleteUser({ id });
    },
  },
};
