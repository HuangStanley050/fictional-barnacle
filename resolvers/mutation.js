import { connectToDatabase } from "../db";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const mutation = {
  login: async (parent, args, ctx, info) => {
    await connectToDatabase();
    try {
      const user = await User.findOne({ email: args.email });
      if (!user) {
        throw new Error("No such user found");
      }
      const valid = await bcrypt.compare(args.password, user.password);
      if (!valid) {
        throw new Error("Invalid password");
      }
      //user.password = null;
      return {
        token: jwt.sign({ userId: user._id }, process.env.JWT_SECRET),
        user,
      };
    } catch (err) {
      throw new Error(err);
    }
  },
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
