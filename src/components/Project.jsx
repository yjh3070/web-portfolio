import React from "react";
import "../css/Project.css"

import todo from "../images/todo.jpg"

const Project = () => {
  return (
    <div id="Project">
      <h1 className="project-title">
        Projects
      </h1>

      <div>
        <div>TODO LIST</div>
        <img className="projects-img" src={todo}/>
      </div>
    </div>
  )
}

export default Project;