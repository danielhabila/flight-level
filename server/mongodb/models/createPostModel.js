import mongoose from "mongoose";

const createPostSchema = new mongoose.Schema({
  email: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  postUrl: {
    type: String,
    required: false,
  },
  notes: {
    type: String,
    required: false,
  },
});

const createPostModel = mongoose.model("createPost", createPostSchema);

export default createPostModel;
