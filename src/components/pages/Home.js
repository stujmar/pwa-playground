import React from 'react';
import HelloBar from '../HelloBar';
import { Outlet, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <HelloBar message="Welcome Home" />
      <div  className="flex justify-center gap-4 mt-4">
        <Link 
        className="bg-rose-500 shadow-md shadow-rose-500/50 josefin px-4 pt-0.5     
        border-t-2 border-t-rose-300/60   
        border-b-2 border-b-rose-600/40
        text-rose-50 font-bold hover:bg-rose-600"
        to="/one">Home One</Link>
        <Link 
          className="bg-sky-500 shadow-md shadow-sky-500/50 josefin px-4 pt-0.5
          border-t-2 border-t-sky-400/60
          border-b-2 border-b-sky-600/40 
          text-sky-50 font-bold hover:bg-sky-600"
          to="/two">Home Two</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Home;