const express = require("express");
const Role = require("../models/role.model");
const router = express.Router();

// Get

router.get("/", async (req, res) => {
  try {
    const roles = await Role.find();
    return res.status(200).send(roles).populate("role");
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

//Post

router.post("/", async (req, res) => {
  try {
    const role = await Role.create(req.body);
    return res.status(200).send(role);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});
module.exports = router;
