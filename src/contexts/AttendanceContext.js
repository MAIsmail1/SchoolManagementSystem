import React, { createContext, useState, useContext } from 'react';
import { useClasses } from './ClassesContext';

// Create context
const AttendanceContext = createContext();

// Provider component
export const AttendanceProvider = ({ children }) => {
  const { classes } = useClasses();
  
  // Initial attendance data - with masjid focus
  const [attendanceData, setAttendanceData] = useState({
    'Quran Level 1': {
      '2025-02-24': [
        {
          id: 1,
          name: 'Ahmad Khan',
          attendance: 'present',
          notes: '',
          lateMinutes: 0
        },
        {
          id: 2,
          name: 'Fatima Ali',
          attendance: 'absent',
          notes: 'Family emergency',
          lateMinutes: 0
        },
        {
          id: 3,
          name: 'Yusuf Rahman',
          attendance: 'late',
          notes: 'Traffic delay',
          lateMinutes: 15
        }
      ]
    },
    'Hifz Program': {
      '2025-02-24': [
        {
          id: 1,
          name: 'Ibrahim Hassan',
          attendance: 'present',
          notes: '',
          lateMinutes: 0
        },
        {
          id: 2,
          name: 'Aisha Ahmed',
          attendance: 'present',
          notes: '',
          lateMinutes: 0
        },
        {
          id: 3,
          name: 'Zainab Khan',
          attendance: 'absent',
          notes: 'Sick',
          lateMinutes: 0
        }
      ]
    },
    'Arabic Basics': {
      '2025-02-24': [
        {
          id: 1,
          name: 'Omar Farooq',
          attendance: 'present',
          notes: '',
          lateMinutes: 0
        },
        {
          id: 2,
          name: 'Mariam Siddiqui',
          attendance: 'late',
          notes: 'Traffic',
          lateMinutes: 10
        }
      ]
    }
  });

  // Get attendance for a specific class and date
  const getAttendance = (className, date) => {
    if (attendanceData[className] && attendanceData[className][date]) {
      return attendanceData[className][date];
    }
    return [];
  };

  // Update attendance status
  const updateAttendanceStatus = (className, date, studentId, status, notes = '', lateMinutes = 0) => {
    setAttendanceData(prevData => {
      // Create deep copy to avoid mutation
      const newData = JSON.parse(JSON.stringify(prevData));
      
      // Ensure the structure exists
      if (!newData[className]) {
        newData[className] = {};
      }
      
      if (!newData[className][date]) {
        newData[className][date] = [];
      }
      
      // Find the student
      const studentIndex = newData[className][date].findIndex(s => s.id === studentId);
      
      if (studentIndex !== -1) {
        // Update existing student
        newData[className][date][studentIndex] = {
          ...newData[className][date][studentIndex],
          attendance: status,
          notes: notes || newData[className][date][studentIndex].notes,
          lateMinutes: status === 'late' ? (lateMinutes || newData[className][date][studentIndex].lateMinutes) : 0
        };
      } else {
        // Student not found - this would typically not happen in a real app
        // as attendance records would be initialized for all students
        console.error('Student not found in attendance records');
      }
      
      return newData;
    });
  };

  // Add new attendance records for a class and date
  const addAttendanceRecords = (className, date, students) => {
    setAttendanceData(prevData => {
      // Create deep copy to avoid mutation
      const newData = JSON.parse(JSON.stringify(prevData));
      
      // Ensure the structure exists
      if (!newData[className]) {
        newData[className] = {};
      }
      
      // Initialize with all students marked as 'present'
      newData[className][date] = students.map(student => ({
        id: student.id,
        name: student.name,
        attendance: 'present',
        notes: '',
        lateMinutes: 0
      }));
      
      return newData;
    });
  };

  // Calculate attendance statistics for a specific class and date
  const getAttendanceStats = (className, date) => {
    const records = getAttendance(className, date);
    const total = records.length;
    const present = records.filter(s => s.attendance === 'present').length;
    const absent = records.filter(s => s.attendance === 'absent').length;
    const late = records.filter(s => s.attendance === 'late').length;

    return {
      total,
      present,
      absent,
      late,
      presentPercentage: total > 0 ? ((present + late) / total * 100).toFixed(1) : '0.0'
    };
  };

  return (
    <AttendanceContext.Provider 
      value={{ 
        getAttendance,
        updateAttendanceStatus,
        addAttendanceRecords,
        getAttendanceStats
      }}
    >
      {children}
    </AttendanceContext.Provider>
  );
};

// Custom hook for using the attendance context
export const useAttendance = () => {
  const context = useContext(AttendanceContext);
  if (!context) {
    throw new Error('useAttendance must be used within an AttendanceProvider');
  }
  return context;
};