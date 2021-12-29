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
    <div className="m-2 hover:bg-gray-100 border rounded-sm p-2 shadow-sm">Item: {data.name}</div>
    </button>
  )
}

export default TeamCard;