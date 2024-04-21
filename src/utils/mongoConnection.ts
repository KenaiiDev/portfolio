import mongoose from "mongoose";

declare global {
  var mongoose: any;
}

const { MONGO_URI } = process.env;

if (!MONGO_URI) {
  throw new Error("Mongo URI is missing!");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null };
}

const mongoConnection = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  cached.conn = await mongoose.connect(MONGO_URI);

  return cached.conn;
};

export default mongoConnection;
