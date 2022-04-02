import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Books = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const getBooks = () => {
    fetch("http://localhost:1235/books")
      .then((r) => r.json())
      .then((r) => {
        console.log(r[0].author.name);
        setBooks(r);
      })
      .catch((e) => console.log(e));
  };
  const handleDelete = (id) => {
    fetch(`http://localhost:1235/books/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((r) => getBooks())
      .catch((e) => console.log(e));
  };

  const handleClick = (id) => {
    navigate(`/books/${id}`);
  };
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <>
      <h1>Books page</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
        {books &&
          books.map((item) => (
            <div style={{ border: "1px solid black" }}>
              <h1>Title: {item.title}</h1>
              <img
                onClick={() => {
                  handleClick(item._id);
                }}
                src={item.book_front_image_url}
                style={{ maxWidth: "200px" }}
              />
              <button>Edit</button>
              <button
                onClick={() => {
                  handleDelete(item._id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </>
  );
};
