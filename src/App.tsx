import React from "react";

import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/AuthPage/LoginPage";
import RegisterPage from "./pages/AuthPage/RegisterPage";
import OnboardingPage from "./pages/OnboardingPage/OnboardingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register/" element={<RegisterPage />} />
        <Route path="/onboard/" element={<OnboardingPage />} />
      </Routes>
    </div>
  );
}

export default App;
