// src/pages/SignUp.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // TODO: Call your backend API here
    console.log('Form submitted:', form);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded shadow">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Mobile Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          //required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <button type="submit" className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Sign Up
        </button>
      </form>

      <div className="mt-4">
        <p>
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 underline">
            Log In
          </Link>
        </p>
      </div>

      <div className="mt-6">
        <p className="text-gray-500 mb-2">Or sign up with:</p>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Facebook</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded">Google</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
