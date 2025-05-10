import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaShoppingCart, FaGift, FaPhone, FaUser } from 'react-icons/fa';

function Header({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  return (
    <header className="bg-gray-900 text-white p-3 flex justify-between items-center shadow">
      {/* Left: Logo */}
      <div className="flex items-center space-x-4">
        <Link to="/dashboard" className="text-xl font-bold hover:text-yellow-400">
          E-Waste App
        </Link>

        {/* Location button */}
        <button
          onClick={() => navigate('/profile')}
          className="flex items-center space-x-1 hover:text-yellow-400"
        >
          <FaMapMarkerAlt />
          <span>Update Location</span>
        </button>
      </div>

      {/* Center: Nav Links */}
      <nav className="flex items-center space-x-6">
        <Link to="/add-item" className="hover:text-yellow-400">Add Item</Link>
        <Link to="/cart" className="hover:text-yellow-400">Cart</Link>
        <Link to="/tracking" className="hover:text-yellow-400">Tracking</Link>
        <Link to="/rewards" className="hover:text-yellow-400">Rewards</Link>

        {/* Call us */}
        <div className="flex items-center space-x-1">
          <FaPhone />
          <span>9876543210</span>
        </div>

        {/* Profile dropdown */}
        <div className="relative group">
          <FaUser className="cursor-pointer" />
          <div className="absolute right-0 mt-2 bg-white text-gray-900 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
            {isLoggedIn ? (
              <div className="flex flex-col">
                <button
                  onClick={() => navigate('/profile')}
                  className="px-4 py-2 hover:bg-gray-100 text-left"
                >
                  Profile
                </button>
                <button
                  onClick={onLogout}
                  className="px-4 py-2 hover:bg-gray-100 text-left"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col">
                <button
                  onClick={() => navigate('/login')}
                  className="px-4 py-2 hover:bg-gray-100 text-left"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate('/signup')}
                  className="px-4 py-2 hover:bg-gray-100 text-left"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
