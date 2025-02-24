import React, { createContext, useState, useContext } from 'react';

// Initial students data
const initialStudents = [
  {
    id: 1,
    name: 'John Doe',
    dob: '2018-05-15',
    address: '123 School Lane, City',
    medicalHistory: 'No allergies',
    parentName: 'Jane Doe',
    phoneNumber: '07700 900123',
    emergencyContactName: 'Bob Doe',
    emergencyContactNumber: '07700 900124',
    className: 'Year 1'
  },
  {
    id: 2,
    name: 'Sarah Smith',
    dob: '2017-08-22',
    address: '456 Education Road, Town',
    medicalHistory: 'Asthma',
    parentName: 'Mike Smith',
    phoneNumber: '07700 900125',
    emergencyContactName: 'Lisa Smith',
    emergencyContactNumber: '07700 900126',
    className: 'Year 2'
  }
];

// Initial waiting list data
const initialWaitingList = [
  {
    id: 1,
    name: 'Emma Wilson',
    dob: '2019-03-10',
    address: '789 Learning Ave, City',
    medicalHistory: 'None',
    parentName: 'David Wilson',
    phoneNumber: '07700 900127',
    emergencyContactName: 'Mary Wilson',
    emergencyContactNumber: '07700 900128',
    status: 'Pending',
    applicationDate: '2025-01-15',
    preferredClass: 'Nursery',
    notes: '',
    siblingInSchool: false,
    siblingName: '',
    reasonForApplication: 'Moving to the area'
  },
  {
    id: 2,
    name: 'James Brown',
    dob: '2018-11-25',
    address: '321 Study Street, Town',
    medicalHistory: 'Peanut allergy',
    parentName: 'Susan Brown',
    phoneNumber: '07700 900129',
    emergencyContactName: 'Tom Brown',
    emergencyContactNumber: '07700 900130',
    status: 'Documents Required',
    applicationDate: '2025-01-20',
    preferredClass: 'Reception',
    notes: 'Needs to provide medical documentation',
    siblingInSchool: true,
    siblingName: 'Oliver Brown',
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

  // Delete enrolled student
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