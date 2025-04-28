import React from 'react';
import { PieChart, Building, Users } from 'lucide-react';

const DashboardContent = () => {
  return (
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
      
      <div className="md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">System Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500">Teachers</p>
            <p className="text-xl font-bold">42</p>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500">Classes</p>
            <p className="text-xl font-bold">68</p>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500">Admin Users</p>
            <p className="text-xl font-bold">24</p>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500">Average Class Size</p>
            <p className="text-xl font-bold">16</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;