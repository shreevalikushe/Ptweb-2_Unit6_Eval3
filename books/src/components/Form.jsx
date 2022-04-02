import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Form = () => {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleAdd = () => {
    const payload = {
      name: name,
      password: pass,
      email: email,
    };
    fetch("http://localhost:1235/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
        setTimeout(() => {
          navigate("/books");
        }, 2000);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        margin: "auto",
      }}
    >
      <h1>KINDLY LOGIN</h1>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPass(e.target.value)}
      />
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
