import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = async (email, password, role = 'admin') => {
    console.log('Login attempt:', { email, password, role });
    
    if (role === 'admin' && email === 'admin@taleem.com' && password === 'admin123') {
      const adminUser = { email, role: 'admin', name: 'Admin User' };
      setUser(adminUser);
      localStorage.setItem('user', JSON.stringify(adminUser));
      console.log('Authentication result:', adminUser);
      return adminUser;
      
    } else if (role === 'teacher' && email === 'teacher@demo.com' && password === 'teacher123') {
      const teacherUser = { 
        email, 
        role: 'teacher', 
        name: 'Demo Teacher',
        subject: 'Quran & Tajweed'
      };
      setUser(teacherUser);
      localStorage.setItem('user', JSON.stringify(teacherUser));
      console.log('Authentication result:', teacherUser);
      return teacherUser;
      
    } else if (role === 'parent' && email === 'parent@demo.com' && password === 'parent123') {
      const parentUser = {
        email,
        role: 'parent',
        name: 'Ahmed Hassan',
        children: [
          { id: 1, name: 'Amina Hassan', grade: 'Grade 3', classes: ['Quran Hifz - Beginner', 'Arabic - Basic'] },
          { id: 2, name: 'Ibrahim Hassan', grade: 'Grade 5', classes: ['Tajweed - Intermediate', 'Islamic Studies'] },
        ]
      };
      setUser(parentUser);
      localStorage.setItem('user', JSON.stringify(parentUser));
      console.log('Authentication result:', parentUser);
      return parentUser;
    }
    
    console.log('Authentication failed');
    throw new Error('Invalid credentials');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const isAuthenticated = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      return parsedUser && (
        parsedUser.role === 'admin' || 
        parsedUser.role === 'teacher' || 
        parsedUser.role === 'parent'
      );
    }
    return false;
  };

  const getCurrentUser = () => {
    return user;
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated,
      getCurrentUser
    }}>
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