// src/pages/LoginPage.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email: email,
        password: password,
      });

      const { token } = response.data;
      login(token);

      setMessage('Login successful! Redirecting home...');
      setTimeout(() => {
        navigate('/'); // Redirect to home page
      }, 1500);

    } catch (error) {
      console.error('Login failed:', error.response?.data?.message || error.message);
      setMessage(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-900 text-white">
      <div className="p-8 bg-neutral-800 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-pink-500">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              // --- THIS IS THE FIX ---
              onChange={(e) => setEmail(e.target.value)}
              // --- END OF FIX ---
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
            Login
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm text-gray-300">{message}</p>
        )}
      </div>
    </div>
  );
}