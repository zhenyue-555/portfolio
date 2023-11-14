import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import ProjectPage from './pages/Projects/ProjectPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:title" element={<ProjectPage />} />
      </Routes>
      </div>
      </Router>
   </div>
  );
}

export default App;
