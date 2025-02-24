import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ArrowLeft, Save, BookOpen, LogOut } from 'lucide-react';
import { Button } from '../common/button';

const AddClassPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [classDetails, setClassDetails] = useState({
    name: '',
    teacher: '',
    maxStudents: '',
    room: '',
    schedule: [{ day: '', startTime: '', endTime: '' }]
  });

  const menuItems = [
    { id: 'enrolled', name: 'Enrolled Students' },
    { id: 'waiting', name: 'Waiting List' },
    { id: 'teachers', name: 'Teacher Profiles' },
    { id: 'classes', name: 'Classes' },
    { id: 'attendance', name: 'Attendance' },
    { id: 'progress', name: 'Student Progress' },
    { id: 'payment', name: 'Payment' }
  ];

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClassDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleScheduleChange = (index, e) => {
    const { name, value } = e.target;
    const newSchedule = [...classDetails.schedule];
    newSchedule[index][name] = value;
    setClassDetails(prev => ({
      ...prev,
      schedule: newSchedule
    }));
  };

  const addScheduleSlot = () => {
    setClassDetails(prev => ({
      ...prev,
      schedule: [...prev.schedule, { day: '', startTime: '', endTime: '' }]
    }));
  };

  const removeScheduleSlot = (index) => {
    const newSchedule = classDetails.schedule.filter((_, i) => i !== index);
    setClassDetails(prev => ({
      ...prev,
      schedule: newSchedule
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual class creation logic
    console.log('Class Details:', classDetails);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <nav className="bg-black text-white shadow-md fixed top-0 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-green-800 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <button
                onClick={() => {
                  navigate('/admin-dashboard');
                }}
                className="ml-4 flex items-center space-x-2 hover:bg-green-800 p-2 rounded-md transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="text-xl font-semibold">Back</span>
              </button>
            </div>
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-green-800 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 bg-black transition-transform duration-300 ease-in-out z-30 pt-16`}
      >
        <div className="flex flex-col space-y-2 mt-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setIsMenuOpen(false);
                // Navigate to respective pages if needed
                navigate(`/admin-dashboard/${item.id === 'enrolled' ? '' : item.id}`);
              }}
              className="flex items-center space-x-2 px-4 py-3 text-white hover:bg-green-800 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex pt-16">
        {/* Sidebar Spacer */}
        <div className="hidden md:block w-64"></div>

        {/* Form Content */}
        <div className="flex-1 p-8 mt-0">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-green-700" />
              Add New Class
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Class Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Class Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={classDetails.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                    placeholder="e.g., Year 4 Mathematics"
                    required
                  />
                </div>
                {/* Teacher */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Teacher
                  </label>
                  <input
                    type="text"
                    name="teacher"
                    value={classDetails.teacher}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                    placeholder="Teacher Name"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Maximum Students */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Maximum Students
                  </label>
                  <input
                    type="number"
                    name="maxStudents"
                    value={classDetails.maxStudents}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                    placeholder="Maximum number of students"
                    min="1"
                    required
                  />
                </div>
                {/* Room */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Room
                  </label>
                  <input
                    type="text"
                    name="room"
                    value={classDetails.room}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                    placeholder="Room Number"
                    required
                  />
                </div>
              </div>

              {/* Schedule Section */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-medium text-gray-700">
                    Class Schedule
                  </label>
                  <button 
                    type="button"
                    onClick={addScheduleSlot}
                    className="text-green-700 hover:bg-green-50 border border-green-700 rounded-md px-3 py-1 text-sm"
                  >
                    Add Schedule Slot
                  </button>
                </div>
                {classDetails.schedule.map((slot, index) => (
                  <div key={index} className="grid md:grid-cols-3 gap-4 items-center">
                    <select
                      name="day"
                      value={slot.day}
                      onChange={(e) => handleScheduleChange(index, e)}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                      required
                    >
                      <option value="">Select Day</option>
                      {daysOfWeek.map(day => (
                        <option key={day} value={day}>{day}</option>
                      ))}
                    </select>
                    <select
                      name="startTime"
                      value={slot.startTime}
                      onChange={(e) => handleScheduleChange(index, e)}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                      required
                    >
                      <option value="">Start Time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                    <div className="flex items-center space-x-2">
                      <select
                        name="endTime"
                        value={slot.endTime}
                        onChange={(e) => handleScheduleChange(index, e)}
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                        required
                      >
                        <option value="">End Time</option>
                        {timeSlots.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                      {classDetails.schedule.length > 1 && (
                        <button 
                          type="button"
                          onClick={() => removeScheduleSlot(index)}
                          className="text-red-500 border border-red-500 rounded-md px-2 py-1 text-sm hover:bg-red-50"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <Button 
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-2 px-6 py-3 rounded-md transition-colors"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Save Class
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClassPage;
