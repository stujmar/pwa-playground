import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Team = ({data}) => {

  const [invoice, setInvoice] = useState({});
  let params = useParams();
  let test = data.filter((item) => {
    console.log(parseInt(item.id) === parseInt(params.id));
   return parseInt(item.id) === parseInt(params.id);
  })[0];

  console.log("test", test);
  useEffect(() => {
    console.log(data, params.id);
    
    setInvoice(data.filter((item) => {
      console.log(parseInt(item.id) === parseInt(params.id));
     return parseInt(item.id) === parseInt(params.id);
    })[0]);
  },[])


  return (
    <div className="m-2 border rounded-sm flex flex-col">
      <div>Item: {params.id}</div>
      <div>{invoice.name}</div>
      <div>{invoice.description}</div>
      
      </div>
  )
}

export default Team;