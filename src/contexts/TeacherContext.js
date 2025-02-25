import React, { createContext, useState, useContext } from 'react';

// Initial teachers data - Adapted for masjid context
const initialTeachers = [
  {
    id: 1,
    name: 'Imam Abdullah Rahman',
    firstName: 'Abdullah',
    lastName: 'Rahman',
    email: 'abdullah.rahman@masjid.com',
    phoneNumber: '07700 900131',
    qualifications: ['Hafiz', 'Alim'],
    subjects: ['Quran', 'Tafsir'],
    department: 'Quran Studies',
    startDate: '2022-09-01',
    status: 'Active',
    username: 'abdullahrahman',
    employmentType: 'Full-Time'
  },
  {
    id: 2,
    name: 'Ustadha Maryam Siddiqui',
    firstName: 'Maryam',
    lastName: 'Siddiqui',
    email: 'maryam.siddiqui@masjid.com',
    phoneNumber: '07700 900132',
    qualifications: ['Ijazah in Quran', 'Arabic Diploma'],
    subjects: ['Arabic', 'Islamic Studies'],
    department: 'Arabic Studies',
    startDate: '2021-09-01',
    status: 'Active',
    username: 'maryamsiddiqui',
    employmentType: 'Part-Time'
  }
];

// Create context
const TeacherContext = createContext();

// Provider component
export const TeacherProvider = ({ children }) => {
  const [teachers, setTeachers] = useState(initialTeachers);

  // Add new teacher
  const addTeacher = (teacherData) => {
    // Format the teacher data to match our expected structure
    const newTeacher = {
      ...teacherData,
      id: teachers.length > 0 ? Math.max(...teachers.map(t => t.id)) + 1 : 1,
      name: `${teacherData.firstName} ${teacherData.lastName}`,
      subjects: teacherData.subjectsTaught || [],
      startDate: teacherData.joiningDate,
      department: teacherData.departmentAssigned
    };
    
    setTeachers([...teachers, newTeacher]);
    
    return newTeacher.id;
  };

  // Update teacher
  const updateTeacher = (teacherId, updatedData) => {
    setTeachers(teachers.map(teacher => 
      teacher.id === teacherId 
        ? { 
            ...teacher, 
            ...updatedData,
            name: `${updatedData.firstName || teacher.firstName} ${updatedData.lastName || teacher.lastName}`
          }
        : teacher
    ));
  };

  // Delete teacher
  const deleteTeacher = (teacherId) => {
    setTeachers(teachers.filter(teacher => teacher.id !== teacherId));
  };

  // Update teacher status
  const updateTeacherStatus = (teacherId, newStatus) => {
    setTeachers(teachers.map(teacher => 
      teacher.id === teacherId 
        ? { ...teacher, status: newStatus }
        : teacher
    ));
  };

  return (
    <TeacherContext.Provider 
      value={{ 
        teachers,
        addTeacher,
        updateTeacher,
        deleteTeacher,
        updateTeacherStatus
      }}
    >
      {children}
    </TeacherContext.Provider>
  );
};

// Custom hook for using the teacher context
export const useTeachers = () => {
  const context = useContext(TeacherContext);
  if (!context) {
    throw new Error('useTeachers must be used within a TeacherProvider');
  }
  return context;
};