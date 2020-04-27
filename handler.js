import { GraphQLServerLambda } from "graphql-yoga";

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`,
  },
};
const lambda = new GraphQLServerLambda({
  typeDefs,
  resolvers,
  context: (req) => ({ ...req }),
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
