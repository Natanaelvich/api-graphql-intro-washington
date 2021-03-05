export default {
  User: {
    contatos(user, __, { dataSources }) {
      return dataSources.contatoListService.findByUser(user);
    },
  },
  Query: {
    users: async (_, __, { dataSources }) => {
      const users = await dataSources.userListService.findAll();
      return users;
    },
    user: async (_, { login }, { dataSources }) => {
      const user = await dataSourcess.githubService.getUser(login);
      return user;
    },
  },
  Mutation: {
    createUser: async (_, { data }, { dataSources }) => {
      const user = await dataSources.userCadastroService.createUser({ data });
      return user;
    },
    deleteUser: async (_, { id }, { dataSources }) => {
      const usersDeleted = await dataSources.userCadastroService.deleteUser({
        id,
      });
      return usersDeleted;
    },
  },
};
