const express = require("express");
const User = require("../models/user.model");
const router = express.Router();

// Get

router.get("/", async (req, res) => {
  try {
    const users = await User.find().populate("role");
    return res.status(200).send(users);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

//Post

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.send(user);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});
module.exports = router;
