// src/components/dashboard/Classes.jsx
import React, { useState } from 'react';
import { Plus, Users, Clock } from 'lucide-react';
import { Button } from '../common/button';
import { Card } from '../common/card';

const Classes = () => {
  const [activeView, setActiveView] = useState('list'); // 'list' or 'schedule'

  const classes = [
    {
      id: 1,
      name: 'Year 4 Mathematics',
      teacher: 'Mrs. Sarah Johnson',
      students: 25,
      schedule: [
        { day: 'Monday', time: '9:00 AM - 10:30 AM' },
        { day: 'Wednesday', time: '9:00 AM - 10:30 AM' },
        { day: 'Friday', time: '9:00 AM - 10:30 AM' }
      ],
      room: 'Room 101'
    },
    {
      id: 2,
      name: 'Year 6 English',
      teacher: 'Mr. David Williams',
      students: 28,
      schedule: [
        { day: 'Monday', time: '11:00 AM - 12:30 PM' },
        { day: 'Thursday', time: '11:00 AM - 12:30 PM' }
      ],
      room: 'Room 203'
    }
  ];

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const ClassCard = ({ classInfo }) => (
    <Card className="p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{classInfo.name}</h3>
          <p className="text-gray-600">{classInfo.teacher}</p>
        </div>
        <span className="flex items-center text-gray-600">
          <Users className="w-4 h-4 mr-1" />
          {classInfo.students} students
        </span>
      </div>

      <div className="mt-4">
        <h4 className="font-medium text-gray-700">Schedule</h4>
        <div className="space-y-1 mt-2">
          {classInfo.schedule.map((slot, index) => (
            <div key={index} className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              <span>{slot.day} • {slot.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <span className="text-sm text-gray-500">Location: {classInfo.room}</span>
      </div>
    </Card>
  );

  const ScheduleView = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="w-20"></th>
            {daysOfWeek.map(day => (
              <th key={day} className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {timeSlots.map((time, index) => (
            <tr key={time}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 bg-gray-50">
                {time}
              </td>
              {daysOfWeek.map(day => (
                <td key={`${day}-${time}`} className="px-6 py-4 whitespace-nowrap border">
                  {classes.map(cls => (
                    cls.schedule.some(slot => 
                      slot.day === day && slot.time.startsWith(time)
                    ) && (
                      <div key={cls.id} className="p-2 bg-green-50 text-green-700 rounded-md">
                        <div className="font-medium">{cls.name}</div>
                        <div className="text-sm">{cls.teacher}</div>
                        <div className="text-sm">{cls.room}</div>
                      </div>
                    )
                  ))}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Classes</h2>
        <div className="flex gap-4">
          <div className="flex rounded-md shadow-sm" role="group">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeView === 'list'
                  ? 'bg-green-700 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-200`}
              onClick={() => setActiveView('list')}
            >
              List View
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeView === 'schedule'
                  ? 'bg-green-700 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-l-0 border-gray-200`}
              onClick={() => setActiveView('schedule')}
            >
              Schedule
            </button>
          </div>
          <Button 
            onClick={() => console.log('Add new class')}
            className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Class
          </Button>
        </div>
      </div>

      {activeView === 'list' ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map(classInfo => (
            <ClassCard key={classInfo.id} classInfo={classInfo} />
          ))}
        </div>
      ) : (
        <ScheduleView />
      )}
    </div>
  );
};

export default Classes;