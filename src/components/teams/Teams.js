import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TeamCard from './TeamCard';

const Teams = ({data}) => {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState([]);

  const handleTeamClick = (id) => {
    console.log(id);
    navigate(`/teams/${id}`);
  }

  useEffect(() => {
    setInvoices(data.map((item) => {
      return <TeamCard key={item.id} data={item} onClick={handleTeamClick} />
    }));
  },[data]);
  return (
    <div>
      <div className="w-full text-center">
        Teams
      </div>
      <p>{invoices}</p>
    </div>
  )
}

export default Teams;