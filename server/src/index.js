import express from "express";
import { createServer } from "http";

import { ApolloServer, gql } from "apollo-server-express";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { execute, subscribe } from "graphql";
import { makeExecutableSchema } from "graphql-tools";

import "./config/db";
import constants from "./config/constants";
import middlewares from "./config/middlewares";

const app = express(); // create an instance of express

middlewares(app);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const graphQLServer = createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({
    user: req.user
  }),
  playground: {
    endpoint: constants.GRAPHQL_PATH,
    subscriptionsEndpoint: `ws://localhost:${constants.PORT}${
      constants.SUBSCRIPTIONS_PATH
    }`,
    settings: {
      "editor.theme": "light"
    }
  }
});

server.applyMiddleware({ app });

//mocks().then(() => {
graphQLServer.listen(constants.PORT, err => {
  if (err) {
    console.error(err);
  } else {
    new SubscriptionServer(
      {
        // eslint-disable-line
        schema,
        execute,
        subscribe
      },
      {
        server: graphQLServer,
        path: constants.SUBSCRIPTIONS_PATH
      }
    );

    console.log(`App listen on port: ${constants.PORT}`);
  }
});
//});
