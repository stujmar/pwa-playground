import React from 'react';

const HelloBar = ({ message }) => {
  return (
    <div className="text-center text-2xl font-bold">
      <div className="w-full border-b-8 border-rose-400"></div>
      <div className="w-full border-b-8 border-stone-300"></div>
      <div className="w-full border-b-8 border-lime-300"></div>
      <div className="bg-lime-100 josefin pt-1 text-lime-900">{message}</div>
      <div className="w-full border-b-8 border-lime-300"></div>
      <div className="w-full border-b-8 border-stone-300"></div>
      <div className="w-full border-b-8 border-rose-400"></div>
    </div>
  )
}

export default HelloBar;