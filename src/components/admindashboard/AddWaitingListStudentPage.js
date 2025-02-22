import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ArrowLeft, Save, Users, UserCheck, UserPlus, BookOpen, Calendar, TrendingUp, Wallet, LogOut } from 'lucide-react';
import { Button } from '../common/button';
import { useAuth } from '../../contexts/AuthContext';

const AddWaitingListStudentPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('waiting');
  const handleGoBack = () => {
    navigate(-1);
  };
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [studentData, setStudentData] = useState({
    name: '',
    dob: '',
    address: '',
    medicalHistory: '',
    parentName: '',
    phoneNumber: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    status: 'Pending',
    applicationDate: new Date().toISOString().split('T')[0],
    preferredClass: 'Nursery',
    notes: '',
    siblingInSchool: false,
    siblingName: '',
    reasonForApplication: ''
  });

  const menuItems = [
    { id: 'enrolled', name: 'Enrolled Students', icon: <Users className="w-5 h-5" /> },
    { id: 'waiting', name: 'Waiting List', icon: <UserCheck className="w-5 h-5" /> },
    { id: 'teachers', name: 'Teacher Profiles', icon: <UserPlus className="w-5 h-5" /> },
    { id: 'classes', name: 'Classes', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'attendance', name: 'Attendance', icon: <Calendar className="w-5 h-5" /> },
    { id: 'progress', name: 'Student Progress', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'payment', name: 'Payment', icon: <Wallet className="w-5 h-5" /> }
  ];

  const classOptions = [
    'Nursery',
    'Reception',
    'Year 1',
    'Year 2',
    'Year 3',
    'Year 4',
    'Year 5',
    'Year 6'
  ];

  const statusOptions = [
    'Pending',
    'In Review',
    'Documents Required',
    'Interview Scheduled',
    'Waitlisted'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStudentData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual waiting list student addition logic (e.g., API call)
    console.log('Waiting List Student Data Submitted:', studentData);
    
    // Temporary alert to show data
    alert(JSON.stringify(studentData, null, 2));
    
    // Navigate back to waiting list in admin dashboard
    navigate('/admin-dashboard/waiting');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Simplified Top Navigation */}
      <nav className="bg-black text-white shadow-md fixed top-0 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-green-800 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <button
                onClick={handleGoBack}
                className="ml-4 flex items-center space-x-2 hover:bg-green-800 p-2 rounded-md transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="text-xl font-semibold">Add Waiting List Student</span>
              </button>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-green-800 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 bg-black transition-transform duration-300 ease-in-out z-30 pt-16`}
      >
        <div className="flex flex-col space-y-2 mt-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMenuOpen(false);
                navigate(`/admin-dashboard/${item.id === 'enrolled' ? '' : item.id}`);
              }}
              className={`flex items-center space-x-2 px-4 py-3 text-white hover:bg-green-800 transition-colors ${
                activeTab === item.id ? 'bg-green-800' : ''
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-3 text-white hover:bg-green-800 transition-colors mt-4"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex pt-16">
        {/* Sidebar Spacer */}
        <div className="hidden md:block w-64"></div>

        {/* Main Content Area */}
        <div className="flex-1 p-8 mt-0">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Application Status */}
              <div className="bg-yellow-50 rounded-md p-4 border border-yellow-200">
                <h3 className="text-lg font-medium text-yellow-800 mb-3">Application Status</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                      Current Status
                    </label>
                    <select
                      id="status"
                      name="status"
                      value={studentData.status}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="applicationDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Application Date
                    </label>
                    <input
                      type="date"
                      id="applicationDate"
                      name="applicationDate"
                      required
                      value={studentData.applicationDate}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Personal Information Section */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={studentData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    placeholder="Enter student's full name"
                  />
                </div>

                <div>
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    required
                    value={studentData.dob}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={studentData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  placeholder="Enter student's full address"
                />
              </div>

              {/* Medical History */}
              <div>
                <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700 mb-2">
                  Medical History
                </label>
                <textarea
                  id="medicalHistory"
                  name="medicalHistory"
                  value={studentData.medicalHistory}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  placeholder="Enter any relevant medical information"
                  rows="3"
                />
              </div>

              {/* Parent Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                    Parent/Guardian Name
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    value={studentData.parentName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    placeholder="Enter parent/guardian name"
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                    value={studentData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    placeholder="Enter contact number"
                  />
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="emergencyContactName" className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact Name
                  </label>
                  <input
                    type="text"
                    id="emergencyContactName"
                    name="emergencyContactName"
                    required
                    value={studentData.emergencyContactName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    placeholder="Enter emergency contact name"
                  />
                </div>

                <div>
                  <label htmlFor="emergencyContactNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact Number
                  </label>
                  <input
                    type="tel"
                    id="emergencyContactNumber"
                    name="emergencyContactNumber"
                    required
                    value={studentData.emergencyContactNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    placeholder="Enter emergency contact number"
                  />
                </div>
              </div>

              {/* Class Preference */}
              <div>
                <label htmlFor="preferredClass" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Class
                </label>
                <select
                  id="preferredClass"
                  name="preferredClass"
                  value={studentData.preferredClass}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                >
                  {classOptions.map((className) => (
                    <option key={className} value={className}>
                      {className}
                    </option>
                  ))}
                </select>
              </div>

              {/* Siblings */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="siblingInSchool"
                    name="siblingInSchool"
                    checked={studentData.siblingInSchool}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor="siblingInSchool" className="ml-2 block text-sm text-gray-700">
                    Student has sibling already enrolled in the school
                  </label>
                </div>
                
                {studentData.siblingInSchool && (
                  <div>
                    <label htmlFor="siblingName" className="block text-sm font-medium text-gray-700 mb-2">
                      Sibling Name
                    </label>
                    <input
                      type="text"
                      id="siblingName"
                      name="siblingName"
                      value={studentData.siblingName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                      placeholder="Enter sibling's name"
                    />
                  </div>
                )}
              </div>

              {/* Reason for Application */}
              <div>
                <label htmlFor="reasonForApplication" className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Application
                </label>
                <textarea
                  id="reasonForApplication"
                  name="reasonForApplication"
                  value={studentData.reasonForApplication}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  placeholder="Why does the student want to join our school?"
                  rows="4"
                />
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={studentData.notes}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  placeholder="Any additional information about the application"
                  rows="3"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <Button 
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-2 px-6 py-3 rounded-md transition-colors"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Add to Waiting List
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWaitingListStudentPage;