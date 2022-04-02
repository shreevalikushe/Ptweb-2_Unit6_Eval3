const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    book_front_image_url: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
