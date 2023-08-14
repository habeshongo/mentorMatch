const e = require("express");
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
  // console.log(req.body, `req.body`);
  //check if user exists using sub, returns user if exists
  try {
    const { rows } = await db.query(usersQuery.getUserBySub, [sub]);
    const user = rows[0];
    // console.log(user, `user after getUserBySub query`);
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
      // console.dir(user, { depth: null }, `userProfile`);
      return res.json({ user });
    }

    const result = await db.query(usersQuery.addUser, [
      first_name,
      last_name,
      email,
      sub,
      picture,
    ]);
    const newUser = result.rows[0];
    console.log(newUser, `result`);
    //create sendbird user

    const sendbirdRes = await fetch(
      `https://api-${process.env.SENDBIRD_APP_ID}.sendbird.com/v3/users`,
      {
        method: "POST",
        headers: {
          "Api-Token": process.env.SENDBIRD_API_TOKEN,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: newUser.id,
          nickname: `${newUser.first_name} ${newUser.last_name}`,
          profile_url: "",
        }),
      }
    );
    if (!sendbirdRes.ok) {
      console.log(await sendbirdRes.text(), `sendbirdRes`);
      throw new Error(sendbirdRes);
    }
    const sendbirdUser = await sendbirdRes.json();
    // return res.json({ user: result.rows[0] });
    console.log(sendbirdUser, `sendbirdUser`);
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

  const updatedUser = await db.query(usersQuery.updateUser, [
    first_name,
    last_name,
    email,
    profile_description,
    id,
  ]);

  // wipe out all interests and expertises for user, adds new ones
  const deletedInterests = await db.query(usersQuery.deleteAllInterests, [id]);
  for (const interest of interests) {
    const { interestName, interestDescription } = interest;
    try {
      const addedInterests = await db.query(usersQuery.addInterest, [
        id,
        interestName,
        interestDescription,
      ]);
      console.log(deletedInterests, `deletedInterests`);
      console.log(addedInterests, `addedInterests`);
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  }
  const deletedExpertises = await db.query(usersQuery.deleteAllExpertises, [
    id,
  ]);
  for (const expertise of expertises) {
    const {
      expertiseName: skillset,
      expertiseDescription: expDescription,
      yearsOfExperience: yearsOfExp,
    } = expertise;
    // console.log(skillset, expDescription, yearsOfExp, `expertise logged`);
    try {
      const addedExpertises = await db.query(usersQuery.addExpertise, [
        id,
        skillset,
        expDescription,
        yearsOfExp,
      ]);
    } catch (error) {
      // console.error("Error updating user:", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  }

  res.status(200).json({ message: "User updated successfully" });
  // try {

  //   res.status(200).json({ message: "User updated successfully" });
  // } catch (error) {
  //   console.error("Error updating user:", error);
  //   res.status(500).json({ error: "Something went wrong" });
  // }
};

const getProfileById = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query(usersQuery.getUserById, [id]);
    const user = rows[0];
    console.log(user, `user after getUserById query`);
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
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { addUser, updateUser, getProfileById };
