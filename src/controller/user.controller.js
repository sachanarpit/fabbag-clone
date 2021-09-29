const express = require("express");

const router = express.Router();
const User = require("../models/user.model");

router.post("", async (req, res) => {
  const user = await User.create(req.body);
  return res.status(201).send(user);
});

router.patch("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.status(200).send({ user });
});

router.get("", async (req, res) => {
  const user = await User.find().lean().exec();
  return res.status(200).send({ user });

  // return res.render("users.ejs", {
  //   user: user,
  // });
});

module.exports = router;
