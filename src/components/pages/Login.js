import React from 'react';
import HelloBar from '../HelloBar';
import Form from '../Form';

const Login = () => {
  return (
    <div>
      <HelloBar message="Login" />
      <div className="flex flex-col items-center">
          <Form />
        </div>
    </div>
  )
}

export default Login;