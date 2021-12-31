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
import Item from './components/items/Item';
import Items from './components/items/Items';
import NewItemForm from './components/items/NewItemForm';
import NotFound from './components/items/NotFound';
import ItemsIndex from './components/items/ItemsIndex';

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
          <Route path="/items" element={<Items data={invoices} />}>
            <Route index element={<ItemsIndex />} />
            <Route path="/items/new" element={<NewItemForm />} />
            <Route path="/items/:id" element={<Item data={invoices}/>} />
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
