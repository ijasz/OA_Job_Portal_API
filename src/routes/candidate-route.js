const express = require("express");
const router = express.Router();
const {
  createCandidate,
  getAllCandidates,
  deleteCandidateById,
  getCandidateById,
} = require("../controllers/candidate-controller");

router.post("/create", createCandidate);

router.get("/get", getAllCandidates);

router.get("/get:id", getCandidateById);

router.delete("/get:id", deleteCandidateById);

// router.delete("/get:id", deleteCandidateById);

module.exports = router;
