const express = require("express");
const router = express.Router();
const {
  createRecruiter,
  deleteRecruiterById,
  getAllRecruiters,
  getRecruiterById,
} = require("../controllers/recruiter-controller");

router.get("/get", getAllRecruiters);
router.get("/get:id", getRecruiterById);
router.post("/create", createRecruiter);
router.delete("/delete:id", deleteRecruiterById);

module.exports = router;
