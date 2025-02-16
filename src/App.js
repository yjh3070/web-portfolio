import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className="app-body"> 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/todo" element={<Todo/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
