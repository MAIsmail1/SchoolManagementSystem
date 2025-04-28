import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Menu, Building, Users, UserCheck, UserPlus, BookOpen, Calendar, TrendingUp, Wallet, LogOut, Settings } from 'lucide-react';
import { useMasjid } from '../../contexts/MasjidContext';

// Import a placeholder for MasjidDetailsContent if it doesn't exist yet
const MasjidDetailsContent = () => (
  <div className="p-8 text-center">
    <h2 className="text-2xl font-bold">Masjid Details</h2>
    <p className="text-gray-600 mt-4">Masjid details content will be shown here.</p>
  </div>
);

// Placeholder components for other tabs
const EnrolledStudents = () => (
  <div className="p-8 text-center">
    <h2 className="text-2xl font-bold">Enrolled Students</h2>
    <p className="text-gray-600 mt-4">Enrolled students list will be shown here.</p>
  </div>
);

const WaitingListStudents = () => (
  <div className="p-8 text-center">
    <h2 className="text-2xl font-bold">Waiting List</h2>
    <p className="text-gray-600 mt-4">Waiting list students will be shown here.</p>
  </div>
);

const TeacherProfiles = () => (
  <div className="p-8 text-center">
    <h2 className="text-2xl font-bold">Teacher Profiles</h2>
    <p className="text-gray-600 mt-4">Teacher profiles will be shown here.</p>
  </div>
);

const Classes = () => (
  <div className="p-8 text-center">
    <h2 className="text-2xl font-bold">Classes</h2>
    <p className="text-gray-600 mt-4">Classes will be shown here.</p>
  </div>
);

const AdminAttendance = () => (
  <div className="p-8 text-center">
    <h2 className="text-2xl font-bold">Attendance</h2>
    <p className="text-gray-600 mt-4">Attendance records will be shown here.</p>
  </div>
);

const StudentProgress = () => (
  <div className="p-8 text-center">
    <h2 className="text-2xl font-bold">Student Progress</h2>
    <p className="text-gray-600 mt-4">Student progress will be shown here.</p>
  </div>
);

const Payment = () => (
  <div className="p-8 text-center">
    <h2 className="text-2xl font-bold">Payment</h2>
    <p className="text-gray-600 mt-4">Payment information will be shown here.</p>
  </div>
);

const MasjidAdminDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('masjid');
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user } = useAuth();
  
  // Safely access currentMasjid even if useMasjid is not available yet
  const masjidContext = {};
  try {
    const context = useMasjid();
    Object.assign(masjidContext, context);
  } catch (error) {
    console.warn("MasjidContext not available", error);
  }
  const { currentMasjid } = masjidContext;

  // Menu items with their corresponding paths
  const menuItems = [
    { id: 'masjid', name: 'Masjid Details', icon: <Building className="w-5 h-5" />, path: '/masjid-admin/masjid-details' },
    { id: 'enrolled', name: 'Enrolled Students', icon: <Users className="w-5 h-5" />, path: '/masjid-admin/students' },
    { id: 'waiting', name: 'Waiting List', icon: <UserCheck className="w-5 h-5" />, path: '/masjid-admin/waiting' },
    { id: 'teachers', name: 'Teacher Profiles', icon: <UserPlus className="w-5 h-5" />, path: '/masjid-admin/teachers' },
    { id: 'classes', name: 'Classes', icon: <BookOpen className="w-5 h-5" />, path: '/masjid-admin/classes' },
    { id: 'attendance', name: 'Attendance', icon: <Calendar className="w-5 h-5" />, path: '/masjid-admin/attendance' },
    { id: 'progress', name: 'Student Progress', icon: <TrendingUp className="w-5 h-5" />, path: '/masjid-admin/progress' },
    { id: 'payment', name: 'Payment', icon: <Wallet className="w-5 h-5" />, path: '/masjid-admin/payment' },
    { id: 'settings', name: 'Settings', icon: <Settings className="w-5 h-5" />, path: '/masjid-admin/settings' }
  ];

  // Set the active tab based on the current URL path
  useEffect(() => {
    const currentPath = location.pathname;
    const matchedItem = menuItems.find(item => item.path === currentPath);
    if (matchedItem) {
      setActiveTab(matchedItem.id);
    } else if (currentPath === '/masjid-admin/dashboard') {
      setActiveTab('masjid');
    }
  }, [location.pathname]);

  const renderContent = () => {
    switch (activeTab) {
      case 'masjid': return <MasjidDetailsContent />;
      case 'enrolled': return <EnrolledStudents />;
      case 'waiting': return <WaitingListStudents />;
      case 'teachers': return <TeacherProfiles />;
      case 'classes': return <Classes />;
      case 'attendance': return <AdminAttendance />;
      case 'progress': return <StudentProgress />;
      case 'payment': return <Payment />;
      case 'settings': return <div className="text-center p-10">Masjid settings coming soon</div>;
      default: return <MasjidDetailsContent />;
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

  const getMasjidName = () => {
    if (currentMasjid && currentMasjid.name) {
      return currentMasjid.name;
    }
    return user?.masjid || "Your Masjid";
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
              } transition-all duration-300 ease-in-out cursor-pointer`}
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
            <span className="ml-4 text-lg font-medium">{getMasjidName()}</span>
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

export default MasjidAdminDashboard;