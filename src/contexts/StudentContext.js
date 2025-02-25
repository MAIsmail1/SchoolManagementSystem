import React, { createContext, useState, useContext } from 'react';

// Initial students data - Now adjusted for masjid/Islamic classes
const initialStudents = [
  {
    id: 1,
    name: 'Ahmad Khan',
    dob: '2018-05-15',
    address: '123 Main Street, City',
    medicalHistory: 'No allergies',
    parentName: 'Yusuf Khan',
    phoneNumber: '07700 900123',
    emergencyContactName: 'Sarah Khan',
    emergencyContactNumber: '07700 900124',
    className: 'Quran Level 1'
  },
  {
    id: 2,
    name: 'Fatima Ali',
    dob: '2017-08-22',
    address: '456 Mosque Road, Town',
    medicalHistory: 'Asthma',
    parentName: 'Ibrahim Ali',
    phoneNumber: '07700 900125',
    emergencyContactName: 'Aisha Ali',
    emergencyContactNumber: '07700 900126',
    className: 'Islamic Studies'
  }
];

// Initial waiting list data - Adjusted for masjid context
const initialWaitingList = [
  {
    id: 1,
    name: 'Hassan Ahmed',
    dob: '2019-03-10',
    address: '789 Prayer Ave, City',
    medicalHistory: 'None',
    parentName: 'Mohammed Ahmed',
    phoneNumber: '07700 900127',
    emergencyContactName: 'Khadija Ahmed',
    emergencyContactNumber: '07700 900128',
    status: 'Pending',
    applicationDate: '2025-01-15',
    preferredClass: 'Quran Level 1',
    notes: '',
    siblingInProgram: false,
    siblingName: '',
    reasonForApplication: 'Wants to learn Quran'
  },
  {
    id: 2,
    name: 'Zainab Hassan',
    dob: '2018-11-25',
    address: '321 Community Street, Town',
    medicalHistory: 'Peanut allergy',
    parentName: 'Omar Hassan',
    phoneNumber: '07700 900129',
    emergencyContactName: 'Mariam Hassan',
    emergencyContactNumber: '07700 900130',
    status: 'Documents Required',
    applicationDate: '2025-01-20',
    preferredClass: 'Arabic Basics',
    notes: 'Needs to provide medical documentation',
    siblingInProgram: true,
    siblingName: 'Abdullah Hassan',
    reasonForApplication: 'Sibling already enrolled'
  }
];

// Create context
const StudentContext = createContext();

// Provider component
export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(initialStudents);
  const [waitingListStudents, setWaitingListStudents] = useState(initialWaitingList);

  // Add new enrolled student
  const addStudent = (studentData) => {
    const newStudent = {
      ...studentData,
      id: students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1
    };
    setStudents([...students, newStudent]);
    return newStudent.id;
  };

  // Add new waiting list student
  const addWaitingListStudent = (studentData) => {
    const newStudent = {
      ...studentData,
      id: waitingListStudents.length > 0 
        ? Math.max(...waitingListStudents.map(s => s.id)) + 1 
        : 1
    };
    setWaitingListStudents([...waitingListStudents, newStudent]);
    return newStudent.id;
  };

  // Move student from waiting list to enrolled
  const enrollWaitingListStudent = (studentId) => {
    const student = waitingListStudents.find(s => s.id === studentId);
    if (student) {
      // Convert waiting list student to enrolled student format
      const enrolledStudent = {
        id: students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1,
        name: student.name,
        dob: student.dob,
        address: student.address,
        medicalHistory: student.medicalHistory,
        parentName: student.parentName,
        phoneNumber: student.phoneNumber,
        emergencyContactName: student.emergencyContactName,
        emergencyContactNumber: student.emergencyContactNumber,
        className: student.preferredClass // Use preferred class as initial class
      };
      
      // Add to enrolled students
      setStudents([...students, enrolledStudent]);
      
      // Remove from waiting list
      setWaitingListStudents(waitingListStudents.filter(s => s.id !== studentId));
      
      return enrolledStudent.id;
    }
    return null;
  };

  // Update student class
  const updateStudentClass = (studentId, newClassName) => {
    setStudents(students.map(student => 
      student.id === studentId 
        ? { ...student, className: newClassName }
        : student
    ));
  };

  // Update waiting list student status
  const updateWaitingListStudentStatus = (studentId, newStatus) => {
    setWaitingListStudents(waitingListStudents.map(student => 
      student.id === studentId 
        ? { ...student, status: newStatus }
        : student
    ));
  };

  // Delete student
  const deleteStudent = (studentId) => {
    setStudents(students.filter(student => student.id !== studentId));
  };

  // Delete waiting list student
  const deleteWaitingListStudent = (studentId) => {
    setWaitingListStudents(waitingListStudents.filter(student => student.id !== studentId));
  };

  // Update student information
  const updateStudent = (studentId, updatedData) => {
    setStudents(students.map(student => 
      student.id === studentId 
        ? { ...student, ...updatedData }
        : student
    ));
  };

  // Update waiting list student information
  const updateWaitingListStudent = (studentId, updatedData) => {
    setWaitingListStudents(waitingListStudents.map(student => 
      student.id === studentId 
        ? { ...student, ...updatedData }
        : student
    ));
  };

  return (
    <StudentContext.Provider 
      value={{ 
        students, 
        waitingListStudents,
        addStudent, 
        addWaitingListStudent,
        enrollWaitingListStudent,
        updateStudentClass,
        updateWaitingListStudentStatus,
        deleteStudent,
        deleteWaitingListStudent,
        updateStudent,
        updateWaitingListStudent
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

// Custom hook for using the student context
export const useStudents = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudents must be used within a StudentProvider');
  }
  return context;
};