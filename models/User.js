import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String,
  todos: [mongoose.Types.ObjectId],
});

export default mongoose.model("User", userSchema);
