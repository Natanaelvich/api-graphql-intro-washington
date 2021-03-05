import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';
import path from 'path';

const resolversArray = fileLoader(
  path.join(__dirname, 'modules', '**', 'resolvers.ts')
);
const resolversDefs = mergeResolvers(resolversArray);
export default resolversDefs;
