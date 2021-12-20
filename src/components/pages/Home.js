import React from 'react';
import HelloBar from '../HelloBar';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-12">
      <HelloBar message="Welcome Home" />
      <Outlet />
    </div>
  )
}

export default Home;