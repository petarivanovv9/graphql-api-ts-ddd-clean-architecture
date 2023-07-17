import 'reflect-metadata';
import { readFileSync } from 'fs';
import * as path from 'path';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { GqlModule } from './modules/gqlModule';
import { gqlModule as accountGqlModule } from './modules/account/gql';
import { gqlModule as billingGqlModule } from './modules/billing/gql';

const gqlModules: GqlModule[] = [accountGqlModule, billingGqlModule];

const mergedResolvers = [...gqlModules.map((x) => x.resolvers)];

const typeDefs = readFileSync(
  path.join(__dirname, './schema.generated.graphql'),
  'utf-8',
);

const start = async () => {
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({
    typeDefs,
    resolvers: mergedResolvers,
  });

  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

start().catch((e) => {
  console.log('Server Error: ', e);
  process.exit(1);
});
