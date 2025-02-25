import React, { createContext, useState, useContext } from 'react';

// Initial progress data - Adapted for masjid context
const initialProgressData = [
  {
    id: 1,
    name: 'Ahmad Khan',
    totalClasses: 25,
    attendedClasses: 22,
    programName: 'Quran Level 1',
    quranProgress: {
      surahsCompleted: 5,
      currentSurah: 'Al-Fatihah',
      currentPage: 8,
      lastAssessment: 85
    },
    assessmentScores: [
      { subject: 'Quran Recitation', score: 85 },
      { subject: 'Tajweed Rules', score: 78 },
      { subject: 'Memorization', score: 82 }
    ],
    progressData: [
      { month: 'Jan', progress: 65 },
      { month: 'Feb', progress: 72 },
      { month: 'Mar', progress: 80 },
      { month: 'Apr', progress: 85 },
      { month: 'May', progress: 90 }
    ],
    teacherNotes: [
      { date: '2025-01-15', note: 'Ahmad has excellent pronunciation in recitation.' },
      { date: '2025-02-20', note: 'Needs to work on tajweed rules for noon sakinah.' },
      { date: '2025-04-10', note: 'Great improvement in memorization speed.' }
    ]
  },
  {
    id: 2,
    name: 'Fatima Ali',
    totalClasses: 26,
    attendedClasses: 24,
    programName: 'Hifz Program',
    quranProgress: {
      surahsCompleted: 12,
      currentSurah: 'Al-Baqarah',
      currentPage: 32,
      lastAssessment: 92
    },
    assessmentScores: [
      { subject: 'Quran Recitation', score: 95 },
      { subject: 'Tajweed Rules', score: 88 },
      { subject: 'Memorization', score: 92 }
    ],
    progressData: [
      { month: 'Jan', progress: 70 },
      { month: 'Feb', progress: 78 },
      { month: 'Mar', progress: 85 },
      { month: 'Apr', progress: 90 },
      { month: 'May', progress: 95 }
    ],
    teacherNotes: [
      { date: '2025-01-10', note: 'Excellent memorization pace.' },
      { date: '2025-03-05', note: 'Mastering tajweed rules exceptionally well.' },
      { date: '2025-04-15', note: 'Completed Juz 1 with excellent retention.' }
    ]
  },
  {
    id: 3,
    name: 'Yusuf Rahman',
    totalClasses: 24,
    attendedClasses: 19,
    programName: 'Arabic Basics',
    arabicProgress: {
      level: 'Beginner',
      vocabularyLearned: 120,
      grammarConcepts: 8,
      lastAssessment: 78
    },
    assessmentScores: [
      { subject: 'Arabic Vocabulary', score: 82 },
      { subject: 'Grammar Rules', score: 75 },
      { subject: 'Conversation', score: 68 }
    ],
    progressData: [
      { month: 'Jan', progress: 60 },
      { month: 'Feb', progress: 65 },
      { month: 'Mar', progress: 72 },
      { month: 'Apr', progress: 78 },
      { month: 'May', progress: 82 }
    ],
    teacherNotes: [
      { date: '2025-01-20', note: 'Good progress with basic vocabulary.' },
      { date: '2025-02-15', note: 'Needs extra practice with verb conjugations.' },
      { date: '2025-04-05', note: 'Showing improvement in forming basic sentences.' }
    ]
  }
];

// Create context
const ProgressContext = createContext();

// Provider component
export const ProgressProvider = ({ children }) => {
  const [progressData, setProgressData] = useState(initialProgressData);

  // Get progress data for a specific student
  const getStudentProgress = (studentId) => {
    return progressData.find(progress => progress.id === studentId);
  };

  // Add a new assessment score
  const addAssessmentScore = (studentId, subject, score) => {
    setProgressData(prevData => 
      prevData.map(student => {
        if (student.id === studentId) {
          // Check if the subject already exists
          const existingIndex = student.assessmentScores.findIndex(
            assessment => assessment.subject === subject
          );
          
          let updatedScores;
          if (existingIndex !== -1) {
            // Update existing assessment
            updatedScores = student.assessmentScores.map((assessment, index) => 
              index === existingIndex 
                ? { ...assessment, score: parseFloat(score) }
                : assessment
            );
          } else {
            // Add new assessment
            updatedScores = [
              ...student.assessmentScores, 
              { subject, score: parseFloat(score) }
            ];
          }
          
          return {
            ...student,
            assessmentScores: updatedScores
          };
        }
        return student;
      })
    );
    
    return true; // Success indicator
  };

  // Add a teacher note
  const addTeacherNote = (studentId, note) => {
    setProgressData(prevData => 
      prevData.map(student => {
        if (student.id === studentId) {
          return {
            ...student,
            teacherNotes: [
              ...student.teacherNotes,
              {
                date: new Date().toISOString().split('T')[0],
                note
              }
            ]
          };
        }
        return student;
      })
    );
    
    return true; // Success indicator
  };

  // Update Quran progress
  const updateQuranProgress = (studentId, progressData) => {
    setProgressData(prevData => 
      prevData.map(student => {
        if (student.id === studentId && student.quranProgress) {
          return {
            ...student,
            quranProgress: {
              ...student.quranProgress,
              ...progressData
            }
          };
        }
        return student;
      })
    );
    
    return true; // Success indicator
  };

  // Update Arabic progress
  const updateArabicProgress = (studentId, progressData) => {
    setProgressData(prevData => 
      prevData.map(student => {
        if (student.id === studentId && student.arabicProgress) {
          return {
            ...student,
            arabicProgress: {
              ...student.arabicProgress,
              ...progressData
            }
          };
        }
        return student;
      })
    );
    
    return true; // Success indicator
  };

  return (
    <ProgressContext.Provider 
      value={{ 
        progressData,
        getStudentProgress,
        addAssessmentScore,
        addTeacherNote,
        updateQuranProgress,
        updateArabicProgress
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

// Custom hook for using the progress context
export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};