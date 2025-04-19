// frontend/src/components/Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-700 fixed w-full top-0 left-0 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo or Title */}
        <Link to="/" className="text-white text-2xl font-bold">
          Maharashtra Bhoomi
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <Link to="/" className="text-white hover:text-green-300 transition duration-300">
            Home
          </Link>
          <Link to="/predict" className="text-white hover:text-green-300 transition duration-300">
            Predict
          </Link>
          <Link to="/about" className="text-white hover:text-green-300 transition duration-300">
            About Us
          </Link>
          <Link to="/contact" className="text-white hover:text-green-300 transition duration-300">
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
