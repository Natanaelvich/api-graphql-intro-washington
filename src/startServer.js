import { ApolloServer } from 'apollo-server';

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
  });
  server
    .listen(3333)
    .then(({ url }) => console.log(`🔥 Server started at ${url}`));
}
