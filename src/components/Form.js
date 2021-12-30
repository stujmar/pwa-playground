import React, { useState } from 'react';

const Form = () => {
  const [form , setForm] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [validation , setValidation] = useState({
    username: {
      isValid: true,
      pattern : /^[a-zA-Z]{3,}$/,
      message : 'Name must be at least 3 characters long and contain only letters',
    },
    password: {
      isValid : true,
      pattern : /^[a-zA-Z0-9]{3,}$/,
      message : 'Password must be at least 3 characters long and contain only letters and numbers',
    },
    email: {
      isValid : true,
      pattern : /^[a-zA-Z0-9]{3,}@[a-zA-Z0-9]{3,}.[a-zA-Z0-9]{3,}$/,
      message : 'Email must be at least 3 characters long and contain only letters and numbers'
  }
});
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!validation[name].pattern.test(value)) {
      setValidation({...validation, [name]: {...validation[name], isValid: false}});
    } else {
      setValidation({...validation, [name]: {...validation[name], isValid: true}});
    }
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
  <div className="w-full max-w-xs mt-12">
    <form
      onSubmit={(e) => {handleSubmit(e)}}
      className="bg-white shadow-md shadow-sky-400 rounded-lg px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          name="username"
          onChange={(e) => handleChange(e)}
          value={form.username}
          className={`shadow appearance-none ${validation["username"].isValid ? "" : "border border-red-500"} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
          id="username"
          type="text"
          placeholder="Username" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          name="email"
          onChange={(e) => handleChange(e)}
          value={form.email}
          className={`shadow appearance-none ${validation["email"].isValid ? "" : "border border-red-500"} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
          id="email"
          type="text"
          placeholder="email" />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          name="password"
          onChange={(e) => handleChange(e)}
          value={form.password}
          className={`shadow appearance-none ${validation["password"].isValid ? "" : "border border-red-500"} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
          id="password"
          type="password"
          placeholder="******************" />
        <div className="h-4">
          {error ? <p className="text-red-500 text-xs italic">Please choose a password.</p> : null}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          >
          Sign In
        </button>
        <a className="inline-block align-baseline font-bold text-sm text-sky-500 hover:text-sky-800" href="/">
          Forgot Password?
        </a>
      </div>
    </form>
    <p className="text-center text-gray-500 text-xs">
      &copy;2020 Acme Corp. All rights reserved.
    </p>
  </div>
  )
}

export default Form;