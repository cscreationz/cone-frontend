import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <h1>Cone.</h1>
        <div className="cta-buttons">
          <Link className="btn" to="/login">Login</Link>
          <Link className="btn btn-primary" to="/register">Register</Link>
        </div>
      </div>
    </header>
  );
}
