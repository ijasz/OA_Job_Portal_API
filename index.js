const { log } = require("console");
const mongoose = require("mongoose");
const express = require("express");
// var bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const recruiter = require("./src/routes/recruiter-route");
const candidate = require("./src/routes/candidate-route");

// middlewares
app.use(cors());
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router middleware
app.use("/recruiter", recruiter);
app.use("/candidate", candidate);

// Strict Schemas and store in the database only what is specified in you model,
// starting with Mongoose v7, you will have to set strict option to true manually.
mongoose.set("strictQuery", true);

mongoose.connect(
  "mongodb+srv://root:root@oceanacademy.atrtb.mongodb.net/OA_Job_Portal_API",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("We're connected to MongoDB in the cloud!");
});

app.listen(5000, () => log("Port started at 5000"));
