import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { StudentProvider } from './contexts/StudentContext'; // Import our StudentProvider
import Navigation from './components/layout/Navigation';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutUs.js';
import ServicesPage from './pages/Services.js';
import PackagesPage from './pages/Packages.js';
import PackageContactPage from './pages/PackageContactPage.js';
import ContactPage from './pages/ContactPage';
import AdminDashboard from './pages/AdminDashboard';
import AddStudentPage from './components/adminDashboard/AddStudentPage';
import AddWaitingListStudentPage from './components/adminDashboard/AddWaitingListStudentPage.js';
import AddTeacherPage from './components/adminDashboard/AddTeacherPage';
import TeacherDashboard from './pages/TeacherDashboard';
import AddClassPage from './components/adminDashboard/AddClassPage';
import PrivateRoute from './routes/PrivateRoute';
import { useAuth } from './contexts/AuthContext';
import './styles/animations.css';

// AppContent component to handle route changes and state
const AppContent = () => {
  const location = useLocation();

  // List of routes that should NOT have the Navigation component
  const routesWithoutNavigation = [
    '/admin-dashboard', 
    '/admin-dashboard/waiting',
    '/admin-dashboard/teachers',
    '/admin-dashboard/classes',
    '/admin-dashboard/attendance',
    '/admin-dashboard/progress',
    '/admin-dashboard/payment',
    '/teacher-dashboard',
    '/admin-dashboard/add-student',
    '/admin-dashboard/waiting/add-student',
    '/admin-dashboard/teachers/add-teacher',
    '/admin-dashboard/classes/add'
  ];

  const shouldShowNavigation = !routesWithoutNavigation.some(route => 
    location.pathname.startsWith(route)
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {shouldShowNavigation && <Navigation />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/package-contact/:packageId" element={<PackageContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* Admin Dashboard and its sub-routes */}
          <Route path="/admin-dashboard/*" element={
            <PrivateRoute allowedRoles={['admin']}>
              <Routes>
                <Route path="/" element={<AdminDashboard />} />
                <Route path="/waiting" element={<AdminDashboard />} />
                <Route path="/teachers" element={<AdminDashboard />} />
                <Route path="/classes" element={<AdminDashboard />} />
                <Route path="/attendance" element={<AdminDashboard />} />
                <Route path="/progress" element={<AdminDashboard />} />
                <Route path="/payment" element={<AdminDashboard />} />
                <Route path="/add-student" element={<AddStudentPage />} />
                <Route path="/waiting/add-student" element={<AddWaitingListStudentPage />} />
                <Route path="/teachers/add-teacher" element={<AddTeacherPage />} />
                <Route path="/classes/add" element={<AddClassPage />} />
              </Routes>
            </PrivateRoute>
          } />
          
          {/* Teacher Dashboard */}
          <Route path="/teacher-dashboard" element={
            <PrivateRoute allowedRoles={['teacher']}>
              <TeacherDashboard />
            </PrivateRoute>
          } />
          
          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <StudentProvider> {/* Add StudentProvider here */}
          <AppContent />
        </StudentProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;