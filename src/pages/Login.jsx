// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Call your backend API here
    console.log('Logging in:', form);
    // Simulate successful login
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded shadow">
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
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Login
        </button>
      </form>

      <div className="mt-4 w-full max-w-sm text-center">
        <Link to="/forgot-password" className="text-sm text-blue-500 underline">
          Forgot Password?
        </Link>
        <p className="mt-2 text-sm">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-blue-500 underline">
            Sign Up
          </Link>
        </p>
      </div>

      <div className="mt-6">
        <p className="text-gray-500 mb-2">Or login with:</p>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Facebook</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded">Google</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
