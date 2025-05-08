// src/pages/Rewards.jsx
import React from 'react';

function Rewards() {
  const currentPoints = 120; // This can come from user data
  const goalPoints = 200;
  const history = [
    { id: 1, date: '2024-12-10', points: 50, description: 'Pickup: 1x Mobile' },
    { id: 2, date: '2025-01-15', points: 70, description: 'Pickup: 2x Laptop' },
  ];

  const progressPercent = Math.min((currentPoints / goalPoints) * 100, 100);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-6">Your Rewards</h1>

      <div className="w-full max-w-md bg-white p-6 rounded shadow space-y-6">
        <div>
          <p className="text-lg font-semibold">Current Points: {currentPoints}</p>
          <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            {goalPoints - currentPoints} points away from your next reward!
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Rewards History</h2>
          {history.length === 0 ? (
            <p className="text-gray-500">No rewards earned yet.</p>
          ) : (
            <ul className="space-y-3">
              {history.map((item) => (
                <li key={item.id} className="border p-3 rounded">
                  <p className="font-medium">{item.description}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <p className="text-green-600 font-semibold">+{item.points} pts</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Rewards;
