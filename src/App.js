// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './components/common/card';
import { Button } from './components/common/button';
import { GraduationCap, MousePointerClick, Shield, HeadphonesIcon, RefreshCw} from 'lucide-react';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/layout/Navigation';
import ContactForm from './components/layout/ContactForm.js';

// AppContent component to handle route changes and state
const AppContent = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  // Sync URL with state
  useEffect(() => {
    const pathToPage = {
      '/': 'home',
      '/login': 'login',
      '/signup': 'signup',
      '/admin-dashboard': 'admin-dashboard'
    };
    setCurrentPage(pathToPage[location.pathname] || 'home');
  }, [location]);

  // Admin Credentials
  const adminCredentials = {
    email: 'admin@school.com',
    password: 'admin123',
    role: 'admin'
  };

  // Form Validation Function
  const validateSignupForm = () => {
    const newErrors = {};
    if (!signupForm.name) newErrors.name = 'Name is required';
    if (!signupForm.email) newErrors.email = 'Email is required';
    if (!signupForm.email.includes('@')) newErrors.email = 'Email is invalid';
    if (!signupForm.password) newErrors.password = 'Password is required';
    if (signupForm.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (signupForm.password !== signupForm.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Landing Page Component in App.js
const LandingPage = () => (
  <div className="min-h-screen">
    {/* Hero Section */}
    <div className="px-6 py-16 bg-gradient-to-r from-purple-100 to-blue-100">
      <div className="max-w-6xl mx-auto text-center">
        <GraduationCap className="w-16 h-16 mx-auto mb-6 text-purple-600" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Taleem
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Empowering education through seamless management and communication
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={() => setCurrentPage('signup')}>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </div>

    {/* Features Section */}
    <div className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Student Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Efficiently manage enrollments and track student progress. Keep detailed records
                and monitor academic performance.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Teacher Portal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Easy access to class schedules, student information, and grading tools.
                Streamline your teaching workflow.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Parent Access</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Monitor your child's progress and communicate with teachers.
                Stay involved in your child's education.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

    {/* Benefits Section */}
<div className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
      Why Choose Us
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="text-center p-6">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <MousePointerClick className="w-6 h-6 text-purple-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
        <p className="text-gray-600">Intuitive interface for all users</p>
      </div>
      <div className="text-center p-6">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Secure</h3>
        <p className="text-gray-600">Data protection is our priority</p>
      </div>
      <div className="text-center p-6">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <HeadphonesIcon className="w-6 h-6 text-purple-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
        <p className="text-gray-600">Always here to help you</p>
      </div>
      <div className="text-center p-6">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <RefreshCw className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Regular Updates</h3>
        <p className="text-gray-600">Continuous improvements</p>
      </div>
    </div>
  </div>
</div>

    {/* Contact Form Section */}
<div className="py-16 px-6 bg-gradient-to-r from-purple-50 to-blue-50">
  {/* Contact Form Section */}
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Have questions about our school management system? We'd love to hear from you.
      </p>
    </div>
    <div className="max-w-2xl mx-auto">
      <ContactForm />
    </div>
  </div>
</div>

    {/* Footer */}
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Taleem</h3>
            <p className="text-gray-400">
              Empowering education through technology and innovation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@schoolmanagement.com</li>
              <li>Phone: 07979411995</li>
              <li>Address: 123 Education St, Learning City</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Taleem System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
);
  // Login Page Component
  const LoginPage = () => {
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);

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

  // SignUp Page Component
  const SignUpPage = () => {
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setSignupForm(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSignup = (e) => {
      e.preventDefault();
      if (validateSignupForm()) {
        setCurrentPage('login');
      }
    };

    return (
      <div className="flex justify-center items-center min-h-[85vh] px-4 py-12">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Create Account</CardTitle>
            <p className="text-gray-600 text-center">
              Join us to start managing your school experience
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSignup}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="signup-name" className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    id="signup-name"
                    type="text"
                    name="name"
                    className={`w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 
                      ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Enter your name"
                    value={signupForm.name}
                    onChange={handleInputChange}
                    autoComplete="name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="signup-email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    id="signup-email"
                    type="email"
                    name="email"
                    className={`w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500
                      ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Enter your email"
                    value={signupForm.email}
                    onChange={handleInputChange}
                    autoComplete="email"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="signup-password" className="block text-sm font-medium mb-2">Password</label>
                  <input
                    id="signup-password"
                    type="password"
                    name="password"
                    className={`w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500
                      ${errors.password ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Create a password"
                    value={signupForm.password}
                    onChange={handleInputChange}
                    autoComplete="new-password"
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                <div>
                  <label htmlFor="signup-confirm-password" className="block text-sm font-medium mb-2">Confirm Password</label>
                  <input
                    id="signup-confirm-password"
                    type="password"
                    name="confirmPassword"
                    className={`w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500
                      ${errors.confirmPassword ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Confirm your password"
                    value={signupForm.confirmPassword}
                    onChange={handleInputChange}
                    autoComplete="new-password"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                  )}
                </div>

                <Button type="submit" className="w-full py-3">
                  Sign Up
                </Button>
              </div>
            </form>
            <div className="text-center">
              <p className="text-gray-600">Already have an account?</p>
              <button
                onClick={() => setCurrentPage('login')}
                className="text-purple-600 hover:text-purple-700 font-medium mt-1"
              >
                Login to your account
              </button>
            </div>
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
          <Route path="/signup" element={<SignUpPage />} />
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