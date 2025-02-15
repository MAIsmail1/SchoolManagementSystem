// src/routes/PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const PrivateRoute = ({ allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignUpPage';

import AdminDashboardPage from '../pages/AdminDashboardPage';
import TeacherDashboardPage from '../pages/TeacherDashboardPage';
import ParentDashboardPage from '../pages/ParentDashboardPage';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Protected Routes */}
      <Route element={<PrivateRoute allowedRoles={['admin']} />}>
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
      </Route>

      <Route element={<PrivateRoute allowedRoles={['teacher']} />}>
        <Route path="/teacher-dashboard" element={<TeacherDashboardPage />} />
      </Route>

      <Route element={<PrivateRoute allowedRoles={['parent']} />}>
        <Route path="/parent-dashboard" element={<ParentDashboardPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;