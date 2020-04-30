import User from "../models/User";
import Todo from "../models/Todo";
import { connectToDatabase } from "../db";
const query = {
  hello: () => "hello",
  users: async (parent, args, ctx, info) => {
    await connectToDatabase();
    let users = await User.find({});
    //console.log(users);
    return users;
  },
  todos: async (parent, args, ctx, info) => {
    await connectToDatabase();
    let todos = await Todo.find({});
    return todos;
  },
};

export default query;
