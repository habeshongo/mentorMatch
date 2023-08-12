const getMenteeProfileById = `
SELECT * FROM mentees 
JOIN mentees_interests
ON mentees_interests.mentee_id = mentees.id
WHERE mentees.id = $1;
`;

const addMentee =
  "INSERT INTO mentees (first_name, last_name, email, mentor_id, mentee_id, sub) VALUES ($1, $2, $3, $4, $5, $6)";

module.exports = {
  getMenteeProfileById,
  addMentee,
};
