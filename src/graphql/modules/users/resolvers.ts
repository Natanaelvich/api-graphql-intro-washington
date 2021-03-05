export default {
  User: {
    contatos(_, __, { dataSources, user_id }) {
      return dataSources.contatoListService.findByUser(user_id);
    },
  },
  Query: {
    users: async (_, __, { dataSources }) => {
      const users = await dataSources.userListService.findAll();
      return users;
    },
    user: async (_, { login }, { dataSourcess }) => {
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
