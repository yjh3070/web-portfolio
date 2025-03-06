import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Todo from "./components/Todo_Project";
import Protfolio from "./components/Portfolio_Project";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/todo" element={<Todo />}/>
        <Route path="/portfolio" element={<Protfolio/>}/>
      </Routes>
    </div>
  );
}

export default App;
