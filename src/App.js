import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { StudentProvider } from './contexts/StudentContext';
import { TeacherProvider } from './contexts/TeacherContext';
import { ClassesProvider } from './contexts/ClassesContext';
import { AttendanceProvider } from './contexts/AttendanceContext';
import { PaymentProvider } from './contexts/PaymentContext';
import { ProgressProvider } from './contexts/ProgressContext';
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
          <Route
            path="/admin-dashboard"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/waiting"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/teachers"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/classes"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/attendance"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/progress"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/payment"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/add-student"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AddStudentPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/waiting/add-student"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AddWaitingListStudentPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/teachers/add-teacher"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AddTeacherPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/classes/add"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AddClassPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/teacher-dashboard"
            element={
              <PrivateRoute allowedRoles={['teacher']}>
                <TeacherDashboard />
              </PrivateRoute>
            }
          />
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
        <StudentProvider>
          <TeacherProvider>
            <ClassesProvider>
              <AttendanceProvider>
                <PaymentProvider>
                  <ProgressProvider>
                    <AppContent />
                  </ProgressProvider>
                </PaymentProvider>
              </AttendanceProvider>
            </ClassesProvider>
          </TeacherProvider>
        </StudentProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;