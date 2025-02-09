import React from "react";
import AboutInfoComponents from "./AboutInfoComponents.jsx";

import "../css/About.css";

import dog from "../images/dog.jpg";
import about_me_json from "../json/AboutMeJson.json";
// import address_phone_contents from "./AboutMeList";
// import mail_edu_contents from "./AboutMeList";

const About = () => {
  return (
    <div id="About">
      <div className="About-head">
        <div>
          <h1 className="About-title">
            エンジニア <br/>ユ・ジョンファ ポートフォリオ</h1>
          <div className="About-sub-title">こんにちは : &#41; <br/> 最善を尽くして最高の結果を作りたい <br/>エンジニア ユ・ジョンファです.</div>
        </div>
      </div>

      <h1 className="App-h1">ABOUT ME</h1>
      <hr className="App-hr"/>

      <div className="About-content">
        <img className="About-my-img" src={dog}/>
        <div className="About-me-Container">
          <AboutInfoComponents contents={about_me_json[0]}/>
          <AboutInfoComponents contents={about_me_json[1]}/>
          <AboutInfoComponents contents={about_me_json[2]}/>
        </div>
      </div>
    </div>
  );
}

export default About;
