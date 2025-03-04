import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Existing demo users and new user structure
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = async (email, password, loginType) => {
    // Super admin login
    if (loginType === 'super_admin' && email === 'admin@taleem.com' && password === 'admin123') {
      const adminUser = {
        email,
        role: 'super_admin', // This matches what LoginPage expects
        name: 'Admin User',
        masjid: null // Super admin doesn't belong to a specific masjid
      };
      setUser(adminUser);
      localStorage.setItem('user', JSON.stringify(adminUser));
      return adminUser;
    } 
    // Teacher login
    else if (loginType === 'teacher' && email === 'teacher@demo.com' && password === 'teacher123') {
      const teacherUser = {
        email,
        role: 'teacher',
        name: 'Demo Teacher',
        subject: 'Quran & Tajweed',
        masjid: 'demo-masjid-id' // Add a demo masjid ID
      };
      setUser(teacherUser);
      localStorage.setItem('user', JSON.stringify(teacherUser));
      return teacherUser;
    } 
    // Parent login
    else if (loginType === 'parent' && email === 'parent@demo.com' && password === 'parent123') {
      const parentUser = {
        email,
        role: 'parent',
        name: 'Ahmed Hassan',
        masjid: 'demo-masjid-id', // Add a demo masjid ID
        children: [
          { id: 1, name: 'Amina Hassan', grade: 'Grade 3', classes: ['Quran Hifz - Beginner', 'Arabic - Basic'] },
          { id: 2, name: 'Ibrahim Hassan', grade: 'Grade 5', classes: ['Tajweed - Intermediate', 'Islamic Studies'] },
        ]
      };
      setUser(parentUser);
      localStorage.setItem('user', JSON.stringify(parentUser));
      return parentUser;
    }
    // Masjid admin login (adding this for masjid administrators)
    else if (loginType === 'masjid_admin' && email === 'masjid_admin@demo.com' && password === 'admin123') {
      const masjidAdminUser = {
        email,
        role: 'masjid_admin',
        name: 'Masjid Administrator',
        masjid: 'demo-masjid-id' // The masjid they administer
      };
      setUser(masjidAdminUser);
      localStorage.setItem('user', JSON.stringify(masjidAdminUser));
      return masjidAdminUser;
    }

    throw new Error('Invalid credentials');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const isAuthenticated = () => {
    const storedUser = localStorage.getItem('user');
    return !!storedUser;
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