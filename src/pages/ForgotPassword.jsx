// src/pages/ForgotPassword.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailOrPhone) {
      alert('Please enter your email or mobile number.');
      return;
    }
    // TODO: Call your backend to initiate password reset
    console.log('Password reset requested for:', emailOrPhone);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded shadow">
          <p className="mb-4 text-gray-600 text-sm">
            Enter your registered email or mobile number. We’ll send you a link to reset your password.
          </p>
          <input
            type="text"
            name="emailOrPhone"
            placeholder="Email or Mobile Number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            className="w-full mb-3 p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Send Reset Link
          </button>
        </form>
      ) : (
        <div className="bg-white p-6 rounded shadow w-full max-w-sm text-center">
          <p className="text-green-600 mb-4">✅ A reset link has been sent to your email/phone.</p>
          <Link to="/login" className="text-blue-500 underline">
            Back to Login
          </Link>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
