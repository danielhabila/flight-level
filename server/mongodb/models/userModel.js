import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    // lowercase: true,
    // index: true,
  },
  savedIds: {
    type: [String],
    required: false,
  },
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
