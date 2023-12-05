import './App.scss';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import ProjectPage from './pages/Projects/ProjectPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {
  const [isDayMode, setIsDayMode] = useState(true);

  const toggleMode = () => {
    setIsDayMode(!isDayMode);
  };

  return (
    <div className={`App ${isDayMode ? 'day-mode' : 'night-mode'}`}>
      <Button onClick={toggleMode}>Toggle Mode</Button>
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
