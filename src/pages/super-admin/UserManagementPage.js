// src/pages/super-admin/UserManagementPage.js
import React, { useState, useEffect } from 'react';
import { 
  PlusCircle, 
  Edit, 
  Trash2, 
  User 
} from 'lucide-react';
import { Button } from '../../components/common/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/common/card';
import { useMasjid } from '../../contexts/MasjidContext';
import { useAuth } from '../../contexts/AuthContext';

const UserManagementPage = () => {
  const [users, setUsers] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const { getAllMasjids } = useMasjid();
  const { user: currentUser } = useAuth();

  // User form state
  const [userForm, setUserForm] = useState({
    name: '',
    email: '',
    role: 'student',
    masjid: null,
    profileDetails: {}
  });

  // Mock list of masjids
  const [masjidList, setMasjidList] = useState([]);

  // Fetch masjids on component mount
  useEffect(() => {
    const fetchMasjids = async () => {
      try {
        const fetchedMasjids = await getAllMasjids();
        setMasjidList(fetchedMasjids);
      } catch (error) {
        console.error('Failed to fetch masjids', error);
      }
    };

    fetchMasjids();
  }, []);

  // Simulate user fetching (would be an API call in real implementation)
  useEffect(() => {
    const mockUsers = [
      {
        _id: '1',
        name: 'Super Admin',
        email: 'admin@taleem.com',
        role: 'super_admin',
        masjid: null
      },
      {
        _id: '2',
        name: 'Masjid Admin',
        email: 'masjid.admin@taleem.com',
        role: 'masjid_admin',
        masjid: 'al-falah'
      },
      {
        _id: '3',
        name: 'Teacher Ahmed',
        email: 'teacher@demo.com',
        role: 'teacher',
        masjid: 'al-noor'
      },
      {
        _id: '4',
        name: 'Parent Hassan',
        email: 'parent@demo.com',
        role: 'parent',
        masjid: 'masjid-ibrahim'
      }
    ];

    setUsers(mockUsers);
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Handle nested object inputs
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setUserForm(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setUserForm(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Open create user modal
  const openCreateModal = () => {
    setUserForm({
      name: '',
      email: '',
      role: 'student',
      masjid: null,
      profileDetails: {}
    });
    setIsCreateModalOpen(true);
  };

  // Handle user creation
  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      // In a real app, this would be an API call
      const newUser = {
        _id: `user-${Date.now()}`,
        ...userForm,
        createdBy: currentUser._id
      };

      setUsers(prev => [...prev, newUser]);
      setIsCreateModalOpen(false);
    } catch (error) {
      console.error('Failed to create user', error);
    }
  };

  // Open edit user modal
  const openEditModal = (userData) => {
    setSelectedUser(userData);
    setUserForm({
      ...userData,
      profileDetails: userData.profileDetails || {}
    });
    setIsEditModalOpen(true);
  };

  // Handle user update
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      // In a real app, this would be an API call
      setUsers(prev => 
        prev.map(u => 
          u._id === selectedUser._id 
            ? { ...u, ...userForm } 
            : u
        )
      );
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Failed to update user', error);
    }
  };

  // Handle user deletion
  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        // In a real app, this would be an API call
        setUsers(prev => prev.filter(u => u._id !== userId));
      } catch (error) {
        console.error('Failed to delete user', error);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">User Management</h1>
        <Button 
          onClick={openCreateModal}
          className="bg-green-700 hover:bg-green-800 text-white"
        >
          <PlusCircle className="mr-2" /> Add New User
        </Button>
      </div>

      {/* Users Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {users.map((userData) => (
          <Card 
            key={userData._id} 
            className="hover:shadow-lg transition-all duration-300"
          >
            <CardHeader>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <User className="h-6 w-6 text-gray-500" />
                  <CardTitle>{userData.name}</CardTitle>
                </div>
                <div className="flex space-x-2">
                  <Button 
                    variant="ghost"
                    size="icon"
                    onClick={() => openEditModal(userData)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteUser(userData._id)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <strong>Email:</strong> {userData.email}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Role:</strong> {userData.role}
                </p>
                {userData.masjid && (
                  <p className="text-sm text-gray-600">
                    <strong>Masjid:</strong> {userData.masjid}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Create User Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Create New User</h2>
            <form onSubmit={handleCreateUser}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={userForm.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userForm.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <select
                  name="role"
                  value={userForm.role}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="parent">Parent</option>
                  <option value="masjid_admin">Masjid Admin</option>
                </select>
              </div>
              {(userForm.role === 'teacher' || userForm.role === 'masjid_admin') && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Masjid</label>
                  <select
                    name="masjid"
                    value={userForm.masjid || ''}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  >
                    <option value="">Select Masjid</option>
                    {masjidList.map((masjid) => (
                      <option key={masjid.id} value={masjid.id}>
                        {masjid.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div className="flex justify-end space-x-4">
                <Button 
                  type="button"
                  variant="outline"
                  onClick={() => setIsCreateModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white"
                >
                  Create User
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Edit User</h2>
            <form onSubmit={handleUpdateUser}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={userForm.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userForm.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <select
                  name="role"
                  value={userForm.role}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="parent">Parent</option>
                  <option value="masjid_admin">Masjid Admin</option>
                </select>
              </div>
              {(userForm.role === 'teacher' || userForm.role === 'masjid_admin') && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Masjid</label>
                  <select
                    name="masjid"
                    value={userForm.masjid || ''}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  >
                    <option value="">Select Masjid</option>
                    {masjidList.map((masjid) => (
                      <option key={masjid.id} value={masjid.id}>
                        {masjid.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div className="flex justify-end space-x-4">
                <Button 
                  type="button"
                  variant="outline"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white"
                >
                  Update User
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagementPage;