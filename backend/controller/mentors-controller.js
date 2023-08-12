const db = require("../db/connection");
const query = require("../db/queries/mentors-query");

const getMentors = (req, res) => {
    db.query(query.getMentors, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};



const getMentorById = async (req, res) => {
    const { id } = req.params;
    try {
        const { rows } = await db.query(query.getMentorById, [id]);
        console.log(id);
        if (rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        } else {
            return res.json(rows[0]);
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
};

const addMentor = async (req, res) => {
    const { first_name, last_name, email, mentor_id, mentee_id, sub } = req.body;
    //check if email exists
    console.log(req.body)
    try {
        await db.query(query.checkUserExists, [email], (error, results) => {
            if (results.rows.length) {
                return res.send("Email already exists");
            }
        });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: "Something went wrong" });
    }

    try {
        await db.query(
            query.addMentor,
            [first_name, last_name, email, mentor_id, mentee_id, sub],
            (error, results) => {
                if (error) throw error;
                return res.status(201).send("User created successfully!");
            }
        );

    }
    catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: "Something went wrong" });
    }


};


const updateMentor = async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, mentor_id, mentee_id, sub } = req.body;

    try {
        await db.query(query.updateMentor, [
            first_name,
            last_name,
            email,
            mentor_id,
            mentee_id,
            sub,
            id,
        ]);
        res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
};

const deleteMentor = async (req, res) => {
    const { id } = req.params;

    try {
        await db.query(query.deleteMentor, [id]);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports = { getMentors, getMentorById, addMentor, updateMentor, deleteMentor };