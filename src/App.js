import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { MasjidProvider } from './contexts/MasjidContext';
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

// Super Admin Pages
import SuperAdminDashboard from './pages/super-admin/DashboardPage';
import ManageMasjidsPage from './pages/super-admin/ManageMasjidsPage';
import UserManagementPage from './pages/super-admin/UserManagementPage';

// Masjid Admin Pages
import MasjidAdminDashboard from './pages/masjid-admin/DashboardPage';
import MasjidDetailsPage from './pages/masjid-admin/MasjidDetailsPage';

// Existing Admin Pages
import AdminDashboard from './pages/AdminDashboard';
import AddStudentPage from './components/adminDashboard/AddStudentPage';
import AddWaitingListStudentPage from './components/adminDashboard/AddWaitingListStudentPage.js';
import AddTeacherPage from './components/adminDashboard/AddTeacherPage';
import AddClassPage from './components/adminDashboard/AddClassPage';

// Teacher and Parent Pages
import TeacherDashboard from './pages/TeacherDashboard';
import ParentDashboard from './pages/ParentDashboard';

import CreateMasjidPage from './pages/admin/CreateMasjidPage';
import MasjidRouter from './routes/MasjidRouter';
import PrivateRoute from './routes/PrivateRoute';
import { useAuth } from './contexts/AuthContext';
import './styles/animations.css';

// AppContent component to handle route changes and state
const AppContent = () => {
  const location = useLocation();
  const { user } = useAuth();

  // List of routes that should NOT have the Navigation component
  const routesWithoutNavigation = [
    '/login',
    '/super-admin/dashboard',
    '/masjid-admin/dashboard',
    '/teacher-dashboard',
    '/parent-dashboard'
  ];

  const shouldShowNavigation = !routesWithoutNavigation.some(route => 
    location.pathname.startsWith(route)
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {shouldShowNavigation && <Navigation />}
      <main>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/package-contact/:packageId" element={<PackageContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* Super Admin Routes */}
          <Route 
            path="/super-admin/dashboard" 
            element={
              <PrivateRoute allowedRoles={['super_admin']}>
                <SuperAdminDashboard />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/super-admin/masjids" 
            element={
              <PrivateRoute allowedRoles={['super_admin']}>
                <ManageMasjidsPage />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/super-admin/users" 
            element={
              <PrivateRoute allowedRoles={['super_admin']}>
                <UserManagementPage />
              </PrivateRoute>
            } 
          />

          {/* Existing Admin Routes */}
          <Route
            path="/admin-dashboard"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/masjids"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <ManageMasjidsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/masjids/create"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <CreateMasjidPage />
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

          {/* Teacher and Parent Routes */}
          <Route
            path="/teacher-dashboard"
            element={
              <PrivateRoute allowedRoles={['teacher']}>
                <TeacherDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/parent-dashboard"
            element={
              <PrivateRoute allowedRoles={['parent']}>
                <ParentDashboard />
              </PrivateRoute>
            }
          />
          
          {/* Masjid-specific routes */}
          <Route path="/masjid/:masjidId/*" element={<MasjidRouter />} />
          
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
        <MasjidProvider>
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
        </MasjidProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;