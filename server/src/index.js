import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { createServer } from "http";

import "./config/db";
import constants from "./config/constants";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import mocks from "./mocks";

const app = express(); // create an instance of express

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: constants.GRAPHQL_PATH,
    settings: {
      "editor.theme": "light"
    }
  }
});

server.applyMiddleware({ app });

const graphQLServer = createServer(app);

mocks().then(() => {
  graphQLServer.listen(constants.PORT, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`App listen on port: ${constants.PORT}`);
    }
  });
});
