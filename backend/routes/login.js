const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const query = require("../db/queries/users");

router.post("/", async (req, res) => {
  const { sub } = req.body;
  console.log(req.body);
  try {
    const user = await db.query(query.getUserBySub, [sub]);
    console.log(user.rows[0]);

    //if user doesn't exist, return error
    if (!user.rows[0]) {
      return res.status(404).json({ error: "User not found" });
    }
    // if user exists, return user

    //might have to manipulate user.rows[0] to get the right format for front end

    return res.status(200).json({ user: user.rows[0] });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
