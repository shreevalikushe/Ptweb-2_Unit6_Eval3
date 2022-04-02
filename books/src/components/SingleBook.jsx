import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  useEffect(() => {
    fetch(`http://localhost:1235/books/${id}`)
      .then((r) => r.json())
      .then((r) => {
        setBook(r);
      })
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div>
      SingleBook
      {book && (
        <div style={{ border: "1px solid black" }}>
          <h1>Title: {book.title}</h1>
          <img src={book.book_front_image_url} style={{ maxWidth: "200px" }} />
        </div>
      )}
    </div>
  );
};
