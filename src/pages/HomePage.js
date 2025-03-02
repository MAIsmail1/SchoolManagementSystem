import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  BookOpen, 
  BarChart2, 
  GraduationCap, 
  Shield, 
  MessageCircle,
  ChevronRight,
  Target
} from 'lucide-react';
import { Button } from '../components/common/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/common/card';
import BenefitsSection1 from '../components/sections/BenefitsSection1';
import HeroSlideshow from '../components/sections/HeroSlideshow1';
import useScrollAnimation from '../hooks/useScrollAnimation';

const HomePage = () => {
  const navigate = useNavigate();
  const { getAnimationClasses } = useScrollAnimation();

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
    <div className="bg-white">
      {/* Hero Section */}
      <div 
        id="hero-section"
        className={`relative -mt-16 scroll-animate transition-all duration-700 ease-out ${getAnimationClasses('hero-section')}`}
      >
        <HeroSlideshow />
        
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 bg-black bg-opacity-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-700 rounded-xl p-1 inline-block mb-4">
              <div className="flex items-center text-white text-sm px-3 py-1">
                <Target className="w-4 h-4 mr-2" />
                Empowering Islamic Educational Institutions
              </div>
            </div>
            <h1 
              className="text-4xl font-bold mb-4 text-white"
            >
              Ta'leem: Transforming Education Management
            </h1>
            <p 
              className="text-xl text-white max-w-2xl mx-auto mb-8"
            >
              An intelligent, integrated solution designed to streamline administrative processes, enhance communication, and drive educational excellence.
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                className="bg-green-500 text-black hover:bg-green-600 px-8 py-3 rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex items-center"
                onClick={() => navigate('/packages')}
              >
                Get Started
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                className="bg-green text-green-900 hover:bg-green-50 px-8 py-3 rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex items-center"
                onClick={() => navigate('/about')}
              >
                Learn More
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the page remains the same */}
      {/* Features Section */}
      <div 
        id="features-section"
        className={`py-16 bg-white scroll-animate transition-all duration-700 ease-out ${getAnimationClasses('features-section')}`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
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
      <div 
        id="benefits-section"
        className={`bg-gray-50 py-16 scroll-animate transition-all duration-700 ease-out ${getAnimationClasses('benefits-section')}`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Taleem
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
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

      {/* Comprehensive Benefits Section */}
      <div 
        id="comprehensive-benefits-section"
        className={`scroll-animate transition-all duration-700 ease-out ${getAnimationClasses('comprehensive-benefits-section')}`}
      >
        <BenefitsSection1 />
      </div>

      {/* CTA Section */}
      <div 
        id="cta-section"
        className={`bg-gradient-to-r from-green-950 to-black text-white py-16 scroll-animate transition-all duration-700 ease-out ${getAnimationClasses('cta-section')}`}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Revolutionize Your Institution?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join hundreds of educational institutions transforming their management with Taleem
          </p>
          <Button 
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full shadow-md"
            onClick={() => navigate('/contact')}
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;