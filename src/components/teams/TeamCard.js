import React from 'react';

const TeamCard = ({data}) => {
  return (
    <div className="m-2 border rounded-sm">Item: {data.name}</div>
  )
}

export default TeamCard;