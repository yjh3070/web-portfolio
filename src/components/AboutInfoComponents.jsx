import React from "react";
import "../css/AboutInfoComponents.css";

import about_me_json from "../json/AboutMeJson.json";

let content_list = () => {
  let contentNum = 0;
  try {
    return about_me_json.map((content) => {
      contentNum++;
        return (
          <div className="About-infos" key={"infos_" + contentNum}>
          {content.map((list) => {
            return (
              <div className="About-info-components" key={list.subject}>
                <div className="About-me-info">
                  <div className="About-me-title">{list.title}</div>
                  <div className="About-me-content">{list.content}</div>
                </div>
              </div>
            )
          })}
          </div>
        )
      });
  } catch (error) {
    console.log(error);
    alert(error);
  }
}

const AboutInfoComponents = () => {
  return content_list();
}

export default AboutInfoComponents;