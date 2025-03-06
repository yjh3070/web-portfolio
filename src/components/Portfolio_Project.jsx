import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import todo_gif from "../images/todo-video.gif";
import arrow from "../images/arrow.png";
import "../css/Project.css"

const Todo = () => {
  return (
    <div id="Portfolio" className="project-page">
      <Link className="go-home" to="/" ><img className="arrow" src={arrow} alt="arrow"/>Go Home</Link>
      <ReactTyped
        startWhenVisible
        strings={["PORTFOLIO"]}
        typeSpeed={50}
        className="App-h1"
      />
      <div className="project-page-skill">
        React
      </div>
      <div className="project-overview">
        このプロジェクトは、私のスキル、経験、過去のプロジェクトを紹介するポートフォリオウェブサイトです。
        <br/>
        Reactを使用してフロントエンドのみで開発され、シンプルで直感的なUI/UXが特徴です。
        <br/>
        ユーザーがスムーズに情報を得られるように設計されており、私自身の個性を反映させたデザインになっています。
      </div>
      <img className="project-video" src={todo_gif} alt="project"></img>
      <div className="project-page-content">
        <h2 className="App-h2">Technologies Used</h2>
        <br/>
        <div className="project-tech">
          HTML / CSS / Javascript / React<br/><br/>
          特徴的な機能
          自己紹介とインタビュー: 自分のキャリアや考えを紹介するセクション<br/>
          スキルセクション: 使用できるプログラミング言語やツールを一覧表示<br/>
          プロジェクト紹介: 過去の開発プロジェクトを簡潔に紹介<br/>
        </div>
        <div className="project-detailed">
          <h2 className="App-h2">Detailed Description</h2>
          <br/>
          このポートフォリオサイトは、シンプルで直感的なUI/UXを重視して開発しました。<br/>
          Reactを使用し、各セクションをコンポーネント化することで、柔軟かつ拡張性のある設計を実現しました。<br/>
          私自身の個性を反映したデザインにより、他のポートフォリオと一線を画す内容となっています.<br/>
          自己紹介やスキル、過去のプロジェクトに関する情報が簡潔に整理されており、訪問者が迷うことなく必要な情報にアクセスできます。
        </div>
      </div>
    </div>
  )
}

export default Todo;