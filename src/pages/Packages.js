// src/pages/PackagesPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Star, Shield, Clock, Users } from 'lucide-react';
import { Button } from '../components/common/button';

const PackagesPage = () => {
  const navigate = useNavigate();
  
  const packages = [
    {
      id: 'basic',
      name: "Basic",
      price: "£99",
      period: "per month",
      description: "Perfect for small institutions just getting started",
      features: [
        "Up to 250 students",
        "Basic attendance tracking",
        "Simple grade book",
        "Email support",
        "Basic reporting",
        "Parent portal access",
        "Standard updates"
      ],
      highlighted: false
    },
    {
      id: 'professional',
      name: "Professional",
      price: "£150",
      period: "per month",
      description: "Ideal for growing institutions with advanced needs",
      features: [
        "Up to 500 students",
        "Advanced attendance system",
        "Complete grade management",
        "Priority email & phone support",
        "Advanced reporting & analytics",
        "Parent portal access",
        "Custom branding",
        "API access",
        "Priority updates"
      ],
      highlighted: true
    },
    {
      id: 'enterprise',
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "Tailored solutions for large institutions",
      features: [
        "Unlimited students",
        "Full feature access",
        "24/7 premium support",
        "Custom integrations",
        "Dedicated account manager",
        "On-premise deployment option",
        "Custom development",
        "SLA guarantee",
        "Custom reporting"
      ],
      highlighted: false
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-green-700" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee"
    },
    {
      icon: <Clock className="w-6 h-6 text-green-700" />,
      title: "Quick Setup",
      description: "Get started in minutes with our guided setup process"
    },
    {
      icon: <Users className="w-6 h-6 text-green-700" />,
      title: "Dedicated Support",
      description: "Expert support team available to help you succeed"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-950 to-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6 animate-fade-in">Flexible Pricing Plans</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto animate-fade-in delay-200">
            Choose the perfect plan for your institution. All plans include our core features with different scales of functionality.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl animate-fade-in delay-${(index + 1) * 100} ${
                  pkg.highlighted 
                    ? 'border-2 border-green-500 shadow-lg' 
                    : 'border border-gray-200'
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-lg">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  </div>
                )}
                <div className={`p-6 ${pkg.highlighted ? 'bg-green-50' : 'bg-white'}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4 min-h-[4rem]">{pkg.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600">/{pkg.period}</span>
                  </div>
                  <Button 
                    onClick={() => navigate(`/package-contact/${pkg.id}`)}
                    className={`w-full hover-lift ${
                      pkg.highlighted 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'bg-gray-800 hover:bg-gray-900'
                    } text-white`}
                  >
                    {pkg.id === 'enterprise' ? 'Contact Us' : 'Get Started'}
                  </Button>
                </div>
                <div className="p-6 bg-white border-t border-gray-100">
                  <p className="text-sm text-gray-600 mb-4">Features include:</p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-fade-in">Why Choose Our Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in delay-${(index + 1) * 100}`}
              >
                <div className="p-2 bg-green-50 rounded-lg w-fit mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-950 to-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">Need a Custom Solution?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in delay-200">
            Contact our team for a tailored package that meets your specific requirements.
          </p>
          <Button 
            onClick={() => navigate('/package-contact/enterprise')}
            className="bg-green-700 hover:bg-green-800 text-white animate-fade-in delay-300 hover-lift"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;