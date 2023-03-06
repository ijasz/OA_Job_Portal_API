const mongoose = require("mongoose");

// Define the schema
const schema = new mongoose.Schema({
  fullname: { type: String, required: true },
  organization: { type: String, required: true },
  recruiterRole: { type: String, required: true },
  interestedIn: { type: Array, required: true },
  email: { type: String, required: true },
  message: { type: String, required: false },
});

// Create the model
const User = mongoose.model("recruiter", schema);

module.exports = User;
