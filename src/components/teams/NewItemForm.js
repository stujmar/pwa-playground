import React from 'react';

const NewItemForm = () => {
  return (
    <div className="mx-12">New Item Form
      <form className="flex flex-col gap-2 item-start">
        <div>id: 4</div>
        <input className="border w-max pl-2" type="text" placeholder="name" />
        <input className="border w-max pl-2" type="text" placeholder="description" />
        <input className="border w-max pl-2" type="number" placeholder="price" />
      </form>
    </div>
  )
}

export default NewItemForm;