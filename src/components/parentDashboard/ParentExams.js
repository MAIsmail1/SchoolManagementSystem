import React, { useState, useEffect } from 'react';
import { FileText, Download, Calendar, PieChart } from 'lucide-react';

const ParentExams = ({ child }) => {
  const [examData, setExamData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedExam, setSelectedExam] = useState(null);
  const [filter, setFilter] = useState('all');
  
  const examTypes = [
    { value: 'all', label: 'All Assessments' },
    { value: 'quran', label: 'Quran Assessments' },
    { value: 'tajweed', label: 'Tajweed Assessments' },
    { value: 'arabic', label: 'Arabic Assessments' },
    { value: 'islamic', label: 'Islamic Studies Assessments' }
  ];

  useEffect(() => {
    if (child) {
      fetchExamData();
    }
  }, [child]);

  const fetchExamData = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const mockExamData = [
        {
          id: 1,
          type: 'quran',
          title: 'Surah Al-Baqarah (1-10) Memorization',
          date: '2023-05-15',
          score: 85,
          maxScore: 100,
          grade: 'B+',
          teacher: 'Ustadh Abdullah',
          feedback: 'Good memorization with minor errors. Needs to improve pronunciation of specific letters.',
          details: [
            { category: 'Memorization', score: 42, maxScore: 50 },
            { category: 'Tajweed', score: 25, maxScore: 30 },
            { category: 'Fluency', score: 18, maxScore: 20 }
          ]
        },
        {
          id: 2,
          type: 'tajweed',
          title: 'Tajweed Rules Assessment',
          date: '2023-04-10',
          score: 78,
          maxScore: 100,
          grade: 'C+',
          teacher: 'Ustadh Yusuf',
          feedback: 'Good understanding of basic rules. Needs more practice with Idgham and Ikhfa.',
          details: [
            { category: 'Noon Saakinah Rules', score: 18, maxScore: 25 },
            { category: 'Meem Saakinah Rules', score: 22, maxScore: 25 },
            { category: 'Qalqalah', score: 20, maxScore: 25 },
            { category: 'Madd', score: 18, maxScore: 25 }
          ]
        },
        {
          id: 3,
          type: 'arabic',
          title: 'Arabic Vocabulary Test',
          date: '2023-03-22',
          score: 90,
          maxScore: 100,
          grade: 'A-',
          teacher: 'Ustadha Aisha',
          feedback: 'Excellent vocabulary retention. Good sentence formation skills.',
          details: [
            { category: 'Vocabulary', score: 48, maxScore: 50 },
            { category: 'Grammar', score: 22, maxScore: 25 },
            { category: 'Sentence Structure', score: 20, maxScore: 25 }
          ]
        },
        {
          id: 4,
          type: 'islamic',
          title: 'Lives of the Prophets Assessment',
          date: '2023-02-18',
          score: 95,
          maxScore: 100,
          grade: 'A',
          teacher: 'Ustadh Ibrahim',
          feedback: 'Excellent knowledge of the subject. Great participation in class discussions.',
          details: [
            { category: 'Knowledge', score: 28, maxScore: 30 },
            { category: 'Understanding', score: 38, maxScore: 40 },
            { category: 'Application', score: 29, maxScore: 30 }
          ]
        },
        {
          id: 5,
          type: 'quran',
          title: 'Surah Al-Fatiha Recitation',
          date: '2023-01-25',
          score: 92,
          maxScore: 100,
          grade: 'A-',
          teacher: 'Ustadh Abdullah',
          feedback: 'Excellent recitation with proper tajweed. Minor issues with madd duration.',
          details: [
            { category: 'Pronunciation', score: 28, maxScore: 30 },
            { category: 'Tajweed', score: 35, maxScore: 40 },
            { category: 'Fluency', score: 29, maxScore: 30 }
          ]
        }
      ];
      
      setExamData(mockExamData);
      setLoading(false);
    }, 1000);
  };
  
  const openExamDetails = (exam) => {
    setSelectedExam(exam);
  };
  
  const closeExamDetails = () => {
    setSelectedExam(null);
  };
  
  const filteredExams = filter === 'all' 
    ? examData 
    : examData.filter(exam => exam.type === filter);
    
  const sortedExams = [...filteredExams].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  const getTypeLabel = (type) => {
    const found = examTypes.find(t => t.value === type);
    return found ? found.label.replace(' Assessments', '') : type;
  };
  
  const getGradeColor = (score, maxScore) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 90) return 'bg-green-100 text-green-800 border-green-200';
    if (percentage >= 80) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (percentage >= 70) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-red-100 text-red-800 border-red-200';
  };
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold flex items-center mb-4 md:mb-0">
            <FileText className="mr-2 text-green-600 w-6 h-6" />
            {child.name}'s Assessment Results
          </h2>
          
          <div>
            <select
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {examTypes.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {loading ? (
          <div className="h-60 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </div>
        ) : sortedExams.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No assessment results available
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assessment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedExams.map((exam, index) => (
                  <tr 
                    key={exam.id} 
                    className="hover:bg-gray-50 transition-colors animate-fade-in-up cursor-pointer"
                    style={{animationDelay: `${index * 100}ms`}}
                    onClick={() => openExamDetails(exam)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{exam.title}</div>
                      <div className="text-sm text-gray-500">{exam.teacher}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{formatDate(exam.date)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                        {getTypeLabel(exam.type)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{exam.score}/{exam.maxScore}</div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${(exam.score / exam.maxScore) * 100}%` }}></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getGradeColor(exam.score, exam.maxScore)}`}>
                        {exam.grade}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button onClick={(e) => {
                        e.stopPropagation();
                        openExamDetails(exam);
                      }} className="text-green-600 hover:text-green-900">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      
      {/* Exam details modal */}
      {selectedExam && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
            <div className="p-6 border-b">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-gray-900">{selectedExam.title}</h3>
                <button onClick={closeExamDetails} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="flex items-center mb-4">
                    <Calendar className="w-5 h-5 text-gray-500 mr-2" />
                    <div>
                      <span className="block text-sm font-medium text-gray-500">Assessment Date</span>
                      <span className="block text-gray-800">{formatDate(selectedExam.date)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <FileText className="w-5 h-5 text-gray-500 mr-2" />
                    <div>
                      <span className="block text-sm font-medium text-gray-500">Subject</span>
                      <span className="block text-gray-800">{getTypeLabel(selectedExam.type)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <PieChart className="w-5 h-5 text-gray-500 mr-2" />
                    <div>
                      <span className="block text-sm font-medium text-gray-500">Total Score</span>
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-gray-800">{selectedExam.score}/{selectedExam.maxScore}</span>
                        <span className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${getGradeColor(selectedExam.score, selectedExam.maxScore)}`}>
                          {selectedExam.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Instructor</h4>
                    <p className="text-gray-800">{selectedExam.teacher}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Feedback</h4>
                    <p className="text-gray-800">{selectedExam.feedback}</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h4 className="text-md font-medium text-gray-700 mb-4">Detailed Breakdown</h4>
                
                <div className="space-y-3">
                  {selectedExam.details.map((detail, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-700">{detail.category}</span>
                        <span className="text-gray-700">{detail.score}/{detail.maxScore}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ width: `${(detail.score / detail.maxScore) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button 
                  onClick={closeExamDetails} 
                  className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 mr-3"
                >
                  Close
                </button>
                <button 
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParentExams;