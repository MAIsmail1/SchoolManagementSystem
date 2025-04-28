import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useMasjid } from '../../contexts/MasjidContext';
import { useAuth } from '../../contexts/AuthContext';
import { GraduationCap, User, Lock, ArrowLeft } from 'lucide-react';

const MasjidLogin = () => {
  const navigate = useNavigate();
  const { currentMasjid, masjidTheme, loading } = useMasjid();
  const { login, isAuthenticated } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('admin');
  const [error, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user.role === 'admin') {
        navigate('../admin-dashboard');
      } else if (user.role === 'teacher') {
        navigate('../teacher-dashboard');
      } else if (user.role === 'parent') {
        navigate('../parent-dashboard');
      }
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoggingIn(true);

    try {
      const user = await login(email, password, loginType);
      if (user.role === 'admin') {
        navigate('../admin-dashboard');
      } else if (user.role === 'teacher') {
        navigate('../teacher-dashboard');
      } else if (user.role === 'parent') {
        navigate('../parent-dashboard');
      }
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (!currentMasjid) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Masjid Not Found</h1>
          <p className="text-gray-600 mb-6">
            The masjid portal you're looking for doesn't exist or isn't available.
          </p>
          <Link 
            to="/"
            className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  // Get theme colors from the masjid context
  const headerBgClass = masjidTheme.headerBg || 'from-green-950 to-black';
  const primaryButtonClass = 'bg-green-600 hover:bg-green-700';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
      {/* Header */}
      <header className={`bg-gradient-to-r ${headerBgClass} text-white`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to=".." className="flex items-center text-white hover:text-gray-200 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span>Back to {currentMasjid.name}</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <GraduationCap className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{currentMasjid.name}</h1>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden animate-fade-in delay-200">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Login</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md border border-red-200">
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
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="loginType"
                      value="parent"
                      checked={loginType === 'parent'}
                      onChange={() => setLoginType('parent')}
                    />
                    <span className="ml-2 text-sm">Parent</span>
                  </label>
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                      className="block w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                      placeholder={
                        loginType === 'admin' ? 'admin@taleem.com' : 
                        loginType === 'teacher' ? 'teacher@demo.com' : 
                        'parent@demo.com'
                      }
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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
                      className="block w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="text-green-600 hover:text-green-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className={`w-full ${primaryButtonClass} text-white py-3 rounded-md font-medium transition-colors ${isLoggingIn ? 'opacity-75 cursor-not-allowed' : ''}`}
                    disabled={isLoggingIn}
                  >
                    {isLoggingIn ? 'Signing in...' : 'Sign In'}
                  </button>
                </div>

                <div className="mt-4 text-center">
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Demo Credentials:</div>
                    <div className="font-medium">Admin: admin@taleem.com / admin123</div>
                    <div className="font-medium">Teacher: teacher@demo.com / teacher123</div>
                    <div className="font-medium">Parent: parent@demo.com / parent123</div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          <div className="text-center mt-6 text-sm text-gray-600">
            <p>
              Don't have an account?{' '}
              <a href="#" className="text-green-600 hover:text-green-500 font-medium">
                Contact the masjid administration
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} {currentMasjid.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MasjidLogin;