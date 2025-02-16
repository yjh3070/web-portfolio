import React from "react";
import "../css/AboutInfoComponents.css";

const AboutInfoComponents = (contents) => {
  
  let content_list = contents.contents.map((list) => {

    return (
      <div className="About-info-components" key={list.subject}>
        <div className="About-me-info">
          <div className="About-me-title">{list.title}</div>
          <div className="About-me-content">{list.content}</div>
        </div>
      </div>
    )
  });

  return(
    <div className="About-infos">
      {content_list}
    </div>
  );
  
}

export default AboutInfoComponents;