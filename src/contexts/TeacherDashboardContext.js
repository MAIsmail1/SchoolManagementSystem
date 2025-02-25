import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';

// Initial class data for teacher
const initialClassData = [
  {
    id: 1,
    name: 'Quran Level 1',
    days: ['Monday', 'Wednesday'],
    times: '5:00 PM - 6:30 PM',
    room: 'Classroom A',
    students: [
      { id: 1, name: 'Ahmad Khan', attendanceHistory: {} },
      { id: 2, name: 'Fatima Ali', attendanceHistory: {} },
      { id: 3, name: 'Yusuf Rahman', attendanceHistory: {} }
    ]
  },
  {
    id: 2,
    name: 'Tajweed Basics',
    days: ['Tuesday', 'Thursday'],
    times: '6:30 PM - 8:00 PM',
    room: 'Classroom B',
    students: [
      { id: 4, name: 'Ibrahim Hassan', attendanceHistory: {} },
      { id: 5, name: 'Aisha Ahmed', attendanceHistory: {} },
      { id: 6, name: 'Omar Farooq', attendanceHistory: {} }
    ]
  }
];

// Initial diary entries
const initialDiaryEntries = [
  {
    id: 1,
    date: '2025-02-20',
    className: 'Quran Level 1',
    content: 'Covered Surah Al-Fatiha, focusing on proper pronunciation of Arabic letters.',
    homeworkAssigned: 'Practice reciting Surah Al-Fatiha 5 times daily.',
    materialsNeeded: 'Quran, Tajweed rules handout'
  },
  {
    id: 2,
    date: '2025-02-21',
    className: 'Tajweed Basics',
    content: 'Introduced rules of noon saakinah and tanween.',
    homeworkAssigned: 'Complete exercise sheet on noon saakinah rules.',
    materialsNeeded: 'Tajweed textbook, practice worksheets'
  }
];

// Initial exam data
const initialExamData = [
  {
    id: 1,
    title: 'Quran Recitation Assessment',
    date: '2025-03-15',
    className: 'Quran Level 1',
    description: 'Assessment of Surah Al-Fatiha and Al-Ikhlas recitation with proper tajweed.',
    totalMarks: 50,
    studentScores: [
      { studentId: 1, studentName: 'Ahmad Khan', score: 42, feedback: 'Excellent pronunciation' },
      { studentId: 2, studentName: 'Fatima Ali', score: 48, feedback: 'Outstanding tajweed application' },
      { studentId: 3, studentName: 'Yusuf Rahman', score: 38, feedback: 'Needs practice with makhaarij' }
    ]
  },
  {
    id: 2,
    title: 'Tajweed Rules Quiz',
    date: '2025-03-10',
    className: 'Tajweed Basics',
    description: 'Written quiz on noon saakinah, tanween, and meem saakinah rules.',
    totalMarks: 30,
    studentScores: [
      { studentId: 4, studentName: 'Ibrahim Hassan', score: 24, feedback: 'Good understanding of concepts' },
      { studentId: 5, studentName: 'Aisha Ahmed', score: 28, feedback: 'Excellent grasp of rules' },
      { studentId: 6, studentName: 'Omar Farooq', score: 22, feedback: 'Needs more practice with examples' }
    ]
  }
];

// Initial progress record
const initialProgressData = {
  'Quran Level 1': {
    'Ahmad Khan': {
      current: {
        surah: 'Al-Baqarah',
        ayah: 5,
        page: 2,
        juz: 1
      },
      memorization: {
        surahsCompleted: ['Al-Fatiha', 'Al-Ikhlas', 'Al-Falaq', 'An-Nas'],
        currentSurah: 'Al-Kawthar',
        progress: 67 // percentage
      },
      tajweed: {
        rulesLearned: ['Noon Saakinah', 'Meem Saakinah', 'Qalqalah'],
        currentFocus: 'Madd',
        overall: 75 // percentage
      },
      notes: [
        { date: '2025-02-20', note: 'Excellent progress with makhaarij' },
        { date: '2025-02-15', note: 'Needs practice with qalqalah' }
      ]
    },
    'Fatima Ali': {
      current: {
        surah: 'Al-Baqarah',
        ayah: 10,
        page: 3,
        juz: 1
      },
      memorization: {
        surahsCompleted: ['Al-Fatiha', 'Al-Ikhlas', 'Al-Falaq', 'An-Nas', 'Al-Kawthar', 'Al-Asr'],
        currentSurah: 'Al-Masad',
        progress: 80 // percentage
      },
      tajweed: {
        rulesLearned: ['Noon Saakinah', 'Meem Saakinah', 'Qalqalah', 'Madd'],
        currentFocus: 'Waqf',
        overall: 85 // percentage
      },
      notes: [
        { date: '2025-02-20', note: 'Outstanding memorization ability' },
        { date: '2025-02-12', note: 'Excellent application of tajweed rules' }
      ]
    }
  },
  'Tajweed Basics': {
    'Ibrahim Hassan': {
      tajweed: {
        rulesLearned: ['Noon Saakinah', 'Meem Saakinah'],
        currentFocus: 'Qalqalah',
        overall: 70 // percentage
      },
      practiceTexts: ['Surah Al-Fatiha', 'Surah Al-Ikhlas'],
      notes: [
        { date: '2025-02-18', note: 'Good progress with noon saakinah rules' }
      ]
    }
  }
};

// Initial communication data
const initialCommunicationData = [
  {
    id: 1,
    type: 'announcement',
    date: '2025-02-22',
    title: 'Eid Celebration',
    content: 'We will have a special Eid celebration after class next Wednesday. Please inform parents to pick children up 30 minutes later than usual.',
    sent: true,
    recipients: 'All Classes'
  },
  {
    id: 2,
    type: 'message',
    date: '2025-02-20',
    title: 'Homework Reminder',
    content: 'Please remind your child to complete the tajweed exercises before next class.',
    sent: true,
    recipient: 'Ibrahim Hassan',
    response: 'Thank you for the reminder, we will make sure he completes it.'
  },
  {
    id: 3,
    type: 'notification',
    date: '2025-02-25',
    title: 'Class Cancellation',
    content: 'Due to building maintenance, classes will be canceled on Friday. We will make up this session the following week.',
    sent: false,
    recipients: 'Quran Level 1'
  }
];

// Create the context
const TeacherDashboardContext = createContext();

// Provider component
export const TeacherDashboardProvider = ({ children }) => {
  const { user } = useAuth();
  const [teacherClasses, setTeacherClasses] = useState(initialClassData);
  const [diaryEntries, setDiaryEntries] = useState(initialDiaryEntries);
  const [examData, setExamData] = useState(initialExamData);
  const [progressData, setProgressData] = useState(initialProgressData);
  const [communicationData, setCommunicationData] = useState(initialCommunicationData);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   // In a real app, you would fetch data based on the logged-in teacher
  //   if (user) {
  //     // fetchTeacherData(user.id)
  //   }
  // }, [user]);

  // Attendance functions
  const getStudentsForClass = (classId) => {
    const classData = teacherClasses.find(c => c.id === classId);
    return classData ? classData.students : [];
  };

  const getAttendanceForDate = (classId, date) => {
    const classData = teacherClasses.find(c => c.id === classId);
    if (!classData) return [];

    return classData.students.map(student => {
      const attendance = student.attendanceHistory[date] || false;
      return { ...student, present: attendance };
    });
  };

  const saveAttendance = (classId, date, attendanceData) => {
    setTeacherClasses(currentClasses => 
      currentClasses.map(classItem => {
        if (classItem.id === classId) {
          const updatedStudents = classItem.students.map(student => {
            const studentAttendance = attendanceData.find(a => a.id === student.id);
            return {
              ...student,
              attendanceHistory: {
                ...student.attendanceHistory,
                [date]: studentAttendance ? studentAttendance.present : false
              }
            };
          });
          return { ...classItem, students: updatedStudents };
        }
        return classItem;
      })
    );
    return true;
  };

  // Diary functions
  const addDiaryEntry = (entry) => {
    const newEntry = {
      ...entry,
      id: diaryEntries.length > 0 ? Math.max(...diaryEntries.map(e => e.id)) + 1 : 1,
      date: entry.date || new Date().toISOString().split('T')[0]
    };
    setDiaryEntries([...diaryEntries, newEntry]);
    return newEntry.id;
  };

  const updateDiaryEntry = (entryId, updatedData) => {
    setDiaryEntries(currentEntries => 
      currentEntries.map(entry => 
        entry.id === entryId ? { ...entry, ...updatedData } : entry
      )
    );
    return true;
  };

  const deleteDiaryEntry = (entryId) => {
    setDiaryEntries(currentEntries => 
      currentEntries.filter(entry => entry.id !== entryId)
    );
    return true;
  };

  // Exam functions
  const addExam = (exam) => {
    const newExam = {
      ...exam,
      id: examData.length > 0 ? Math.max(...examData.map(e => e.id)) + 1 : 1,
      studentScores: exam.studentScores || []
    };
    setExamData([...examData, newExam]);
    return newExam.id;
  };

  const updateExam = (examId, updatedData) => {
    setExamData(currentExams => 
      currentExams.map(exam => 
        exam.id === examId ? { ...exam, ...updatedData } : exam
      )
    );
    return true;
  };

  const updateStudentScore = (examId, studentId, score, feedback) => {
    setExamData(currentExams => 
      currentExams.map(exam => {
        if (exam.id === examId) {
          const studentScoreIndex = exam.studentScores.findIndex(s => s.studentId === studentId);
          let updatedScores;
          
          if (studentScoreIndex !== -1) {
            updatedScores = exam.studentScores.map((scoreItem, index) => 
              index === studentScoreIndex ? { ...scoreItem, score, feedback } : scoreItem
            );
          } else {
            const student = teacherClasses
              .flatMap(c => c.students)
              .find(s => s.id === studentId);
              
            updatedScores = [
              ...exam.studentScores,
              { 
                studentId, 
                studentName: student ? student.name : `Student ID: ${studentId}`, 
                score, 
                feedback 
              }
            ];
          }
          
          return { ...exam, studentScores: updatedScores };
        }
        return exam;
      })
    );
    return true;
  };

  // Progress functions
  const updateStudentProgress = (className, studentName, progressType, progressData) => {
    setProgressData(currentProgress => {
      const classProgress = currentProgress[className] || {};
      const studentProgress = classProgress[studentName] || {};
      
      return {
        ...currentProgress,
        [className]: {
          ...classProgress,
          [studentName]: {
            ...studentProgress,
            [progressType]: {
              ...studentProgress[progressType],
              ...progressData
            }
          }
        }
      };
    });
    return true;
  };

  const addProgressNote = (className, studentName, note) => {
    setProgressData(currentProgress => {
      const classProgress = currentProgress[className] || {};
      const studentProgress = classProgress[studentName] || {};
      const studentNotes = studentProgress.notes || [];
      
      const newNote = {
        date: new Date().toISOString().split('T')[0],
        note
      };
      
      return {
        ...currentProgress,
        [className]: {
          ...classProgress,
          [studentName]: {
            ...studentProgress,
            notes: [...studentNotes, newNote]
          }
        }
      };
    });
    return true;
  };

  // Communication functions
  const addCommunication = (communication) => {
    const newCommunication = {
      ...communication,
      id: communicationData.length > 0 ? Math.max(...communicationData.map(c => c.id)) + 1 : 1,
      date: communication.date || new Date().toISOString().split('T')[0],
      sent: communication.sent || false
    };
    setCommunicationData([...communicationData, newCommunication]);
    return newCommunication.id;
  };

  const sendCommunication = (communicationId) => {
    setCommunicationData(currentCommunications => 
      currentCommunications.map(comm => 
        comm.id === communicationId ? { ...comm, sent: true } : comm
      )
    );
    return true;
  };

  const deleteCommunication = (communicationId) => {
    setCommunicationData(currentCommunications => 
      currentCommunications.filter(comm => comm.id !== communicationId)
    );
    return true;
  };

  return (
    <TeacherDashboardContext.Provider value={{
      teacherClasses,
      diaryEntries,
      examData,
      progressData,
      communicationData,
      loading,
      
      // Attendance
      getStudentsForClass,
      getAttendanceForDate,
      saveAttendance,
      
      // Diary
      addDiaryEntry,
      updateDiaryEntry,
      deleteDiaryEntry,
      
      // Exam
      addExam,
      updateExam,
      updateStudentScore,
      
      // Progress
      updateStudentProgress,
      addProgressNote,
      
      // Communication
      addCommunication,
      sendCommunication,
      deleteCommunication
    }}>
      {children}
    </TeacherDashboardContext.Provider>
  );
};

// Custom hook for using the teacher dashboard context
export const useTeacherDashboard = () => {
  const context = useContext(TeacherDashboardContext);
  if (!context) {
    throw new Error('useTeacherDashboard must be used within a TeacherDashboardProvider');
  }
  return context;
};