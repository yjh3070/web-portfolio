import React from "react";
import AboutInfoComponents from "./AboutInfoComponents.jsx";
import Flow from "./Flow.jsx";
import { ReactTyped } from "react-typed";

import "../css/About.css";

import me from "../images/me.jpg";
import about_me_json from "../json/AboutMeJson.json";

const About = () => {
  return (
    <section id="About">
      <article className="About-head">
        <Flow/>
        <h2 className="About-sub-title">挑戦をやり続ける</h2>
        <h1 className="About-title">
          <span>JUNGHWA</span> <br/> PORTFOLIO</h1>
        <div className="About-desc">こんにちは : &#41; <br/> 新しい事に挑戦し続けるのが好きです。 <br/>エンジニア ユ・ジョンファです。</div>
      </article>

      <ReactTyped
        startWhenVisible
        strings={["ABOUT ME"]}
        typeSpeed={50}
        className="App-h1"
      />
      <hr className="App-hr"/>

      <article className="About-content">
        <img className="About-my-img" src={me} alt="profile"/>
        <div className="About-me-Container">
          <AboutInfoComponents contents={about_me_json[0]}/>
          <AboutInfoComponents contents={about_me_json[1]}/>
        </div>
      </article>
    </section>
  );
}

export default About;
