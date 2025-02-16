// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './components/common/card';
import { Button } from './components/common/button';
import { GraduationCap, MousePointerClick, Shield, HeadphonesIcon, RefreshCw } from 'lucide-react';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/layout/Navigation';
import ContactForm from './components/layout/ContactForm';

// AppContent component to handle route changes and state
const AppContent = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Sync URL with state
  useEffect(() => {
    const pathToPage = {
      '/': 'home',
      '/login': 'login',
      '/admin-dashboard': 'admin-dashboard'
    };
    setCurrentPage(pathToPage[location.pathname] || 'home');
  }, [location]);

  // Admin Credentials
  const adminCredentials = {
    email: 'admin@taleem.com',
    password: 'admin123',
    role: 'admin'
  };

  // Landing Page Component
  const LandingPage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
<div className="px-6 py-16 bg-gradient-to-r from-green-950 to-black">
  <div className="max-w-6xl mx-auto text-center">
    <GraduationCap className="w-16 h-16 mx-auto mb-6 text-green-500" />
    <h1 className="text-4xl font-bold text-white mb-4">
      Welcome to Ta'leem
    </h1>
    <p className="text-xl text-gray-300 mb-8">
      Empowering education through seamless management and communication
    </p>
    <div className="flex gap-4 justify-center">
      <Button 
        onClick={() => setCurrentPage('login')}
        className="bg-green-700 hover:bg-green-800 text-white"
      >
        Get Started
      </Button>
      <Button 
        variant="outline"
        className="border-green-500 text-green-500 hover:bg-green-800 hover:text-white hover:border-green-800"
      >
        Learn More
      </Button>
    </div>
  </div>
</div>

      {/* Features Section */}
<div className="py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
      Our Features
    </h2>
    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      Comprehensive tools designed to enhance the educational experience for everyone
    </p>
    <div className="grid md:grid-cols-3 gap-8">
      <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-green-700 overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-800 to-green-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-green-50 rounded-lg">
              <GraduationCap className="w-5 h-5 text-green-700" />
            </div>
            <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-green-700 transition-colors">Student Management</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 leading-relaxed">
            Efficiently manage enrollments and track student progress. Keep detailed records
            and monitor academic performance with our comprehensive dashboard.
          </p>
        </CardContent>
      </Card>

      <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-green-700 overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-800 to-green-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-green-50 rounded-lg">
              <GraduationCap className="w-5 h-5 text-green-700" />
            </div>
            <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-green-700 transition-colors">Teacher Portal</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 leading-relaxed">
            Easy access to class schedules, student information, and grading tools.
            Streamline your teaching workflow with integrated resources.
          </p>
        </CardContent>
      </Card>

      <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-green-700 overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-800 to-green-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-green-50 rounded-lg">
              <GraduationCap className="w-5 h-5 text-green-700" />
            </div>
            <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-green-700 transition-colors">Parent Access</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 leading-relaxed">
            Monitor your child's progress and communicate with teachers.
            Stay involved in your child's education through real-time updates.
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</div>
   {/* Benefits Section */}
<div className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
      Why Choose Us
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="text-center p-6 bg-white rounded-lg hover:scale-105 transform-gpu transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-green-100">
        <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors duration-300 group-hover:rotate-12 transform">
          <MousePointerClick className="w-6 h-6 text-green-700 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-green-700 transition-colors duration-300">Easy to Use</h3>
        <p className="text-gray-600">Intuitive interface for all users</p>
      </div>
      
      <div className="text-center p-6 bg-white rounded-lg hover:scale-105 transform-gpu transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-green-100">
        <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors duration-300 group-hover:rotate-12 transform">
          <Shield className="w-6 h-6 text-green-700 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-green-700 transition-colors duration-300">Secure</h3>
        <p className="text-gray-600">Data protection is our priority</p>
      </div>
      
      <div className="text-center p-6 bg-white rounded-lg hover:scale-105 transform-gpu transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-green-100">
        <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors duration-300 group-hover:rotate-12 transform">
          <HeadphonesIcon className="w-6 h-6 text-green-700 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-green-700 transition-colors duration-300">24/7 Support</h3>
        <p className="text-gray-600">Always here to help you</p>
      </div>
      
      <div className="text-center p-6 bg-white rounded-lg hover:scale-105 transform-gpu transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-green-100">
        <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors duration-300 group-hover:rotate-12 transform">
          <RefreshCw className="w-6 h-6 text-green-700 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-green-700 transition-colors duration-300">Regular Updates</h3>
        <p className="text-gray-600">Continuous improvements</p>
      </div>
    </div>
  </div>
</div>
      {/* Contact Form Section */}
      <div className="py-16 px-6 bg-gradient-to-r from-purple-50 to-blue-50">
        <ContactForm />
      </div>

      {/* Footer */}
      {/* Footer */}
<footer className="bg-black text-white py-12">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-4 text-green-600">Taleem</h3>
        <p className="text-gray-300">
          Empowering education through technology and innovation.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-gray-300 hover:text-green-600 transition-colors">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-green-600 transition-colors">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-green-600 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
        <ul className="space-y-2 text-gray-300">
          <li>Email: info@taleem.com</li>
          <li>Phone: 07979411995</li>
          <li>Address: 123 Education St, Learning City</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
      <p>&copy; 2024 Taleem. All rights reserved.</p>
    </div>
  </div>
</footer>
    </div>
  );

  // Login Page Component
  // Inside App.js, replace the LoginPage component with:

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Check admin credentials
    if (email === adminCredentials.email && 
        password === adminCredentials.password) {
      setTimeout(() => {
        setUser({ ...adminCredentials });
        setCurrentPage('admin-dashboard');
        setLoading(false);
      }, 1000);
    } else {
      setLoading(false);
      setError('Invalid credentials. Only admin can access the system.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[85vh] px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Admin Login</CardTitle>
          <p className="text-gray-600 text-center">
            Only administrators can access the system
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {error && (
                <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
                  {error}
                </div>
              )}
              <div>
                <label 
                  htmlFor="admin-email" 
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="admin-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter admin email"
                  autoComplete="email"
                  required
                />
              </div>
              <div>
                <label 
                  htmlFor="admin-password" 
                  className="block text-sm font-medium mb-2"
                >
                  Password
                </label>
                <input
                  id="admin-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter admin password"
                  autoComplete="current-password"
                  required
                />
              </div>
              <div className="text-sm text-gray-500">
                <div>Demo Admin Credentials:</div>
                <div>Email: admin@school.com</div>
                <div>Password: admin123</div>
              </div>
              <Button 
                type="submit" 
                className="w-full py-3" 
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
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
        <Routes>
          <Route path="/" element={<LandingPage />} />
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