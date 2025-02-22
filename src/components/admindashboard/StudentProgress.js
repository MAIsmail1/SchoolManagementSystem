import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Book, Trophy, Star } from 'lucide-react';

const mockStudentProgressData = [
  {
    id: 1,
    name: 'Emma Johnson',
    totalClasses: 25,
    attendedClasses: 22,
    quizScores: [
      { subject: 'Math', score: 85 },
      { subject: 'Science', score: 92 },
      { subject: 'English', score: 78 }
    ],
    progressData: [
      { month: 'Jan', progress: 65 },
      { month: 'Feb', progress: 72 },
      { month: 'Mar', progress: 80 },
      { month: 'Apr', progress: 85 },
      { month: 'May', progress: 90 }
    ]
  },
  {
    id: 2,
    name: 'Liam Smith',
    totalClasses: 28,
    attendedClasses: 25,
    quizScores: [
      { subject: 'Math', score: 95 },
      { subject: 'Science', score: 88 },
      { subject: 'English', score: 90 }
    ],
    progressData: [
      { month: 'Jan', progress: 70 },
      { month: 'Feb', progress: 75 },
      { month: 'Mar', progress: 82 },
      { month: 'Apr', progress: 88 },
      { month: 'May', progress: 93 }
    ]
  }
];

const StudentProgress = () => {
  const [selectedStudent, setSelectedStudent] = useState(mockStudentProgressData[0]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <TrendingUp className="mr-3 text-green-600" /> Student Progress Tracking
        </h2>
      </div>

      {/* Student Selection */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Select Student
        </label>
        <select 
          className="w-full p-2 border rounded-md"
          value={selectedStudent.id}
          onChange={(e) => {
            const student = mockStudentProgressData.find(
              s => s.id === parseInt(e.target.value)
            );
            setSelectedStudent(student);
          }}
        >
          {mockStudentProgressData.map(student => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>
      </div>

      {/* Student Details */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Progress Overview */}
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
                {((selectedStudent.attendedClasses / selectedStudent.totalClasses) * 100).toFixed(1)}%
              </p>
            </div>
          </div>
        </div>

        {/* Quiz Scores */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Trophy className="mr-2 text-yellow-600" /> Quiz Scores
          </h3>
          <div className="space-y-2">
            {selectedStudent.quizScores.map((quiz, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>{quiz.subject}</span>
                <div className="flex items-center">
                  <Star className="mr-2 text-yellow-500" />
                  <span className="font-bold">{quiz.score}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Chart */}
      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <TrendingUp className="mr-2 text-green-600" /> Progress Over Time
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={selectedStudent.progressData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="progress" 
              stroke="#8884d8" 
              activeDot={{ r: 8 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StudentProgress;