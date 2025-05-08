// src/pages/Welcome.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to E-Waste Recycling App</h1>
      <div className="space-x-4">
        <Link to="/signup" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Sign Up</Link>
        <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Login</Link>
      </div>
    </div>
  );
}

export default Welcome;
