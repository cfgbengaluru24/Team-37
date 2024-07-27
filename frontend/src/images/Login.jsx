import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ email: credentials.email, password: credentials.password }));
    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        })
      });
      const result = await response.json();
      console.log(result);  // This will log the result in the console
      if (result.success) {
        alert('Login successful!');
        localStorage.setItem("authToken", result.authToken);
        console.log(localStorage.getItem("authToken"))
        navigate("/");  // Navigate to the home page on successful login
      } else {
        alert('Error logging in: ' + result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error logging in: ' + error.message);
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="exampleInputEmail1" className="block text-gray-700 text-sm font-bold mb-2">Email address</label>
            <input
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name='email'
              value={credentials.email}
              onChange={onChange}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <p className="text-gray-600 text-xs italic mt-2">We'll never share your email with anyone else.</p>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              name='password'
              value={credentials.password}
              onChange={onChange}
              id="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            <Link to="/CreateUser" className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800">I am a new user</Link>
          </div>
        </form>
      </div>
    </>
  );
}
