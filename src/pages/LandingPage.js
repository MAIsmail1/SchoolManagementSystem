// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { Button } from '../components/common/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/common/card';

const LandingPage = () => {
  const features = [
    {
      title: 'Student Management',
      description: 'Efficiently manage enrollments and track student progress.',
      icon: GraduationCap
    },
    {
      title: 'Teacher Portal',
      description: 'Easy access to class schedules and student information.',
      icon: GraduationCap
    },
    {
      title: 'Parent Access',
      description: 'Monitor your child\'s progress and communicate with teachers.',
      icon: GraduationCap
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div 
        className="px-6 py-16 bg-gradient-to-r from-green-950 to-black text-white"
        style={{
          animation: 'fadeIn 0.5s ease-out forwards',
          opacity: 0
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <GraduationCap 
            style={{
              animation: 'fadeIn 0.5s ease-out forwards 0.2s',
              opacity: 0
            }}
            className="w-16 h-16 mx-auto mb-6 text-green-500"
          />
          <h1 
            style={{
              animation: 'fadeIn 0.5s ease-out forwards 0.4s',
              opacity: 0
            }}
            className="text-4xl font-bold mb-4"
          >
            Welcome to School Management System
          </h1>
          <p 
            style={{
              animation: 'fadeIn 0.5s ease-out forwards 0.6s',
              opacity: 0
            }}
            className="text-xl text-gray-300 mb-8"
          >
            Empowering education through seamless management and communication
          </p>
          <div 
            style={{
              animation: 'fadeIn 0.5s ease-out forwards 0.8s',
              opacity: 0
            }}
            className="flex gap-4 justify-center"
          >
            <Button 
              className="bg-green-700 hover:bg-green-800 text-white"
            >
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button 
              variant="outline"
              className="border-green-700 text-green-700 hover:bg-green-950 hover:text-white"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div 
        className="py-16 px-6"
        style={{
          animation: 'fadeIn 0.5s ease-out forwards 1s',
          opacity: 0
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            style={{
              animation: 'fadeIn 0.5s ease-out forwards 1.2s',
              opacity: 0
            }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Our Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                style={{
                  animation: `fadeIn 0.5s ease-out forwards ${1.4 + index * 0.2}s`,
                  opacity: 0
                }}
                className="hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-green-50 rounded-lg">
                      <feature.icon className="w-6 h-6 text-green-700" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Add global style for fadeIn animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;