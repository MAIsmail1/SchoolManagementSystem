import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const LandingPage = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>School Management App</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">About the Website</h2>
          <p className="mb-6">
            A comprehensive school management system designed to streamline educational operations 
            and enhance communication between administrators, teachers, and parents.
          </p>
          
          <h2 className="text-2xl font-bold mb-4">Services Provided</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Student enrollment and management</li>
            <li>Teacher profiles and class management</li>
            <li>Attendance tracking</li>
            <li>Exam results and student progress monitoring</li>
            <li>Parent communication</li>
            <li>Payment processing </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name"
                value={contactForm.name}
                onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email"
                value={contactForm.email}
                onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                required
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message"
                value={contactForm.message}
                onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                required
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LandingPage;