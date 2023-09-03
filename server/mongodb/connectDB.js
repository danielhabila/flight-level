import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const connectDB = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to mongodb successfully"))
    .catch((err) => console.log("Mongodb connection failed", err));
};

export default connectDB;
