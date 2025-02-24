// src/components/adminDashboard/WaitingListStudents.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, UserPlus } from 'lucide-react';
import { Button } from '../common/button';
import { useStudents } from '../../contexts/StudentContext';

const WaitingListStudents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  // Use our context to access waiting list students and functions
  const { waitingListStudents, enrollWaitingListStudent, updateWaitingListStudentStatus } = useStudents();

  const handleAddStudent = () => {
    navigate('/admin-dashboard/waiting/add-student');
  };

  const statusOptions = [
    'Pending',
    'In Review',
    'Documents Required',
    'Interview Scheduled',
    'Waitlisted'
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

  const filteredStudents = waitingListStudents.filter(student =>
    student.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.parentName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    const colors = {
      'Pending': 'bg-yellow-100 text-yellow-800',
      'In Review': 'bg-blue-100 text-blue-800',
      'Documents Required': 'bg-red-100 text-red-800',
      'Interview Scheduled': 'bg-purple-100 text-purple-800',
      'Waitlisted': 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const handleStatusChange = (studentId, newStatus) => {
    updateWaitingListStudentStatus(studentId, newStatus);
  };

  const handleEnrollStudent = (studentId) => {
    if (confirm('Are you sure you want to enroll this student?')) {
      enrollWaitingListStudent(studentId);
      alert('Student has been enrolled successfully!');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Waiting List Students</h2>
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

      {filteredStudents.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No waiting list students found. Add a new student to the waiting list.
        </div>
      ) : (
        /* Table */
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
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
                      className={`rounded-md px-2 py-1 text-sm font-medium ${getStatusColor(student.status)} border-0 focus:outline-none focus:ring-2 focus:ring-green-500`}
                      value={student.status}
                      onChange={(e) => handleStatusChange(student.id, e.target.value)}
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button
                      onClick={() => handleEnrollStudent(student.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-2 py-1 rounded-md flex items-center"
                    >
                      <UserPlus className="w-3 h-3 mr-1" />
                      Enroll
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default WaitingListStudents;