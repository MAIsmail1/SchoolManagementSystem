// src/contexts/MasjidContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';

const MasjidContext = createContext(null);

export const MasjidProvider = ({ children }) => {
  const [currentMasjid, setCurrentMasjid] = useState(null);
  const [masjidTheme, setMasjidTheme] = useState({});
  const [loading, setLoading] = useState(true);
  const [masjids, setMasjids] = useState({});
  const { user } = useAuth(); // Integrate with AuthContext

  // Existing methods remain the same...
  const loadMasjidData = async (masjidId) => {
    // ... (keep existing implementation)
  };

  const addMasjid = async (masjidData) => {
    try {
      setLoading(true);
      
      // Add createdBy field for tracking who created the masjid
      const formattedMasjidData = {
        ...masjidData,
        createdBy: user ? user._id : null,
        createdAt: new Date().toISOString(),
        status: 'active',
        usersCount: 0,
        administrators: [], // New field for tracking masjid admins
      };
      
      // Update the local masjids state
      setMasjids(prev => ({
        ...prev,
        [masjidData.id]: formattedMasjidData
      }));
      
      setLoading(false);
      return masjidData.id;
    } catch (error) {
      console.error("Error adding masjid:", error);
      setLoading(false);
      throw error;
    }
  };

  // New method to add masjid administrator
  const addMasjidAdmin = async (masjidId, adminData) => {
    try {
      setLoading(true);
      
      // Update the local state
      setMasjids(prev => {
        const updatedMasjids = {...prev};
        if (updatedMasjids[masjidId]) {
          updatedMasjids[masjidId].administrators = [
            ...(updatedMasjids[masjidId].administrators || []),
            adminData
          ];
        }
        return updatedMasjids;
      });

      // If this is the current masjid, update current masjid state
      if (currentMasjid && currentMasjid.id === masjidId) {
        setCurrentMasjid(prev => ({
          ...prev,
          administrators: [
            ...(prev.administrators || []),
            adminData
          ]
        }));
      }
      
      setLoading(false);
      return adminData;
    } catch (error) {
      console.error("Error adding masjid admin:", error);
      setLoading(false);
      throw error;
    }
  };

  // New method to remove masjid administrator
  const removeMasjidAdmin = async (masjidId, adminId) => {
    try {
      setLoading(true);
      
      // Update the local state
      setMasjids(prev => {
        const updatedMasjids = {...prev};
        if (updatedMasjids[masjidId]) {
          updatedMasjids[masjidId].administrators = 
            (updatedMasjids[masjidId].administrators || [])
              .filter(admin => admin._id !== adminId);
        }
        return updatedMasjids;
      });

      // If this is the current masjid, update current masjid state
      if (currentMasjid && currentMasjid.id === masjidId) {
        setCurrentMasjid(prev => ({
          ...prev,
          administrators: 
            (prev.administrators || [])
              .filter(admin => admin._id !== adminId)
        }));
      }
      
      setLoading(false);
      return true;
    } catch (error) {
      console.error("Error removing masjid admin:", error);
      setLoading(false);
      throw error;
    }
  };

  // Enhanced method to get masjids for super admin
  const getAllMasjids = async () => {
    try {
      setLoading(true);
      
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // If user is super admin, return all masjids
      if (user && user.role === 'super_admin') {
        // Convert object to array for easier usage in components
        const masjidArray = Object.values(masjids);
        
        setLoading(false);
        return masjidArray;
      }
      
      // If not super admin, return only relevant masjids
      setLoading(false);
      return [];
    } catch (error) {
      console.error("Error getting all masjids:", error);
      setLoading(false);
      throw error;
    }
  };

  // Update the context value to include new methods
  return (
    <MasjidContext.Provider value={{
      currentMasjid,
      masjidTheme,
      loading,
      loadMasjidData,
      addMasjid,
      updateMasjid,
      deleteMasjid,
      getAllMasjids,
      // New methods
      addMasjidAdmin,
      removeMasjidAdmin
    }}>
      {children}
    </MasjidContext.Provider>
  );
};

export const useMasjid = () => {
  const context = useContext(MasjidContext);
  if (!context) {
    throw new Error('useMasjid must be used within a MasjidProvider');
  }
  return context;
};

export default MasjidContext;