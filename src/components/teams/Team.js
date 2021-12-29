import React from 'react';
import { useParams } from 'react-router-dom';

const Team = ({data}) => {

  let params = useParams();

  return (
    <div className="m-2 border rounded-sm">
      this is a single team/invoice
      Item: {params.id}</div>
  )
}

export default Team;