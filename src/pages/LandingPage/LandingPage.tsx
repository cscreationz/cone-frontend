import React from "react";
import Header from "../../components/Header/Header";

import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing">
      <Header />

      <div className="container hero">
        <h2>Connect with your college peers like never before</h2>
        <p>Join 3000+ college students and alumnis, just like you!</p>
        <a className="btn btn-primary" href="/register">Get started!</a>
        <a href="#" className="link-primary">How does it work?</a>
      </div>

    </div>
  );
}
