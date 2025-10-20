// src/context/AuthContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // 1. Get the token from localStorage when the app first loads
  const [token, setToken] = useState(localStorage.getItem('token'));

  // 2. This effect syncs localStorage whenever the token state changes
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  // 3. This function will be called from your LoginPage
  const login = (newToken) => {
    setToken(newToken);
  };

  // 4. This function will be called from your Navbar
  const logout = () => {
    setToken(null);
  };

  // 5. Provide the token and functions to all child components
  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// This is a custom hook to easily access the auth state in any component
export const useAuth = () => {
  return useContext(AuthContext);
};