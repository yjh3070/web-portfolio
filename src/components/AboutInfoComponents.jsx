import React from "react";
import "../css/AboutInfoComponents.css";

import email from "../images/email-.png";
import emoji from "../images/emoji.png";
import placeholder from "../images/placeholder.png";
import phone_call from "../images/phone-call.png";
import tablet from "../images/tablet.png";
import mortarboard from "../images/mortarboard.png";

const img_list = [
  {
    key : "email",
    img : email
  },
  {
    key : "emoji",
    img : emoji
  },
  {
    key : "placeholder",
    img : placeholder
  },
  {
    key : "phone_call",
    img : phone_call
  },
  {
    key : "tablet",
    img : tablet
  },
  {
    key : "mortarboard",
    img : mortarboard
  }
]


const AboutInfoComponents = (contents) => {
  
  let content_list = contents.contents.map((list) => {

    let icon = img_list.find((item) => {
      return item.key === list.img
    });

    return (
      <div className="About-info-components" key={list.subject}>
        <img className="About-icons" src={icon.img}/>
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