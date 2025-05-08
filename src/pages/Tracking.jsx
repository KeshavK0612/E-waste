// src/pages/Tracking.jsx
import React from 'react';

const sampleStatus = 'Picked Up'; // This would normally come from backend data

const steps = ['Requested', 'Assigned', 'Picked Up', 'Verified', 'Payment Processed'];

function Tracking() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-6">Order Tracking</h1>

      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        {steps.map((step, index) => {
          const isCompleted = steps.indexOf(sampleStatus) >= index;
          return (
            <div key={step} className="flex items-center space-x-4 mb-4">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  isCompleted ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                }`}
              >
                {isCompleted ? '✔' : index + 1}
              </div>
              <p className={`${isCompleted ? 'text-green-600' : 'text-gray-600'}`}>
                {step}
              </p>
            </div>
          );
        })}
      </div>

      {/* You can add more info below if needed */}
    </div>
  );
}

export default Tracking;
