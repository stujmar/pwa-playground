import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Content from './components/pages/Content';
import Login from './components/pages/Login';
import HomeOne from './components/pages/HomeOne';
import HomeTwo from './components/pages/HomeTwo';

function App() {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="one" element={<HomeOne />} />
          <Route path="two" element={<HomeTwo />} />
        </Route>
        <Route path="/team">
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
        </Route>
        <Route path="/content" element={<Content />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
