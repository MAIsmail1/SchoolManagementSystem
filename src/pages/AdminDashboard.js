import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Menu, X, Users, UserCheck, UserPlus, BookOpen, Calendar, TrendingUp, Wallet, LogOut } from 'lucide-react';
import EnrolledStudents from '../components/adminDashboard/EnrolledStudents';
import WaitingListStudents from '../components/adminDashboard/WaitingListStudents';
import TeacherProfiles from '../components/adminDashboard/TeacherProfiles';
import Classes from '../components/adminDashboard/Classes';
import AdminAttendance from '../components/adminDashboard/AdminAttendance'; // Changed from Attendance to AdminAttendance
import StudentProgress from '../components/adminDashboard/StudentProgress';
import Payment from '../components/adminDashboard/Payment';

const AdminDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('enrolled');
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  // Menu items with their corresponding paths
  const menuItems = [
    { id: 'enrolled', name: 'Enrolled Students', icon: <Users className="w-5 h-5" />, path: '/admin-dashboard' },
    { id: 'waiting', name: 'Waiting List', icon: <UserCheck className="w-5 h-5" />, path: '/admin-dashboard/waiting' },
    { id: 'teachers', name: 'Teacher Profiles', icon: <UserPlus className="w-5 h-5" />, path: '/admin-dashboard/teachers' },
    { id: 'classes', name: 'Classes', icon: <BookOpen className="w-5 h-5" />, path: '/admin-dashboard/classes' },
    { id: 'attendance', name: 'Attendance', icon: <Calendar className="w-5 h-5" />, path: '/admin-dashboard/attendance' },
    { id: 'progress', name: 'Student Progress', icon: <TrendingUp className="w-5 h-5" />, path: '/admin-dashboard/progress' },
    { id: 'payment', name: 'Payment', icon: <Wallet className="w-5 h-5" />, path: '/admin-dashboard/payment' }
  ];

  // Set the active tab based on the current URL path
  useEffect(() => {
    const currentPath = location.pathname;
    const matchedItem = menuItems.find(item => item.path === currentPath);
    if (matchedItem) {
      setActiveTab(matchedItem.id);
    } else if (currentPath === '/admin-dashboard') {
      setActiveTab('enrolled');
    }
  }, [location.pathname]);

  const renderContent = () => {
    switch (activeTab) {
      case 'enrolled': return <EnrolledStudents />;
      case 'waiting': return <WaitingListStudents />;
      case 'teachers': return <TeacherProfiles />;
      case 'classes': return <Classes />;
      case 'attendance': return <AdminAttendance />; // Changed from Attendance to AdminAttendance
      case 'progress': return <StudentProgress />;
      case 'payment': return <Payment />;
      default: return <EnrolledStudents />;
    }
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    const selectedItem = menuItems.find(item => item.id === tabId);
    if (selectedItem) {
      navigate(selectedItem.path);
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
          <span className="text-white text-xl font-semibold">Masjid Admin Dashboard</span>
        </div>
        <nav className="mt-5">
          {menuItems.map((item) => (
            <a
              key={item.id}
              className={`flex items-center mt-4 py-2 px-6 text-gray-300 hover:bg-green-800 hover:bg-opacity-25 hover:text-gray-100 ${
                activeTab === item.id ? 'bg-green-800 bg-opacity-25 text-gray-100' : ''
              } transition-all duration-300 ease-in-out`}
              onClick={() => handleTabChange(item.id)}
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
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-green-800 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
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

export default AdminDashboard;