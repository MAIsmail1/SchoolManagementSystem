import React from 'react';
import { Button } from '../components/ui/button';
import { useAuth } from '../contexts/AuthContext';
import { useNavigation } from '../contexts/NavigationContext';

const Navigation = () => {
  const { user, logout } = useAuth();
  const { navigate } = useNavigation();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <button 
              onClick={() => navigate('home')}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-700"
            >
              Home
            </button>
            {user?.role === 'admin' && (
              <button 
                onClick={() => navigate('admin')}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                Admin
              </button>
            )}
            {user?.role === 'teacher' && (
              <button 
                onClick={() => navigate('teacher')}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                Teacher
              </button>
            )}
            {user?.role === 'parent' && (
              <button 
                onClick={() => navigate('parent')}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                Parent
              </button>
            )}
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-sm text-gray-700">{user.email}</span>
                <Button variant="outline" onClick={logout}>Logout</Button>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={() => navigate('login')}>Login</Button>
                <Button onClick={() => navigate('signup')}>Sign Up</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;