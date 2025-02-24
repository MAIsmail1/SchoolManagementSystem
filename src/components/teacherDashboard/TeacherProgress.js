import React, { useState, useEffect } from 'react';

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
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Bob Johnson' },
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
      { subject: 'Math', scores: [85, 90, 88, 92] },
      { subject: 'Science', scores: [78, 82, 85, 80] },
      { subject: 'English', scores: [90, 88, 92, 95] },
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

  return (
    <div className="bg-white shadow rounded-lg p-6 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4">Student Progress</h2>
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
          <h3 className="text-xl font-semibold mb-2">Progress Report for {selectedStudent.name}</h3>
          <table className="min-w-full divide-y divide-gray-200 mb-4">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress Trend</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {progressData.map((subject, index) => (
                <tr key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                  <td className="px-6 py-4 whitespace-nowrap">{subject.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{calculateAverage(subject.scores).toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded ${
                      getProgressTrend(subject.scores) === 'positive' ? 'bg-green-200 text-green-800' :
                      getProgressTrend(subject.scores) === 'negative' ? 'bg-red-200 text-red-800' :
                      'bg-gray-200 text-gray-800'
                    } transition-colors duration-300 ease-in-out`}>
                      {getProgressTrend(subject.scores) === 'positive' ? 'Improving' :
                       getProgressTrend(subject.scores) === 'negative' ? 'Declining' : 'Stable'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            <h4 className="text-lg font-medium mb-2">Add New Progress Entry</h4>
            <form onSubmit={addNewProgress} className="flex space-x-2">
              <input
                type="text"
                name="subject"
                value={newProgress.subject}
                onChange={handleNewProgressChange}
                placeholder="Subject"
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
              />
              <input
                type="number"
                name="score"
                value={newProgress.score}
                onChange={handleNewProgressChange}
                placeholder="Score"
                min="0"
                max="100"
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
              />
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
                Add Progress
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherProgress;