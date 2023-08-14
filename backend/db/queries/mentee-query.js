const getMentees = "SELECT * FROM mentees";

const getMenteeById = "SELECT * FROM mentees WHERE id = $1";

const checkUserExists = "SELECT * FROM mentees u WHERE u.email = $1";

const addMentee =
    "INSERT INTO mentees (first_name, last_name, email, mentor_id, mentee_id, sub) VALUES ($1, $2, $3, $4, $5, $6)";

const updateMentee = `
      UPDATE mentees
      SET first_name = $1, last_name = $2, email = $3, mentor_id = $4, mentee_id = $5, sub = $6
      WHERE mentee_id = $7
    `;

const deleteMentee = `
      DELETE FROM mentees
      WHERE mentee_id = $1
    `;

module.exports = {
    getMentees,
    getMenteeById,
    checkUserExists,
    addMentee,
    updateMentee,
    deleteMentee,
};