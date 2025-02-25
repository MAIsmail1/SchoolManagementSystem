import React, { useState, useEffect } from 'react';
import { TrendingUp, User, ChevronUp, ChevronDown, Minus, Plus } from 'lucide-react';

const TeacherProgress = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [progressData, setProgressData] = useState([]);
  const [newProgress, setNewProgress] = useState({ subject: '', score: '' });

  useEffect(() => {
    // Fetch students - replace with actual API call
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    const mockStudents = [
      { id: 1, name: 'Ahmed Hassan' },
      { id: 2, name: 'Fatima Khan' },
      { id: 3, name: 'Yusuf Ali' },
    ];
    setStudents(mockStudents);
  };

  useEffect(() => {
    if (selectedStudent) {
      // Fetch progress data for selected student - replace with actual API call
      fetchProgressData(selectedStudent.id);
    }
  }, [selectedStudent]);

  const fetchProgressData = (studentId) => {
    const mockProgressData = [
      { subject: 'Quran Memorization', scores: [85, 90, 88, 92] },
      { subject: 'Tajweed Rules', scores: [78, 82, 85, 80] },
      { subject: 'Arabic Vocabulary', scores: [90, 88, 92, 95] },
    ];
    setProgressData(mockProgressData);
  };

  const handleStudentChange = (e) => {
    const student = students.find(s => s.id === parseInt(e.target.value));
    setSelectedStudent(student);
  };

  const handleNewProgressChange = (e) => {
    setNewProgress({ ...newProgress, [e.target.name]: e.target.value });
  };

  const addNewProgress = (e) => {
    e.preventDefault();
    if (newProgress.subject && newProgress.score) {
      const updatedProgressData = progressData.map(item => {
        if (item.subject === newProgress.subject) {
          return { ...item, scores: [...item.scores, parseInt(newProgress.score)] };
        }
        return item;
      });

      if (!progressData.some(item => item.subject === newProgress.subject)) {
        updatedProgressData.push({ subject: newProgress.subject, scores: [parseInt(newProgress.score)] });
      }

      setProgressData(updatedProgressData);
      setNewProgress({ subject: '', score: '' });
    }
  };

  const calculateAverage = (scores) => {
    return scores.reduce((a, b) => a + b, 0) / scores.length;
  };

  const getProgressTrend = (scores) => {
    if (scores.length < 2) return 'neutral';
    return scores[scores.length - 1] > scores[scores.length - 2] ? 'positive' : 'negative';
  };

  // Subject options specific to Islamic education
  const subjectOptions = [
    'Quran Memorization',
    'Tajweed Rules',
    'Arabic Vocabulary',
    'Islamic Studies',
    'Quranic Grammar',
    'Du\'a Memorization'
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <TrendingUp className="mr-2 text-green-600 w-6 h-6" />
        Student Progress
      </h2>
      <div className="mb-4">
        <label htmlFor="student" className="block text-sm font-medium text-gray-700">Select Student</label>
        <select
          id="student"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
          onChange={handleStudentChange}
          value={selectedStudent?.id || ''}
        >
          <option value="">Select a student</option>
          {students.map(student => (
            <option key={student.id} value={student.id}>{student.name}</option>
          ))}
        </select>
      </div>
      {selectedStudent && (
        <div className="animate-fade-in">
          <h3 className="text-xl font-semibold mb-4 flex items-center border-b pb-2">
            <User className="mr-2 text-green-600 w-5 h-5" />
            Progress Report for {selectedStudent.name}
          </h3>
          <table className="min-w-full divide-y divide-gray-200 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress Trend</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Latest Score</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {progressData.map((subject, index) => (
                <tr key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{subject.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{calculateAverage(subject.scores).toFixed(1)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded flex items-center w-28 justify-center ${
                      getProgressTrend(subject.scores) === 'positive' ? 'bg-green-100 text-green-800' :
                      getProgressTrend(subject.scores) === 'negative' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    } transition-colors duration-300 ease-in-out`}>
                      {getProgressTrend(subject.scores) === 'positive' ? (
                        <>
                          <ChevronUp className="w-4 h-4 mr-1" />
                          Improving
                        </>
                      ) : getProgressTrend(subject.scores) === 'negative' ? (
                        <>
                          <ChevronDown className="w-4 h-4 mr-1" />
                          Declining
                        </>
                      ) : (
                        <>
                          <Minus className="w-4 h-4 mr-1" />
                          Stable
                        </>
                      )}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {subject.scores.length > 0 ? (
                      <span className={`px-3 py-1 rounded-full font-semibold ${
                        subject.scores[subject.scores.length - 1] >= 90 ? 'bg-green-100 text-green-800' :
                        subject.scores[subject.scores.length - 1] >= 75 ? 'bg-blue-100 text-blue-800' :
                        subject.scores[subject.scores.length - 1] >= 60 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {subject.scores[subject.scores.length - 1]}
                      </span>
                    ) : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 bg-gray-50 p-4 rounded-lg border">
            <h4 className="text-lg font-medium mb-3 flex items-center">
              <Plus className="w-5 h-5 mr-2 text-green-600" />
              Add New Progress Entry
            </h4>
            <form onSubmit={addNewProgress} className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-2">
              <div className="flex-1">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select
                  name="subject"
                  id="subject"
                  value={newProgress.subject}
                  onChange={handleNewProgressChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                  required
                >
                  <option value="">Select Subject</option>
                  {subjectOptions.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>
              <div className="w-full md:w-1/4">
                <label htmlFor="score" className="block text-sm font-medium text-gray-700 mb-1">Score</label>
                <input
                  type="number"
                  name="score"
                  id="score"
                  value={newProgress.score}
                  onChange={handleNewProgressChange}
                  placeholder="1-100"
                  min="0"
                  max="100"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                  required
                />
              </div>
              <div className="flex items-end">
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-auto"
                >
                  Add Progress
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherProgress;