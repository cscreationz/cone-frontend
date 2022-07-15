import React from 'react'
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </>
  )
}
