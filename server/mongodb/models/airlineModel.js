import mongoose from "mongoose";

const airlineSchema = new mongoose.Schema({
  airline: {
    type: String,
    required: true,
  },
  positions: {
    captain: [
      {
        experience: String,
        hourlyRate: String,
        totalCompensation: String,
      },
    ],
    // firstOfficer: [
    //   {
    //     experience: String,
    //     hourlyRate: String,
    //     totalCompensation: String,
    //   },
    // ],
  },
});

const airlineModel = mongoose.model("newairline", airlineSchema);

export default airlineModel;
