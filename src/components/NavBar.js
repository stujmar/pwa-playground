import React from 'react';

const NavBar = () => {
  return (
    <div className="flex justify-center gap-x-12 mt-12">
      <a 
        href="!#"
        className="bg-rose-500 shadow-lg shadow-rose-500 josefin px-4 py-2 rounded-full
        underline underline-offset-2 decoration-2 decoration-rose-100
        border-t-2 border-t-rose-300     
        border-b-4 border-b-rose-600 
        text-rose-50 font-bold hover:bg-rose-600"
      >ROSE</a>
      <a 
        href="!#"
        className="bg-sky-500 shadow-lg shadow-sky-500 josefin px-4 py-2 rounded-full
        underline underline-offset-2 decoration-2 decoration-sky-100
        border-t-2 border-t-sky-300     
        border-b-4 border-b-sky-600 
        text-sky-50 font-bold hover:bg-sky-600"
      >SKY</a>
      <a 
        href="!#"
        className="bg-lime-500 shadow-lg shadow-lime-500 josefin px-4 py-2 rounded-full
        underline underline-offset-2 decoration-2 decoration-lime-100
        border-t-2 border-t-lime-300     
        border-b-4 border-b-lime-600 
        text-lime-50 font-bold hover:bg-lime-600"
      >LIME</a>
    </div>
  )
}

export default NavBar;