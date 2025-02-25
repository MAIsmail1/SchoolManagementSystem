import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Menu, Calendar, Book, FileText, TrendingUp, MessageCircle, LogOut, BookOpen, Plus} from 'lucide-react';
import TeacherAttendance from '../components/teacherDashboard/TeacherAttendance';
import TeacherDiary from '../components/teacherDashboard/TeacherDiary';
import TeacherExam from '../components/teacherDashboard/TeacherExam';
import TeacherProgress from '../components/teacherDashboard/TeacherProgress';
import TeacherCommunication from '../components/teacherDashboard/TeacherCommunication';

const TeacherDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('attendance');
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const menuItems = [
    { id: 'attendance', name: 'Attendance', icon: <Calendar className="w-5 h-5" /> },
    { id: 'diary', name: 'Lesson Diary', icon: <Book className="w-5 h-5" /> },
    { id: 'exam', name: 'Quran Assessments', icon: <FileText className="w-5 h-5" /> },
    { id: 'progress', name: 'Student Progress', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'communication', name: 'Parent Communication', icon: <MessageCircle className="w-5 h-5" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'attendance': return <TeacherAttendance />;
      case 'diary': return <TeacherDiary />;
      case 'exam': return <TeacherExam />;
      case 'progress': return <TeacherProgress />;
      case 'communication': return <TeacherCommunication />;
      default: return <TeacherAttendance />;
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-black transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 bg-black">
          <BookOpen className="w-6 h-6 text-green-500 mr-2" />
          <span className="text-white text-xl font-semibold">Masjid Teacher Dashboard</span>
        </div>
        
        <nav className="mt-5">
          {menuItems.map((item) => (
            <a
              key={item.id}
              className={`flex items-center mt-4 py-2 px-6 text-gray-300 hover:bg-green-800 hover:bg-opacity-25 hover:text-gray-100 ${
                activeTab === item.id ? 'bg-green-800 bg-opacity-25 text-gray-100' : ''
              } transition-all duration-300 ease-in-out`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.icon}
              <span className="mx-3">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex justify-between items-center py-4 px-6 bg-black text-white">
          <div className="flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none lg:hidden transition-transform duration-300 ease-in-out transform hover:scale-110">
              <Menu className="h-6 w-6" />
            </button>
            <div className="ml-4 hidden md:block">
              <span className="text-gray-300">Masjid Education Program</span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-green-800 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8 animate-fade-in">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;