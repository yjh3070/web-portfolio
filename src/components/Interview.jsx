import React from "react";
import "../css/Interview.css";

const Interview = () => {
  return (
    <div id="Interview">
      <h1 className="interview-title">INTERVIEW</h1>
      <hr className="App-hr"/>
      <div className="qna-box">
        <div className="question">
         Q. 日本への就職を決めた理由は？
        </div>
        <div className="answer">
          - 日本語を独学で勉強したほど日本がずっと好きでした。いつか日本で暮らしてみるのが目標でした。<br/>新しい挑戦を好きな私は今回の挑戦を日本就職を選べることになりました。怖いって気持ちもありますが挑戦でくるワクワクを楽しみにやっています。
        </div>
      </div>
      <div className="qna-box">
        <div className="question">
         Q. またエンジニアを目指す理由は？
        </div>
        <div className="answer">
          - 私が好きなことを続けられず諦めなきゃならなかった瞬間から、ずっとまたやり直したいって思っていました。でも好きな事も時には手放す時もあるっと思って新しい仕事にも挑戦してみました。それでも私の心の中にずっと好きが残ってて新しい場所で仕事を始めるなら、あの時より続けられる力を持った今またエンジニアを目指したいと思いました。
        </div>
      </div>
    </div>
  )
}

export default Interview;