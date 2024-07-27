import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold">My Store</Link>
        <button 
          className="text-white md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </button>
      </div>
      <div className={`md:flex md:justify-center md:items-center ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col md:flex-row md:space-x-8 mt-2">
          <li>
            <Link to="/" className="text-white hover:bg-blue-500 px-4 py-2 rounded">Home</Link>
          </li>
          <li>
            <Link to="/ecommerce" className="text-white hover:bg-blue-500 px-4 py-2 rounded">E-commerce</Link>
          </li>
          <li>
            <Link to="/clearance" className="text-white hover:bg-blue-500 px-4 py-2 rounded">Clearance</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
