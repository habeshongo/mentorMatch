/*
 * All routes for Users are defined here
 * This file is loaded in server.js.
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const {
  addUser,
  updateUser,
  getProfileById,
} = require("../controller/user-controller");

router.post("/", addUser);

router.get("/:id", getProfileById);

router.patch("/:id", updateUser);
// localhost:8080/api/users/27

module.exports = router;
