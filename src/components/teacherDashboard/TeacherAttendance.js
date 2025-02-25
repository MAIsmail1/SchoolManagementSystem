import React, { useState, useEffect } from 'react';
import { Calendar, Check, X, RefreshCw, Save, Plus } from 'lucide-react';

const TeacherAttendance = () => {
  const [students, setStudents] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [newStudentName, setNewStudentName] = useState('');
  const [loading, setLoading] = useState(true);
  
  // Mock classes
  const classes = [
    { id: '1', name: 'Quran Hifz - Beginner' },
    { id: '2', name: 'Tajweed - Intermediate' },
    { id: '3', name: 'Arabic - Advanced' }
  ];

  useEffect(() => {
    if (selectedClass) {
      fetchStudentsForDate(date, selectedClass);
    } else {
      setLoading(false);
    }
  }, [date, selectedClass]);

  const fetchStudentsForDate = async (selectedDate, classId) => {
    setLoading(true);
    // In a real application, this would be an API call
    setTimeout(() => {
      let mockStudents = [];
      
      if (classId === '1') {
        mockStudents = [
          { id: '1', name: 'Ahmed Hassan', present: false, notes: '' },
          { id: '2', name: 'Fatima Khan', present: true, notes: 'Completed Surah Al-Fatiha recitation' },
          { id: '3', name: 'Yusuf Ali', present: false, notes: 'Parent called - sick' },
        ];
      } else if (classId === '2') {
        mockStudents = [
          { id: '4', name: 'Zaynab Ibrahim', present: true, notes: 'Excellent tajweed practice' },
          { id: '5', name: 'Omar Abdullah', present: true, notes: '' },
          { id: '6', name: 'Maryam Siddiqui', present: false, notes: 'Family emergency' },
        ];
      } else if (classId === '3') {
        mockStudents = [
          { id: '7', name: 'Ismail Rahman', present: true, notes: '' },
          { id: '8', name: 'Aisha Mahmoud', present: true, notes: 'Completed vocabulary assignment' },
        ];
      }
      
      setStudents(mockStudents);
      setLoading(false);
    }, 500);
  };

  const toggleAttendance = (id) => {
    setStudents(students.map(student => 
      student.id === id ? { ...student, present: !student.present } : student
    ));
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  
  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };
  
  const handleNoteChange = (id, note) => {
    setStudents(students.map(student => 
      student.id === id ? { ...student, notes: note } : student
    ));
  };

  const addNewStudent = (e) => {
    e.preventDefault();
    if (newStudentName.trim() && selectedClass) {
      setStudents([...students, { 
        id: Date.now().toString(),
        name: newStudentName.trim(), 
        present: false,
        notes: ''
      }]);
      setNewStudentName('');
    }
  };

  const saveAttendance = () => {
    console.log('Saving attendance for', date, selectedClass, students);
    alert('Attendance saved successfully!');
  };

  // Prayer times display
  const prayerTimes = {
    fajr: '5:30 AM',
    dhuhr: '12:45 PM',
    asr: '4:15 PM',
    maghrib: '6:30 PM',
    isha: '8:00 PM'
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 bg-green-800 text-white flex items-center">
          <Calendar className="w-5 h-5 mr-2" />
          <h2 className="text-xl font-semibold">Daily Attendance</h2>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={handleDateChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-1">Select Class</label>
              <select
                id="class"
                name="class"
                value={selectedClass}
                onChange={handleClassChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 transition-all duration-300"
              >
                <option value="">Select a class...</option>
                {classes.map(cls => (
                  <option key={cls.id} value={cls.id}>{cls.name}</option>
                ))}
              </select>
            </div>
          </div>
          
          {!selectedClass && (
            <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg">
              <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-2" />
              <p>Please select a class to view and manage attendance</p>
            </div>
          )}
          
          {selectedClass && loading ? (
            <div className="text-center py-8">
              <RefreshCw className="h-8 w-8 mx-auto text-green-500 animate-spin mb-2" />
              <p className="text-gray-500">Loading attendance data...</p>
            </div>
          ) : selectedClass && (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {students.map((student, index) => (
                      <tr key={student.id} className="animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                        <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => toggleAttendance(student.id)}
                            className={`px-4 py-2 rounded-full flex items-center justify-center w-28 text-white font-semibold ${
                              student.present 
                                ? 'bg-green-500 hover:bg-green-600' 
                                : 'bg-red-500 hover:bg-red-600'
                            } transition duration-300 ease-in-out transform hover:scale-105`}
                          >
                            {student.present ? (
                              <>
                                <Check className="w-4 h-4 mr-1" />
                                Present
                              </>
                            ) : (
                              <>
                                <X className="w-4 h-4 mr-1" />
                                Absent
                              </>
                            )}
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          <input
                            type="text"
                            value={student.notes}
                            onChange={(e) => handleNoteChange(student.id, e.target.value)}
                            placeholder="Add notes here..."
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <form onSubmit={addNewStudent} className="flex space-x-2">
                  <input
                    type="text"
                    value={newStudentName}
                    onChange={(e) => setNewStudentName(e.target.value)}
                    placeholder="New student name"
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 transition-all duration-300"
                  />
                  <button 
                    type="submit" 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add
                  </button>
                </form>
                
                <button 
                  onClick={saveAttendance} 
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                >
                  <Save className="w-4 h-4 mr-1" />
                  Save Attendance
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Prayer Times Card */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 bg-green-800 text-white">
          <h2 className="text-xl font-semibold">Today's Prayer Times</h2>
        </div>
        <div className="p-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {Object.entries(prayerTimes).map(([prayer, time]) => (
            <div key={prayer} className="text-center p-3 rounded-lg bg-gray-50 shadow-sm">
              <h3 className="font-semibold text-green-800 capitalize">{prayer}</h3>
              <p className="text-gray-700">{time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherAttendance;