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
  }, [location]);

  const scrollCallBack = useCallback((goto) => {
    document.getElementById(goto).scrollIntoView();
  }, [])

  return (
    <div id="Navigation">
      <div className="navbar">
        <span className="navbar-email">junghwa.yu12@gmail.com</span>
        <span className="navbar-github">github </span>
        <span className="navbar-menu">
          {
            display ? (
            <span> 
              <button className="nav-btn" onClick={goToHome}>Home</button> 
              <button className="nav-btn" onClick={() => scrollCallBack("Interview")}>Interview</button> 
              <button className="nav-btn" onClick={() => scrollCallBack("Project")}>Project</button> 
            </span>) : <span></span>
          }
        </span>
      </div>
    </div>
  )
}

export default Navigation;