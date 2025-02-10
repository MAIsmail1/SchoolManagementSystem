import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import AppContent from './components/AppContent';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
          <Navigation />
          <AppContent />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;