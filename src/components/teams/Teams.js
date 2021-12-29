import React, { useEffect, useState } from 'react';
import Team from './Team';

const Teams = ({data}) => {

  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    setInvoices(data.map((item) => {
      return <Team key={item.id} data={item} />
    }));
  },[data]);
  return (
    <div>Teams
      <p>{invoices}</p>
    </div>
  )
}

export default Teams;