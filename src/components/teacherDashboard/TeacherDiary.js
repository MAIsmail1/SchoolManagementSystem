import React, { useState, useEffect } from 'react';
import { Book, BookOpen, Plus, Calendar, RefreshCw } from 'lucide-react';

const TeacherDiary = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [diaryEntry, setDiaryEntry] = useState('');
  const [diaryEntries, setDiaryEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Added for Masjid focus: Quran-specific selections
  const [surahSelection, setSurahSelection] = useState('');
  const [ayatRange, setAyatRange] = useState('');
  const [entryType, setEntryType] = useState('general');
  
  const surahs = [
    "Al-Fatihah", "Al-Baqarah", "Al-Imran", "An-Nisa", "Al-Ma'idah", 
    "Al-An'am", "Al-A'raf", "Al-Anfal", "At-Tawbah", "Yunus"
  ];
  
  const entryTypes = [
    { id: 'general', name: 'General Note' },
    { id: 'memorization', name: 'Memorization Progress' },
    { id: 'tajweed', name: 'Tajweed Observation' },
    { id: 'recitation', name: 'Recitation Quality' },
    { id: 'behavior', name: 'Behavior/Attitude' }
  ];

  useEffect(() => {
    // Fetch students - replace with actual API call
    const mockStudents = [
      { id: 1, name: 'Ahmed Hassan' },
      { id: 2, name: 'Fatima Khan' },
      { id: 3, name: 'Yusuf Ali' },
    ];
    setStudents(mockStudents);
  }, []);

  useEffect(() => {
    if (selectedStudent) {
      setLoading(true);
      // Fetch diary entries for selected student - replace with actual API call
      setTimeout(() => {
        const mockEntries = [
          { 
            id: 1, 
            date: '2023-05-01', 
            type: 'memorization',
            surah: 'Al-Fatihah',
            ayat: '1-7',
            content: 'Completed memorization of Surah Al-Fatihah with excellent tajweed.' 
          },
          { 
            id: 2, 
            date: '2023-05-02', 
            type: 'behavior',
            content: 'Showed excellent adab (manners) in class today.' 
          },
        ];
        setDiaryEntries(mockEntries);
        setLoading(false);
      }, 500);
    }
  }, [selectedStudent]);

  const handleStudentChange = (e) => {
    const student = students.find(s => s.id === parseInt(e.target.value));
    setSelectedStudent(student);
  };

  const handleDiaryEntryChange = (e) => {
    setDiaryEntry(e.target.value);
  };
  
  const handleSurahChange = (e) => {
    setSurahSelection(e.target.value);
  };
  
  const handleAyatChange = (e) => {
    setAyatRange(e.target.value);
  };
  
  const handleEntryTypeChange = (e) => {
    setEntryType(e.target.value);
    
    // Reset Surah and Ayat if not memorization or recitation
    if (e.target.value !== 'memorization' && e.target.value !== 'recitation' && e.target.value !== 'tajweed') {
      setSurahSelection('');
      setAyatRange('');
    }
  };

  const handleSubmitEntry = (e) => {
    e.preventDefault();
    if (selectedStudent && diaryEntry.trim()) {
      const newEntry = {
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
        type: entryType,
        content: diaryEntry.trim(),
      };
      
      // Add Surah and Ayat info if relevant
      if (['memorization', 'recitation', 'tajweed'].includes(entryType) && surahSelection) {
        newEntry.surah = surahSelection;
        newEntry.ayat = ayatRange;
      }
      
      setDiaryEntries([newEntry, ...diaryEntries]);
      setDiaryEntry('');
      setSurahSelection('');
      setAyatRange('');
      setEntryType('general');
    }
  };
  
  // Function to get color based on entry type
  const getEntryTypeColor = (type) => {
    switch(type) {
      case 'memorization': return 'bg-green-100 border-green-500 text-green-700';
      case 'tajweed': return 'bg-purple-100 border-purple-500 text-purple-700';
      case 'recitation': return 'bg-blue-100 border-blue-500 text-blue-700';
      case 'behavior': return 'bg-yellow-100 border-yellow-500 text-yellow-700';
      default: return 'bg-gray-50 border-gray-300 text-gray-700';
    }
  };
  
  // Get entry type label
  const getEntryTypeLabel = (type) => {
    const found = entryTypes.find(t => t.id === type);
    return found ? found.name : 'Note';
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Book className="mr-2 text-green-600 w-6 h-6" />
        Student Diary
      </h2>
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
          <form onSubmit={handleSubmitEntry} className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="text-lg font-medium mb-3 flex items-center">
              <Plus className="w-5 h-5 mr-2 text-green-600" />
              New Diary Entry
            </h4>
            
            <div className="mb-3">
              <label htmlFor="entryType" className="block text-sm font-medium text-gray-700 mb-1">Entry Type</label>
              <select
                id="entryType"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                value={entryType}
                onChange={handleEntryTypeChange}
              >
                {entryTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>
            
            {['memorization', 'recitation', 'tajweed'].includes(entryType) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div>
                  <label htmlFor="surah" className="block text-sm font-medium text-gray-700 mb-1">Surah</label>
                  <select
                    id="surah"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                    value={surahSelection}
                    onChange={handleSurahChange}
                  >
                    <option value="">Select a Surah</option>
                    {surahs.map(surah => (
                      <option key={surah} value={surah}>{surah}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="ayat" className="block text-sm font-medium text-gray-700 mb-1">Ayat Range</label>
                  <input
                    id="ayat"
                    type="text"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                    placeholder="e.g., 1-7, All"
                    value={ayatRange}
                    onChange={handleAyatChange}
                  />
                </div>
              </div>
            )}
            
            <label htmlFor="diaryEntry" className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
            <textarea
              id="diaryEntry"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
              rows="3"
              value={diaryEntry}
              onChange={handleDiaryEntryChange}
              placeholder={
                entryType === 'memorization' ? "Details about memorization progress..." :
                entryType === 'tajweed' ? "Observations on tajweed rules application..." :
                entryType === 'recitation' ? "Comments on recitation quality..." :
                entryType === 'behavior' ? "Notes on student's behavior and attitude..." :
                "General notes about the student..."
              }
            ></textarea>
            <button 
              type="submit" 
              className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Add Entry
            </button>
          </form>
          
          <h3 className="text-xl font-semibold mb-3 flex items-center border-b pb-2">
            <BookOpen className="mr-2 text-green-600 w-5 h-5" />
            Previous Entries
          </h3>
          
          {loading ? (
            <div className="text-center py-8">
              <RefreshCw className="h-8 w-8 mx-auto text-green-500 animate-spin mb-2" />
              <p className="text-gray-500">Loading diary entries...</p>
            </div>
          ) : diaryEntries.length === 0 ? (
            <p className="text-center text-gray-500 py-4">No entries found for this student.</p>
          ) : (
            <div className="space-y-4">
              {diaryEntries.map((entry, index) => (
                <div 
                  key={entry.id} 
                  className={`p-4 rounded-md border-l-4 animate-fade-in-up ${getEntryTypeColor(entry.type)}`} 
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-600" />
                      <span className="text-sm text-gray-600">{entry.date}</span>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-200">
                      {getEntryTypeLabel(entry.type)}
                    </span>
                  </div>
                  
                  {(entry.surah) && (
                    <div className="text-sm font-medium mb-1">
                      Surah {entry.surah} {entry.ayat ? `(${entry.ayat})` : ''}
                    </div>
                  )}
                  
                  <p className="text-gray-800">{entry.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TeacherDiary;