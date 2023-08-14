const addMentor =
  "INSERT INTO mentor (first_name, last_name, email, mentor_id, mentee_id, sub) VALUES ($1, $2, $3, $4, $5, $6)";

module.exports = {
  addMentor,
};
