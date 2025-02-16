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
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-green-700" />
            <Link 
              to="/" 
              className="ml-2 text-xl font-bold text-white hover:text-green-600 transition-colors"
              onClick={() => handlePageChange('/', 'home')}
            >
              Ta'leem
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-sm text-gray-300">{user.email}</span>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    logout();
                    handlePageChange('/', 'home');
                  }}
                  className="text-white border-white hover:bg-green-800 hover:border-green-800 hover:text-white"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button 
                variant="outline" 
                onClick={() => handlePageChange('/login', 'login')}
                className="text-white border-white hover:bg-green-800 hover:border-green-800 hover:text-white"
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;