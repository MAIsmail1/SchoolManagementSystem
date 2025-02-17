// src/components/layout/Navigation.js
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';
import { Button } from '../common/button';
import { useAuth } from '../../contexts/AuthContext';

const Navigation = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePageChange = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-green-800 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <GraduationCap className="h-8 w-8 text-green-700 ml-3" />
            <Link 
              to="/" 
              className="ml-2 text-xl font-bold text-white hover:text-green-600 transition-colors"
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
                    navigate('/');
                  }}
                  className="text-white border-white hover:bg-green-800 hover:border-green-800 hover:text-white"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button 
                variant="outline" 
                onClick={() => navigate('/login')}
                className={`text-white border-white transition-colors ${
                  isActivePage('/login')
                    ? 'bg-green-800 border-green-800'
                    : 'hover:bg-green-800 hover:border-green-800 hover:text-white'
                }`}
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Burger Menu Sidebar */}
      <div className={`fixed top-16 left-0 h-full w-64 bg-black transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}>
        <div className="p-4 space-y-4">
          <Link 
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className={`block py-2 transition-colors ${
              isActivePage('/about')
                ? 'text-green-500'
                : 'text-white hover:text-green-500'
            }`}
          >
            About Us
          </Link>
          <Link 
            to="/services"
            onClick={() => setIsMenuOpen(false)}
            className={`block py-2 transition-colors ${
              isActivePage('/services')
                ? 'text-green-500'
                : 'text-white hover:text-green-500'
            }`}
          >
            Services
          </Link>
          <Link 
            to="/packages"
            onClick={() => setIsMenuOpen(false)}
            className={`block py-2 transition-colors ${
              isActivePage('/packages')
                ? 'text-green-500'
                : 'text-white hover:text-green-500'
            }`}
          >
            Packages
          </Link>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navigation;