import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation}))
        try {
            const response = await fetch("http://localhost:5000/api/createuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: credentials.name,
                    email: credentials.email,
                    password: credentials.password,
                    location: credentials.geolocation
                })
            });
            const result = await response.json();
            console.log(result);  // This will log the result in the console
            if (result.success) {
                alert('User created successfully!');
            } else {
                alert('Error creating user: ' + result.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error creating user: ' + error.message);
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
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input 
                            type="text" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            name="name" 
                            value={credentials.name} 
                            onChange={onChange} 
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="block text-gray-700 text-sm font-bold mb-2">Email address</label>
                        <input 
                            type="email" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            name="email" 
                            value={credentials.email} 
                            onChange={onChange} 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                        />
                        <p className="text-gray-600 text-xs italic mt-2">We'll never share your email with anyone else.</p>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input 
                            type="password" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            name="password" 
                            value={credentials.password} 
                            onChange={onChange} 
                            id="password" 
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                        <input 
                            type="text" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            name="geolocation" 
                            value={credentials.geolocation} 
                            onChange={onChange} 
                            id="address" 
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                        <Link to="/Login" className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800 ml-4">Already a user</Link>
                    </div>
                </form>
            </div>
        </>
    );
}
