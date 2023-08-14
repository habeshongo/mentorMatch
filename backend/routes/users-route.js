/*
 * All routes for Users are defined here
 * This file is loaded in server.js.
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const { getUsers, getUserById, addUser, updateUser, deleteUser } = require('../controller/user-controller');

router.get('/', getUsers);
// localhost:8080/api/users

router.get('/:id', getUserById);
// localhost:8080/api/users/1

router.post('/', addUser);
// localhost:8080/api/users

router.put('/:id', updateUser);
// localhost:8080/api/users/27

router.delete('/:id', deleteUser);
// localhost:8080/api/users/22

module.exports = router;
