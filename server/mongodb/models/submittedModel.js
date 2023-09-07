import mongoose from "mongoose";

const submittedSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  equipment: {
    type: String,
    required: true,
  },
  hourlyWage: {
    type: String,
    required: true,
  },
  perDiem: {
    type: String,
  },
  mmg: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  employmentStatus: {
    type: String,
    required: true,
  },
  yearsAtCompany: {
    type: String,
    required: true,
  },
  flightTime: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  email: {
    type: String,
  },
});

const submittedModel = mongoose.model("submittedSalary", submittedSchema);

export default submittedModel;
