import React, { useEffect } from 'react';
import { Routes, Route, useParams, Navigate } from 'react-router-dom';
import { useMasjid } from '../contexts/MasjidContext';
import { useAuth } from '../contexts/AuthContext';

// Import dashboard components
import AdminDashboard from '../pages/AdminDashboard';
import TeacherDashboard from '../pages/TeacherDashboard';
import ParentDashboard from '../pages/ParentDashboard';
import MasjidDashboard from '../pages/masjid/MasjidDashboard';
import MasjidLogin from '../pages/masjid/MasjidLogin';
import PrivateRoute from './PrivateRoute';

const MasjidRouter = () => {
  const { masjidId } = useParams();
  const { loadMasjidData, loading, currentMasjid } = useMasjid();
  const { isAuthenticated, getCurrentUser } = useAuth();
  
  useEffect(() => {
    if (masjidId) {
      loadMasjidData(masjidId);
    }
  }, [masjidId, loadMasjidData]);
  
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading {masjidId} portal...</p>
        </div>
      </div>
    );
  }
  
  if (!currentMasjid) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Masjid Not Found</h1>
          <p className="text-gray-600 mb-6">
            The masjid portal "{masjidId}" you're looking for doesn't exist or isn't available.
          </p>
          <a 
            href="/"
            className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Return to Homepage
          </a>
        </div>
      </div>
    );
  }
  
  return (
    <Routes>
      {/* Masjid public homepage */}
      <Route path="/" element={<MasjidDashboard />} />
      
      {/* Masjid login page */}
      <Route path="/login" element={<MasjidLogin />} />
      
      {/* Admin routes for this specific masjid */}
      <Route path="/admin-dashboard/*" element={
        <PrivateRoute allowedRoles={['admin']}>
          <AdminDashboard />
        </PrivateRoute>
      } />
      
      {/* Teacher routes for this specific masjid */}
      <Route path="/teacher-dashboard/*" element={
        <PrivateRoute allowedRoles={['teacher']}>
          <TeacherDashboard />
        </PrivateRoute>
      } />
      
      {/* Parent routes for this specific masjid */}
      <Route path="/parent-dashboard/*" element={
        <PrivateRoute allowedRoles={['parent']}>
          <ParentDashboard />
        </PrivateRoute>
      } />
      
      {/* Auto-redirect to the appropriate dashboard if logged in */}
      <Route path="/dashboard" element={
        isAuthenticated() ? (
          (() => {
            const user = getCurrentUser();
            switch(user?.role) {
              case 'admin':
                return <Navigate to="admin-dashboard" replace />;
              case 'teacher':
                return <Navigate to="teacher-dashboard" replace />;
              case 'parent':
                return <Navigate to="parent-dashboard" replace />;
              default:
                return <Navigate to="/" replace />;
            }
          })()
        ) : (
          <Navigate to="login" replace />
        )
      } />
      
      {/* Catch-all route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default MasjidRouter;