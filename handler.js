import { GraphQLServerLambda } from "graphql-yoga";
import Query from "./resolvers/query";
import Mutation from "./resolvers/mutation";

const lambda = new GraphQLServerLambda({
  typeDefs: "./schema.graphql",
  resolvers: {
    Query,
    Mutation,
  },
  context: (req) => ({ ...req }),
  cors: {
    origin: "*",
  },
});
exports.server = lambda.graphqlHandler;
exports.playground = lambda.playgroundHandler;
