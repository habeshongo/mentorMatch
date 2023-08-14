// load .env data into process.env
require("dotenv").config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');

// const PORT = process.env.PORT || 8080;
const app = express();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Separated Routes for each Resource
const users = require("./routes/users");
const register = require("./routes/register");
const connections = require("./routes/connections");

// Mount all resource routes
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use("/api/users", users);
app.use("/api/connections", connections);
app.use("/register", register);

// Note: mount other resources here, using the same pattern above
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.listen(8080, () => {
  console.log(`Example app listening on port 8080`);
});
