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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="px-6 py-16 bg-gradient-to-r from-purple-100 to-blue-100">
        <div className="max-w-6xl mx-auto text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-6 text-purple-600 animate-fade-in" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
            Welcome to School Management System
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in delay-200">
            Empowering education through seamless management and communication
          </p>
          <div className="flex gap-4 justify-center animate-fade-in delay-300">
            <Button asChild className="hover-lift">
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button variant="outline" className="hover-lift">Learn More</Button>
          </div>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-fade-in">
            Our Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`hover-lift transition-all duration-300 animate-fade-in delay-${(index + 1) * 100}`}
              >
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;