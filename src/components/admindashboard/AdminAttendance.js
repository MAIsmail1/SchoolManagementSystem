import React, { useState, useEffect } from 'react';
import { Calendar, ChevronDown, Check, X, Clock, Pencil, BookOpen } from 'lucide-react';
import { Button } from '../common/button';
import { Card } from '../common/card';
import { useClasses } from '../../contexts/ClassesContext';
import { useAttendance } from '../../contexts/AttendanceContext';

const AdminAttendance = () => {
  const { classes } = useClasses();
  const { getAttendance, updateAttendanceStatus, getAttendanceStats } = useAttendance();
  
  const [selectedClass, setSelectedClass] = useState(classes.length > 0 ? classes[0].name : '');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [notes, setNotes] = useState('');
  const [lateMinutes, setLateMinutes] = useState(0);

  // Update students when selected class or date changes
  useEffect(() => {
    if (selectedClass) {
      const attendanceRecords = getAttendance(selectedClass, selectedDate);
      setStudents(attendanceRecords);
    }
  }, [selectedClass, selectedDate, getAttendance]);

  const handleStatusChange = (studentId, status) => {
    updateAttendanceStatus(selectedClass, selectedDate, studentId, status);
    
    // Update local state
    setStudents(prevStudents => 
      prevStudents.map(student => 
        student.id === studentId 
          ? { ...student, attendance: status, lateMinutes: status === 'late' ? student.lateMinutes : 0 } 
          : student
      )
    );
  };

  const startEditing = (student) => {
    setEditingStudent(student);
    setNotes(student.notes);
    setLateMinutes(student.lateMinutes);
  };

  const saveNotes = () => {
    if (!editingStudent) return;
    
    updateAttendanceStatus(
      selectedClass, 
      selectedDate, 
      editingStudent.id, 
      editingStudent.attendance, 
      notes, 
      parseInt(lateMinutes) || 0
    );
    
    // Update local state
    setStudents(prevStudents => 
      prevStudents.map(student => 
        student.id === editingStudent.id 
          ? { ...student, notes, lateMinutes: parseInt(lateMinutes) || 0 } 
          : student
      )
    );
    
    // Reset editing state
    setEditingStudent(null);
    setNotes('');
    setLateMinutes(0);
  };

  const stats = getAttendanceStats(selectedClass, selectedDate);

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <Calendar className="w-7 h-7 mr-2 text-green-700" />
          Attendance
        </h2>
        <div className="flex gap-4">
          <div className="relative">
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {classes.map((cls) => (
                <option key={cls.id} value={cls.name}>{cls.name}</option>
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

      {/* Class Info */}
      <div className="mb-6">
        <Card className="p-4 bg-green-50">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-green-700" />
            <span className="text-green-700 font-semibold">
              {selectedClass} • {selectedDate} • Attendance: {stats.presentPercentage}%
            </span>
          </div>
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
                    {editingStudent && editingStudent.id === student.id && editingStudent.attendance === 'late' ? (
                      <input
                        type="number"
                        min="0"
                        value={lateMinutes}
                        onChange={(e) => setLateMinutes(e.target.value)}
                        className="w-16 px-2 py-1 border rounded"
                      />
                    ) : (
                      student.lateMinutes > 0 ? `${student.lateMinutes} mins` : '-'
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {editingStudent && editingStudent.id === student.id ? (
                      <input
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full px-2 py-1 border rounded"
                        placeholder="Add notes..."
                      />
                    ) : (
                      student.notes || '-'
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {editingStudent && editingStudent.id === student.id ? (
                      <div className="flex space-x-2">
                        <button 
                          onClick={saveNotes}
                          className="text-green-600 hover:text-green-900"
                          title="Save"
                        >
                          <Check className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => setEditingStudent(null)}
                          className="text-red-600 hover:text-red-900"
                          title="Cancel"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleStatusChange(student.id, 'present')}
                          className={`${student.attendance === 'present' ? 'text-green-800 bg-green-100 p-1 rounded' : 'text-green-600 hover:text-green-900'}`}
                          title="Mark Present"
                        >
                          <Check className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleStatusChange(student.id, 'late')}
                          className={`${student.attendance === 'late' ? 'text-yellow-800 bg-yellow-100 p-1 rounded' : 'text-yellow-600 hover:text-yellow-900'}`}
                          title="Mark Late"
                        >
                          <Clock className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleStatusChange(student.id, 'absent')}
                          className={`${student.attendance === 'absent' ? 'text-red-800 bg-red-100 p-1 rounded' : 'text-red-600 hover:text-red-900'}`}
                          title="Mark Absent"
                        >
                          <X className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => startEditing(student)}
                          className="text-blue-600 hover:text-blue-900 ml-2"
                          title="Edit Notes"
                        >
                          <Pencil className="w-5 h-5" />
                        </button>
                      </div>
                    )}
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

export default AdminAttendance;