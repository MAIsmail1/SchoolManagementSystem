// src/pages/masjid-admin/MasjidDetailsPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMasjid } from '../../contexts/MasjidContext';
import { useAuth } from '../../contexts/AuthContext';
import { HexColorPicker } from 'react-colorful';
import { 
  Building2, 
  Save, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  User, 
  Upload,
  ArrowLeft,
  Plus,
  Trash2,
  Check
} from 'lucide-react';
import { Button } from '../../components/common/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/common/card';

const MasjidDetailsPage = () => {
  const navigate = useNavigate();
  const { currentMasjid, updateMasjid, addMasjidAdmin, removeMasjidAdmin } = useMasjid();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('details');
  const [successMessage, setSuccessMessage] = useState('');
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [showAdminForm, setShowAdminForm] = useState(false);
  
  // Form state for masjid details
  const [masjidForm, setMasjidForm] = useState({
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
  
  // Initialize form with current masjid data
  useEffect(() => {
    if (currentMasjid) {
      setMasjidForm({
        name: currentMasjid.name || '',
        slug: currentMasjid.id || '',
        contact: {
          email: currentMasjid.contact?.email || '',
          phone: currentMasjid.contact?.phone || '',
          address: currentMasjid.contact?.address || '',
          website: currentMasjid.contact?.website || '',
        },
        theme: {
          primary: currentMasjid.theme?.primary || '#006400',
          secondary: currentMasjid.theme?.secondary || '#4B0082',
          headerBg: currentMasjid.theme?.headerBg || 'from-green-950 to-green-900',
          sidebarBg: currentMasjid.theme?.sidebarBg || 'bg-green-950'
        },
        features: {
          attendance: currentMasjid.features?.attendance !== false,
          payments: currentMasjid.features?.payments !== false,
          events: currentMasjid.features?.events !== false,
          quranTracker: currentMasjid.features?.quranTracker !== false
        },
        logo: null,
        logoPreview: currentMasjid.logo || null
      });
    }
  }, [currentMasjid]);
  
  // Handle general input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setMasjidForm({
        ...masjidForm,
        [parent]: {
          ...masjidForm[parent],
          [child]: value
        }
      });
    } else {
      setMasjidForm({
        ...masjidForm,
        [name]: value
      });
    }
  };
  
  // Handle feature toggles
  const handleFeatureToggle = (feature) => {
    setMasjidForm({
      ...masjidForm,
      features: {
        ...masjidForm.features,
        [feature]: !masjidForm.features[feature]
      }
    });
  };
  
  // Handle logo upload
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMasjidForm({
        ...masjidForm,
        logo: file,
        logoPreview: URL.createObjectURL(file)
      });
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    
    try {
      // Call the update masjid function from context
      await updateMasjid(currentMasjid.id, {
        name: masjidForm.name,
        contact: masjidForm.contact,
        theme: masjidForm.theme,
        features: masjidForm.features,
        logo: masjidForm.logoPreview // In a real app, you'd handle file uploads
      });
      
      // Show success message
      setSuccessMessage('Masjid details updated successfully!');
      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (error) {
      console.error("Error updating masjid:", error);
      alert("There was an error updating the masjid details. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Color change handlers
  const handlePrimaryColorChange = (color) => {
    setMasjidForm({
      ...masjidForm,
      theme: {
        ...masjidForm.theme,
        primary: color
      }
    });
  };
  
  const handleSecondaryColorChange = (color) => {
    setMasjidForm({
      ...masjidForm,
      theme: {
        ...masjidForm.theme,
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
    
    setMasjidForm({
      ...masjidForm,
      theme: {
        ...masjidForm.theme,
        primary: color,
        headerBg,
        sidebarBg
      }
    });
  };
  
  // Handle adding a new administrator
  const handleAddAdmin = (e) => {
    e.preventDefault();
    
    if (!newAdminEmail) {
      alert('Please enter an email address');
      return;
    }
    
    // Create a new admin object
    const newAdmin = {
      email: newAdminEmail,
      name: 'Admin ' + newAdminEmail.split('@')[0], // Generate a name from the email
      role: 'masjid_admin',
      addedBy: user?.name || 'current admin',
      addedAt: new Date().toISOString()
    };
    
    // Call the context function to add a new admin
    addMasjidAdmin(currentMasjid.id, newAdmin);
    
    // Reset form
    setNewAdminEmail('');
    setShowAdminForm(false);
    
    // Show success message
    setSuccessMessage('Administrator added successfully!');
    setTimeout(() => setSuccessMessage(''), 5000);
  };
  
  // Handle removing an administrator
  const handleRemoveAdmin = (adminId) => {
    if (window.confirm('Are you sure you want to remove this administrator?')) {
      removeMasjidAdmin(currentMasjid.id, adminId);
      
      // Show success message
      setSuccessMessage('Administrator removed successfully!');
      setTimeout(() => setSuccessMessage(''), 5000);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-6">
          <Button 
            onClick={() => navigate('/masjid-admin/dashboard')}
            variant="ghost"
            className="mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </Button>
          <h1 className="text-2xl font-bold text-gray-800">Masjid Settings</h1>
        </div>
        
        {successMessage && (
          <div className="mb-6 bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded relative">
            <span className="font-medium">{successMessage}</span>
          </div>
        )}
        
        {/* Tabs */}
        <div className="flex border-b mb-6">
          <button
            onClick={() => setActiveTab('details')}
            className={`px-4 py-2 font-medium ${
              activeTab === 'details'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            Masjid Details
          </button>
          <button
            onClick={() => setActiveTab('appearance')}
            className={`px-4 py-2 font-medium ${
              activeTab === 'appearance'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            Appearance
          </button>
          <button
            onClick={() => setActiveTab('administrators')}
            className={`px-4 py-2 font-medium ${
              activeTab === 'administrators'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            Administrators
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`px-4 py-2 font-medium ${
              activeTab === 'features'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            Features
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* Masjid Details Tab */}
          {activeTab === 'details' && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building2 className="w-5 h-5 mr-2" />
                  Masjid Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Masjid Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={masjidForm.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Al-Falah Islamic Center"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">URL Slug (Read only)</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        masjid/
                      </span>
                      <input
                        type="text"
                        id="slug"
                        name="slug"
                        value={masjidForm.slug}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-r-md bg-gray-100 text-gray-700"
                        placeholder="al-falah"
                        disabled
                      />
                    </div>
                    <p className="mt-1 text-sm text-gray-500">URL: /masjid/{masjidForm.slug}</p>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="logo" className="block text-sm font-medium text-gray-700 mb-2">Masjid Logo</label>
                  <div className="flex items-center space-x-6">
                    <div className="w-24 h-24 border border-gray-300 rounded-md flex items-center justify-center overflow-hidden bg-gray-50">
                      {masjidForm.logoPreview ? (
                        <img src={masjidForm.logoPreview} alt="Logo preview" className="max-w-full max-h-full object-contain" />
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
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                  
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
                          value={masjidForm.contact.email}
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
                          value={masjidForm.contact.phone}
                          onChange={handleChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <label htmlFor="contact.address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="contact.address"
                        name="contact.address"
                        value={masjidForm.contact.address}
                        onChange={handleChange}
                        className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="123 Main St, City, State, Zip"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <label htmlFor="contact.website" className="block text-sm font-medium text-gray-700 mb-1">Website (Optional)</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Globe className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="url"
                        id="contact.website"
                        name="contact.website"
                        value={masjidForm.contact.website}
                        onChange={handleChange}
                        className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="https://www.example.com"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* Appearance Tab */}
          {activeTab === 'appearance' && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Theme & Appearance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                      <div className="flex space-x-4">
                        <HexColorPicker color={masjidForm.theme.primary} onChange={handlePrimaryColorChange} />
                        <div className="space-y-2">
                          <div 
                            className="w-16 h-16 rounded border"
                            style={{ backgroundColor: masjidForm.theme.primary }}
                          ></div>
                          <input
                            type="text"
                            value={masjidForm.theme.primary}
                            onChange={(e) => handlePrimaryColorChange(e.target.value)}
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                          />
                          <button
                            type="button"
                            onClick={() => updateThemeFromPrimaryColor(masjidForm.theme.primary)}
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
                        <HexColorPicker color={masjidForm.theme.secondary} onChange={handleSecondaryColorChange} />
                        <div className="space-y-2">
                          <div 
                            className="w-16 h-16 rounded border"
                            style={{ backgroundColor: masjidForm.theme.secondary }}
                          ></div>
                          <input
                            type="text"
                            value={masjidForm.theme.secondary}
                            onChange={(e) => handleSecondaryColorChange(e.target.value)}
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-700">Preview</h3>
                    
                    <div className="border rounded-lg overflow-hidden shadow-sm">
                      {/* Header preview */}
                      <div className={`bg-gradient-to-r ${masjidForm.theme.headerBg} p-4`}>
                        <div className="flex items-center text-white">
                          {masjidForm.logoPreview ? (
                            <img src={masjidForm.logoPreview} alt="Logo" className="w-10 h-10 mr-3 rounded" />
                          ) : (
                            <div className="w-10 h-10 mr-3 rounded bg-white/10 flex items-center justify-center">
                              <span className="text-xs">Logo</span>
                            </div>
                          )}
                          <div>
                            <div className="font-semibold">{masjidForm.name || "Masjid Name"}</div>
                            <div className="text-xs text-gray-300">Education Portal</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Sidebar preview */}
                      <div className="flex">
                        <div className={`${masjidForm.theme.sidebarBg} w-1/3 p-3`}>
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
                          style={{ backgroundColor: masjidForm.theme.primary }}
                        >
                          Primary Button
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* Administrators Tab */}
          {activeTab === 'administrators' && (
            <Card className="mb-6">
              <CardHeader>
                <div className="flex justify-between">
                  <CardTitle>Masjid Administrators</CardTitle>
                  <Button 
                    type="button"
                    onClick={() => setShowAdminForm(!showAdminForm)} 
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Add Administrator
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {showAdminForm && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-medium mb-4">Add New Administrator</h3>
                    <form onSubmit={handleAddAdmin} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Administrator Email
                        </label>
                        <input
                          type="email"
                          value={newAdminEmail}
                          onChange={(e) => setNewAdminEmail(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="administrator@example.com"
                          required
                        />
                        <p className="mt-1 text-xs text-gray-500">
                          An invitation will be sent to this email address.
                        </p>
                      </div>
                      <div className="flex justify-end space-x-3">
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setShowAdminForm(false)}
                        >
                          Cancel
                        </Button>
                        <Button 
                          type="submit" 
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add Admin
                        </Button>
                      </div>
                    </form>
                  </div>
                )}
                
                <div>
                  <h3 className="text-gray-600 font-medium mb-4">Current Administrators</h3>
                  {currentMasjid && currentMasjid.administrators && currentMasjid.administrators.length > 0 ? (
                    <div className="space-y-3">
                      {currentMasjid.administrators.map((admin, index) => (
                        <div 
                          key={index} 
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center">
                            <div className="bg-green-100 p-2 rounded-full mr-3">
                              <User className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-800">{admin.name}</div>
                              <div className="text-sm text-gray-500">{admin.email}</div>
                            </div>
                          </div>
                          <Button 
                            type="button" 
                            variant="ghost" 
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            onClick={() => handleRemoveAdmin(admin._id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-6 text-gray-500 bg-gray-50 rounded-lg">
                      <User className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p>No administrators have been added yet.</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* Features Tab */}
          {activeTab === 'features' && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Enabled Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    Enable or disable features for your masjid portal. Disabled features will be hidden from the interface.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { id: 'attendance', name: 'Attendance Tracking', description: 'Track and manage student attendance' },
                      { id: 'payments', name: 'Payment System', description: 'Process and manage payments and donations' },
                      { id: 'events', name: 'Events Calendar', description: 'Manage and display masjid events' },
                      { id: 'quranTracker', name: 'Quran Progress Tracker', description: 'Track student Quran memorization progress' }
                    ].map(feature => (
                      <div key={feature.id} className="flex items-start p-4 bg-gray-50 rounded-lg">
                        <button
                          type="button"
                          onClick={() => handleFeatureToggle(feature.id)}
                          className={`relative inline-flex items-center h-6 rounded-full w-11 mr-4 flex-shrink-0 ${
                            masjidForm.features[feature.id] ? 'bg-green-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`${
                              masjidForm.features[feature.id] ? 'translate-x-6' : 'translate-x-1'
                            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out`}
                          />
                        </button>
                        <div>
                          <div className="flex items-center">
                            <div className="font-medium text-gray-800">{feature.name}</div>
                            {masjidForm.features[feature.id] && (
                              <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full flex items-center">
                                <Check className="w-3 h-3 mr-1" />
                                Active
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* Save Button - always visible */}
          <div className="flex justify-end">
            <Button 
              type="submit" 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 flex items-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving Changes...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MasjidDetailsPage;