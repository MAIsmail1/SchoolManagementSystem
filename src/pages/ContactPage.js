// src/pages/ContactPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/common/card';
import { Button } from '../components/common/button';
import { Send, ArrowLeft } from 'lucide-react';

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Initialize animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

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

    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-r from-green-950 to-black min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-white mb-6 hover:text-green-400 transition-colors animate-fade-in"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>

        <div className="animate-on-scroll opacity-0">
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Contact Taleem
                <div className="text-base font-normal text-gray-600 mt-2">
                  Have a question or want to learn more? We'd love to hear from you.
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="animate-on-scroll opacity-0" style={{ animationDelay: '100ms' }}>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="animate-on-scroll opacity-0" style={{ animationDelay: '300ms' }}>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
                      Phone Number (Optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="animate-on-scroll opacity-0" style={{ animationDelay: '400ms' }}>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="animate-on-scroll opacity-0" style={{ animationDelay: '500ms' }}>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {status === 'success' && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-md animate-fade-in">
                    Thank you for your message! We'll be in touch shortly.
                  </div>
                )}

                <div className="animate-on-scroll opacity-0" style={{ animationDelay: '600ms' }}>
                  <Button
                    type="submit"
                    disabled={status !== ''}
                    className="w-full bg-green-700 hover:bg-green-800 text-white flex items-center justify-center gap-2 hover-lift"
                  >
                    {status === 'sending' ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;