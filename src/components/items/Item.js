import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Item = ({data}) => {

  const [invoice, setInvoice] = useState({});
  let params = useParams();
  let test = data.filter((item) => {
   return parseInt(item.id) === parseInt(params.id);
  })[0];

  useEffect(() => {
    console.log("rerendering Item");
    setInvoice(data.filter((item) => {
     return parseInt(item.id) === parseInt(params.id);
    })[0]);
  },[data, params])


  return (
    <div>
    <div className="m-2 p-2 border rounded-sm flex flex-col">
      <div>Item: {params.id}</div>
      <div>{invoice.name}</div>
      <div>{invoice.description}</div>
      </div>
      <Link className="block w-max mx-auto text-gray-500 hover:text-gray-600" to="/items">Back to Items</Link>
    </div>
  )
}

export default Item;