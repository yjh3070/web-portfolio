import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import todo_gif from "../images/todo-video.gif";
import arrow from "../images/arrow.png";
import "../css/Project.css"

const Todo = () => {
  return (
    <div id="Todo" className="project-page">
      <Link className="go-home" to="/" ><img className="arrow" src={arrow} alt="arrow"/>Go Home</Link>
      <ReactTyped
        startWhenVisible
        strings={["TODO LIST"]}
        typeSpeed={50}
        className="App-h1"
      />
      <div className="project-page-skill">
        React / PHP / MySQL
      </div>
      <div className="project-overview">
        このプロジェクトは、ユーザーが日常的なタスクを管理するためのシンプルで使いやすいTodo Listアプリケーションです。
        <br/>
        ユーザーはタスクを追加、編集、削除、完了マークを付けることができ、タスクの進行状況を管理できます。
        <br/>
        アプリケーションはフロントエンドとバックエンドの技術を組み合わせて開発されており、リアルタイムでデータを保存・管理できるように設計されています。
      </div>
      <img className="project-video" src={todo_gif} alt="project"></img>
      <div className="project-page-content">
        <h2 className="App-h2">Technologies Used</h2>
        <br/>
        <div className="project-tech">
          Frontend : HTML / CSS / Javascript / React
          <br/>
          Backend : PHP / MySQL<br/><br/>
          特徴的な機能
          タスク管理: タスクの作成、編集、削除、完了マーク<br/>
          データ保存: MySQLを使用したタスクデータの永続化<br/>
        </div>
        <div className="project-detailed">
          <h2 className="App-h2">Detailed Description</h2>
          <br/>
          このTodo Listアプリは、フロントエンドとバックエンドをフルスタックで開発したプロジェクトです。
          <br/>
          フロントエンドには、ユーザーインターフェース(UI)の設計にReactを使用し、動的にタスクデータを表示および操作できるようにしました。
          <br/>
          バックエンドでは、PHPを使用してタスクの作成、編集、削除、完了マーク機能を提供しています。
          <br/>
          また、MySQLを使用してデータベースを構築し、ユーザーのタスクデータを永続的に保存できるようにしました。
          <br/><br/>
          ユーザーがタスクリストを管理できるようになっており、タスクが完了するたびに進行状況を更新できます。タスクの削除や編集も簡単に行えるように設計されており、シンプルで直感的な操作性を提供します。
        </div>
        <div className="future-improvements">
          <h2 className="App-h2">Future Improvements</h2>
          <br/>
          <h4 className="App-h4">ユーザー個別タスクリスト</h4>
          <hr className="App-hr"/>
          現在、ユーザーがログインすることで、個別のタスクリストを管理できる機能を追加予定です。この機能により、各ユーザーは自分のタスクを安全に保存し、パーソナライズされた体験を提供することができます。<br/><br/>
          <h4 className="App-h4">通知機能</h4>
          <hr className="App-hr"/>
          タスクの期日が近づくと、ユーザーに通知する機能を追加し、タスク管理の効率を向上させる予定です。
        </div>
      </div>
    </div>
  )
}

export default Todo;