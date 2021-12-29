import React, { useEffect, useState } from 'react';

const Teams = ({data}) => {

  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    setInvoices(data.map((item) => {
      return <p>{item.name}</p>
    }));
  },[data]);
  return (
    <div>Teams
      <p>{invoices}</p>
    </div>
  )
}

export default Teams;