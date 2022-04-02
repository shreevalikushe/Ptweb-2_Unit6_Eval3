import React from "react";
import { Route, Routes } from "react-router-dom";
import { Books } from "./components/Books";
import { Form } from "./components/Form";
import { SingleBook } from "./components/SingleBook";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/books" element={<Books />} />
      <Route path="/books/:id" element={<SingleBook />} />
    </Routes>
  );
};
