import React, { useEffect, useState } from 'react';
import TeamCard from './TeamCard';

const Teams = ({data}) => {

  const [invoices, setInvoices] = useState([]);

  const handleTeamClick = (id) => {
    console.log(id);
  }

  useEffect(() => {
    setInvoices(data.map((item) => {
      return <TeamCard key={item.id} data={item} onClick={handleTeamClick} />
    }));
  },[data]);
  return (
    <div>Teams
      <p>{invoices}</p>
    </div>
  )
}

export default Teams;