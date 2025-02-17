// src/pages/AboutPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Target, Award, Building2, BookOpen, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/common/card';
import { Button } from '../components/common/button';

const AboutPage = () => {
  const navigate = useNavigate();
  
  // const stats = [
  //   { label: 'Schools Using Taleem', value: '500+' },
  //   { label: 'Active Students', value: '100K+' },
  //   { label: 'Countries', value: '25+' },
  //   { label: 'Years Experience', value: '10+' }
  // ];

  const values = [
    {
      icon: <Users className="w-6 h-6 text-green-700" />,
      title: 'Community Focused',
      description: 'Building strong relationships between students, teachers, and parents.'
    },
    {
      icon: <Target className="w-6 h-6 text-green-700" />,
      title: 'Goal Oriented',
      description: 'Helping institutions achieve their educational objectives efficiently.'
    },
    {
      icon: <Award className="w-6 h-6 text-green-700" />,
      title: 'Excellence',
      description: 'Committed to providing the highest quality educational management solutions.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-950 to-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6 animate-fade-in">About Ta'leem</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto animate-fade-in delay-200">
            Revolutionizing educational management through innovative technology and comprehensive solutions.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-duration-300 animate-fade-in">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Building2 className="w-5 h-5 text-green-700" />
                  </div>
                  <CardTitle>Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To empower educational institutions with cutting-edge technology that simplifies administration
                  and enhances the learning experience. We strive to create a seamless connection between
                  administrators, teachers, and parents, fostering a collaborative educational environment.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-duration-300 animate-fade-in delay-200">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <BookOpen className="w-5 h-5 text-green-700" />
                  </div>
                  <CardTitle>Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To be the global leader in educational management solutions, pioneering innovative
                  approaches that transform how educational institutions operate. We envision a future
                  where technology seamlessly integrates with education to create better learning outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-fade-in">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-lg transition-duration-300 animate-fade-in delay-${(index + 1) * 100}`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-green-50 rounded-lg">
                      {value.icon}
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-green-950 to-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">Join Our Journey</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in delay-200">
            Be part of the educational revolution. Partner with Taleem to transform
            your institution's management and enhance the learning experience.
          </p>
          <Button 
            onClick={() => navigate('/contact')}
            className="inline-flex items-center space-x-2 bg-green-700 hover:bg-green-800 transition-colors px-6 py-3 rounded-lg animate-fade-in delay-300 hover-lift"
          >
            <GraduationCap className="w-5 h-5" />
            <span>Contact Us Today</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;