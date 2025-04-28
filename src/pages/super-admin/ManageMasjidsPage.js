// src/pages/super-admin/ManageMasjidsPage.js
import React, { useState, useEffect } from 'react';
import { 
  PlusCircle, 
  Edit, 
  Trash2, 
  Users 
} from 'lucide-react';
import { Button } from '../../components/common/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/common/card';
import { useMasjid } from '../../contexts/MasjidContext';
import { useAuth } from '../../contexts/AuthContext';

const ManageMasjidsPage = () => {
  const { user } = useAuth();
  
  // Safely access the masjid context
  const masjidContext = useMasjid() || {};
  const { 
    masjids = {}, // Provide default empty object
    getAllMasjids = async () => console.warn("getAllMasjids not available"), 
    addMasjid = async () => console.warn("addMasjid not available"), 
    updateMasjid = async () => console.warn("updateMasjid not available"), 
    deleteMasjid = async () => console.warn("deleteMasjid not available")
  } = masjidContext;

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedMasjid, setSelectedMasjid] = useState(null);

  // Form state for create/edit
  const [masjidForm, setMasjidForm] = useState({
    id: '',
    name: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: ''
    },
    contact: {
      email: '',
      phone: ''
    }
  });

  // Fetch masjids on component mount
  useEffect(() => {
    const fetchMasjids = async () => {
      try {
        await getAllMasjids();
      } catch (error) {
        console.error('Failed to fetch masjids', error);
      }
    };

    fetchMasjids();
  }, [getAllMasjids]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Handle nested object inputs
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setMasjidForm(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setMasjidForm(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Open create modal
  const openCreateModal = () => {
    // Reset form
    setMasjidForm({
      id: `masjid-${Date.now()}`, // Generate unique ID
      name: '',
      address: {
        street: '',
        city: '',
        state: '',
        zipCode: ''
      },
      contact: {
        email: '',
        phone: ''
      }
    });
    setIsCreateModalOpen(true);
  };

  // Handle masjid creation
  const handleCreateMasjid = async (e) => {
    e.preventDefault();
    try {
      await addMasjid({
        ...masjidForm,
        createdBy: user ? user.id : null
      });
      setIsCreateModalOpen(false);
    } catch (error) {
      console.error('Failed to create masjid', error);
    }
  };

  // Open edit modal
  const openEditModal = (masjid) => {
    setSelectedMasjid(masjid);
    setMasjidForm({
      ...masjid,
      address: masjid.address || {},
      contact: masjid.contact || {}
    });
    setIsEditModalOpen(true);
  };

  // Handle masjid update
  const handleUpdateMasjid = async (e) => {
    e.preventDefault();
    try {
      await updateMasjid(selectedMasjid.id, masjidForm);
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Failed to update masjid', error);
    }
  };

  // Handle masjid deletion
  const handleDeleteMasjid = async (masjidId) => {
    if (window.confirm('Are you sure you want to delete this masjid?')) {
      try {
        await deleteMasjid(masjidId);
      } catch (error) {
        console.error('Failed to delete masjid', error);
      }
    }
  };

  // Safely handle masjids data
  const masjidsList = masjids ? Object.values(masjids) : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Masjids</h1>
        <Button 
          onClick={openCreateModal}
          className="bg-green-700 hover:bg-green-800 text-white"
        >
          <PlusCircle className="mr-2" /> Add New Masjid
        </Button>
      </div>

      {/* Masjids Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {masjidsList.length > 0 ? (
          masjidsList.map((masjid) => (
            <Card 
              key={masjid.id} 
              className="hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{masjid.name}</CardTitle>
                  <div className="flex space-x-2">
                    <Button 
                      variant="ghost"
                      size="icon"
                      onClick={() => openEditModal(masjid)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteMasjid(masjid.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  {masjid.address?.street}, {masjid.address?.city}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="mr-2 h-4 w-4" />
                  Administrators: {masjid.administrators?.length || 0}
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-3 text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No masjids found. Click 'Add New Masjid' to create one.</p>
          </div>
        )}
      </div>

      {/* Create Masjid Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Create New Masjid</h2>
            <form onSubmit={handleCreateMasjid}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Masjid Name</label>
                <input
                  type="text"
                  name="name"
                  value={masjidForm.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Street Address</label>
                <input
                  type="text"
                  name="address.street"
                  value={masjidForm.address.street}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    name="address.city"
                    value={masjidForm.address.city}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">State</label>
                  <input
                    type="text"
                    name="address.state"
                    value={masjidForm.address.state}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Contact Email</label>
                <input
                  type="email"
                  name="contact.email"
                  value={masjidForm.contact.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Contact Phone</label>
                <input
                  type="tel"
                  name="contact.phone"
                  value={masjidForm.contact.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                />
              </div>
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
                  Create Masjid
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Masjid Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Edit Masjid</h2>
            <form onSubmit={handleUpdateMasjid}>
              {/* Similar fields to create modal, but pre-filled with existing data */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Masjid Name</label>
                <input
                  type="text"
                  name="name"
                  value={masjidForm.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                />
              </div>
              {/* Rest of the form fields similar to create modal */}
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
                  Update Masjid
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageMasjidsPage;