import "./App.css";
import HomePage from "./Portfolio/Profile/HomePage";
import NavBar from "./Portfolio/Utils/NavBar";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ProjectPage from "./Portfolio/Project/ProjectPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
