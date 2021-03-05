import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import startServer from './startServer';

startServer({ typeDefs, resolvers });
