// src/contexts/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Admin Credentials - Only allow admin login initially
  const adminCredentials = {
    email: 'admin@school.com',
    password: 'admin123',
    role: 'admin'
  };

  const login = async (email, password) => {
    setLoading(true);
    try {
      // Only check admin credentials
      if (email === adminCredentials.email && password === adminCredentials.password) {
        const userData = { ...adminCredentials };
        setUser(userData);
        return userData;
      } else {
        throw new Error('Invalid admin credentials');
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};