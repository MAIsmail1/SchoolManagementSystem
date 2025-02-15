// src/components/layout/ContactForm.js
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../common/card';
import { Button } from '../common/button';
import { SendHorizontal } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

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
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  return (
    <Card className="w-full bg-white/80 backdrop-blur-sm">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl text-purple-600">Send us a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6" autoComplete="on">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label 
                htmlFor="contact-name" 
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </div>

            <div>
              <label 
                htmlFor="contact-email" 
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Your email"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div>
            <label 
              htmlFor="contact-subject" 
              className="block text-sm font-medium mb-2 text-gray-700"
            >
              Subject
            </label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              placeholder="What's this about?"
              required
            />
          </div>

          <div>
            <label 
              htmlFor="contact-message" 
              className="block text-sm font-medium mb-2 text-gray-700"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all min-h-[150px] resize-y"
              placeholder="Your message"
              required
            />
          </div>

          {status === 'success' && (
            <div className="p-4 text-sm text-green-600 bg-green-50 rounded-md border border-green-200">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-md transition-all flex items-center justify-center gap-2"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? (
              'Sending...'
            ) : (
              <>
                Send Message
                <SendHorizontal className="w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;