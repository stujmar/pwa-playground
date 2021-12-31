import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

import ItemCard from './ItemCard';

const ItemsLayout = ({data}) => {
  const navigate = useNavigate();
  const params = useParams();
  let isNewForm = window.location.href.split("/").slice(-1)[0] === "new";
  console.log(isNewForm, window.location.href.split("/").slice(-1));
  const [invoices, setInvoices] = useState([]);

  const handleItemClick = (id) => {
    navigate(`/items/${id}`);
  }

  useEffect(() => {
    setInvoices(data.map((item) => {
      return <ItemCard key={item.id} data={item} onClick={handleItemClick} />
    }));
  },[data, params]);

  return (
    <div className="w-max mx-auto">
      {isNewForm ? null :
     <div>
      <div className="w-full text-center">
      <Link 
      className="
      px-2 py-1 mb-4 text-white block w-max mx-auto
      border-t-2 border-t-lime-300/60 border-b-2 border-b-lime-600/40
      shadow-md shadow-lime-500/50
      uppercase josefin font-bold
      bg-lime-500 hover:bg-lime-600 text-sm"
      to="/items/new">New Item</Link>
      </div>
      <p className="grid grid-cols-2 md:grid-cols-3">{invoices}
      </p>
      </div>
      
    }
    <Outlet />
    </div>
  )
}

export default ItemsLayout;