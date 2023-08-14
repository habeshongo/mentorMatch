const getUserBySub = "SELECT * FROM users WHERE sub = $1";

// const getMenteeProfileById = `
// SELECT * FROM mentees
// JOIN mentees_interests
// ON mentees_interests.mentee_id = mentees.id
// WHERE mentees.id = $1;
// `;
const getMenteeProfileById = `
SELECT * FROM users
JOIN mentees_interests
ON users.id = mentees_interests.mentee_id
WHERE users.id = $1;
`;
const getMentorProfileById = `
SELECT * FROM users
JOIN mentor_exps
ON users.id = mentor_exps.mentor_id
WHERE users.id = $1;
`;

const addUser =
  "INSERT INTO users (first_name, last_name, email, sub, picture) VALUES ($1, $2, $3, $4, $5)";

const deleteAllInterests = `
DELETE FROM mentees_interests
WHERE mentee_id = $1;
`;

const deleteAllExpertises = `
DELETE FROM mentor_exps
WHERE mentor_id = $1;
`;
const addInterest = `
  INSERT INTO mentees_interests (mentee_id, name_of_subject, subject_description) VALUES ($1, $2, $3)
`;

const addExpertise = `
  INSERT INTO mentor_exps (mentor_id, skillset, exp_description, years_of_exp) VALUES ($1, $2, $3, $4)
`;

const updateUser = `
      UPDATE users
      SET first_name = $1, last_name = $2, email = $3, profile_description = $4
      WHERE id = $5
    `;

module.exports = {
  getUserBySub,
  getMenteeProfileById,
  getMentorProfileById,
  addUser,
  deleteAllInterests,
  deleteAllExpertises,
  addInterest,
  addExpertise,
  updateUser,
};
