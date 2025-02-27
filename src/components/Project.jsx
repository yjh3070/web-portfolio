import React from "react";
import "../css/Project.css"
import { ReactTyped } from "react-typed";
// import { Link } from "react-router-dom";

import todo from "../images/todo.jpg";
import portfolio from "../images/portfolio.jpg";
import lost_found from "../images/lost-found.png";

const Project = () => {
  const project_list = [
    {
      "icon" : lost_found,
      "title" : "Lost&Found",
      "content" : "校内紛失物管理のためのプロジェクト",
      "skill" : "HTML / CSS / Javasctirp / php",
      "url" : "https://github.com/yjh3070/LostAndFound",
      "to" : "/todo"
    {
      "icon" : todo,
      "title" : "Todo List",
      "content" : "ウェブで実装させたtodo listサービスです.",
      "skill" : "React / php",
      "url" : "https://github.com/yjh3070/todo-list",
    },
    {
      "icon" : portfolio,
      "title" : "Portfolio",
      "content" : "私の個性を活かしたウェブポートフォリオです。",
      "skill" : "React",
      "url" : "https://github.com/yjh3070/web-portfolio",
    }
  ]
  
  const projects = (project_list) => {
    console.log("po")
    return project_list.map((list) => {
      return (
        <div className="project-box">
          <div className="standard">
            <img className="project-img" src={list.icon} alt="projects"/>
            <div className="project-title">{list.title}</div>
            <div className="project-content">{list.content}</div>
            <div className="project-skill">{list.skill}</div>
          </div>
          <div className="hover">
            <div className="project-hover-title">{list.title}</div>
            <button className="project-btn" onClick={()=>{window.open(list.url)}}>github</button>
          </div>
        </div>
      )
    })
  }

  return (
    <div id="Project">
      <ReactTyped
        startWhenVisible
        strings={["PROJECT"]}
        typeSpeed={50}
        className="App-h1"
      />
      <hr className="App-hr"/>

      <div className="project-list">
        {projects(project_list)}
      </div>
    </div>
  )
}

export default Project;