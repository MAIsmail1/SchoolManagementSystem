import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children, allowedRoles = ['admin'] }) => {
  const { isAuthenticated, getCurrentUser } = useAuth();
  const user = getCurrentUser();

  if (!isAuthenticated() || !allowedRoles.includes(user?.role)) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;