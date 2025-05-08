// src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  // Mock data for now
  const cartItems = 2;
  const rewardPoints = 120;
  const coupons = [
    { id: 1, name: '10% off Electronics', points: 50 },
    { id: 2, name: 'Free Pickup Coupon', points: 30 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Add E-Waste Item */}
      <div className="mb-6">
        <Link
          to="/add-item"
          className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 shadow"
        >
          ➕ Add E-Waste Item
        </Link>
      </div>

      {/* Your Cart */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Cart</h2>
        <p>{cartItems} item(s) selected for pickup.</p>
        <Link to="/cart" className="text-blue-500 underline mt-2 inline-block">
          View Cart & Checkout →
        </Link>
      </div>

      {/* Reward Points */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Reward Points</h2>
        <p className="text-2xl font-bold text-green-600">{rewardPoints} Points</p>
      </div>

      {/* Available Coupons */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Available Coupons</h2>
        {coupons.length > 0 ? (
          <ul className="space-y-3">
            {coupons.map((coupon) => (
              <li
                key={coupon.id}
                className="flex justify-between items-center border p-3 rounded hover:bg-gray-50"
              >
                <div>
                  <p className="font-medium">{coupon.name}</p>
                  <p className="text-sm text-gray-500">Requires {coupon.points} points</p>
                </div>
                <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
                  Redeem
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No available coupons.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
