const Recruiter = require("../models/recruiter-model");

const getAllRecruiters = (req, res) => {
  Recruiter.find({}, (error, recruiters) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(recruiters);
    }
  });
};

const getRecruiterById = (req, res) => {
  const { id } = req.params;
  Recruiter.findById(id, (error, recruiter) => {
    if (error) {
      res.status(500).send(error);
    } else if (!recruiter) {
      res.status(404).send("Recruiter not found");
    } else {
      res.status(200).send(recruiter);
    }
  });
};

const createRecruiter = (req, res) => {
  const recruiter = new Recruiter(req.body);
  console.log(req.body, "trigged");
  recruiter.save((error) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(201).send(recruiter);
    }
  });
};

const deleteRecruiterById = (req, res) => {
  const { id } = req.params;
  Recruiter.findByIdAndRemove(id, (error, recruiter) => {
    if (error) {
      res.status(500).send(error);
    } else if (!recruiter) {
      res.status(404).send("Recruiter not found");
    } else {
      res.status(200).send(recruiter);
    }
  });
};

// const getCandidateByAsscending = (req, res) => {
//   Recruiter.find()

// }

module.exports = {
  getAllRecruiters,
  getRecruiterById,
  createRecruiter,
  deleteRecruiterById,
  // getCandidateByAsscending,
};
