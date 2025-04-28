import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  UserRound, 
  BookOpen, 
  Users2, 
  ClipboardList, 
  Calendar, 
  Shield, 
  BarChart2 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/common/card';
import { Button } from '../components/common/button';

const ServicesPage = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/packages');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const services = [
    {
      icon: <UserRound className="w-6 h-6 text-green-700" />,
      title: "Student Management",
      description: "Comprehensive student information system including enrollment, attendance, and performance tracking.",
      features: ["Digital student profiles", "Attendance tracking", "Grade management", "Behavior monitoring"]
    },
    {
      icon: <BookOpen className="w-6 h-6 text-green-700" />,
      title: "Academic Management",
      description: "Course planning, curriculum management, and assessment tools for educators.",
      features: ["Curriculum planning", "Assignment management", "Online assessments", "Resource library"]
    },
    {
      icon: <Users2 className="w-6 h-6 text-green-700" />,
      title: "Parent Portal",
      description: "Direct communication channel between parents and teachers with real-time updates.",
      features: ["Progress tracking", "Direct messaging", "Event calendar", "Payment management"]
    }
  ];

  const additionalFeatures = [
    {
      icon: <ClipboardList className="w-5 h-5 text-green-700" />,
      title: "Attendance System",
      description: "Automated attendance tracking with detailed reports."
    },
    {
      icon: <Calendar className="w-5 h-5 text-green-700" />,
      title: "Scheduling",
      description: "Efficient timetable management system."
    },
    {
      icon: <Shield className="w-5 h-5 text-green-700" />,
      title: "Security",
      description: "Advanced data protection protocols."
    },
    {
      icon: <BarChart2 className="w-5 h-5 text-green-700" />,
      title: "Analytics",
      description: "Comprehensive reporting and insights."
    }
  ];

  return (
    <div>
    {/* Hero Section */}
<div className="bg-gradient-to-r from-green-950 to-black text-white py-16">
  <div className="max-w-6xl mx-auto px-4">
    <h1 className="text-4xl font-bold text-center mb-6 animate-fade-in">Our Services</h1>
    <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto animate-fade-in delay-200">
      Comprehensive educational management solutions designed to transform your institution
    </p>
  </div>
</div>

{/* Main Services Section */}
<div className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <Card 
          key={index} 
          className={`hover-lift transition-all duration-300 animate-fade-in delay-${(index + 1) * 100}`}
        >
          <CardHeader>
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-green-50 rounded-lg">
                {service.icon}
              </div>
              <CardTitle>{service.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</div>

{/* Additional Features Section */}
<div className="bg-gray-50 py-16">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
      Additional Features
    </h2>
    <div className="grid md:grid-cols-4 gap-6">
      {additionalFeatures.map((feature, index) => (
        <div 
          key={index} 
          className={`bg-white p-6 rounded-lg shadow-md hover-lift transition-all duration-300 animate-fade-in delay-${(index + 1) * 100}`}
        >
          <div className="p-2 bg-green-50 rounded-lg w-fit mb-4">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>

{/* CTA Section */}
<div className="bg-gradient-to-r from-green-950 to-black text-white py-16">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-6 animate-fade-in">Ready to Transform Your Institution?</h2>
    <p className="text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in delay-200">
      Join thousands of educational institutions that trust Taleem for their management needs.
    </p>
    <Button 
      onClick={handleNavigation}
      className="bg-green-700 hover:bg-green-800 text-white animate-fade-in delay-300 hover-lift"
    >
      Get Started Today
    </Button>
  </div>
</div>
    </div>
  );
};

export default ServicesPage;