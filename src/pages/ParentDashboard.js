import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Menu, Users, Book, Calendar, FileText, TrendingUp, MessageCircle, LogOut } from 'lucide-react';
import ParentAttendance from '../components/parentDashboard/ParentAttendance';
import ParentProgress from '../components/parentDashboard/ParentProgress';
import ParentExams from '../components/parentDashboard/ParentExams';
import ParentCommunication from '../components/parentDashboard/ParentCommunication';

const ParentDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('attendance');
  const [selectedChild, setSelectedChild] = useState(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Mock children data - in a real app this would come from an API
  const [children, setChildren] = useState([]);

  useEffect(() => {
    // Fetch children data - replace with actual API call
    const mockChildren = [
      { id: 1, name: 'Amina Hassan', grade: 'Grade 3', classes: ['Quran Hifz - Beginner', 'Arabic - Basic'] },
      { id: 2, name: 'Ibrahim Hassan', grade: 'Grade 5', classes: ['Tajweed - Intermediate', 'Islamic Studies'] },
    ];
    setChildren(mockChildren);
    
    // Set first child as default selected
    if (mockChildren.length > 0 && !selectedChild) {
      setSelectedChild(mockChildren[0]);
    }
  }, []);

  const menuItems = [
    { id: 'attendance', name: 'Attendance', icon: <Calendar className="w-5 h-5" /> },
    { id: 'progress', name: 'Progress', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'exams', name: 'Exam Results', icon: <FileText className="w-5 h-5" /> },
    { id: 'communication', name: 'Communication', icon: <MessageCircle className="w-5 h-5" /> },
  ];

  const renderContent = () => {
    if (!selectedChild) return <div className="text-center p-8">Please select a child</div>;
    
    switch (activeTab) {
      case 'attendance': return <ParentAttendance child={selectedChild} />;
      case 'progress': return <ParentProgress child={selectedChild} />;
      case 'exams': return <ParentExams child={selectedChild} />;
      case 'communication': return <ParentCommunication child={selectedChild} />;
      default: return <ParentAttendance child={selectedChild} />;
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-black transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 bg-black">
          <span className="text-white text-xl font-semibold">Masjid Parent Portal</span>
        </div>
        
        {/* Children Selection */}
        <div className="p-4 border-b border-gray-700">
          <label className="block text-sm font-medium text-gray-300 mb-2">Select Child</label>
          <select
            className="w-full bg-gray-800 text-white border border-gray-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={selectedChild?.id || ''}
            onChange={(e) => {
              const childId = parseInt(e.target.value);
              const child = children.find(c => c.id === childId);
              setSelectedChild(child);
            }}
          >
            <option value="">Select...</option>
            {children.map(child => (
              <option key={child.id} value={child.id}>{child.name}</option>
            ))}
          </select>
          
          {selectedChild && (
            <div className="mt-3 p-3 bg-green-800 bg-opacity-25 rounded">
              <h4 className="text-green-400 font-semibold">{selectedChild.name}</h4>
              <p className="text-xs text-gray-400">{selectedChild.grade}</p>
              <div className="mt-1 text-xs text-gray-400">
                {selectedChild.classes.join(', ')}
              </div>
            </div>
          )}
        </div>
        
        <nav className="mt-5">
          {menuItems.map((item) => (
            <a
              key={item.id}
              className={`flex items-center mt-4 py-2 px-6 text-gray-300 hover:bg-green-800 hover:bg-opacity-25 hover:text-gray-100 ${
                activeTab === item.id ? 'bg-green-800 bg-opacity-25 text-gray-100' : ''
              } transition-all duration-300 ease-in-out`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.icon}
              <span className="mx-3">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex justify-between items-center py-4 px-6 bg-black text-white">
          <div className="flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none lg:hidden transition-transform duration-300 ease-in-out transform hover:scale-110">
              <Menu className="h-6 w-6" />
            </button>
            <div className="ml-4 hidden md:block">
              <span className="text-gray-300">Masjid Education Program</span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-4 text-sm text-gray-300">Welcome, {user?.name || 'Parent'}</span>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-green-800 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8 animate-fade-in">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ParentDashboard;