import { ApolloServer } from 'apollo-server';
import context from './config/context';
import dataSources from './config/dataSources';
import formatError from './config/formatError';

export default function startServer({ typeDefs, resolvers }) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError,
    dataSources,
    context,
  });
  server
    .listen(3333)
    .then(({ url }) => console.log(`🔥 Server started at ${url}`));
}
