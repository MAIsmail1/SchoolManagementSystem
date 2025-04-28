import React, { createContext, useState, useContext } from 'react';

// Initial classes data - Adapted for masjid context
const initialClasses = [
  {
    id: 1,
    name: 'Quran Recitation Level 1',
    teacher: 'Ustadh Abdullah Rahman',
    students: 15,
    schedule: [
      { day: 'Monday', time: '6:00 PM - 7:30 PM' },
      { day: 'Wednesday', time: '6:00 PM - 7:30 PM' }
    ],
    room: 'Classroom A',
    maxStudents: 20,
    description: 'For beginners learning to read the Quran with basic tajweed rules.'
  },
  {
    id: 2,
    name: 'Hifz Program',
    teacher: 'Hafiz Muhammad Saeed',
    students: 10,
    schedule: [
      { day: 'Tuesday', time: '5:00 PM - 7:00 PM' },
      { day: 'Thursday', time: '5:00 PM - 7:00 PM' },
      { day: 'Saturday', time: '10:00 AM - 12:00 PM' }
    ],
    room: 'Hifz Room',
    maxStudents: 12,
    description: 'Advanced program for memorization of the Quran.'
  },
  {
    id: 3,
    name: 'Arabic for Beginners',
    teacher: 'Ustadha Maryam Siddiqui',
    students: 18,
    schedule: [
      { day: 'Monday', time: '7:30 PM - 9:00 PM' },
      { day: 'Friday', time: '6:30 PM - 8:00 PM' }
    ],
    room: 'Classroom B',
    maxStudents: 25,
    description: 'Introduction to Arabic alphabet, vocabulary, and basic conversation.'
  },
  {
    id: 4,
    name: 'Islamic Studies',
    teacher: 'Imam Yusuf Ali',
    students: 20,
    schedule: [
      { day: 'Saturday', time: '2:00 PM - 4:00 PM' },
      { day: 'Sunday', time: '11:00 AM - 1:00 PM' }
    ],
    room: 'Main Hall',
    maxStudents: 30,
    description: 'Covers fundamentals of Islamic beliefs, practices, and history.'
  }
];

// Create context
const ClassesContext = createContext();

// Provider component
export const ClassesProvider = ({ children }) => {
  const [classes, setClasses] = useState(initialClasses);

  // Add new class
  const addClass = (classData) => {
    const newClass = {
      ...classData,
      id: classes.length > 0 ? Math.max(...classes.map(c => c.id)) + 1 : 1,
      students: 0 // New classes start with 0 students
    };
    
    setClasses([...classes, newClass]);
    
    return newClass.id;
  };

  // Update class
  const updateClass = (classId, updatedData) => {
    setClasses(classes.map(cls => 
      cls.id === classId 
        ? { ...cls, ...updatedData }
        : cls
    ));
  };

  // Delete class
  const deleteClass = (classId) => {
    setClasses(classes.filter(cls => cls.id !== classId));
  };

  // Assign student to class
  const assignStudentToClass = (classId) => {
    setClasses(classes.map(cls => 
      cls.id === classId 
        ? { ...cls, students: cls.students + 1 }
        : cls
    ));
  };

  // Remove student from class
  const removeStudentFromClass = (classId) => {
    setClasses(classes.map(cls => 
      cls.id === classId && cls.students > 0
        ? { ...cls, students: cls.students - 1 }
        : cls
    ));
  };

  return (
    <ClassesContext.Provider 
      value={{ 
        classes,
        addClass,
        updateClass,
        deleteClass,
        assignStudentToClass,
        removeStudentFromClass
      }}
    >
      {children}
    </ClassesContext.Provider>
  );
};

// Custom hook for using the classes context
export const useClasses = () => {
  const context = useContext(ClassesContext);
  if (!context) {
    throw new Error('useClasses must be used within a ClassesProvider');
  }
  return context;
};