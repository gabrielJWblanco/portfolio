import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import AboutMe from "./Pages/AboutMe/AboutMe";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import Navbar from "./components/Navbar/Navbar";
import WorkExperiencePage from "./Pages/WorkExperiencePage/WorkExperiencePage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Lottie from "lottie-react";
import loadingAnim from "./loading2.json";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {};
  }, []);

  return (
    <>
      <div className="App">
        <div className={loading ? "loading_box" : "loading_box opacity_zero"}>
          <div className="loading">
            <Lottie animationData={loadingAnim} />
          </div>
        </div>

        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<WorkExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
