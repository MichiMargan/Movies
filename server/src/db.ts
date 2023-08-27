import mongoose from "mongoose";
import { DB_URI } from "./config";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(DB_URI);
    console.log("Connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
