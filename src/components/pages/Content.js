import React from 'react';
import Form from '../Form';
import HelloBar from '../HelloBar';
import HelloBeam from '../HelloBeam';


const Content = () => {
  return (
    <div className="pt-12">
      <HelloBar message="Content" />
      <div className="flex justify-around items-start">
        {/* <HelloBeam /> */}
        <div className="flex flex-col items-center">
          <Form />
        </div>
        {/* <HelloBeam /> */}
      </div>
    </div>
  )
}

export default Content;