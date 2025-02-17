// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/common/card';
import { Button } from '../components/common/button';
import { GraduationCap, User, Lock } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate login check
    setTimeout(() => {
      if (email === 'admin@taleem.com' && password === 'admin123') {
        navigate('/admin-dashboard');
      } else {
        setError('Invalid credentials. Only admin can access the system.');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-950 to-black py-12 px-4">
      <div className="max-w-md mx-auto">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-700/10 mb-4">
            <GraduationCap className="w-8 h-8 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to your admin account</p>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border border-green-800/20">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800 text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md border border-red-200">
                  {error}
                </div>
              )}
              
              <div className="space-y-1">
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                    placeholder="admin@taleem.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label 
                  htmlFor="password" 
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-md transition-colors"
                  disabled={loading}
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </Button>
              </div>

              <div className="mt-4 text-center">
                <div className="text-sm text-gray-600 space-y-1">
                  <div>Demo Admin Credentials:</div>
                  <div className="font-medium">Email: admin@taleem.com</div>
                  <div className="font-medium">Password: admin123</div>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;