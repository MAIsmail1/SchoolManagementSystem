// src/components/dashboard/Attendance.jsx
import React, { useState } from 'react';
import { Calendar, ChevronDown, Check, X } from 'lucide-react';
import { Button } from '../common/button';
import { Card } from '../common/card';

const Attendance = () => {
  const [selectedClass, setSelectedClass] = useState('Year 4');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const classes = [
    'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6'
  ];

  const students = [
    {
      id: 1,
      name: 'John Doe',
      attendance: 'present',
      notes: '',
      lateMinutes: 0
    },
    {
      id: 2,
      name: 'Sarah Smith',
      attendance: 'absent',
      notes: 'Doctor appointment',
      lateMinutes: 0
    },
    {
      id: 3,
      name: 'James Wilson',
      attendance: 'late',
      notes: 'Traffic delay',
      lateMinutes: 15
    }
  ];

  const getAttendanceStats = () => {
    const total = students.length;
    const present = students.filter(s => s.attendance === 'present').length;
    const absent = students.filter(s => s.attendance === 'absent').length;
    const late = students.filter(s => s.attendance === 'late').length;

    return {
      total,
      present,
      absent,
      late,
      presentPercentage: ((present + late) / total * 100).toFixed(1)
    };
  };

  const stats = getAttendanceStats();

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Attendance</h2>
        <div className="flex gap-4">
          <div className="relative">
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {classes.map((cls) => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
          
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4 bg-green-50">
          <div className="text-sm text-gray-600">Total Students</div>
          <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
        </Card>
        <Card className="p-4 bg-blue-50">
          <div className="text-sm text-gray-600">Present</div>
          <div className="text-2xl font-bold text-gray-900">{stats.present}</div>
        </Card>
        <Card className="p-4 bg-yellow-50">
          <div className="text-sm text-gray-600">Late</div>
          <div className="text-2xl font-bold text-gray-900">{stats.late}</div>
        </Card>
        <Card className="p-4 bg-red-50">
          <div className="text-sm text-gray-600">Absent</div>
          <div className="text-2xl font-bold text-gray-900">{stats.absent}</div>
        </Card>
      </div>

      {/* Attendance Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Late (mins)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{student.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      student.attendance === 'present' ? 'bg-green-100 text-green-800' :
                      student.attendance === 'late' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {student.attendance.charAt(0).toUpperCase() + student.attendance.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {student.lateMinutes > 0 ? `${student.lateMinutes} mins` : '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {student.notes || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-green-600 hover:text-green-900">
                        <Check className="w-5 h-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Attendance;