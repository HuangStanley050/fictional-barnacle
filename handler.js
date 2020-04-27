import { GraphQLServerLambda } from "graphql-yoga";
import Query from "./resolvers/query";

const lambda = new GraphQLServerLambda({
  typeDefs: "./schema.graphql",
  resolvers: {
    Query,
  },
  context: (req) => ({ ...req }),
  cors: {
    origin: "*",
  },
});
exports.server = lambda.graphqlHandler;
exports.playground = lambda.playgroundHandler;
