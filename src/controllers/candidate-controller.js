const Candidate = require("../models/candidate-model");

const getAllCandidates = (req, res) => {
  Candidate.find({}, (error, candidate) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(candidate);
    }
  });
};

const getCandidateById = (req, res) => {
  const { id } = req.params;
  Candidate.findById(id, (error, candidate) => {
    if (error) {
      res.status(500).send(error);
    } else if (!candidate) {
      res.status(404).send("Candidate not found");
    } else {
      res.status(200).send(candidate);
    }
  });
};

const createCandidate = (req, res) => {
  const candidate = new Candidate(req.body);
  console.log(req.body, "trigged");
  candidate.save((error) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(201).send(candidate);
    }
  });
};

const deleteCandidateById = (req, res) => {
  const { id } = req.params;
  Candidate.findByIdAndRemove(id, (error, candidate) => {
    if (error) {
      res.status(500).send(error);
    } else if (!candidate) {
      res.status(404).send("Candidate not found");
    } else {
      res.status(200).send(candidate);
    }
  });
};

module.exports = {
  getAllCandidates,
  getCandidateById,
  createCandidate,
  deleteCandidateById,
};
