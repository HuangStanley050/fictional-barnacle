import { GraphQLServerLambda } from "graphql-yoga";

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello world ${name}`,
  },
};
const lambda = new GraphQLServerLambda({
  typeDefs: "./schema.graphql",
  resolvers,
  context: (req) => ({ ...req }),
  cors: {
    origin: "*",
  },
});
exports.server = lambda.graphqlHandler;
exports.playground = lambda.playgroundHandler;
