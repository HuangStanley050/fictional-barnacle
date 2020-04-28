import mongoose from "mongoose";
mongoose.Promise = global.Promise;

let isConnected;
const url = process.env.MONGO_URL;

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log("=> using existing database connection");
    return;
  }

  console.log("=> using new database connection");
  const db = await mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
  });
  isConnected = db.connections[0].readyState;
  return;
};
