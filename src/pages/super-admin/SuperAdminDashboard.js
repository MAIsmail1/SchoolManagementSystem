import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Menu, X, Building, Users, Settings, LogOut, PieChart } from 'lucide-react';

// Import placeholders for required content components
const DashboardContent = () => (
  <div>
    <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Total Masjids</h3>
          <Building className="h-8 w-8 text-green-600" />
        </div>
        <p className="text-3xl font-bold text-gray-900">12</p>
        <p className="text-sm text-gray-500 mt-2">2 new masjids this month</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Total Users</h3>
          <Users className="h-8 w-8 text-blue-600" />
        </div>
        <p className="text-3xl font-bold text-gray-900">358</p>
        <p className="text-sm text-gray-500 mt-2">+24 users this week</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Active Students</h3>
          <PieChart className="h-8 w-8 text-purple-600" />
        </div>
        <p className="text-3xl font-bold text-gray-900">245</p>
        <p className="text-sm text-gray-500 mt-2">90% attendance rate</p>
      </div>
    </div>
  </div>
);

const ManageMasjidsContent = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-6">Manage Masjids</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Al-Falah Masjid</h3>
          <Building className="h-6 w-6 text-green-600" />
        </div>
        <p className="text-sm text-gray-500">123 Main St, City</p>
        <p className="text-sm font-medium mt-2">Active Students: 86</p>
        <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm">
          Manage
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Al-Noor Center</h3>
          <Building className="h-6 w-6 text-green-600" />
        </div>
        <p className="text-sm text-gray-500">456 Oak St, Town</p>
        <p className="text-sm font-medium mt-2">Active Students: 64</p>
        <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm">
          Manage
        </button>
      </div>
      <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center">
        <Building className="h-10 w-10 text-gray-400 mb-2" />
        <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors text-sm">
          Add New Masjid
        </button>
      </div>
    </div>
  </div>
);

const UserManagementContent = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-6">User Management</h2>
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Masjid</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm font-medium text-gray-900">Ahmed Khan</div>
              <div className="text-sm text-gray-500">ahmed@example.com</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Al-Falah Masjid</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
              <button className="text-red-600 hover:text-red-900">Disable</button>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm font-medium text-gray-900">Sara Patel</div>
              <div className="text-sm text-gray-500">sara@example.com</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Teacher</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Al-Noor Center</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
              <button className="text-red-600 hover:text-red-900">Disable</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const SettingsContent = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-6">System Settings</h2>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">General Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">System Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" defaultValue="Taleem Management System" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded-md" defaultValue="support@taleem.org" />
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Email Notifications</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input type="checkbox" id="new-user" className="mr-2" defaultChecked />
            <label htmlFor="new-user" className="text-sm text-gray-700">New user registrations</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="payment-received" className="mr-2" defaultChecked />
            <label htmlFor="payment-received" className="text-sm text-gray-700">Payment received</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="new-masjid" className="mr-2" defaultChecked />
            <label htmlFor="new-masjid" className="text-sm text-gray-700">New masjid registration</label>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  </div>
);

const SuperAdminDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();
  const { logout } = useAuth();

  // Menu items
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: <PieChart className="w-5 h-5" /> },
    { id: 'masjids', name: 'Manage Masjids', icon: <Building className="w-5 h-5" /> },
    { id: 'users', name: 'User Management', icon: <Users className="w-5 h-5" /> },
    { id: 'settings', name: 'System Settings', icon: <Settings className="w-5 h-5" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardContent />;
      case 'masjids': return <ManageMasjidsContent />;
      case 'users': return <UserManagementContent />;
      case 'settings': return <SettingsContent />;
      default: return <DashboardContent />;
    }
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setIsMenuOpen(false); // Close mobile menu when a tab is selected
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
          <span className="text-white text-xl font-semibold">Super Admin Dashboard</span>
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
          <div className="container mx-auto px-6 py-6 animate-fade-in">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;