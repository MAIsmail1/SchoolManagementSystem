// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/layout/Navigation';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutUs.js';
import ServicesPage from './pages/Services.js';
import PackagesPage from './pages/Packages.js';
import PackageContactPage from './pages/PackageContactPage.js';
import ContactPage from './pages/ContactPage';
import './styles/animations.css';
// Importing Lucide icons for use across components
import { 
  GraduationCap, 
  UserRound, 
  BookOpen, 
  Users2,
  MousePointerClick, 
  Shield, 
  HeadphonesIcon, 
  RefreshCw,
  SendHorizontal
} from 'lucide-react';

// Import UI components
import { Card, CardContent, CardHeader, CardTitle } from './components/common/card';
import { Button } from './components/common/button';

// AppContent component to handle route changes and state
const AppContent = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Admin Credentials
  const adminCredentials = {
    email: 'admin@taleem.com',
    password: 'admin123',
    role: 'admin'
  };

  // Admin Dashboard Component
  const AdminDashboard = () => (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome, {user?.email}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      <main>
{/* In your Routes component */}
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
    element={user?.role === 'admin' ? <AdminDashboard /> : <LoginPage />} 
  />
</Routes>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
};

export default App;