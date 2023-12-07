import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: {
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
  password: {
    type: String,
    required: true,
  },

  savedIds: {
    type: [String],
    required: false,
  },
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
