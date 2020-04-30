import User from "../models/User";
//import Todo from "../models/Todo";
import Dataloader from "dataloader";

const batchGetUserById = async (ids) => {
  // console.log("from data loader batch");
  // console.log(ids);
  const users = await User.find({});
  // console.log("users: ");
  // console.log(users);
  const result = ids.map((id) => {
    //console.log("id is: ", id);
    return users.find((user) => {
      if (user._id.toString() === id.toString()) {
        //console.log("found user");
        return user;
      }
    });
  });
  // console.log(result);
  return result;
};
const userLoader = new Dataloader((ids) => batchGetUserById(ids));

const todo = {
  creator: async (parent, args, ctx, info) => {
    // console.log("running creator");
    // const creatorId = parent.creator;
    // let user = await User.findOne({ _id: creatorId });
    // return user;
    return userLoader.load(parent.creator);
  },
};

export default todo;
