// src/pages/SignupPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { Button } from './components/common/Button';
import { Input } from './components/common/Input';
import { Card, CardContent, CardHeader, CardTitle } from './components/common/Card';
import { useAuth } from '../contexts/AuthContext';

const SignupPage = () => {
  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'parent' // Default role
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();

  const validateForm = () => {
    const newErrors = {};
    
    if (!signupForm.name) newErrors.name = 'Name is required';
    
    if (!signupForm.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(signupForm.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!signupForm.password) {
      newErrors.password = 'Password is required';
    } else if (signupForm.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (signupForm.password !== signupForm.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (validateForm()) {
      try {
        await register(signupForm);
        navigate('/login');
      } catch (error) {
        setErrors({ submit: error.message });
      }
      
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[85vh] px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <GraduationCap className="h-12 w-12 text-purple-600" />
          </div>
          <CardTitle className="text-center">Create Account</CardTitle>
          <p className="text-gray-600 text-center">
            Join us to start managing your school experience
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSignup}>
            <div className="space-y-4">
              {errors.submit && (
                <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded">
                  {errors.submit}
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={signupForm.name}
                  onChange={handleInputChange}
                  error={errors.name}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={signupForm.email}
                  onChange={handleInputChange}
                  error={errors.email}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  value={signupForm.password}
                  onChange={handleInputChange}
                  error={errors.password}
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={signupForm.confirmPassword}
                  onChange={handleInputChange}
                  error={errors.confirmPassword}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full py-3"
                disabled={loading}
              >
                {loading ? 'Signing Up...' : 'Sign Up'}
              </Button>
            </div>
          </form>
          
          <div className="text-center">
            <p className="text-gray-600">Already have an account?</p>
            <Link 
              to="/login" 
              className="text-purple-600 hover:text-purple-700 font-medium mt-1"
            >
              Login to your account
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;