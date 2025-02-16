import React from "react";
import "../css/Project.css"
import { ReactTyped } from "react-typed";
// import { Link } from "react-router-dom";

import todo from "../images/todo.jpg";
import portfolio from "../images/portfolio.jpg";

const Project = () => {
  const project_list = [
    {
      "icon" : todo,
      "title" : "Todo List",
      "content" : "웹으로 구현한 todo list 서비스 입니다.",
      "skill" : "React / php",
      "url" : "https://github.com/yjh3070"
    },
    {
      "icon" : portfolio,
      "title" : "Portfolio",
      "content" : "저만의 개성을 살려 만든 웹 포트폴리오 입니다.",
      "skill" : "React",
      "url" : "https://github.com/yjh3070/web-portfolio"
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
            {/* <div>자세히 보기</div> */}
            <div className="project-hover-title">{list.title}</div>
            <button onClick={()=>{window.open(list.url)}}>github</button>
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