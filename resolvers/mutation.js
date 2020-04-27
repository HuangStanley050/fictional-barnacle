import { connectToDatabase } from "../db";
import User from "../models/User";
const mutation = {
  signup: async (parent, args, ctx, info) => {
    await connectToDatabase();
    return {
      token: "stuff",
      user: {
        id: "1",
        email: "test",
        todos: [],
      },
    };
  },
};

export default mutation;
