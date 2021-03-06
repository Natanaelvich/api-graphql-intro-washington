import genereator from '@/helpers/genereator';

export default {
  User: {
    contatos(_, __, { dataSources, validate }) {
      const user_id = validate();
      return dataSources.contatoListService.findByUser(user_id);
    },
  },
  Query: {
    users: async (_, __, { dataSources }) => {
      const users = await dataSources.userListService.findAll();
      return users;
    },
    user: async (_, { login }, { dataSources }) => {
      const user = await dataSources.githubService.getUser(login);
      const userExists = await dataSources.userListService.findOne({
        id: user.id,
      });

      if (!userExists) {
        const { id, bio } = user;
        await dataSources.userCadastroService.createUser({ id, login, bio });
      }

      user.token = genereator.createToken(user.id);

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
