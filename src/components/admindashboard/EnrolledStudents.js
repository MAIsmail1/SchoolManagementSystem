import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { Button } from '../common/button';
import { useNavigate } from 'react-router-dom';
import { useStudents } from '../../contexts/StudentContext';

const EnrolledStudents = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const { students, updateStudentClass } = useStudents();

  // Islamic education class options
  const classOptions = [
    'Quran Level 1',
    'Quran Level 2',
    'Quran Level 3',
    'Hifz Program',
    'Tajweed',
    'Arabic Basics',
    'Arabic Intermediate',
    'Islamic Studies',
    'Seerah',
    'Fiqh'
  ];

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.parentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddStudent = () => {
    navigate('/admin-dashboard/add-student');
  };

  const handleClassChange = (studentId, newClassName) => {
    updateStudentClass(studentId, newClassName);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Enrolled Students</h2>
        <Button 
          onClick={handleAddStudent}
          className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Student
        </Button>
      </div>
      
      {/* Search Bar */}
      <div className="mb-6 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by student or parent name..."
          className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DOB (Age)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medical History</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parent Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Emergency Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Emergency Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredStudents.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(student.dob).toLocaleDateString()} ({calculateAge(student.dob)} years)
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{student.address}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.medicalHistory}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.parentName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.phoneNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.emergencyContactName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.emergencyContactNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    className="border rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={student.className}
                    onChange={(e) => {
                      handleClassChange(student.id, e.target.value);
                    }}
                  >
                    {classOptions.map((className) => (
                      <option key={className} value={className}>
                        {className}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledStudents;