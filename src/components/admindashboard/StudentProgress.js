import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Book, Trophy, Star, MessageCircle, BookOpen, AlignLeft } from 'lucide-react';
import { useProgress } from '../../contexts/ProgressContext';
import { Card } from '../common/card';

const StudentProgress = () => {
  const { progressData, addAssessmentScore, addTeacherNote } = useProgress();
  const [selectedStudent, setSelectedStudent] = useState(progressData[0]);
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);
  const [noteModalOpen, setNoteModalOpen] = useState(false);
  
  // Assessment form state
  const [assessmentSubject, setAssessmentSubject] = useState('');
  const [assessmentScore, setAssessmentScore] = useState('');
  
  // Note form state
  const [teacherNote, setTeacherNote] = useState('');

  const subjectOptions = selectedStudent.programName.includes('Quran') || selectedStudent.programName.includes('Hifz')
    ? ['Quran Recitation', 'Tajweed Rules', 'Memorization', 'Understanding']
    : ['Arabic Vocabulary', 'Grammar Rules', 'Conversation', 'Writing'];

  const handleAssessmentSubmit = () => {
    if (!assessmentSubject || !assessmentScore) {
      alert('Please complete all fields');
      return;
    }

    const scoreNum = parseFloat(assessmentScore);
    if (isNaN(scoreNum) || scoreNum < 0 || scoreNum > 100) {
      alert('Please enter a valid score between 0 and 100');
      return;
    }

    // Add the assessment using the context function
    const success = addAssessmentScore(selectedStudent.id, assessmentSubject, scoreNum);
    
    if (success) {
      alert(`Assessment for ${assessmentSubject} has been recorded for ${selectedStudent.name}`);
      setAssessmentModalOpen(false);
      setAssessmentSubject('');
      setAssessmentScore('');
      
      // Update the selected student with the latest data
      const updatedStudent = progressData.find(p => p.id === selectedStudent.id);
      setSelectedStudent(updatedStudent);
    } else {
      alert('There was an error recording the assessment. Please try again.');
    }
  };

  const handleNoteSubmit = () => {
    if (!teacherNote.trim()) {
      alert('Please enter a note');
      return;
    }

    // Add the note using the context function
    const success = addTeacherNote(selectedStudent.id, teacherNote);
    
    if (success) {
      alert(`Note has been added for ${selectedStudent.name}`);
      setNoteModalOpen(false);
      setTeacherNote('');
      
      // Update the selected student with the latest data
      const updatedStudent = progressData.find(p => p.id === selectedStudent.id);
      setSelectedStudent(updatedStudent);
    } else {
      alert('There was an error adding the note. Please try again.');
    }
  };

  // Calculate attendance percentage
  const attendancePercentage = ((selectedStudent.attendedClasses / selectedStudent.totalClasses) * 100).toFixed(1);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <TrendingUp className="mr-3 text-green-600" /> Islamic Education Progress
        </h2>
      </div>

      {/* Student Selection */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Select Student
        </label>
        <select 
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={selectedStudent.id}
          onChange={(e) => {
            const student = progressData.find(
              s => s.id === parseInt(e.target.value)
            );
            setSelectedStudent(student);
          }}
        >
          {progressData.map(student => (
            <option key={student.id} value={student.id}>
              {student.name} - {student.programName}
            </option>
          ))}
        </select>
      </div>

      {/* Program Info */}
      <Card className="p-4 bg-green-50 mb-6">
        <div className="flex items-center">
          <BookOpen className="w-5 h-5 text-green-700 mr-2" />
          <span className="font-semibold text-green-800">{selectedStudent.programName}</span>
        </div>
      </Card>

      {/* Student Details - Top Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Attendance Overview */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Book className="mr-2 text-blue-600" /> Class Attendance
          </h3>
          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">Total Classes</p>
              <p className="text-2xl font-bold">{selectedStudent.totalClasses}</p>
            </div>
            <div>
              <p className="text-gray-600">Attended Classes</p>
              <p className="text-2xl font-bold text-green-600">
                {selectedStudent.attendedClasses}
              </p>
            </div>
            <div>
              <p className="text-gray-600">Attendance %</p>
              <p className="text-2xl font-bold text-blue-600">
                {attendancePercentage}%
              </p>
            </div>
          </div>
        </div>

        {/* Program-Specific Progress */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Trophy className="mr-2 text-yellow-600" /> Program Progress
          </h3>
          
          {selectedStudent.quranProgress && (
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Current Surah:</span>
                <span className="font-semibold">{selectedStudent.quranProgress.currentSurah}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Page:</span>
                <span className="font-semibold">{selectedStudent.quranProgress.currentPage}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Surahs Completed:</span>
                <span className="font-semibold">{selectedStudent.quranProgress.surahsCompleted}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Last Assessment:</span>
                <span className="font-semibold">{selectedStudent.quranProgress.lastAssessment}%</span>
              </div>
            </div>
          )}
          
          {selectedStudent.arabicProgress && (
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Level:</span>
                <span className="font-semibold">{selectedStudent.arabicProgress.level}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Vocabulary:</span>
                <span className="font-semibold">{selectedStudent.arabicProgress.vocabularyLearned} words</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Grammar Concepts:</span>
                <span className="font-semibold">{selectedStudent.arabicProgress.grammarConcepts}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Last Assessment:</span>
                <span className="font-semibold">{selectedStudent.arabicProgress.lastAssessment}%</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Assessment Scores */}
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Star className="mr-2 text-yellow-500" /> Assessment Scores
            </h3>
            <button 
              onClick={() => setAssessmentModalOpen(true)}
              className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors"
            >
              Add Assessment
            </button>
          </div>
          <div className="space-y-3">
            {selectedStudent.assessmentScores.map((assessment, index) => (
              <div key={index} className="flex justify-between items-center p-2 bg-white rounded-md shadow-sm">
                <span>{assessment.subject}</span>
                <div className="flex items-center">
                  <Star className="mr-2 text-yellow-500 w-4 h-4" />
                  <span className={`font-bold ${
                    assessment.score >= 90 ? 'text-green-600' :
                    assessment.score >= 80 ? 'text-blue-600' :
                    assessment.score >= 70 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {assessment.score}%
                  </span>
                </div>
              </div>
            ))}
            {selectedStudent.assessmentScores.length === 0 && (
              <div className="text-center text-gray-500 p-4">
                No assessments recorded yet
              </div>
            )}
          </div>
        </div>

        {/* Teacher Notes */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold flex items-center">
              <MessageCircle className="mr-2 text-green-600" /> Teacher Notes
            </h3>
            <button 
              onClick={() => setNoteModalOpen(true)}
              className="px-3 py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 transition-colors"
            >
              Add Note
            </button>
          </div>
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {selectedStudent.teacherNotes.map((note, index) => (
              <div key={index} className="p-2 bg-white rounded-md shadow-sm">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <AlignLeft className="mr-1 w-4 h-4" />
                  <span>{note.date}</span>
                </div>
                <p className="text-gray-700">{note.note}</p>
              </div>
            ))}
            {selectedStudent.teacherNotes.length === 0 && (
              <div className="text-center text-gray-500 p-4">
                No teacher notes available
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Progress Chart */}
      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <TrendingUp className="mr-2 text-green-600" /> Monthly Progress
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={selectedStudent.progressData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[0, 100]} />
            <Tooltip formatter={(value) => [`${value}%`, 'Progress']} />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="progress" 
              name="Overall Progress" 
              stroke="#10B981" 
              activeDot={{ r: 8 }} 
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Assessment Modal */}
      {assessmentModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add Assessment</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Student</label>
              <div className="p-2 bg-gray-100 rounded-md">
                {selectedStudent.name} - {selectedStudent.programName}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Subject</label>
              <select
                className="w-full p-2 border rounded-md"
                value={assessmentSubject}
                onChange={(e) => setAssessmentSubject(e.target.value)}
              >
                <option value="">Select Subject</option>
                {subjectOptions.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Score (%)</label>
              <input 
                type="number" 
                className="w-full p-2 border rounded-md"
                value={assessmentScore}
                onChange={(e) => setAssessmentScore(e.target.value)}
                placeholder="Enter score (0-100)"
                min="0"
                max="100"
              />
            </div>
            <div className="flex justify-between">
              <button 
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                onClick={() => setAssessmentModalOpen(false)}
              >
                Cancel
              </button>
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                onClick={handleAssessmentSubmit}
              >
                Save Assessment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Note Modal */}
      {noteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add Teacher Note</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Student</label>
              <div className="p-2 bg-gray-100 rounded-md">
                {selectedStudent.name} - {selectedStudent.programName}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Note</label>
              <textarea 
                className="w-full p-2 border rounded-md"
                value={teacherNote}
                onChange={(e) => setTeacherNote(e.target.value)}
                placeholder="Enter teaching notes, observations, or recommendations..."
                rows="4"
              />
            </div>
            <div className="flex justify-between">
              <button 
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                onClick={() => setNoteModalOpen(false)}
              >
                Cancel
              </button>
              <button 
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                onClick={handleNoteSubmit}
              >
                Save Note
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentProgress;