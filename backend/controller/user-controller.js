const db = require("../db/connection");
const usersQuery = require("../db/queries/users");

const addUser = async (req, res) => {
  const {
    given_name: first_name,
    family_name: last_name,
    email,
    sub,
    picture,
  } = req.body;
  console.log(req.body, `req.body`);
  //check if user exists using sub, returns user if exists
  try {
    const { rows } = await db.query(usersQuery.getUserBySub, [sub]);
    const user = rows[0];
    console.log(user, `user after getUserBySub query`);
    if (user) {
      // query to get mentee profile and associated mentee interests,currently using req.params.id, needs to chain from user profile
      const { rows: menteeProfile } = await db.query(
        usersQuery.getMenteeProfileById,
        [user.id]
      );
      // console.log(menteeProfile, `menteeProfile`);
      user.menteeProfile = menteeProfile;
      // query to get mentor profile and associated mentor interests, currently using req.params.id, needs to chain from user profile
      const { rows: mentorProfile } = await db.query(
        usersQuery.getMentorProfileById,
        [user.id]
      );
      // console.log(mentorProfile, `mentorProfile`);
      // final logic to combine all profiles into one object
      user.mentorProfile = mentorProfile;
      console.dir(user, { depth: null }, `userProfile`);
      return res.json({ user });
    }

    const result = await db.query(usersQuery.addUser, [
      first_name,
      last_name,
      email,
      sub,
      picture,
    ]);
    console.log(result, `result`);
    const mentee_id = await db.query(usersQuery.createMentorProfile, [
      result.rows[0].id,
    ]);
    console.log(mentee_id, `mentee_id`);

    // return res.json({ user: result.rows[0] });
    return res.json(user);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const {
    firstName: first_name,
    lastName: last_name,
    email,
    profile_description,
    interests,
    expertises,
    sub,
  } = req.body;
  console.log(id, `id`);
  console.log(req.body, `changes requested`);

  // wipe out all interests and expertises for user, adds new ones
  if (interests) {
    interests.forEach(async (interest) => {
      const { interestName, interestDescription } = interest;
      try {
        const deletedInterests = await db.query(usersQuery.deleteAllInterests, [
          id,
        ]);
        const addedInterests = await db.query(usersQuery.addInterest, [
          id,
          interestName,
          interestDescription,
        ]);
      } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: "Something went wrong" });
      }
    });
  }
  if (expertises) {
    expertises.forEach(async (expertise) => {
      const { skillset, expDescription, yearsOfExp } = expertise;
      try {
        const deletedExpertises = await db.query(
          usersQuery.deleteAllExpertises,
          [id]
        );
        const addedExpertises = await db.query(usersQuery.addExpertise, [
          id,
          skillset,
          expDescription,
          yearsOfExp,
        ]);
      } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: "Something went wrong" });
      }
    });
  }
  res.status(200).json({ message: "User updated successfully" });
  // try {

  //   res.status(200).json({ message: "User updated successfully" });
  // } catch (error) {
  //   console.error("Error updating user:", error);
  //   res.status(500).json({ error: "Something went wrong" });
  // }
};

module.exports = { addUser, updateUser };
