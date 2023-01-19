import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Web from "./components/web";
import Resumes from "./components/resumes";
import ResumeTemplates from "./components/resumeTemplates";
function App() {
  return (
    <div className="my-20 ">
      <Router>
        <Routes>
          <Route path="/resume" element={<Resumes />} />

          <Route path="/web" element={<Web />} />
          <Route path="/" element={<ResumeTemplates />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
