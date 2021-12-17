import React, { useState } from 'react';

const Form = () => {
  const [form , setForm] = useState({
    name: '',
    password: '',
  });
  const [validation , setValidation] = useState({
    name: {
      isValid: true,
      pattern : /^[a-zA-Z]{3,}$/,
      message : 'Name must be at least 3 characters long and contain only letters',
    },
    password: {
      isValid : true,
      pattern : /^[a-zA-Z0-9]{3,}$/,
      message : 'Password must be at least 3 characters long and contain only letters and numbers',
    },
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.keys(validation).every((key) => {
      return validation[key].isValid;
    });
    if (isValid) {
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
  <div class="w-full max-w-xs mt-12">
    <form
      onSubmit={(e) => {handleSubmit(e)}}
      class="bg-white shadow-md shadow-sky-400 rounded-lg px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input
          name="name"
          onChange={(e) => handleChange(e)}
          value={form.name}
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username" />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input
          name="password"
          onChange={(e) => handleChange(e)}
          value={form.password}
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************" />
        <div className="h-4">
          {error ? <p class="text-red-500 text-xs italic">Please choose a password.</p> : null}
        </div>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          >
          Sign In
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-sky-500 hover:text-sky-800" href="/">
          Forgot Password?
        </a>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2020 Acme Corp. All rights reserved.
    </p>
  </div>
  )
}

export default Form;