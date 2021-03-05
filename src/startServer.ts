import { ApolloServer } from 'apollo-server';
import ContatoCadastroService from './services/ContatoCadastroService';
import ContatoListService from './services/ContatoListService';
import GithubService from './services/GithubService';
import UserCadastroService from './services/UserCadastroService';
import UserListService from './services/UserListService';

type DataSourceProps = {
  githubService: typeof GithubService;
  contatoCadastroService: typeof ContatoCadastroService;
  contatoListService: typeof ContatoListService;
  userCadastroService: typeof UserCadastroService;
  userListService: typeof UserListService;
};
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
      contatoCadastroService: ContatoCadastroService,
      contatoListService: ContatoListService,
      userCadastroService: UserCadastroService,
      userListService: UserListService,
    }),
    context: ({ req }) => {
      const user_id = req.headers.authorization;

      return {
        user_id,
      };
    },
  });
  server
    .listen(3333)
    .then(({ url }) => console.log(`🔥 Server started at ${url}`));
}
