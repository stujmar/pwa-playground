import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="flex justify-center gap-x-12 mt-12">
      <Link 
        to="/"
        className="bg-rose-500 shadow-md shadow-rose-500/50 josefin px-4 pt-0.5     
        border-t-2 border-t-rose-300/60   
        border-b-2 border-b-rose-600/40
        text-rose-50 font-bold hover:bg-rose-600"
      >HOME</Link>
      <Link 
        to="/content"
        className="bg-sky-500 shadow-md shadow-sky-500/50 josefin px-4 pt-0.5
        
        border-t-2 border-t-sky-400/60
        border-b-2 border-b-sky-600/40 
        text-sky-50 font-bold hover:bg-sky-600"
      >CONTENT</Link>
      <Link 
        to="/login"
        className="bg-lime-500 shadow-lg shadow-lime-500/50 josefin px-4 pt-0.5 
        
        border-t-2 border-t-lime-300/60     
        border-b-2 border-b-lime-600/40
        text-lime-50 font-bold hover:bg-lime-600"
      >LOGIN</Link>
    </div>
  )
}

export default NavBar;