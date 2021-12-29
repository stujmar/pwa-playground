import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Content from './components/pages/Content';
import Login from './components/pages/Login';
import HomeOne from './components/pages/HomeOne';
import HomeTwo from './components/pages/HomeTwo';

import invoiceData from './data/invoices.json'
import Team from './components/teams/Team';
import Teams from './components/teams/Teams';
import NewTeamForm from './components/teams/NewTeamForm';
import NotFound from './components/teams/NotFound';

function App() {

  const [invoices, setInvoices ] = useState([]);

  useEffect(() => {
    setInvoices(invoiceData);
  },[])

  return (
    <div className="overflow-hidden">
      <NavBar />
      <div className="pt-4 md:pt-12">
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="one" element={<HomeOne />} />
            <Route path="two" element={<HomeTwo />} />
          </Route>
          <Route path="/teams" element={<Teams data={invoices} />}>
            
            <Route path="/teams/:teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
          </Route>
          <Route path="/content" element={<Content />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
