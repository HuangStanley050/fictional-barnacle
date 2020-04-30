import User from "../models/User";
import Todo from "../models/Todo";
import Dataloader from "dataloader";

const batchGetUserById = async (ids) => {
  const users = await User.find({});
  return ids.map((id) => users.find((user) => user._id === id));
};
const userLoader = new DataLoader(batchGetUserById);

const todo = {
  creator: async (parent, args, ctx, info) => {
    // const creatorId = parent.creator;
    // let user = await User.findOne({ _id: creatorId });
    // return user;
    return userLoader.load(parent.creator);
  },
};

export default todo;
