import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, Mail, Phone } from 'lucide-react';
import { Button } from '../common/button';
import { Card } from '../common/card';
import { useTeachers } from '../../contexts/TeacherContext';

const TeacherProfiles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  // Use our context to access teachers data
  const { teachers, updateTeacherStatus } = useTeachers();
  
  const handleAddTeacher = () => {
    navigate('/admin-dashboard/teachers/add-teacher');
  };

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (teacher.subjects && teacher.subjects.join(' ').toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleStatusChange = (teacherId, newStatus) => {
    updateTeacherStatus(teacherId, newStatus);
  };

  const TeacherCard = ({ teacher }) => (
    <Card className="p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{teacher.name}</h3>
          <p className="text-gray-600">{teacher.department} Teacher</p>
        </div>
        <select
          value={teacher.status}
          onChange={(e) => handleStatusChange(teacher.id, e.target.value)}
          className={`px-3 py-1 rounded-full text-sm ${
            teacher.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
          }`}
        >
          <option value="Active">Active</option>
          <option value="On Leave">On Leave</option>
          <option value="Probation">Probation</option>
          <option value="Suspended">Suspended</option>
          <option value="Resigned">Resigned</option>
        </select>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center text-gray-600">
          <Mail className="w-4 h-4 mr-2" />
          <span>{teacher.email}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Phone className="w-4 h-4 mr-2" />
          <span>{teacher.phoneNumber}</span>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="font-medium text-gray-700">Qualifications</h4>
        <p className="text-gray-600">{Array.isArray(teacher.qualifications) ? teacher.qualifications.join(', ') : teacher.qualifications}</p>
      </div>

      <div className="mt-4">
        <h4 className="font-medium text-gray-700">Subjects</h4>
        <div className="flex flex-wrap gap-2 mt-1">
          {teacher.subjects && teacher.subjects.map((subject, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-green-50 text-green-700 rounded-md text-sm"
            >
              {subject}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        Started {new Date(teacher.startDate).toLocaleDateString()}
      </div>
      
      <div className="mt-4 text-sm text-gray-500">
        Employment: {teacher.employmentType}
      </div>
    </Card>
  );

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Teachers & Instructors</h2>
        <Button 
          onClick={handleAddTeacher}
          className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Teacher
        </Button>
      </div>

      {/* Search Bar */}
      <div className="mb-6 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by teacher name or subject..."
          className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Teacher Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.map(teacher => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
};

export default TeacherProfiles;