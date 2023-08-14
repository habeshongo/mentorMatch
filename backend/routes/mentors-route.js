






const express = require('express');
const router = express.Router();
const { getMentors, getMentorById, addMentor, updateMentor, deleteMentor } = require('../controller/mentors-controller');

router.get("/", getMentors); // http://localhost:8080/api/mentors

router.post("/", addMentor); // http://localhost:8080/api/mentors

router.get("/:id", getMentorById); // http://localhost:8080/api/mentor/1

router.put("/:id", updateMentor); // http://localhost:8080/api/mentor/1

router.delete("/:id", deleteMentor); // http://localhost:8080/api/mentor/1

module.exports = router;