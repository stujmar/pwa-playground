import React from 'react';
import { Link } from 'react-router-dom';

const NewItemForm = () => {
  return (
    <div className="mx-12">New Item Form
      <form className="flex flex-col gap-2 item-start">
        <div>id: 4</div>
        <input className="border w-max pl-2" type="text" placeholder="name" />
        <input className="border w-max pl-2" type="text" placeholder="description" />
        <input className="border w-max pl-2" type="number" placeholder="price" />
      </form>
      <Link className="block w-max mx-auto text-gray-500 hover:text-gray-600" to="/items">Back to Items</Link>
    </div>
  )
}

export default NewItemForm;