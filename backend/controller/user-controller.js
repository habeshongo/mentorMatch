const db = require("../db/connection");
const usersQuery = require("../db/queries/users");

// returns full profile to render on front end
const getUserBySub = async (req, res) => {
  const { id } = req.params;
  try {
    // get userProfile if it exists
    const { rows: userProfile } = await db.query(usersQuery.getUserBySub, [id]);
    if (!userProfile) {
      return res.status(404).json({ error: "User not found" });
    }
    // console.log(userProfile, `1st query`);

    // query to get mentee profile and associated mentee interests,currently using req.params.id, needs to chain from user profile
    const { rows: menteeProfile } = await db.query(
      usersQuery.getMenteeProfileById,
      [id]
    );
    // console.log(menteeProfile, `2nd query`);
    userProfile[0].menteeProfile = menteeProfile;

    // query to get mentor profile and associated mentor interests, currently using req.params.id, needs to chain from user profile
    const { rows: mentorProfile } = await db.query(
      usersQuery.getMentorProfileById,
      [id]
    );
    // console.log(mentorProfile, `3rd query`);

    // final logic to combine all profiles into one object
    userProfile[0].mentorProfile = mentorProfile;
    console.dir(userProfile, { depth: null }, `userProfile`);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const addUser = async (req, res) => {
  const { first_name, last_name, email, mentor_id, mentee_id, sub } = req.body;
  //check if email exists
  console.log(req.body);
  try {
    await db.query(query.checkEmailExists, [email], (error, results) => {
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
      query.addUser,
      [first_name, last_name, email, mentor_id, mentee_id, sub],
      (error, results) => {
        if (error) throw error;
        return res.status(201).send("User created successfully!");
      }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, mentor_id, mentee_id, sub } = req.body;

  try {
    await db.query(query.updateUser, [
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

module.exports = { getUserBySub, addUser, updateUser };
