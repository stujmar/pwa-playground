import React from 'react';
import Form from '../Form';
import HelloBar from '../HelloBar';
import HelloBeam from '../HelloBeam';
import NavBar from '../NavBar';


const Content = () => {
  return (
    <div className="pt-12 bg-sky-50">
      <HelloBar />
      <div className="flex justify-around items-start">
        <HelloBeam />
        <div className="flex flex-col items-center">
          <NavBar />
          <Form />
        </div>
        <HelloBeam />
      </div>
    </div>
  )
}

export default Content;