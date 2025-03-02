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

  const handleLogoClick = (event) => {
    if (location.pathname === '/') {
      event.preventDefault();
      window.location.reload();
    } else {
      navigate('/');
    }
  };

  const handlePageChange = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            {/* Burger Menu Button - Only visible on mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-green-800 transition-colors mr-3"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            
            <GraduationCap className="h-8 w-8 text-green-700 mr-2" />
            <Link 
              to="/" 
              onClick={handleLogoClick}
              className="text-xl font-bold text-white hover:text-green-600 transition-colors"
            >
              Ta'leem
            </Link>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/" 
              className={`px-3 py-2 transition-colors ${
                isActivePage('/')
                  ? 'text-green-500'
                  : 'text-white hover:text-green-500'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about"
              className={`px-3 py-2 transition-colors ${
                isActivePage('/about')
                  ? 'text-green-500'
                  : 'text-white hover:text-green-500'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/services"
              className={`px-3 py-2 transition-colors ${
                isActivePage('/services')
                  ? 'text-green-500'
                  : 'text-white hover:text-green-500'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/packages"
              className={`px-3 py-2 transition-colors ${
                isActivePage('/packages')
                  ? 'text-green-500'
                  : 'text-white hover:text-green-500'
              }`}
            >
              Packages
            </Link>
            
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

      {/* Mobile Burger Menu Sidebar */}
      <div className={`fixed top-16 left-0 h-full w-64 bg-black transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}>
        <div className="p-4 space-y-4">
          <Link 
            to="/" 
            onClick={() => setIsMenuOpen(false)}
            className={`block py-2 transition-colors ${
              isActivePage('/')
                ? 'text-green-500'
                : 'text-white hover:text-green-500'
            }`}
          >
            Home
          </Link>
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
          
          {/* Mobile-specific login/logout */}
          <div className="mt-4">
            {user ? (
              <>
                <span className="block py-2 text-gray-300">{user.email}</span>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    logout();
                    navigate('/');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-white border-white hover:bg-green-800 hover:border-green-800 hover:text-white"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button 
                variant="outline" 
                onClick={() => {
                  navigate('/login');
                  setIsMenuOpen(false);
                }}
                className={`w-full text-white border-white transition-colors ${
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

      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navigation;