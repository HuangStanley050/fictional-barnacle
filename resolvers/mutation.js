import { connectToDatabase } from "../db";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const mutation = {
  signup: async (parent, args, ctx, info) => {
    try {
      await connectToDatabase();
      let user = await User.findOne({ email: args.email }).lean();
      if (user) {
        throw new Error("Email is already taken");
      }
      const _password = await bcrypt.hash(args.password, 10);
      user = await new User({
        email: args.email,
        password: _password,
      }).save();
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
      return { token, user };
    } catch (err) {
      console.log(err);
      throw new Error("Something went wrong");
    }
  },
};

export default mutation;
