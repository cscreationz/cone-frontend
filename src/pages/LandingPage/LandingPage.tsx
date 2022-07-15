import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
    </>
  );
}
