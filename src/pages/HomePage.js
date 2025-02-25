import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  BookOpen, 
  BarChart2, 
  GraduationCap, 
  Shield, 
  MessageCircle 
} from 'lucide-react';
import { Button } from '../components/common/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/common/card';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const features = [
    {
      icon: <Users className="w-6 h-6 text-green-700" />,
      title: "Student Management",
      description: "Comprehensive tracking of student progress, attendance, and performance."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-green-700" />,
      title: "Academic Insights",
      description: "Detailed analytics and reporting to support educational strategies."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-green-700" />,
      title: "Communication Hub",
      description: "Seamless communication between teachers, students, and parents."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-green-700" />,
      title: "Secure Platform",
      description: "Enterprise-grade security to protect sensitive educational data."
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-green-700" />,
      title: "Data-Driven Insights",
      description: "Advanced analytics to track and improve institutional performance."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-green-700" />,
      title: "Comprehensive Solution",
      description: "All-in-one platform covering every aspect of educational management."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-950 to-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <GraduationCap 
            className="w-16 h-16 mx-auto mb-6 text-green-500 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.1s', animationDuration: '0.3s' }}
          />
          <h1 
            className="text-4xl font-bold mb-4 text-white opacity-0 animate-fade-in"
            style={{ animationDelay: '0.2s', animationDuration: '0.3s' }}
          >
            Ta'leem: Transforming Education Management
          </h1>
          <p 
            className="text-xl text-gray-300 mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.3s', animationDuration: '0.3s' }}
          >
            Empowering institutions with intelligent, integrated educational solutions
          </p>
          <div 
            className="flex gap-4 justify-center opacity-0 animate-fade-in"
            style={{ animationDelay: '0.4s', animationDuration: '0.3s' }}
          >
            <Button 
              className="bg-green-700 hover:bg-green-800 text-white"
              onClick={() => navigate('/packages')}
            >
              Get Started
            </Button>
            <Button 
              variant="outline"
              className="border-green-700 text-green-700 hover:bg-green-950 hover:text-white"
              onClick={() => navigate('/about')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationDuration: '0.3s' }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.6s', animationDuration: '0.3s' }}>
            Our Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.7 + index * 0.1}s`, animationDuration: '0.3s' }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-green-50 rounded-lg">
                      {feature.icon}
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

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationDuration: '0.3s' }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 opacity-0 animate-fade-in"
            style={{ animationDelay: '1.1s', animationDuration: '0.3s' }}>
            Why Choose Taleem
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${1.2 + index * 0.1}s`, animationDuration: '0.3s' }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-green-50 rounded-lg">
                      {benefit.icon}
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-950 to-black text-white py-16 opacity-0 animate-fade-in" 
        style={{ animationDelay: '1.5s', animationDuration: '0.3s' }}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: '1.6s', animationDuration: '0.3s' }}>
            Ready to Revolutionize Your Institution?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: '1.7s', animationDuration: '0.3s' }}>
            Join hundreds of educational institutions transforming their management with Taleem
          </p>
          <Button className="bg-green-700 hover:bg-green-800 text-white opacity-0 animate-fade-in"
            style={{ animationDelay: '1.8s', animationDuration: '0.3s' }}
            onClick={() => navigate('/contact')}>
            Get Started Now
          </Button>
        </div>
      </div>

      {/* Global Keyframe Animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
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

export default HomePage;
