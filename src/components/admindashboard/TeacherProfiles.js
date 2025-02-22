// src/components/dashboard/TeacherProfiles.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, Mail, Phone } from 'lucide-react';
import { Button } from '../common/button';
import { Card } from '../common/card';

const TeacherProfiles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddTeacher, setShowAddTeacher] = useState(false);
  const navigate = useNavigate();
  const handleAddTeacher = () => {
    // Explicitly navigate to the add teacher page
    navigate('/admin-dashboard/teachers/add-teacher');
  };
  const handleGoBack = () => {
  navigate('/admin-dashboard/teachers');
};
  const teachers = [
    {
      id: 1,
      name: 'Mrs. Sarah Johnson',
      email: 'sarah.johnson@taleem.com',
      phone: '07700 900131',
      qualifications: 'B.Ed, PGCE',
      subjects: ['Mathematics', 'Science'],
      yearGroup: 'Year 4',
      startDate: '2022-09-01',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Mr. David Williams',
      email: 'david.williams@taleem.com',
      phone: '07700 900132',
      qualifications: 'MA Education, QTS',
      subjects: ['English', 'History'],
      yearGroup: 'Year 6',
      startDate: '2021-09-01',
      status: 'Active'
    }
  ];

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.subjects.join(' ').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const TeacherCard = ({ teacher }) => (
    <Card className="p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{teacher.name}</h3>
          <p className="text-gray-600">{teacher.yearGroup} Teacher</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          teacher.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
        }`}>
          {teacher.status}
        </span>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center text-gray-600">
          <Mail className="w-4 h-4 mr-2" />
          <span>{teacher.email}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Phone className="w-4 h-4 mr-2" />
          <span>{teacher.phone}</span>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="font-medium text-gray-700">Qualifications</h4>
        <p className="text-gray-600">{teacher.qualifications}</p>
      </div>

      <div className="mt-4">
        <h4 className="font-medium text-gray-700">Subjects</h4>
        <div className="flex flex-wrap gap-2 mt-1">
          {teacher.subjects.map((subject, index) => (
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
    </Card>
  );

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Teacher Profiles</h2>
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

      {/* Add Teacher Modal would go here */}
      {showAddTeacher && (
        // Modal implementation
        <div>Add Teacher Modal</div>
      )}
    </div>
  );
};

export default TeacherProfiles;