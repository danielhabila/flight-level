import mongoose from "mongoose";

const submittedSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: false,
  },
  position: {
    type: String,
    required: false,
  },
  equipment: {
    type: String,
    required: false,
  },
  hourlyWage: {
    type: String,
    required: false,
  },
  perDiem: {
    type: String,
    required: false,
  },
  mmg: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  employmentStatus: {
    type: String,
    required: false,
  },
  yearsAtCompany: {
    type: String,
    required: false,
  },
  schedule: {
    type: String,
    required: false,
  },
  notes: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
});

const submittedModel = mongoose.model("submittedSalary", submittedSchema);

export default submittedModel;
