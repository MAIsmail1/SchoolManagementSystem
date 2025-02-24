import React, { useState, useEffect } from 'react';

const TeacherDiary = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [diaryEntry, setDiaryEntry] = useState('');
  const [diaryEntries, setDiaryEntries] = useState([]);

  useEffect(() => {
    // Fetch students - replace with actual API call
    const mockStudents = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Bob Johnson' },
    ];
    setStudents(mockStudents);
  }, []);

  useEffect(() => {
    if (selectedStudent) {
      // Fetch diary entries for selected student - replace with actual API call
      const mockEntries = [
        { id: 1, date: '2023-05-01', content: 'Good participation in class today.' },
        { id: 2, date: '2023-05-02', content: 'Struggled with math homework.' },
      ];
      setDiaryEntries(mockEntries);
    }
  }, [selectedStudent]);

  const handleStudentChange = (e) => {
    const student = students.find(s => s.id === parseInt(e.target.value));
    setSelectedStudent(student);
  };

  const handleDiaryEntryChange = (e) => {
    setDiaryEntry(e.target.value);
  };

  const handleSubmitEntry = (e) => {
    e.preventDefault();
    if (selectedStudent && diaryEntry.trim()) {
      const newEntry = {
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
        content: diaryEntry.trim(),
      };
      setDiaryEntries([newEntry, ...diaryEntries]);
      setDiaryEntry('');
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4">Student Diary</h2>
      <div className="mb-4">
        <label htmlFor="student" className="block text-sm font-medium text-gray-700">Select Student</label>
        <select
          id="student"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
          onChange={handleStudentChange}
          value={selectedStudent?.id || ''}
        >
          <option value="">Select a student</option>
          {students.map(student => (
            <option key={student.id} value={student.id}>{student.name}</option>
          ))}
        </select>
      </div>
      {selectedStudent && (
        <div className="animate-fade-in">
          <form onSubmit={handleSubmitEntry} className="mb-4">
            <label htmlFor="diaryEntry" className="block text-sm font-medium text-gray-700">New Diary Entry</label>
            <textarea
              id="diaryEntry"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
              rows="3"
              value={diaryEntry}
              onChange={handleDiaryEntryChange}
            ></textarea>
            <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">Add Entry</button>
          </form>
          <h3 className="text-xl font-semibold mb-2">Previous Entries</h3>
          <div className="space-y-4">
            {diaryEntries.map((entry, index) => (
              <div key={entry.id} className="bg-gray-50 p-4 rounded-md animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                <p className="text-sm text-gray-500 mb-1">{entry.date}</p>
                <p>{entry.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDiary;