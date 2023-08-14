const express = require('express');
const router = express.Router();
const { getMentees, getMenteeById, addMentee, updateMentee, deleteMentee } = require('../controller/mentee-controller');

router.get('/', getMentees);
// localhost:8080/api/mentees

router.get('/:id', getMenteeById);
// localhost:8080/api/mentees/1

router.post('/', addMentee);
// localhost:8080/api/mentees

router.put('/:id', updateMentee);
// localhost:8080/api/mentees/27

router.delete('/:id', deleteMentee);
// localhost:8080/api/mentees/22

module.exports = router;
