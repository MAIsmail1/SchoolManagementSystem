// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '../contexts/AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, loading } = useAuth();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await login(formData.email, formData.password);
      navigate('/admin-dashboard');
    } catch (error) {
      setError('Invalid admin credentials. Only admin can access the system.');
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
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
                {error}
              </div>
            )}
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter admin email"
                autoComplete="email"
                required
              />
            </div>
            <div>
              <label 
                htmlFor="password" 
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
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
              className="w-full" 
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;