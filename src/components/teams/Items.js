import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

import ItemCard from './ItemCard';

const Items = ({data}) => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params, window.location.href.split("/").slice(-1));
  const [invoices, setInvoices] = useState([]);

  const handleItemClick = (id) => {
    navigate(`/items/${id}`);
  }

  useEffect(() => {
    setInvoices(data.map((item) => {
      return <ItemCard key={item.id} data={item} onClick={handleItemClick} />
    }));
  },[data]);

  return (
    <div className="w-max mx-auto">
      <div className="w-full text-center">
        Items
      </div>
      <p>{invoices}</p>
      <Link to="/items/new">New Item</Link>
      <Outlet />
    </div>
  )
}

export default Items;