const getUserBySub = "SELECT * FROM users WHERE sub = $1";

const getMenteeProfileById = `
SELECT * FROM mentees 
JOIN mentees_interests
ON mentees_interests.mentee_id = mentees.id
WHERE mentees.id = $1;
`;
const getMentorProfileById = `
SELECT * FROM mentors 
JOIN mentor_exps
ON mentor_exps.mentor_id = mentors.id
WHERE mentors.id = $1;
`;

const addUser =
  "INSERT INTO users (first_name, last_name, email, sub, picture) VALUES ($1, $2, $3, $4, $5)";

const updateUser = `
      UPDATE users
      SET first_name = $1, last_name = $2, email = $3, mentor_id = $4, mentee_id = $5, sub = $6
      WHERE id = $7
    `;

module.exports = {
  getUserBySub,
  getMenteeProfileById,
  getMentorProfileById,
  addUser,
  updateUser,
};
