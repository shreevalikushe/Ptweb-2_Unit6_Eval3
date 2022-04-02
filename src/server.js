const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const roleController = require("../src/controllers/role.controller");
const userController = require("../src/controllers/user.controller");
const bookController = require("../src/controllers/book.controller");

app.use(cors());
const connect = () => {
  return mongoose.connect(process.env.MONGOOSE_DB_URL);
};
app.use(express.json());
app.use("/books", bookController);
app.use("/user", userController);
app.use("/role", roleController);
app.listen(process.env.PORT, async (req, res) => {
  await connect();
  console.log(`Listening on port ${process.env.PORT}`);
});
