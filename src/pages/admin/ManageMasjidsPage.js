// src/pages/admin/ManageMasjidsPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit, Trash, ExternalLink, Search } from 'lucide-react';

const ManageMasjidsPage = () => {
  const [masjids, setMasjids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  
  useEffect(() => {
    // Fetch masjids from the server
    fetchMasjids();
  }, []);
  
  const fetchMasjids = async () => {
    setLoading(true);
    try {
      // In a real application, you would fetch from your API
      // For now, we'll use mock data
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockMasjids = [
        {
          id: 'al-falah',
          name: 'Al-Falah Islamic Center',
          status: 'active',
          createdAt: '2023-01-15',
          usersCount: 124,
          theme: {
            primary: '#006400',
            headerBg: 'from-green-950 to-green-900'
          }
        },
        {
          id: 'al-noor',
          name: 'Al-Noor Masjid',
          status: 'active',
          createdAt: '2023-02-28',
          usersCount: 87,
          theme: {
            primary: '#00008B',
            headerBg: 'from-blue-950 to-blue-900'
          }
        },
        {
          id: 'masjid-ibrahim',
          name: 'Masjid Ibrahim',
          status: 'pending',
          createdAt: '2023-05-10',
          usersCount: 42,
          theme: {
            primary: '#4B0082',
            headerBg: 'from-purple-950 to-purple-900'
          }
        }
      ];
      
      setMasjids(mockMasjids);
    } catch (error) {
      console.error("Error fetching masjids:", error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleDelete = async (masjidId) => {
    try {
      // In a real application, you would make an API call to delete the masjid
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Update the state to remove the deleted masjid
      setMasjids(masjids.filter(masjid => masjid.id !== masjidId));
      
      // Close the confirmation dialog
      setShowDeleteConfirm(null);
    } catch (error) {
      console.error("Error deleting masjid:", error);
      alert("There was an error deleting the masjid.");
    }
  };
  
  const filteredMasjids = masjids.filter(masjid => 
    masjid.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    masjid.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fixed gradient styling function
  const getGradientStyle = (headerBg) => {
    if (!headerBg) return { backgroundColor: '#333' };
    
    // Extract color classes from the Tailwind class string
    const fromClass = headerBg.match(/from-(\w+)-(\d+)/);
    const toClass = headerBg.match(/to-(\w+)-(\d+)/);
    
    if (!fromClass || !toClass) return { backgroundColor: '#333' };
    
    // Map Tailwind color classes to hex values
    const colorMap = {
      green: {
        '900': '#14532d',
        '950': '#052e16'
      },
      blue: {
        '900': '#1e3a8a',
        '950': '#172554'
      },
      purple: {
        '900': '#581c87',
        '950': '#3b0764'
      },
      gray: {
        '900': '#111827',
        '950': '#030712'
      }
    };
    
    const fromColor = colorMap[fromClass[1]]?.[fromClass[2]] || '#333';
    const toColor = colorMap[toClass[1]]?.[toClass[2]] || '#111';
    
    return {
      background: `linear-gradient(to right, ${fromColor}, ${toColor})`
    };
  };
  
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Manage Masjids</h1>
            <p className="text-gray-600 mt-1">Create and manage masjid portals on your platform.</p>
          </div>
          
          <Link
            to="/admin-dashboard/masjids/create"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Masjid
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
          <div className="p-4 border-b flex justify-between items-center">
            <div className="relative w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search masjids..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div className="text-sm text-gray-500">
              {filteredMasjids.length} {filteredMasjids.length === 1 ? 'masjid' : 'masjids'} found
            </div>
          </div>
          
          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading masjids...</p>
            </div>
          ) : filteredMasjids.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-600">No masjids found.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Masjid</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Users</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredMasjids.map((masjid) => (
                    <tr key={masjid.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div 
                            className="w-10 h-10 rounded-full mr-3 flex items-center justify-center text-white"
                            style={getGradientStyle(masjid.theme.headerBg)}
                          >
                            {masjid.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{masjid.name}</div>
                            <div className="text-sm text-gray-500">/masjid/{masjid.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          masjid.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {masjid.status === 'active' ? 'Active' : 'Pending'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(masjid.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {masjid.usersCount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2 relative">
                          <a
                            href={`/masjid/${masjid.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
                            title="View"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                          <Link
  to={`/admin-dashboard/masjids/edit/${masjid.id}`}
  className="text-indigo-600 hover:text-indigo-900 p-2 rounded-full hover:bg-indigo-50"
  title="Edit"
>
  <Edit className="w-5 h-5" />
</Link>
                          <button
                            onClick={() => setShowDeleteConfirm(masjid.id)}
                            className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50"
                            title="Delete"
                          >
                            <Trash className="w-5 h-5" />
                          </button>
                          
                          {showDeleteConfirm === masjid.id && (
                            <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-md shadow-lg border border-gray-200 z-10 p-4">
                              <h4 className="text-sm font-medium text-gray-900 mb-2">Delete Masjid</h4>
                              <p className="text-xs text-gray-600 mb-4">
                                Are you sure you want to delete "{masjid.name}"? This action cannot be undone.
                              </p>
                              <div className="flex justify-end space-x-2">
                                <button
                                  type="button"
                                  onClick={() => setShowDeleteConfirm(null)}
                                  className="px-3 py-1.5 text-xs bg-gray-100 text-gray-800 rounded hover:bg-gray-200"
                                >
                                  Cancel
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDelete(masjid.id)}
                                  className="px-3 py-1.5 text-xs bg-red-600 text-white rounded hover:bg-red-700"
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageMasjidsPage;