import express from 'express';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import environments from './config/environments';
import Database from './config/database';
import chalk from 'chalk';

if (process.env.NODE_ENV !== 'production') {
  const envs = environments;
  console.log(envs);
}

async function init() {
  const app = express();

  app.use('*', cors());

  app.use(compression());

  const database = new Database();
  const db = database.init();

  const server = new ApolloServer({
    schema,
    introspection: true,
  });

  server.applyMiddleware({ app });

  const PORT = process.env.PORT;
  const httpServer = createServer(app);
  httpServer.listen(
    { port: PORT },
    () => console.log(`SERVER: ${chalk.green('API GraphQL')} http://localhost:${PORT}/graphql`),
  );
}

init();
