// src/pages/super-admin/DashboardPage.js
import React from 'react';
import { 
  Users, 
  Building2, 
  Settings 
} from 'lucide-react';
import { Card } from '../../components/common/card';
import { Button } from '../../components/common/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const SuperAdminDashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const dashboardCards = [
    {
      icon: <Building2 className="w-10 h-10 text-green-600" />,
      title: "Manage Masjids",
      description: "Create, edit, and manage masjid institutions",
      action: () => navigate('/super-admin/masjids')
    },
    {
      icon: <Users className="w-10 h-10 text-green-600" />,
      title: "User Management",
      description: "Manage user accounts and roles",
      action: () => navigate('/super-admin/users')
    },
    {
      icon: <Settings className="w-10 h-10 text-green-600" />,
      title: "System Settings",
      description: "Configure global system parameters",
      action: () => navigate('/super-admin/settings')
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Super Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Welcome, {user.name}</span>
          <Button 
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white"
          >
            Logout
          </Button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {dashboardCards.map((card, index) => (
          <Card 
            key={index} 
            className="hover:shadow-lg transition-all duration-300 group"
          >
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="bg-green-50 p-3 rounded-xl">
                  {card.icon}
                </div>
                <Button 
                  onClick={card.action}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Manage
                </Button>
              </div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SuperAdminDashboard;