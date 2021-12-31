import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

import ItemCard from './ItemCard';

const ItemsLayout = ({data}) => {
  const navigate = useNavigate();
  let isNewForm = window.location.href.split("/").slice(-1)[0] === "new";
  console.log(isNewForm, window.location.href.split("/").slice(-1));

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