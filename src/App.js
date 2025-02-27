import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Todo from "./components/Todo_Project";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/todo" element={<Todo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
