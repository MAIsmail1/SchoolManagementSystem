// src/pages/PackageContactPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/common/card';
import { Button } from '../components/common/button';
import { ArrowLeft, Send } from 'lucide-react';

const PackageContactPage = () => {
  const { packageId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const packageDetails = {
    basic: {
      name: 'Basic Package',
      price: '£99',
      color: 'green'
    },
    professional: {
      name: 'Professional Package',
      price: '£150',
      color: 'green'
    },
    enterprise: {
      name: 'Enterprise Package',
      price: 'Custom',
      color: 'green'
    }
  };

  const currentPackage = packageDetails[packageId];

  useEffect(() => {
    if (!currentPackage) {
      navigate('/packages');
    }
  }, [currentPackage, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        navigate('/packages');
      }, 2000);
    }, 1500);
  };

  if (!currentPackage) return null;

  return (
    <div className="bg-gradient-to-r from-green-950 to-black min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={() => navigate('/packages')}
          className="flex items-center text-white mb-6 hover:text-green-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Packages
        </button>

        <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Contact Us About {currentPackage.name}
              <div className="text-lg font-normal text-gray-600 mt-1">
                {currentPackage.price} per month
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="institution" className="block text-sm font-medium mb-2 text-gray-700">
                    Institution Name
                  </label>
                  <input
                    id="institution"
                    name="institution"
                    type="text"
                    required
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={formData.institution}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-md">
                  Thank you for your interest! We'll be in touch shortly.
                </div>
              )}

              <Button
                type="submit"
                disabled={status !== ''}
                className="w-full bg-green-700 hover:bg-green-800 text-white flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    Send Inquiry
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PackageContactPage;