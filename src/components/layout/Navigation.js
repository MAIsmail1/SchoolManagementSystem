// src/components/layout/Navigation.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { Button } from '../common/button';
import { useAuth } from '../../contexts/AuthContext';

const Navigation = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handlePageChange = (path, page) => {
    navigate(path);
    window.dispatchEvent(new CustomEvent('pageChange', { detail: page }));
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-purple-600" />
            <Link 
              to="/" 
              className="ml-2 text-xl font-bold text-gray-800 cursor-pointer"
              onClick={() => handlePageChange('/', 'home')}
            >
              Taleem
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-sm text-gray-700">{user.email}</span>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    logout();
                    handlePageChange('/', 'home');
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  onClick={() => handlePageChange('/login', 'login')}
                >
                  Login
                </Button>
                <Button
                  onClick={() => handlePageChange('/signup', 'signup')}
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;