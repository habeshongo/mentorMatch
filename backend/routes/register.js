const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const query = require("../db/queries/users");

router.post("/", async (req, res) => {
  const { sub } = req.body;
  // structure of data given
  //   {
  //     "given_name": "Medhanie",
  //     "family_name": "Alene",
  //     "nickname": "alenemedhanie",
  //     "name": "Medhanie Alene",
  //     "picture": "https://lh3.googleusercontent.com/a/AAcHTtchlXUHDVafqkyb-86m6oZv1wNjnPrQpKrW_mAIvak1=s96-c",
  //     "locale": "en",
  //     "updated_at": "2023-08-10T01:14:06.303Z",
  //     "email": "alenemedhanie@gmail.com",
  //     "email_verified": true,
  //     "sub": "google-oauth2|113389728464264235014"
  // }

  try {
    // if user exists, return error
    const user = await db.query(query.getUserBySub, [sub]);
    if (user) {
      return res.status(400).json({ user: user.rows[0] });
    }
    // if user doesn't exist, create user
    const { given_name, family_name, email, sub, picture } = req.body;

    // addUser query first_name, last_name, email, sub
    const result = await db.query(query.addUser, [
      given_name,
      family_name,
      email,
      sub,
      picture,
    ]);
    return res.status(200).json({ user: result.rows[0] });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
