import User from "../models/User";
import Todo from "../models/Todo";
import { connectToDatabase } from "../db";
const query = {
  hello: () => "hello",
  todo: async (parent, args, ctx, info) => {
    await connectToDatabase();
    const todoId = args.id;
    let todo = await Todo.findOne({ _id: todoId });
    return todo;
  },
  user: async (parent, args, ctx, info) => {
    await connectToDatabase();
    const email = args.email;
    let user = await User.findOne({ email });
    return user;
  },
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
