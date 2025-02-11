import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { GraduationCap } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="px-6 py-16 bg-gradient-to-r from-purple-100 to-blue-100">
        <div className="max-w-6xl mx-auto text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-6 text-purple-600" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to School Management System
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Empowering education through seamless management and communication
          </p>
          <div className="flex gap-4 justify-center">
            <Button>Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;