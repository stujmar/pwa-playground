import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

import Home from './components/pages/Home';
import Content from './components/pages/Content';
import Login from './components/pages/Login';

function App() {
  return (
    <div>
      Welcome to our App.
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
