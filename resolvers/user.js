import User from "../models/User";
import Todo from "../models/Todo";

const user = {
  todos: async (parent, args, ctx, info) => {
    const todoIds = parent.todos;
    console.log(todoIds);
  },
};

export default user;
