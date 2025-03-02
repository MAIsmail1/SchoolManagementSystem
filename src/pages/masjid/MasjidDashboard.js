import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMasjid } from '../../contexts/MasjidContext';
import { useAuth } from '../../contexts/AuthContext';
import { BookOpen, Calendar, User, GraduationCap, Users, MessageCircle, ChevronRight, Phone, Mail, MapPin, Clock } from 'lucide-react';

const MasjidDashboard = () => {
  const { currentMasjid, masjidTheme, loading } = useMasjid();
  const { isAuthenticated, getCurrentUser } = useAuth();
  const navigate = useNavigate();
  const [prayerTimes, setPrayerTimes] = useState({});
  const user = getCurrentUser();

  // Automatically redirect to appropriate dashboard if already logged in
  useEffect(() => {
    if (isAuthenticated() && user) {
      switch (user.role) {
        case 'admin':
          navigate('admin-dashboard');
          break;
        case 'teacher':
          navigate('teacher-dashboard');
          break;
        case 'parent':
          navigate('parent-dashboard');
          break;
        default:
          break;
      }
    }
  }, [isAuthenticated, user, navigate]);

  useEffect(() => {
    // Mock prayer times - in a real app, this would come from an API or be part of masjid data
    setPrayerTimes({
      fajr: '5:30 AM',
      dhuhr: '12:45 PM',
      asr: '4:15 PM',
      maghrib: '6:30 PM',
      isha: '8:00 PM',
      jummah: '1:30 PM'
    });
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (!currentMasjid) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Masjid Not Found</h1>
          <p className="text-gray-600 mb-6">
            The masjid portal you're looking for doesn't exist or isn't available.
          </p>
          <Link 
            to="/"
            className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  // Apply dynamic theme using the masjid's theme colors
  const headerBgClass = masjidTheme.headerBg || 'from-green-950 to-black';
  const primaryColor = masjidTheme.primary || '#006400';
  const primaryButtonClass = 'bg-green-600 hover:bg-green-700';
  const secondaryButtonClass = 'bg-blue-600 hover:bg-blue-700';

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className={`bg-gradient-to-r ${headerBgClass} text-white`}>
        <div className="container mx-auto px-4 py-6 md:py-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold">{currentMasjid.name}</h1>
              <p className="mt-2 text-gray-300">Education Portal</p>
            </div>
            <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-3">
              <Link
                to="login"
                className={`px-4 py-2 rounded ${primaryButtonClass} text-white font-medium text-center`}
              >
                Sign In
              </Link>
              <a
                href="#contact"
                className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 text-white font-medium text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Prayer Times */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center flex-wrap gap-4 md:gap-8">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-sm font-semibold">Prayer Times:</span>
            </div>
            {Object.entries(prayerTimes).map(([prayer, time]) => (
              <div key={prayer} className="flex flex-col items-center">
                <span className="text-xs text-gray-500 capitalize">{prayer}</span>
                <span className="text-sm font-medium">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Islamic Education for All Ages</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Join our comprehensive education programs designed to nurture faith, 
                  knowledge, and character in children and adults alike.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#programs" 
                    className={`px-6 py-3 rounded ${primaryButtonClass} text-white font-medium text-center`}
                  >
                    Explore Programs
                  </a>
                  <a 
                    href="#register" 
                    className="px-6 py-3 rounded bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium text-center"
                  >
                    Register Now
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-lg h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-24 h-24 text-gray-400" />
                  {/* In a real implementation, this would be an image related to the masjid */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portal Overview */}
        <section className="py-12 bg-gray-50" id="programs">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Education Portal Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quran Learning</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive Quran memorization and tajweed programs for students of all ages.
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
                <p className="text-gray-600 mb-4">
                  Real-time progress monitoring, attendance tracking, and performance reports.
                </p>
                <a href="#" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Communication</h3>
                <p className="text-gray-600 mb-4">
                  Direct communication between parents, teachers, and administrators.
                </p>
                <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Classes Overview */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Classes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-blue-100 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-blue-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Quran Memorization</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Comprehensive hifz program with qualified instructors.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    <span>Ages 7-15</span>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-green-100 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-green-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Tajweed Rules</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Master the rules of Quranic recitation and pronunciation.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    <span>All ages</span>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-yellow-100 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-yellow-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Arabic Language</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Learn to read, write and speak Arabic from beginner to advanced.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    <span>Ages 8+</span>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-purple-100 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-purple-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Islamic Studies</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Learn about Islamic history, fiqh, and character development.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    <span>All ages</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="#register" 
                className={`inline-block px-6 py-3 rounded ${primaryButtonClass} text-white font-medium`}
              >
                Register for Classes
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={`py-16 bg-gradient-to-r ${headerBgClass} text-white`} id="register">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Education Programs Today</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Register now to access our comprehensive Islamic education portal and give your family the gift of knowledge.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="login"
                className="px-6 py-3 bg-white text-gray-900 rounded hover:bg-gray-100 font-medium"
              >
                Sign In
              </Link>
              <a 
                href="#contact"
                className="px-6 py-3 bg-transparent border border-white text-white rounded hover:bg-white/10 font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-white" id="contact">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <p className="text-gray-600 mb-6">
                  We're here to answer any questions you may have about our education programs.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-gray-600">{currentMasjid.contact?.address || '123 Main St, City, State'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600">{currentMasjid.contact?.phone || '+1-555-123-4567'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">{currentMasjid.contact?.email || 'info@masjid.org'}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className={`w-full px-4 py-2 ${primaryButtonClass} text-white rounded font-medium`}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{currentMasjid.name}</h3>
              <p className="text-gray-400">
                Providing quality Islamic education for our community since 2005.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
                <li><a href="#register" className="hover:text-white transition-colors">Register</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Quran Memorization</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tajweed</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Arabic Language</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Islamic Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center">
                    <span className="w-5 h-5 mr-2 bg-gray-700 rounded-full flex items-center justify-center">f</span>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center">
                    <span className="w-5 h-5 mr-2 bg-gray-700 rounded-full flex items-center justify-center">t</span>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center">
                    <span className="w-5 h-5 mr-2 bg-gray-700 rounded-full flex items-center justify-center">i</span>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center">
                    <span className="w-5 h-5 mr-2 bg-gray-700 rounded-full flex items-center justify-center">y</span>
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} {currentMasjid.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MasjidDashboard;