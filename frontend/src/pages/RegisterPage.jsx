// src/pages/RegisterPage.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the browser from reloading the page
    setMessage(''); // Clear any old messages

    try {
      // 1. Send a POST request to your backend API
      const response = await axios.post('http://localhost:5000/api/users/register', {
        email: email,
        password: password,
      });

      // 2. Handle a successful response
      setMessage('Registration successful! Redirecting to login...');
      console.log('Success:', response.data);

      // Redirect to login page after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (error) {
      // 3. Handle an error response
      console.error('Registration failed:', error.response.data.message);
      setMessage(error.response.data.message || 'Registration failed');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-900 text-white">
      <div className="p-8 bg-neutral-800 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-pink-500">
          Create Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-pink-600 hover:bg-pink-700 rounded-md font-semibold text-white transition-colors"
          >
            Register
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm text-gray-300">{message}</p>
        )}
      </div>
    </div>
  );
}