import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Content from './components/pages/Content';
// import Login from './components/pages/Login';
import HomeOne from './components/pages/HomeOne';
import HomeTwo from './components/pages/HomeTwo';

import invoiceData from './data/invoices.json'
import Item from './components/items/Item';
import ItemsLayout from './components/items/ItemsLayout';
import NewItemForm from './components/items/NewItemForm';
import NotFound from './components/items/NotFound';
import ItemsIndex from './components/items/ItemsIndex';

function App() {
  const Login = React.lazy(() => import('./components/pages/Login'));
  const [invoices, setInvoices ] = useState([]);

  // if ('serviceWorker' in navigator) {
  //   // Use the window load event to keep the page load performant
  //   window.addEventListener('load', () => {
  //     navigator.serviceWorker.register('/service-worker.js');
  //   });
  // }

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
          <Route path="/items" element={<ItemsLayout />}>
            <Route index element={<ItemsIndex  data={invoices}/>} />
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
