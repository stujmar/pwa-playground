import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import ItemCard from './ItemCard';

const ItemsIndex = ({data}) => {
  const params = useParams();
  const navigate = useNavigate();
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
  )
}

export default ItemsIndex;