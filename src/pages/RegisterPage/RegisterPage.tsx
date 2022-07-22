import React, { useState } from "react";
import Header from "../../components/Header/Header";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Header />

      <h1>Register</h1>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label htmlFor="">Password:</label>
        <input type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Register</button>
      </form>

    </div>
  );
}
