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

    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  return (
    <section className="bg-gradient-to-r from-green-950 to-black w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
      <div className="py-10 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Get in Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm">
            Have questions about Taleem? We'd love to hear from you.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl border border-green-800/20">
            {/* Rest of your form content remains the same */}
            <CardHeader className="text-center py-3 border-b border-green-100">
              <CardTitle className="text-xl text-green-800">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="py-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="contact-name" 
                      className="block text-sm font-medium mb-1 text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all text-sm"
                      placeholder="Your name"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="contact-email" 
                      className="block text-sm font-medium mb-1 text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all text-sm"
                      placeholder="Your email"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="contact-subject" 
                    className="block text-sm font-medium mb-1 text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all text-sm"
                    placeholder="What's this about?"
                    autoComplete="off"
                    required
                  />
                </div>

                <div>
                  <label 
                    htmlFor="contact-message" 
                    className="block text-sm font-medium mb-1 text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all min-h-[100px] resize-y text-sm"
                    placeholder="Your message"
                    autoComplete="off"
                    required
                  />
                </div>

                {status === 'success' && (
                  <div className="p-2 text-sm text-green-700 bg-green-50 rounded-md border border-green-200">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-2 rounded-md transition-all flex items-center justify-center gap-2 text-sm"
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
        </div>
      </div>
    </section>
  );
};

export default ContactForm;