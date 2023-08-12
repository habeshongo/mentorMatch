/*
 * All routes for Users are defined here
 * This file is loaded in server.js.
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const {
  getUserBySub,
  addUser,
  updateUser,
} = require("../controller/user-controller");

router.get("/:id", getUserBySub);
// localhost:8080/api/users/1

router.post("/:id", addUser);
// localhost:8080/api/users

router.put("/:id", updateUser);
// localhost:8080/api/users/27

module.exports = router;
