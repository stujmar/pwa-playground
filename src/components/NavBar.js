import React from 'react';

const NavBar = () => {
  return (
    <div className="flex justify-center gap-x-12 mt-12">
      <a 
        href="!#"
        className="bg-rose-500 shadow-md shadow-rose-500/50 josefin px-4 pt-0.5     
        border-t-2 border-t-rose-300/60   
        border-b-2 border-b-rose-600/40
        text-rose-50 font-bold hover:bg-rose-600"
      >ROSE</a>
      <a 
        href="!#"
        className="bg-sky-500 shadow-md shadow-sky-500/50 josefin px-4 pt-0.5
    
        border-t-2 border-t-sky-400
        border-b-2 border-b-sky-600
        text-sky-50 font-bold hover:bg-sky-600"
      >CLICK ME</a>
      <a 
        href="!#"
        className="bg-sky-500 shadow-md shadow-sky-500/50 josefin px-4 pt-0.5
        
        border-t-2 border-t-sky-400/60
        border-b-2 border-b-sky-600/40 
        text-sky-50 font-bold hover:bg-sky-600"
      >CLICK ME</a>
      <a 
        href="!#"
        className="bg-lime-500 shadow-lg shadow-lime-500/50 josefin px-4 pt-0.5 
        
        border-t-2 border-t-lime-300/60     
        border-b-2 border-b-lime-600/40
        text-lime-50 font-bold hover:bg-lime-600"
      >LIME</a>
    </div>
  )
}

export default NavBar;