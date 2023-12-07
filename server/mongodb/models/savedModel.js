import mongoose from "mongoose";

const savedIdSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: false,
  },
  savedIds: {
    type: [String],
    required: false,
  },
});

const savedIdModel = mongoose.model("savedId", savedIdSchema);

export default savedIdModel;
