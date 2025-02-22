import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ArrowLeft, Save, Users, UserCheck, UserPlus, BookOpen, Calendar, TrendingUp, Wallet, LogOut } from 'lucide-react';

const AddTeacherPage = ({ logout }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('teachers');

  const handleGoBack = () => {
    navigate('/admin-dashboard/teachers');
  };

  const [teacherData, setTeacherData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    
    // Contact Information
    email: '',
    phoneNumber: '',
    address: '',
    
    // Professional Details
    qualifications: [],
    specialization: '',
    subjectsTaught: [],
    experience: '',
    joiningDate: new Date().toISOString().split('T')[0],
    
    // Bank and Payroll
    bankName: '',
    accountNumber: '',
    taxIdentificationNumber: '',
    
    // Employment Details
    employmentType: 'Full-Time',
    contractStartDate: '',
    contractEndDate: '',
    
    // Login Credentials
    username: '',
    password: '',
    confirmPassword: '',
    
    // Additional Information
    emergencyContactName: '',
    emergencyContactNumber: '',
    medicalConditions: '',
    
    // Professional Status
    status: 'Active',
    performanceRating: '',
    departmentAssigned: ''
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

  const employmentTypes = [
    'Full-Time',
    'Part-Time',
    'Contract',
    'Adjunct'
  ];

  const statusOptions = [
    'Active',
    'On Leave',
    'Probation',
    'Suspended',
    'Resigned'
  ];

  const qualificationOptions = [
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'PhD',
    'Teaching Certification',
    'Subject Specialty Certification'
  ];

  const departmentOptions = [
    'Primary Education',
    'Secondary Education',
    'Mathematics',
    'Science',
    'Languages',
    'Arts',
    'Physical Education'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setTeacherData(prev => {
        const currentValues = prev[name] || [];
        if (checked) {
          return { ...prev, [name]: [...currentValues, value] };
        } else {
          return { 
            ...prev, 
            [name]: currentValues.filter(item => item !== value) 
          };
        }
      });
    } else {
      setTeacherData(prev => ({
        ...prev,
        [name]: value
      }));

      if (name === 'email' && !teacherData.username) {
        const generatedUsername = value.split('@')[0];
        setTeacherData(prev => ({
          ...prev,
          username: generatedUsername
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = [];

    if (teacherData.password !== teacherData.confirmPassword) {
      validationErrors.push('Passwords do not match');
    }

    const requiredFields = [
      'firstName', 'lastName', 'email', 
      'phoneNumber', 'username', 'password'
    ];
    requiredFields.forEach(field => {
      if (!teacherData[field]) {
        validationErrors.push(`${field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} is required`);
      }
    });

    if (validationErrors.length > 0) {
      alert(validationErrors.join('\n'));
      return;
    }

    console.log('Teacher Data Submitted:', {
      ...teacherData,
      password: '********'
    });
    
    alert(`Teacher ${teacherData.firstName} ${teacherData.lastName} added successfully!`);
    
    navigate('/admin-dashboard/teachers');
  };

  return (
    <div className="min-h-screen bg-gray-100">
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
                <span className="text-xl font-semibold">Add Teacher</span>
              </button>
            </div>
            <button
              onClick={() => {
                logout();
                navigate('/');
              }}
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-green-800 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="flex pt-16">
        <div className="flex-1 p-8 mt-0">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={teacherData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={teacherData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={teacherData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={teacherData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={teacherData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Login Credentials</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={teacherData.username}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={teacherData.password}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={teacherData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Professional Details</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Qualifications</label>
                    {qualificationOptions.map((qual) => (
                      <div key={qual} className="flex items-center">
                        <input
                          type="checkbox"
                          name="qualifications"
                          value={qual}
                          checked={teacherData.qualifications.includes(qual)}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span>{qual}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                    <select
                      name="departmentAssigned"
                      value={teacherData.departmentAssigned}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select Department</option>
                      {departmentOptions.map((dept) => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Employment Type</label>
                    <select
                      name="employmentType"
                      value={teacherData.employmentType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      {employmentTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button 
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-2 px-6 py-3 rounded-md transition-colors"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Save Teacher Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeacherPage;