import React from "react";
import AboutInfoComponents from "./AboutInfoComponents.jsx";
import Flow from "./Flow.jsx";

import "../css/About.css";

import dog from "../images/dog.jpg";
import about_me_json from "../json/AboutMeJson.json";
// import address_phone_contents from "./AboutMeList";
// import mail_edu_contents from "./AboutMeList";

const About = () => {
  return (
    <section id="About">
      <article className="About-head">
        <Flow/>
        <h2 className="About-sub-title">挑戦をやり続ける</h2>
        <h1 className="About-title">
          <span>JUNGHWA</span> <br/> PORTFOLIO</h1>
        <div className="About-desc">こんにちは : &#41; <br/> 最善を尽くして最高の結果を作りたい <br/>エンジニア ユ・ジョンファです.</div>
      </article>

      <h1 className="App-h1">ABOUT ME</h1>
      <hr className="App-hr"/>

      <article className="About-content">
        <img className="About-my-img" src={dog}/>
        <div className="About-me-Container">
          <AboutInfoComponents contents={about_me_json[0]}/>
          <AboutInfoComponents contents={about_me_json[1]}/>
          <AboutInfoComponents contents={about_me_json[2]}/>
        </div>
      </article>
    </section>
  );
}

export default About;
