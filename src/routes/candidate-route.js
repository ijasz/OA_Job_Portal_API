const express = require("express");
const router = express.Router();
const Candidate = require("../models/candidate-model");
const {
  createCandidate,
  getAllCandidates,
  deleteCandidateById,
  getCandidateById,
} = require("../controllers/candidate-controller");

const checkPhoneNumber = async (req, res, next) => {
  console.log(req.body.phoneNumber, "req");
  const phoneNumber = await Candidate.findOne({
    phoneNumber: req.body.phoneNumber,
  });

  if (phoneNumber == null) {
    next();
  } else {
    res.send("already exists");
  }

  return;
};

router.post("/create", checkPhoneNumber, createCandidate);

router.get("/get", getAllCandidates);

router.get("/get:id", getCandidateById);

router.delete("/get:id", deleteCandidateById);

// router.delete("/get:id", deleteCandidateById);

module.exports = router;
