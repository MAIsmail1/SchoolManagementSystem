// src/components/sections/BenefitsSection.jsx
import React from 'react';
import { MousePointerClick, Shield, HeadphonesIcon, RefreshCw } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <div className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-lg hover:scale-105 transform-gpu transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-green-100">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors duration-300 group-hover:rotate-12 transform">
              <MousePointerClick className="w-6 h-6 text-green-700 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-green-700 transition-colors duration-300">Easy to Use</h3>
            <p className="text-gray-600">Intuitive interface for all users</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg hover:scale-105 transform-gpu transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-green-100">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors duration-300 group-hover:rotate-12 transform">
              <Shield className="w-6 h-6 text-green-700 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-green-700 transition-colors duration-300">Secure</h3>
            <p className="text-gray-600">Data protection is our priority</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg hover:scale-105 transform-gpu transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-green-100">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors duration-300 group-hover:rotate-12 transform">
              <HeadphonesIcon className="w-6 h-6 text-green-700 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-green-700 transition-colors duration-300">24/7 Support</h3>
            <p className="text-gray-600">Always here to help you</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg hover:scale-105 transform-gpu transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-green-100">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors duration-300 group-hover:rotate-12 transform">
              <RefreshCw className="w-6 h-6 text-green-700 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-green-700 transition-colors duration-300">Regular Updates</h3>
            <p className="text-gray-600">Continuous improvements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;