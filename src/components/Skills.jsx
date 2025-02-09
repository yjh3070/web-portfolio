import React from "react";
import "../css/Skills.css";

import html_icon from "../images/html.png";
import css_icon from "../images/css.png";
import javascript_icon from "../images/javascript.png";
import react_icon from "../images/react.png";
import node_js_icon from "../images/nodejs.png";
import php_icon from "../images/php.png";
import my_sql_icon from "../images/mysql.png";
import mongodb_icon from "../images/mongodb.png";

const Skills = () => {
  const skilled_list = [ html_icon, css_icon, javascript_icon, react_icon ];
  const strive_list = [ node_js_icon, php_icon, my_sql_icon, mongodb_icon ];

  const skills = (skill_list) => {
    return skill_list.map((list) => {
      return <img src={list} className="skill-icon"/>
    });
  }

  return (
    <div id="Skills">
      {/* <h1 className="App-h1">SKILLS</h1> */}
      <div className="skill-list">
        <div className="skill-title">SKILLED</div>
        <div className="skill-icon-div">
          {skills(skilled_list)}
        </div>
      </div>

      <hr className="App-hr"/>

      <div className="skill-list">
        <div className="skill-title">STRIVE</div>
        <div className="skill-icon-div">
          {skills(strive_list)}
        </div>
      </div>
    </div>
  );
};

export default Skills;