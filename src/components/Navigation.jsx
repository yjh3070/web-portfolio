import React from "react";
import "../css/Navigation.css";

const Navigation = () => {
  return (
    <div id="Navigation">
      <div className="navbar">
        <span className="navbar-email">junghwa@gmail.com</span>
        <span className="navbar-menu">
          <a href='#About'>Main</a>
          <a href='#Skills'>Skill</a>
          <a href='#Project'>Project</a>
        </span>
      </div>
    </div>
  )
}

export default Navigation;