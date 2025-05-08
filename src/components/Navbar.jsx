// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-bold text-green-600">
        E-Waste App
      </div>
      <div className="space-x-4">
        <Link to="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/add-item" className="hover:underline">
          Add Item
        </Link>
        <Link to="/cart" className="hover:underline">
          Cart
        </Link>
        <Link to="/tracking" className="hover:underline">
          Tracking
        </Link>
        <Link to="/rewards" className="hover:underline">
          Rewards
        </Link>
        <Link to="/profile" className="hover:underline">
          Profile
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
