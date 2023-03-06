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

const createManyCandidate = async (req, res) => {
  const data = req.body.map((data) => {
    return { ...data, createdAt: Date.now() };
  });

  Candidate.insertMany(data)
    .then((docs) => {
      console.log("Books inserted:", docs);
      res.send(docs);
    })
    .catch((err) => {
      console.error("Error inserting books:", err);
    });
};

const createCandidate = async (req, res) => {
  const phoneNumber = await Candidate.findOne({
    phoneNumber: req.body.phoneNumber,
  });

  console.log(phoneNumber, "phonenumber---------------");

  if (phoneNumber == null) {
    const candidate = new Candidate({ ...req.body, createdAt: Date.now() });
    candidate.save((error) => {
      if (error) {
        console.log(error, "-----------eroor");
        res.status(400).send(error);
      } else {
        console.log(req.body, "candidate created");
        res.status(201).send(candidate);
      }
    });
  } else {
    res.send("already exists");
  }
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
