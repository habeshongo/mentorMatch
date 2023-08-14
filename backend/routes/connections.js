const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const connectionsQuery = require("../db/queries/connections");

const usersQuery = require("../db/queries/users");

// get all connections for a user
router.post("/", async (req, res) => {
  console.log(req.body, `req.body @ connection`);
  const { sub } = req.body;
  try {
    //get requesters's id based on sub
    const userProfile = db.query(usersQuery.getUserBySub, [sub]);
    const { rows } = await userProfile;
    console.log(rows[0], `rows`);

    // get all connections for a user based on id
    const users = await db.query(connectionsQuery.getConnections, [rows[0].id]);
    const connections = users.rows;
    console.log(connections, `connections`);

    // create a set of unique users from db queries
    const uniqueUsersArray = [];
    connections.forEach((connection) => {
      uniqueUsersArray.push(connection.requestor);
      uniqueUsersArray.push(connection.requestee);
    });
    console.log(uniqueUsersArray, `uniqueUsers`);

    //pull out unique users and self
    const uniqueUsers = Array.from(new Set(uniqueUsersArray));
    console.log(uniqueUsers, `uniqueUsers`);

    //pull out self
    const uniqueUsersExcludingSelf = uniqueUsers.filter(
      (user) => user !== rows[0].id
    );
    console.log(uniqueUsersExcludingSelf, `uniqueUsersExcludingSelf`);

    // search for all connections based on array of unique users
    const connectionsArray = await db.query(usersQuery.getAllUsersByIDArray, [
      uniqueUsersExcludingSelf,
    ]);

    console.log(connectionsArray.rows, `connectionsArray`);
    return res.status(200).json({ connections: connectionsArray.rows });
    // });
    // console.log(connectionsArray, `connectionsArray`);
    // return res.status(200).json({ connections: connectionsArray });
    //return to front end array of connections
    // const connectionsArrayResolved = await connectionsArray;
    // console.log(connectionsArrayResolved, `connectionsArrayResolved`);
    // return res.status(200).json({ connections: connectionsArrayResolved });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: "Internal server error @ Connections Route" });
  }
});

module.exports = router;
