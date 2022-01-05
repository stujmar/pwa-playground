import React from 'react';
import { Outlet } from 'react-router-dom';

const ItemsLayout = () => {

  return (
    <div className="container mx-auto border-2 border-lime-500 pb-12 shadow shadow-lime-500 mb-2">
      <div className="w-full text-center josefin text-xl font-medium text-lime-800 mt-6">      
        Welcome to the items page.
      </div>
      <Outlet />
    </div>
  )
}

export default ItemsLayout;