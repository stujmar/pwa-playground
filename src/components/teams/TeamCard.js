import React from 'react';

const TeamCard = ({data, onClick}) => {

  const handleClick = () => {
    console.log(data.id);
    onClick(data.id);
  }
  return (
    <button
      onClick={() => handleClick()}
    >
    <div className="m-2 border rounded-sm">Item: {data.name}</div>
    </button>
  )
}

export default TeamCard;