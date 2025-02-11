import React from 'react';
import { Link } from 'react-router-dom';
import navlogo from '../../assets/navlogo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/">
              <img src={navlogo} alt="Logo" className="h-12 w-auto" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-500">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-red-500">About</Link>
            <Link to="/commercial" className="text-gray-700 hover:text-red-500">Commercial</Link>
            <Link to="/residential" className="text-gray-700 hover:text-red-500">Residential</Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-500">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 