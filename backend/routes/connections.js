const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const query = require("../db/queries/connections");

router.get("/", async (req, res) => {
  const { id } = req.body;
  try {
    const users = await db.query(query.getConnections, [id]);

    // create a set of unique users
    const uniqueUsers = new Set();
    users.rows.forEach((user) => {
      uniqueUsers.add(user);
    });
    // convert set to array
    const uniqueUsersArray = Array.from(uniqueUsers);
    return res.status(200).json({ connections: uniqueUsersArray });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
