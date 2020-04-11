import { GraphQLSchema } from 'graphql';
import 'graphql-import-node';
import schemaGraphql from './schema.graphql';
import resolversMap from './../resolvers/resolversMap';
import { makeExecutableSchema } from 'graphql-tools';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: schemaGraphql,
  resolvers: resolversMap,
});

export default schema;
