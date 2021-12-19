import React from 'react';
import Form from './components/Form';
import HelloBar from './components/HelloBar';
import HelloBeam from './components/HelloBeam';
import NavBar from './components/NavBar';


const Landing = () => {
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

export default Landing;