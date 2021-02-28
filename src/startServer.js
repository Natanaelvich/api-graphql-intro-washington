import { ApolloServer, PubSub } from 'apollo-server';
import mongoose from 'mongoose';

export default function startServer({ typeDefs, resolvers }) {
  mongoose
    .connect('mongodb://localhost:27017/graphql', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('connected mongo'))
    .catch((err) => console.log('error connect mongo', err));

  const pubsub = new PubSub();
  const server = new ApolloServer({ typeDefs, resolvers, context: { pubsub } });
  server
    .listen(3333)
    .then(({ url }) => console.log(`🔥 Server started at ${url}`));
}
