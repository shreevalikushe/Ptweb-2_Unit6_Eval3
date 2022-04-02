const express = require("express");
const Book = require("../models/book.model");
const User = require("../models/user.model");
const router = express.Router();

//Get
router.get("/", async (req, res) => {
  try {
    const books = await Book.find().populate("author");
    return res.status(200).send(books);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

//Get by id
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("author");
    return res.send(book);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

//Post
router.post("/", async (req, res) => {
  try {
    const user = User.findById(req.body.author, { role: "author" });
    if (user) {
      const book = await Book.create(req.body);
      return res.status(201).send(book);
    } else {
      return res.send("Only Authors can post books");
    }
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

//Patch
router.patch("/:id", async (req, res) => {
  try {
    if (req.body.author) {
      const bookUpdate = await Book.findByIdAndUpdate(req.body, { new: true });
      return res.send(bookUpdate);
    }
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

//Delete
router.delete("/:id", async (req, res) => {
  try {
    const deleteBook = await Book.findByIdAndDelete(req.params.id);
    return res.send(deleteBook);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});
module.exports = router;
