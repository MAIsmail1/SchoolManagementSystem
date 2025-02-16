// src/components/sections/HeroSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { Button } from '../common/button';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 py-16 bg-gradient-to-r from-green-950 to-black">
      <div className="max-w-6xl mx-auto text-center">
        <GraduationCap className="w-16 h-16 mx-auto mb-6 text-green-500" />
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to Ta'leem
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Empowering education through seamless management and communication
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            onClick={() => navigate('/login')}
            className="bg-green-700 hover:bg-green-800 text-white"
          >
            Get Started
          </Button>
          <Button 
            variant="outline"
            className="border-green-500 text-green-500 hover:bg-green-800 hover:text-white hover:border-green-800"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;