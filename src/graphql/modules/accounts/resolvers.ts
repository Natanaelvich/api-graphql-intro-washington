import { ACCOUNT_ADDED } from './channels';

export default {
  Query: {
    accounts: async (_, __, { dataSources }) => {
      const accounts = await dataSources.accountListService.findAll();
      return accounts;
    },
    account: async (_, { id }, { dataSources }) => {
      const account = await dataSources.accountListService.findOne({ id });
      return account;
    },
  },
  Mutation: {
    createAccount: async (_, { data }, { dataSources, pubsub }) => {
      const account = await dataSources.accountCadastroService.createAccount({
        data,
      });

      pubsub.publish(ACCOUNT_ADDED, {
        accountAdded: account,
      });

      return account;
    },
    updateAccount: async (_, { id, data }, { dataSources }) => {
      const account = await dataSources.accountCadastroService.updateAccount({
        id,
        data,
      });
      return account;
    },
    deleteAccount: async (_, { id }, { dataSources }) => {
      const accountDeleted = await dataSources.accountCadastroService.deleteAccount(
        { id }
      );
      return accountDeleted;
    },
  },

  Subscription: {
    accountAdded: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(ACCOUNT_ADDED),
    },
  },
};
