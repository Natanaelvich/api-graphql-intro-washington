export default {
  Query: {
    users: async (_, __, context) => {
      return await context.userListService.findAll();
    },
    user: async (_, { id }, context) =>
      await context.userListService.findOne({ id }),
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
