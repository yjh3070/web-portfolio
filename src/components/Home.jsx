import React from "react";
import About from "./About";
import Interview from "./Interview";
import Skills from "./Skills";
import Project from "./Project";

const Home = () => {
  return(
    <div>
      <About />  
      <Interview />
      <Skills />
      <Project />
    </div>
  )
}

export default Home;