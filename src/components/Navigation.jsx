import React from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css";

const Navigation = () => {
  return (
    <div id="Navigation">
      <div className="navbar">
        <span className="navbar-email">junghwa.yu12@gmail.com</span>
        <span className="navbar-menu">
          <Link to="/">Home</Link>
          <a href='#Interview'>Interview</a>
          <a href='#Project'>Project</a>
        </span>
      </div>
    </div>
  )
}

export default Navigation;