//import { createStore, applyMiddleware } from "redux";
//import { composeWithDevTools } from "redux-devtools-extension";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
//import thunk from "redux-thunk";
//import { createLogger } from "redux-logger";

//import reducers from "./reducers";

const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql"
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
/*
const middlewares = [client.middleware(), thunk];

export const store = createStore(
  reducers(client),
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares), createLogger())
);


const client = new ApolloClient({
  link: createHttpLink({ uri: "http://localhost:4000/graphql" }),
  cache: new InMemoryCache()
});

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql',
});
*/
