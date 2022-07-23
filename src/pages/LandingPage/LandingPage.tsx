import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing">
      <Header />

      <div className="container hero">
        <h2>Connect with your college peers like never before</h2>
        <p>Join 3000+ college students and alumnis, just like you!</p>
        <Link className="btn btn-primary" to="/register">Get started!</Link>
        <a href="#" className="link-primary">How does it work?</a>
      </div>
    </div>
  );
}
