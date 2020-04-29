import User from "../models/User";
import { connectToDatabase } from "../db";
const query = {
  hello: () => "hello",
  users: async (parent, args, ctx, info) => {
    await connectToDatabase();
    let users = await User.find({});
    //console.log(users);
    return users;
  },
};

export default query;
