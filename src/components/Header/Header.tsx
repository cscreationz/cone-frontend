import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>
            Cone
            <i>.</i>
          </h1>
        </Link>

        <div className="cta-buttons">
          <Link className="btn" to="/login">Login</Link>
          <Link className="btn btn-primary" to="/register">Register</Link>
        </div>
      </div>
    </header>
  );
}
