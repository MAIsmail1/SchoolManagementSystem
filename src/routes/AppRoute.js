// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import AdminDashboardPage from '../pages/AdminDashboardPage';
import TeacherDashboardPage from '../pages/TeacherDashboardPage';
import ParentDashboardPage from '../pages/ParentDashboardPage';
import UnauthorizedPage from '../pages/UnauthorizedPage';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />

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