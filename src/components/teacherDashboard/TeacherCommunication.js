import React, { useState, useEffect } from 'react';

const TeacherCommunication = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch students - replace with actual API call
    const mockStudents = [
      { id: 1, name: 'John Doe', parent: 'Mr. Doe' },
      { id: 2, name: 'Jane Smith', parent: 'Mrs. Smith' },
      { id: 3, name: 'Bob Johnson', parent: 'Mr. Johnson' },
    ];
    setStudents(mockStudents);
  }, []);

  useEffect(() => {
    if (selectedStudent) {
      // Fetch messages for selected student - replace with actual API call
      const mockMessages = [
        { id: 1, sender: 'Teacher', content: 'Hello, I wanted to discuss John\'s recent performance.', timestamp: '2023-05-01 10:00 AM' },
        { id: 2, sender: 'Parent', content: 'Hi, thank you for reaching out. What would you like to discuss?', timestamp: '2023-05-01 11:30 AM' },
      ];
      setMessages(mockMessages);
    }
  }, [selectedStudent]);

  const handleStudentChange = (e) => {
    const student = students.find(s => s.id === parseInt(e.target.value));
    setSelectedStudent(student);
  };

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (selectedStudent && newMessage.trim()) {
      const newMessageObj = {
        id: Date.now(),
        sender: 'Teacher',
        content: newMessage.trim(),
        timestamp: new Date().toLocaleString(),
      };
      setMessages([...messages, newMessageObj]);
      setNewMessage('');
      // Here you would typically make an API call to save the message
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4">Parent Communication</h2>
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
          <h3 className="text-xl font-semibold mb-2">Messages with {selectedStudent.parent}</h3>
          <div className="mb-4 h-64 overflow-y-auto border rounded p-2">
            {messages.map((message, index) => (
              <div key={message.id} className={`mb-2 p-2 rounded ${message.sender === 'Teacher' ? 'bg-blue-100 ml-8' : 'bg-gray-100 mr-8'} animate-fade-in-up`} style={{animationDelay: `${index * 100}ms`}}>
                <p className="text-sm text-gray-600">{message.sender} - {message.timestamp}</p>
                <p>{message.content}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="animate-fade-in">
            <textarea
              className="w-full p-2 border rounded transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
              rows="3"
              value={newMessage}
              onChange={handleNewMessageChange}
              placeholder="Type your message here..."
            ></textarea>
            <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">Send Message</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TeacherCommunication;