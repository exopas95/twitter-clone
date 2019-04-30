export default {
  PORT: process.env.PORT || 4000,
  DB_URL: "mongodb://localhost/tweeter-development",
  GRAPHQL_PATH: "/graphql",
  JWT_SECRET: "thisisasecret123",
  SUBSCRIPTIONS_PATH: "/subscriptions"
};
