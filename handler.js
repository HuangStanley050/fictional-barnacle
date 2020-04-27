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
    credentials: true,
  },
});

exports.playground = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  //await start();
  return lambda.playgroundHandler(event, context, callback);
};
exports.server = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  //await start();
  return lambda.graphqlHandler(event, context, callback);
};
