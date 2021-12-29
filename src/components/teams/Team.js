import React from 'react';

const Team = ({data}) => {
  return (
    <div className="m-2 border rounded-sm">
      this is a single team/invoice
      Item: {data.name}</div>
  )
}

export default Team;