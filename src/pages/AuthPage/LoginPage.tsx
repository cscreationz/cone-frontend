import React, { useState } from "react";
import Header from "../../components/Header/Header";

import facebookLogo from "../../images/facebook.svg";
import googleLogo from "../../images/google.svg";

import "./LoginPage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login auth-page">
      <Header />

      <div className="form-container">
        <h2>Login</h2>

        <div className="btn-container">
          <button type="submit" className="btn btn-ghost btn-google">
            <img src={googleLogo} alt="google logo" />
            Sign up with Google
          </button>
          <button type="submit" className="btn btn-ghost btn-fb">
            <img src={facebookLogo} alt="facebook logo" />
            Sign up with Facebook
          </button>
        </div>

        <div className="form-divider">Or</div>

        <form action="" onSubmit={handleSubmit}>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

          <a href="#" className="link-primary">Forgot password?</a>

          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
}
