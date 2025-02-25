import React, { useState, useEffect } from 'react';
import { FileText, Plus, Save, Calendar } from 'lucide-react';

const TeacherExam = () => {
  const [exams, setExams] = useState([]);
  const [selectedExam, setSelectedExam] = useState(null);
  const [students, setStudents] = useState([]);
  const [examResults, setExamResults] = useState({});
  const [newExam, setNewExam] = useState({ name: '', date: '' });

  useEffect(() => {
    // Fetch exams - replace with actual API call
    fetchExams();
    fetchStudents();
  }, []);

  const fetchExams = () => {
    const mockExams = [
      { id: 1, name: 'Surah Al-Fatiha Assessment', date: '2023-05-15' },
      { id: 2, name: 'Tajweed Rules Exam', date: '2023-06-30' },
    ];
    setExams(mockExams);
  };

  const fetchStudents = () => {
    const mockStudents = [
      { id: 1, name: 'Ahmed Hassan' },
      { id: 2, name: 'Fatima Khan' },
      { id: 3, name: 'Yusuf Ali' },
    ];
    setStudents(mockStudents);
  };

  useEffect(() => {
    if (selectedExam) {
      // Fetch exam results for selected exam - replace with actual API call
      fetchExamResults(selectedExam.id);
    }
  }, [selectedExam]);

  const fetchExamResults = (examId) => {
    const mockResults = {
      1: 85,
      2: 92,
      3: 78,
    };
    setExamResults(mockResults);
  };

  const handleExamChange = (e) => {
    const exam = exams.find(ex => ex.id === parseInt(e.target.value));
    setSelectedExam(exam);
  };

  const handleScoreChange = (studentId, score) => {
    setExamResults(prev => ({
      ...prev,
      [studentId]: score
    }));
  };

  const handleNewExamChange = (e) => {
    setNewExam({ ...newExam, [e.target.name]: e.target.value });
  };

  const addNewExam = (e) => {
    e.preventDefault();
    if (newExam.name && newExam.date) {
      const newExamWithId = { ...newExam, id: Date.now() };
      setExams([...exams, newExamWithId]);
      setNewExam({ name: '', date: '' });
    }
  };

  const saveExamResults = () => {
    console.log('Saving exam results for', selectedExam, examResults);
    alert('Exam results saved successfully!');
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <FileText className="mr-2 text-green-600 w-6 h-6" />
        Quran Assessments
      </h2>
      <div className="mb-4">
        <label htmlFor="exam" className="block text-sm font-medium text-gray-700">Select Assessment</label>
        <select
          id="exam"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
          onChange={handleExamChange}
          value={selectedExam?.id || ''}
        >
          <option value="">Select an assessment</option>
          {exams.map(exam => (
            <option key={exam.id} value={exam.id}>{exam.name} - {exam.date}</option>
          ))}
        </select>
      </div>
      {selectedExam && (
        <div className="mb-4 animate-fade-in">
          <h3 className="text-lg font-medium mb-2 flex items-center">
            <Calendar className="mr-2 text-green-600 w-5 h-5" />
            Enter Assessment Scores for {selectedExam.name}
          </h3>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student, index) => (
                <tr key={student.id} className="animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                  <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={examResults[student.id] || ''}
                      onChange={(e) => handleScoreChange(student.id, e.target.value)}
                      className="w-20 px-2 py-1 border rounded transition-all duration-300 ease-in-out focus:ring-2 focus:ring-green-500"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {examResults[student.id] ? (
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        examResults[student.id] >= 90 ? 'bg-green-100 text-green-800' :
                        examResults[student.id] >= 70 ? 'bg-blue-100 text-blue-800' :
                        examResults[student.id] >= 50 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {examResults[student.id] >= 90 ? 'Excellent' :
                         examResults[student.id] >= 70 ? 'Good' :
                         examResults[student.id] >= 50 ? 'Average' : 'Needs Improvement'}
                      </span>
                    ) : ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button 
            onClick={saveExamResults} 
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Assessment Results
          </button>
        </div>
      )}
      <div className="mt-8 animate-fade-in border-t pt-4">
        <h3 className="text-lg font-medium mb-2 flex items-center">
          <Plus className="mr-2 text-green-600 w-5 h-5" />
          Add New Assessment
        </h3>
        <form onSubmit={addNewExam} className="flex space-x-2">
          <input
            type="text"
            name="name"
            value={newExam.name}
            onChange={handleNewExamChange}
            placeholder="Assessment Name (e.g., Surah Al-Kahf Test)"
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
          />
          <input
            type="date"
            name="date"
            value={newExam.date}
            onChange={handleNewExamChange}
            className="w-48 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
          />
          <button 
            type="submit" 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Add Assessment
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherExam;