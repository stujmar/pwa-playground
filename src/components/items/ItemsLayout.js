import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

import ItemCard from './ItemCard';

const ItemsLayout = ({data}) => {
  const navigate = useNavigate();
  let isNewForm = window.location.href.split("/").slice(-1)[0] === "new";
  console.log(isNewForm, window.location.href.split("/").slice(-1));

  return (
    <div className="w-max mx-auto">
      Welcome to the items page.
      <Outlet />
    </div>
  )
}

export default ItemsLayout;