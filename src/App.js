import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import TestPage from "./Pages/TestPage/TestPage";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/teste" element={<TestPage/>}/>
          </Routes>
      </Router>
    
    </div>
  );
}

export default App;
