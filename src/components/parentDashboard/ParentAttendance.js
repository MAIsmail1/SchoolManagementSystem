import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const ParentAttendance = ({ child }) => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  // Prayer times display
  const prayerTimes = {
    fajr: '5:30 AM',
    dhuhr: '12:45 PM',
    asr: '4:15 PM',
    maghrib: '6:30 PM',
    isha: '8:00 PM'
  };
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  useEffect(() => {
    if (child) {
      fetchAttendanceData();
    }
  }, [child, currentMonth, currentYear]);

  const fetchAttendanceData = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      // Generate mock attendance data for the month
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
      const mockData = [];
      
      // First day of the month
      const firstDay = new Date(currentYear, currentMonth, 1).getDay();
      
      // Add empty cells for days before the first day of the month
      for (let i = 0; i < firstDay; i++) {
        mockData.push({ day: null, status: null });
      }
      
      // Generate attendance data for each day of the month
      for (let day = 1; day <= daysInMonth; day++) {
        // Skip weekend days (Friday & Saturday in Islamic context)
        const date = new Date(currentYear, currentMonth, day);
        const weekDay = date.getDay();
        
        // Check if it's weekend (Friday is 5, Saturday is 6)
        const isWeekend = weekDay === 5 || weekDay === 6;
        
        // Check if the day is in the future
        const isFutureDay = date > new Date();
        
        let status = null;
        let notes = '';
        
        if (!isWeekend && !isFutureDay) {
          // Random attendance status for past weekdays
          const rand = Math.random();
          if (rand < 0.8) {
            status = 'present';
            notes = rand < 0.3 ? 'Excellent participation' : '';
          } else if (rand < 0.95) {
            status = 'absent';
            notes = 'Family commitment';
          } else {
            status = 'late';
            notes = 'Arrived 10 minutes late';
          }
        } else if (isWeekend) {
          status = 'weekend';
        } else if (isFutureDay) {
          status = 'upcoming';
        }
        
        mockData.push({
          day,
          date: new Date(currentYear, currentMonth, day),
          status,
          notes
        });
      }
      
      setAttendanceData(mockData);
      setLoading(false);
    }, 1000);
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'present': return 'bg-green-500';
      case 'absent': return 'bg-red-500';
      case 'late': return 'bg-yellow-500';
      case 'weekend': return 'bg-gray-300';
      case 'upcoming': return 'bg-blue-200';
      default: return 'bg-gray-100';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'present': return 'Present';
      case 'absent': return 'Absent';
      case 'late': return 'Late';
      case 'weekend': return 'Weekend';
      case 'upcoming': return 'Upcoming';
      default: return '';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6 animate-fade-in">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold flex items-center">
            <Calendar className="mr-2 text-green-600 w-6 h-6" />
            {child.name}'s Attendance
          </h2>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={goToPreviousMonth}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <span className="text-lg font-medium">
              {monthNames[currentMonth]} {currentYear}
            </span>
            <button 
              onClick={goToNextMonth}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              disabled={new Date(currentYear, currentMonth) >= new Date(new Date().getFullYear(), new Date().getMonth())}
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        
        {loading ? (
          <div className="h-80 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </div>
        ) : (
          <>
            {/* Attendance Legend */}
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">Present</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                <span className="text-sm">Absent</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                <span className="text-sm">Late</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-gray-300 mr-2"></div>
                <span className="text-sm">Weekend/Holiday</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-blue-200 mr-2"></div>
                <span className="text-sm">Upcoming</span>
              </div>
            </div>
            
            {/* Calendar Grid */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="grid grid-cols-7 text-center font-medium text-sm py-2 border-b">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div className="text-green-600">Fri</div>
                <div>Sat</div>
              </div>
              
              <div className="grid grid-cols-7 gap-1 p-2">
                {attendanceData.map((item, index) => (
                  <div 
                    key={index} 
                    className={`h-20 p-1 border rounded ${!item.day ? 'bg-gray-50' : 'hover:shadow-md transition-shadow'}`}
                  >
                    {item.day && (
                      <>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{item.day}</span>
                          {item.status && (
                            <div 
                              className={`w-4 h-4 rounded-full ${getStatusColor(item.status)}`} 
                              title={getStatusLabel(item.status)}
                            ></div>
                          )}
                        </div>
                        {item.status && item.status !== 'weekend' && item.status !== 'upcoming' && (
                          <div className="mt-1 text-xs">
                            <div className={`px-1 py-0.5 rounded text-white text-center ${getStatusColor(item.status)}`}>
                              {getStatusLabel(item.status)}
                            </div>
                            {item.notes && (
                              <div className="mt-1 text-gray-600 overflow-hidden text-ellipsis" title={item.notes}>
                                {item.notes}
                              </div>
                            )}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      
      {/* Prayer Times Card */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 bg-green-800 text-white">
          <h2 className="text-xl font-semibold flex items-center">
            <Clock className="mr-2 w-5 h-5" />
            Today's Prayer Times
          </h2>
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

export default ParentAttendance;