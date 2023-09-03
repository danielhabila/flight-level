import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
  experience: String,
  hourlyRate: String,
  totalCompensation: String,
});

const positionSchema = new mongoose.Schema({
  Captain: [entrySchema],
  "First Officer": [entrySchema],
});

const airlineSchema = new mongoose.Schema({
  name: String,
  positions: positionSchema,
});

const airlineModel = mongoose.model("airline", airlineSchema);

export default airlineModel;
