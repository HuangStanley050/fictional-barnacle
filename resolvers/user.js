import User from "../models/User";
import Todo from "../models/Todo";
import mongoose from "mongoose";

const user = {
  todos: async (parent, args, ctx, info) => {
    let todoIds = parent.todos;
    if (todoIds.length === 0) {
      return null;
    }
    //console.log(todoIds);
    todoIds = todoIds.map((id) => mongoose.Types.ObjectId(id));
    let result = await Todo.find({
      _id: {
        $in: todoIds,
      },
    });
    console.log(result);
    return result;
  },
};

export default user;
