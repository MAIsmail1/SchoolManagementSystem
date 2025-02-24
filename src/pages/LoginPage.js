import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/common/card';
import { Button } from '../components/common/button';
import { GraduationCap, User, Lock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Navigation from '../components/layout/Navigation'; // Import the Navigation component

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginType, setLoginType] = useState('admin');

  useEffect(() => {
    if (isAuthenticated()) {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user.role === 'admin') {
        navigate('/admin-dashboard');
      } else if (user.role === 'teacher') {
        navigate('/teacher-dashboard');
      }
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      const user = await login(email, password, loginType);
      if (user.role === 'admin') {
        navigate('/admin-dashboard');
      } else if (user.role === 'teacher') {
        navigate('/teacher-dashboard');
      }
    } catch (error) {
      setError('Invalid credentials. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden flex flex-col">
      <Navigation />
      <div className="flex-grow bg-gradient-to-r from-green-950 to-black flex items-center justify-center overflow-auto">
        <div className="w-full max-w-md px-4">
          <div className="text-center mb-8 opacity-0 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-700/10 mb-4 mx-auto">
              <GraduationCap className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-sm sm:text-base text-gray-400">Sign in to your account</p>
          </div>

          <Card className="w-full bg-white/95 backdrop-blur-sm shadow-2xl border border-green-800/20 opacity-0 animate-fade-in delay-200">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-gray-800 text-center">Login</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md border border-red-200">
                    {error}
                  </div>
                )}
                
                <div className="mb-4 flex justify-center space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="loginType"
                      value="admin"
                      checked={loginType === 'admin'}
                      onChange={() => setLoginType('admin')}
                    />
                    <span className="ml-2 text-sm">Admin</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="loginType"
                      value="teacher"
                      checked={loginType === 'teacher'}
                      onChange={() => setLoginType('teacher')}
                    />
                    <span className="ml-2 text-sm">Teacher</span>
                  </label>
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-8 sm:pl-10 p-2 sm:p-3 text-sm sm:text-base border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                      placeholder={loginType === 'admin' ? 'admin@taleem.com' : 'teacher@demo.com'}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="password" className="block text-xs sm:text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-8 sm:pl-10 p-2 sm:p-3 text-sm sm:text-base border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-green-700 hover:bg-green-800 text-white py-2 sm:py-3 text-sm sm:text-base rounded-md transition-colors"
                    disabled={loading}
                  >
                    {loading ? 'Signing in...' : 'Sign In'}
                  </Button>
                </div>

                <div className="mt-4 text-center">
                  <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                    <div>Demo Credentials:</div>
                    <div className="font-medium">Admin: admin@taleem.com / admin123</div>
                    <div className="font-medium">Teacher: teacher@demo.com / teacher123</div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;