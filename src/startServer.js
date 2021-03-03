import { ApolloServer } from 'apollo-server';
import ContatoCadastroService from './services/ContatoCadastroService';
import ContatoListService from './services/ContatoListService';
import GithubService from './services/GithubService';
import UserCadastroService from './services/UserCadastroService';
import UserListService from './services/UserListService';

export default function startServer({ typeDefs, resolvers }) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (err) => {
      if (err.message) {
        return new Error(err.message);
      }

      return err;
    },
    dataSources: () => ({
      githubService: GithubService,
    }),
    context: {
      contatoCadastroService: ContatoCadastroService,
      contatoListService: ContatoListService,
      userCadastroService: UserCadastroService,
      userListService: UserListService,
    },
  });
  server
    .listen(3333)
    .then(({ url }) => console.log(`🔥 Server started at ${url}`));
}
