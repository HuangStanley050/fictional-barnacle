import mongoose from "mongoose";

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  content: String,
  creator: mongoose.Types.ObjectId,
});

export default mongoose.model("Todo", todoSchema);
