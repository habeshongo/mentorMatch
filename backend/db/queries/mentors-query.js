const getMentors = "SELECT * FROM mentor";

const getMentorById = "SELECT * FROM mentor WHERE id = $1";

const checkUserExists = "SELECT * FROM mentor u WHERE u.email = $1";

const addMentor =
    "INSERT INTO mentor (first_name, last_name, email, mentor_id, mentee_id, sub) VALUES ($1, $2, $3, $4, $5, $6)";

const updateMentor = `
      UPDATE mentor
      SET first_name = $1, last_name = $2, email = $3, mentor_id = $4, mentee_id = $5, sub = $6
      WHERE id = $7
    `;

const deleteMentor = `
      DELETE FROM mentor
      WHERE id = $1
    `;

module.exports = {
    getMentors,
    getMentorById,
    checkUserExists,
    addMentor,
    updateMentor,
    deleteMentor,
};
