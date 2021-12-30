import React from 'react';

const ItemCard = ({data, onClick}) => {

  const handleClick = () => {
    onClick(data.id);
  }
  return (
    <button
      onClick={() => handleClick()}
    >
    <div className="m-2 hover:bg-gray-100 border rounded-sm p-2 shadow-sm">
      <span className="text-gray-500 mr-2">Item:</span>
      {data.name}
    </div>
    </button>
  )
}

export default ItemCard;