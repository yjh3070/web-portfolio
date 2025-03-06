import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/Navigation.css";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [display, setDisplay] = useState(true);

  const goToHome = useCallback((x) => {
    location.pathname === "/" ? setTimeout(() => {window.scrollTo(0,x)},0) : navigate('/');
  },[location, navigate]);

  useEffect(() => {
    location.pathname === "/" ? setDisplay(true) : setDisplay(false);
    window.scrollTo(0,0)
  }, [location])

  return (
    <div id="Navigation">
      <div className="navbar">
        <span className="navbar-email">junghwa.yu12@gmail.com</span>
        <span className="navbar-github">github </span>
        <span className="navbar-menu">
          
          {
            display ? (<span> <button className="home-btn" onClick={goToHome}>Home</button> <a href='#Interview'>Interview</a> <a href='#Project'>Project</a> </span>) : null
          }
        </span>
      </div>
    </div>
  )
}

export default Navigation;