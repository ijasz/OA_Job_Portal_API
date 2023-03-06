const mongoose = require("mongoose");

// Define the schema
const schema = new mongoose.Schema({
  profile: { type: String },
  name: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  phoneNumber: { type: String, required: true },
  currentCity: { type: String, required: true },
  workStatus: { type: String, required: true },
  skills: { type: Array, required: false },
  resume: { type: String, required: false },
  createdAt: { type: Date, required: true },
});

// Create the model
const Candidate = mongoose.model("candidate", schema);

module.exports = Candidate;
