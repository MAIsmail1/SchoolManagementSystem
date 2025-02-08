import React from 'react';
import { NavigationProvider } from './contexts/NavigationContext';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import AppContent from './components/AppContent';

const App = () => {
  return (
    <NavigationProvider>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <main>
            <AppContent />
          </main>
        </div>
      </AuthProvider>
    </NavigationProvider>
  );
};

export default App;