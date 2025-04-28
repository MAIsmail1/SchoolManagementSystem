// src/pages/admin/CreateMasjidPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HexColorPicker } from 'react-colorful';
import { Save, Upload, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { useMasjid } from '../../contexts/MasjidContext';

const CreateMasjidPage = () => {
  const navigate = useNavigate();
  const { addMasjid } = useMasjid();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    contact: {
      email: '',
      phone: '',
      address: '',
      website: '',
    },
    theme: {
      primary: '#006400',
      secondary: '#4B0082',
      headerBg: 'from-green-950 to-green-900',
      sidebarBg: 'bg-green-950'
    },
    features: {
      attendance: true,
      payments: true,
      events: true,
      quranTracker: true
    },
    logo: null,
    logoPreview: null
  });
  
  // Handle general input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
      
      // Auto-generate slug from name
      if (name === 'name') {
        const slug = value
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w\-]+/g, '')
          .replace(/\-\-+/g, '-')
          .replace(/^-+/, '')
          .replace(/-+$/, '');
        
        setFormData(prevState => ({
          ...prevState,
          slug
        }));
      }
    }
  };
  
  // Handle feature toggles
  const handleFeatureToggle = (feature) => {
    setFormData({
      ...formData,
      features: {
        ...formData.features,
        [feature]: !formData.features[feature]
      }
    });
  };
  
  // Handle logo upload
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        logo: file,
        logoPreview: URL.createObjectURL(file)
      });
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Call the addMasjid function from context
      const newMasjidId = await addMasjid({
        id: formData.slug,
        name: formData.name,
        logo: formData.logoPreview, // In a real app, you'd handle file uploads
        contact: formData.contact,
        theme: formData.theme,
        features: formData.features,
        status: 'active',
        createdAt: new Date().toISOString()
      });
      
      // Show success message
      alert(`Masjid "${formData.name}" created successfully!`);
      
      // Redirect to the new masjid
      navigate(`/masjid/${newMasjidId}`);
    } catch (error) {
      console.error("Error creating masjid:", error);
      alert("There was an error creating the masjid. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Color change handlers
  const handlePrimaryColorChange = (color) => {
    setFormData({
      ...formData,
      theme: {
        ...formData.theme,
        primary: color
      }
    });
  };
  
  const handleSecondaryColorChange = (color) => {
    setFormData({
      ...formData,
      theme: {
        ...formData.theme,
        secondary: color
      }
    });
  };
  
  // Update theme based on primary color
  const updateThemeFromPrimaryColor = (color) => {
    // Extract color without the # symbol
    const hexColor = color.replace('#', '');
    
    // Determine theme based on color
    let headerBg, sidebarBg;
    
    if (color.toLowerCase().startsWith('#00')) {  // Green or Blue
      if (hexColor.substring(2, 4).toLowerCase() === '64') {  // Green
        headerBg = 'from-green-950 to-green-900';
        sidebarBg = 'bg-green-950';
      } else {  // Blue
        headerBg = 'from-blue-950 to-blue-900';
        sidebarBg = 'bg-blue-950';
      }
    } else if (color.toLowerCase().startsWith('#ff') || color.toLowerCase().startsWith('#8b00')) {  // Red
      headerBg = 'from-red-950 to-red-900';
      sidebarBg = 'bg-red-950';
    } else if (color.toLowerCase().startsWith('#4b00') || color.toLowerCase().startsWith('#80')) {  // Purple
      headerBg = 'from-purple-950 to-purple-900';
      sidebarBg = 'bg-purple-950';
    } else if (color.toLowerCase().startsWith('#8b4') || color.toLowerCase().startsWith('#a5')) {  // Brown
      headerBg = 'from-amber-950 to-amber-900';
      sidebarBg = 'bg-amber-950';
    } else {  // Default to neutral
      headerBg = 'from-gray-950 to-gray-900';
      sidebarBg = 'bg-gray-950';
    }
    
    setFormData({
      ...formData,
      theme: {
        ...formData.theme,
        primary: color,
        headerBg,
        sidebarBg
      }
    });
  };
  
  // Render step 1: Basic information
  const renderStep1 = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Masjid Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Masjid Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Al-Falah Islamic Center"
            required
          />
        </div>
        <div>
          <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">URL Slug</label>
          <div className="flex">
            <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              masjid/
            </span>
            <input
              type="text"
              id="slug"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="al-falah"
              required
            />
          </div>
          <p className="mt-1 text-sm text-gray-500">This will be used in the URL: /masjid/{formData.slug || 'al-falah'}</p>
        </div>
      </div>
      
      <div>
        <label htmlFor="logo" className="block text-sm font-medium text-gray-700 mb-2">Masjid Logo</label>
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 border border-gray-300 rounded-md flex items-center justify-center overflow-hidden bg-gray-50">
            {formData.logoPreview ? (
              <img src={formData.logoPreview} alt="Logo preview" className="max-w-full max-h-full object-contain" />
            ) : (
              <div className="text-gray-400 text-center text-sm">
                <Upload className="w-8 h-8 mx-auto mb-1" />
                <span>No logo</span>
              </div>
            )}
          </div>
          <div className="flex-1">
            <label className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
              <Upload className="w-5 h-5 mr-2 text-gray-600" />
              <span>Upload Logo</span>
              <input
                type="file"
                id="logo"
                name="logo"
                onChange={handleLogoChange}
                accept="image/*"
                className="sr-only"
              />
            </label>
            <p className="mt-1 text-xs text-gray-500">PNG or JPG, 1:1 ratio recommended. Max 2MB.</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Contact Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="contact.email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="contact.email"
                name="contact.email"
                value={formData.contact.email}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="info@example.com"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="contact.phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="tel"
                id="contact.phone"
                name="contact.phone"
                value={formData.contact.phone}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>
          </div>
        </div>
        
        <div>
          <label htmlFor="contact.address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="contact.address"
              name="contact.address"
              value={formData.contact.address}
              onChange={handleChange}
              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="123 Main St, City, State, Zip"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="contact.website" className="block text-sm font-medium text-gray-700 mb-1">Website (Optional)</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Globe className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="url"
              id="contact.website"
              name="contact.website"
              value={formData.contact.website}
              onChange={handleChange}
              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="https://www.example.com"
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setStep(2)}
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Continue
        </button>
      </div>
    </div>
  );
  
  // Render step 2: Theme and features
  const renderStep2 = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Theme & Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Color Scheme</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
            <div className="flex space-x-4">
              <HexColorPicker color={formData.theme.primary} onChange={handlePrimaryColorChange} />
              <div className="space-y-2">
                <div 
                  className="w-16 h-16 rounded border"
                  style={{ backgroundColor: formData.theme.primary }}
                ></div>
                <input
                  type="text"
                  value={formData.theme.primary}
                  onChange={(e) => handlePrimaryColorChange(e.target.value)}
                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                />
                <button
                  type="button"
                  onClick={() => updateThemeFromPrimaryColor(formData.theme.primary)}
                  className="w-full text-xs px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                >
                  Auto-set theme
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
            <div className="flex space-x-4">
              <HexColorPicker color={formData.theme.secondary} onChange={handleSecondaryColorChange} />
              <div className="space-y-2">
                <div 
                  className="w-16 h-16 rounded border"
                  style={{ backgroundColor: formData.theme.secondary }}
                ></div>
                <input
                  type="text"
                  value={formData.theme.secondary}
                  onChange={(e) => handleSecondaryColorChange(e.target.value)}
                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Preview</h3>
          
          <div className="border rounded-lg overflow-hidden shadow-sm">
            {/* Header preview */}
            <div className={`bg-gradient-to-r ${formData.theme.headerBg} p-4`}>
              <div className="flex items-center text-white">
                {formData.logoPreview ? (
                  <img src={formData.logoPreview} alt="Logo" className="w-10 h-10 mr-3 rounded" />
                ) : (
                  <div className="w-10 h-10 mr-3 rounded bg-white/10 flex items-center justify-center">
                    <span className="text-xs">Logo</span>
                  </div>
                )}
                <div>
                  <div className="font-semibold">{formData.name || "Masjid Name"}</div>
                  <div className="text-xs text-gray-300">Education Portal</div>
                </div>
              </div>
            </div>
            
            {/* Sidebar preview */}
            <div className="flex">
              <div className={`${formData.theme.sidebarBg} w-1/3 p-3`}>
                <div className="py-2 px-3 text-white text-xs rounded bg-white/10">Dashboard</div>
                <div className="py-2 px-3 text-gray-300 text-xs">Students</div>
                <div className="py-2 px-3 text-gray-300 text-xs">Classes</div>
              </div>
              
              <div className="bg-gray-50 w-2/3 p-3">
                <div className="h-32 flex items-center justify-center text-gray-400 text-sm">
                  Content Area
                </div>
              </div>
            </div>
            
            {/* Button preview */}
            <div className="p-4 bg-white border-t flex justify-end space-x-2">
              <button
                type="button"
                className="px-3 py-1 rounded text-xs bg-gray-200 text-gray-800"
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-3 py-1 rounded text-xs text-white"
                style={{ backgroundColor: formData.theme.primary }}
              >
                Primary Button
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Enabled Features</h3>
            
            <div className="space-y-3">
              {[
                { id: 'attendance', name: 'Attendance Tracking' },
                { id: 'payments', name: 'Payment System' },
                { id: 'events', name: 'Events Calendar' },
                { id: 'quranTracker', name: 'Quran Progress Tracker' }
              ].map(feature => (
                <div key={feature.id} className="flex items-center">
                  <button
                    type="button"
                    onClick={() => handleFeatureToggle(feature.id)}
                    className={`w-10 h-6 flex items-center ${formData.features[feature.id] ? 'bg-green-500 justify-end' : 'bg-gray-300 justify-start'} rounded-full p-1 transition-colors duration-300 mr-3`}
                  >
                    <div className="bg-white w-4 h-4 rounded-full shadow-sm"></div>
                  </button>
                  <span className="text-gray-700">{feature.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between pt-4 border-t">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Back
        </button>
        <button
          type="submit"
          className={`px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating...
            </>
          ) : (
            <>
              <Save className="w-5 h-5 mr-2" />
              Create Masjid
            </>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Create New Masjid</h1>
          <p className="text-gray-600 mt-1">Set up a new masjid portal with customized branding and features.</p>
        </div>
        
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              1
            </div>
            <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              2
            </div>
          </div>
          <div className="flex text-xs mt-2">
            <div className="flex-1 text-center">Masjid Information</div>
            <div className="flex-1 text-center">Theme & Features</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <form onSubmit={handleSubmit}>
            {step === 1 ? renderStep1() : renderStep2()}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateMasjidPage;