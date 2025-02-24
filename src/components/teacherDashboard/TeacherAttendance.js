import React, { useState, useEffect } from 'react';

const TeacherAttendance = () => {
  const [students, setStudents] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [newStudentName, setNewStudentName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudentsForDate(date);
  }, [date]);

  const fetchStudentsForDate = async (selectedDate) => {
    setLoading(true);
    // In a real application, this would be an API call
    setTimeout(() => {
      const mockStudents = [
        { name: 'John Doe', present: false },
        { name: 'Jane Smith', present: true },
        { name: 'Bob Johnson', present: false },
      ];
      setStudents(mockStudents);
      setLoading(false);
    }, 500);
  };

  const toggleAttendance = (name) => {
    setStudents(students.map(student => 
      student.name === name ? { ...student, present: !student.present } : student
    ));
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const addNewStudent = (e) => {
    e.preventDefault();
    if (newStudentName.trim()) {
      setStudents([...students, { name: newStudentName.trim(), present: false }]);
      setNewStudentName('');
    }
  };

  const saveAttendance = () => {
    console.log('Saving attendance for', date, students);
    alert('Attendance saved successfully!');
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4">Attendance</h2>
      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={handleDateChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
        />
      </div>
      {loading ? (
        <p className="text-center text-gray-500 animate-pulse">Loading attendance data...</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {students.map((student, index) => (
                  <tr key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                    <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => toggleAttendance(student.name)}
                        className={`px-4 py-2 rounded-full text-white font-semibold ${
                          student.present ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
                        } transition duration-300 ease-in-out transform hover:scale-105`}
                      >
                        {student.present ? 'Present' : 'Absent'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <form onSubmit={addNewStudent} className="flex space-x-2">
              <input
                type="text"
                value={newStudentName}
                onChange={(e) => setNewStudentName(e.target.value)}
                placeholder="New student name"
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
              />
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
                Add Student
              </button>
            </form>
          </div>
          <div className="mt-4">
            <button 
              onClick={saveAttendance} 
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Save Attendance
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TeacherAttendance;