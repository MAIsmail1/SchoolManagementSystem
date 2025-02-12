import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { GraduationCap } from 'lucide-react';

const App = () => {
  // State Management
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Signup Form State
  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Login Form State
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  // Errors State
  const [errors, setErrors] = useState({});

  // Admin Credentials
  const adminCredentials = {
    email: 'admin@school.com',
    password: 'admin123',
    role: 'admin'
  };

  // Test Credentials
  const testCredentials = {
    admin: {
      email: 'admin@school.com',
      password: 'admin123',
      role: 'admin'
    },
    teacher: {
      email: 'teacher@school.com',
      password: 'teacher123',
      role: 'teacher'
    },
    parent: {
      email: 'parent@school.com',
      password: 'parent123',
      role: 'parent'
    }
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

  // Landing Page Component
  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="px-6 py-16 bg-gradient-to-r from-purple-100 to-blue-100">
        <div className="max-w-6xl mx-auto text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-6 text-purple-600" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to School Management System
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
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Student Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Efficiently manage enrollments and track student progress.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Teacher Portal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Easy access to class schedules and student information.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Parent Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Monitor your child's progress and communicate with teachers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );

  // Login Page Component
  const LoginPage = () => {
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setLoginForm(prevForm => ({
        ...prevForm,
        [name]: value
      }));
    };

    const handleLogin = (e) => {
      e.preventDefault();
      setLoading(true);

      // Check admin credentials
      if (loginForm.email === adminCredentials.email &&
          loginForm.password === adminCredentials.password) {
        setTimeout(() => {
          setUser({ ...adminCredentials });
          setCurrentPage('admin-dashboard');
          setLoading(false);
        }, 1000);
      } else {
        setLoading(false);
        alert('Invalid credentials');
      }
    };

    return (
      <div className="flex justify-center items-center min-h-[85vh] px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Welcome Back</CardTitle>
            <p className="text-gray-600 text-center">
              Enter your credentials to access your account
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your email"
                    value={loginForm.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your password"
                    value={loginForm.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="text-sm text-gray-500">
                  Demo Admin Login:
                  <div>Email: admin@school.com</div>
                  <div>Password: admin123</div>
                </div>
                <Button type="submit" className="w-full py-3" disabled={loading}>
                  {loading ? 'Loading...' : 'Login'}
                </Button>
              </div>
            </form>
            <div className="text-center">
              <p className="text-gray-600">Don't have an account?</p>
              <button
                onClick={() => setCurrentPage('signup')}
                className="text-purple-600 hover:text-purple-700 font-medium mt-1"
              >
                Create an account
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  // SignUp Page Component
  const SignUpPage = () => {
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setSignupForm(prevForm => ({
        ...prevForm,
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
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className={`w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 
                      ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Enter your name"
                    value={signupForm.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    className={`w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500
                      ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Enter your email"
                    value={signupForm.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    className={`w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500
                      ${errors.password ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Create a password"
                    value={signupForm.password}
                    onChange={handleInputChange}
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className={`w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500
                      ${errors.confirmPassword ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Confirm your password"
                    value={signupForm.confirmPassword}
                    onChange={handleInputChange}
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

  // Placeholder Dashboard Components
  const AdminDashboard = () => <div>Admin Dashboard</div>;
  const TeacherDashboard = () => <div>Teacher Dashboard</div>;
  const ParentDashboard = () => <div>Parent Dashboard</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-purple-600" />
              <span 
                className="ml-2 text-xl font-bold text-gray-800 cursor-pointer"
                onClick={() => setCurrentPage('home')}
              >
                School Management
              </span>
            </div>
            <div className="flex items-center space-x-4">
              {!user ? (
                <>
                  <Button 
                    variant="outline" 
                    onClick={() => setCurrentPage('login')}
                  >
                    Login
                  </Button>
                  <Button 
                    onClick={() => setCurrentPage('signup')}
                  >
                    Sign Up
                  </Button>
                </>
              ) : (
                <>
                  <span className="text-sm text-gray-700">{user.email}</span>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setUser(null);
                      setCurrentPage('home');
                    }}
                  >
                    Logout
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {currentPage === 'home' && <LandingPage />}
        {currentPage === 'login' && <LoginPage />}
        {currentPage === 'signup' && <SignUpPage />}
        {currentPage === 'admin-dashboard' && user?.role === 'admin' && <AdminDashboard />}
      </main>
    </div>
  );
};

export default App;