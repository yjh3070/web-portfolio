import React from "react";
import "../css/Skills.css";

import html_icon from "../images/html.png";
import css_icon from "../images/css.png";
import javascript_icon from "../images/javascript.png";
import react_icon from "../images/react.png";
import php_icon from "../images/php.png";
import vscode_icon from "../images/vscode.png";
import github_icon from "../images/github.png";
import notion_icon from "../images/notion.png";
import discord_icon from "../images/discord.png";

const Skills = () => {
  const skill_list = [ html_icon, css_icon, javascript_icon, react_icon, php_icon ];
  const tool_list = [ vscode_icon, github_icon, notion_icon, discord_icon ];

  const skills = (skill_list) => {
    let num = 0
    return skill_list.map((list) => {
      num++;
      return <img src={list} className="skill-icon" alt="skill" key={num}/>
    });
  }

  return (
    <div id="Skills">
      {/* <h1 className="App-h1">SKILLS</h1> */}
      <div className="skill-list">
        <div className="skill-box">
          <div className="skill-title">SKILL</div>
          <div className="skill-icon-div">
            {skills(skill_list)}
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">TOOL</div>
          <div className="skill-icon-div">
            {skills(tool_list)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;