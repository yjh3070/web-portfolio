import About from "./components/About";
import Skills from "./components/Skills";
// import Project from "./components/Project";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <About/>
      <Skills/>
      {/* <Project path="/project"/> */}
    </div>
  );
}

export default App;
