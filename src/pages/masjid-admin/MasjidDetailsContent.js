import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useMasjid } from '../../contexts/MasjidContext';
import { Edit, Save, X, Upload, Mail, Phone, MapPin, Clock, Users, BookOpen, Building } from 'lucide-react';

const MasjidDetailsContent = () => {
  const { user } = useAuth();
  
  // Safely access masjid context
  const masjidContext = {};
  try {
    const context = useMasjid();
    Object.assign(masjidContext, context);
  } catch (error) {
    console.warn("MasjidContext not available", error);
  }
  const { currentMasjid, updateMasjid } = masjidContext;
  
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Demo Masjid',
    address: '123 Main Street, Springfield, IL 12345',
    phone: '(555) 123-4567',
    email: 'info@demomasjid.org',
    website: 'www.demomasjid.org',
    operatingHours: '5:00 AM - 10:00 PM',
    aboutUs: 'Our masjid is dedicated to serving the Muslim community through education, worship, and community service.',
    logo: null,
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would call updateMasjid and save to backend
    console.log('Saving masjid data:', formData);
    setEditing(false);
  };
  
  const stats = [
    { label: 'Students', value: 145, icon: <Users className="h-5 w-5 text-blue-500" /> },
    { label: 'Teachers', value: 12, icon: <Users className="h-5 w-5 text-green-500" /> },
    { label: 'Classes', value: 24, icon: <BookOpen className="h-5 w-5 text-purple-500" /> },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Masjid Details</h2>
        {!editing ? (
          <button 
            onClick={() => setEditing(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center transition-colors"
          >
            <Edit className="w-5 h-5 mr-2" />
            Edit Details
          </button>
        ) : (
          <div className="flex space-x-2">
            <button 
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md flex items-center transition-colors"
            >
              <Save className="w-5 h-5 mr-2" />
              Save
            </button>
            <button 
              onClick={() => setEditing(false)}
              className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md flex items-center transition-colors"
            >
              <X className="w-5 h-5 mr-2" />
              Cancel
            </button>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Masjid Info Card */}
        <div className="bg-white rounded-lg shadow-md md:col-span-2">
          {editing ? (
            <form className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Masjid Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Operating Hours</label>
                  <input
                    type="text"
                    name="operatingHours"
                    value={formData.operatingHours}
                    onChange={handleChange}
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">About Us</label>
                  <textarea
                    name="aboutUs"
                    value={formData.aboutUs}
                    onChange={handleChange}
                    rows="4"
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  ></textarea>
                </div>
              </div>
            </form>
          ) : (
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{formData.name}</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">{formData.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-700">{formData.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-700">{formData.email}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-700">{formData.operatingHours}</span>
                </div>
                <div className="pt-4 border-t mt-4">
                  <h4 className="text-md font-medium text-gray-800 mb-2">About Us</h4>
                  <p className="text-gray-700">{formData.aboutUs}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Logo Upload and Stats */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Masjid Logo</h3>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                {formData.logo ? (
                  <img src={formData.logo} alt="Masjid logo" className="w-full h-full object-cover" />
                ) : (
                  <Building className="h-16 w-16 text-gray-400" />
                )}
              </div>
              {editing && (
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center transition-colors">
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Logo
                </button>
              )}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Quick Stats</h3>
            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center p-3 border rounded-lg">
                  <div className="p-2 bg-gray-100 rounded-full mr-3">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <p className="text-lg font-semibold">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasjidDetailsContent;