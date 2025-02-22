import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Menu, X, Calendar, Book, FileText, TrendingUp, MessageCircle, LogOut } from 'lucide-react';
// import Attendance from '../components/teacherDashboard/Attendance';
// import Diary from '../components/teacherDashboard/Diary';
// import Exam from '../components/teacherDashboard/Exam';
// import Progress from '../components/teacherDashboard/Progress';
// import Communication from '../components/teacherDashboard/Communication';

const TeacherDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('attendance');
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const menuItems = [
    { id: 'attendance', name: 'Attendance', icon: <Calendar className="w-5 h-5" /> },
    { id: 'diary', name: 'Diary', icon: <Book className="w-5 h-5" /> },
    { id: 'exam', name: 'Exam', icon: <FileText className="w-5 h-5" /> },
    { id: 'progress', name: 'Progress', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'communication', name: 'Communication', icon: <MessageCircle className="w-5 h-5" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'attendance':
        return <Attendance />;
      case 'diary':
        return <Diary />;
      case 'exam':
        return <Exam />;
      case 'progress':
        return <Progress />;
      case 'communication':
        return <Communication />;
      default:
        return <Attendance />;
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
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
              <span className="ml-4 text-xl font-semibold">Teacher Dashboard</span>
            </div>
            <div className="flex items-center">
              <span className="mr-4">Welcome, {user.name}</span>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-green-800 transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar and Content */}
      <div className="flex pt-16">
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
                }}
                className={`flex items-center space-x-2 px-4 py-3 text-white hover:bg-green-800 transition-colors ${
                  activeTab === item.id ? 'bg-green-800' : ''
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
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
        <div className="flex-1 ml-0 md:ml-64 p-8 mt-0">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;