import './App.scss';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import ProjectPage from './pages/Projects/ProjectPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Switch from 'react-switch';
import { FaSun, FaMoon } from 'react-icons/fa';

function App() {
  const [isDayMode, setIsDayMode] = useState(true);

  const toggleMode = () => {
    setIsDayMode(!isDayMode);
  };

  return (
    <div className={`App ${isDayMode ? 'day-mode' : 'night-mode'}`}>
      <Switch
        onChange={toggleMode}
        checked={isDayMode}
        uncheckedIcon={<FaMoon />}
        checkedIcon={<FaSun />}
      />
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
