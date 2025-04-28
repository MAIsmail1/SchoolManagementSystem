// src/services/authService.js
import axios from 'axios';

const TEST_CREDENTIALS = {
  admin: {
    email: 'admin@school.com',
    password: 'admin123',
    role: 'admin',
    name: 'Admin User'
  },
  teacher: {
    email: 'teacher@school.com',
    password: 'teacher123',
    role: 'teacher',
    name: 'Teacher User'
  },
  parent: {
    email: 'parent@school.com',
    password: 'parent123',
    role: 'parent',
    name: 'Parent User'
  }
};

export const authService = {
  async login(email, password) {
    // Simulate backend authentication
    const user = Object.values(TEST_CREDENTIALS).find(
      u => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    }

    throw new Error('Invalid credentials');
  },

  async register(userData) {
    // Basic validation
    if (!userData.email || !userData.password) {
      throw new Error('Email and password are required');
    }

    // In a real app, this would call a backend registration endpoint
    const newUser = {
      ...userData,
      role: 'parent', // Default role
      id: Date.now()
    };

    localStorage.setItem('user', JSON.stringify(newUser));
    return newUser;
  },

  logout() {
    localStorage.removeItem('user');
  },

  getCurrentUser() {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }
};