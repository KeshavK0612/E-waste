// src/pages/Profile.jsx
import React, { useState } from 'react';

function Profile() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const [showBanner, setShowBanner] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    if (!profile.name || !profile.email || !profile.address || !profile.phone) {
      alert('Please fill in all fields.');
      return;
    }
    setShowBanner(true);
    setTimeout(() => setShowBanner(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 relative">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Your Profile</h1>

        {showBanner && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-700 px-4 py-2 rounded-full shadow">
            ✅ Profile saved successfully!
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
            <input
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Address</label>
            <input
              name="address"
              value={profile.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              placeholder="Enter your address"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Phone</label>
            <input
              name="phone"
              type="tel"
              value={profile.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              placeholder="Enter your phone number"
            />
          </div>

          <button
            onClick={handleSave}
            className="w-full py-3 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600 transition"
          >
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
