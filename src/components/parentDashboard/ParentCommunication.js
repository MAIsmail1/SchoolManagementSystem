import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, User, Search, Phone, Mail } from 'lucide-react';

const ParentCommunication = ({ child }) => {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  
  const messagesEndRef = useRef(null);
  
  useEffect(() => {
    if (child) {
      fetchTeachers();
    }
  }, [child]);
  
  useEffect(() => {
    if (selectedTeacher) {
      fetchMessages();
    }
  }, [selectedTeacher]);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const fetchTeachers = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const mockTeachers = [
        {
          id: 1,
          name: 'Ustadh Abdullah',
          role: 'Quran & Tajweed Instructor',
          avatar: '👨‍🏫',
          status: 'online',
          lastSeen: 'Just now',
          contact: { email: 'abdullah@masjideducation.org', phone: '+1 (555) 123-4567' }
        },
        {
          id: 2,
          name: 'Ustadha Aisha',
          role: 'Arabic Language Instructor',
          avatar: '👩‍🏫',
          status: 'offline',
          lastSeen: '2 hours ago',
          contact: { email: 'aisha@masjideducation.org', phone: '+1 (555) 234-5678' }
        },
        {
          id: 3,
          name: 'Ustadh Yusuf',
          role: 'Islamic Studies Instructor',
          avatar: '👨‍🏫',
          status: 'online',
          lastSeen: 'Just now',
          contact: { email: 'yusuf@masjideducation.org', phone: '+1 (555) 345-6789' }
        },
        {
          id: 4,
          name: 'Ustadha Fatima',
          role: 'Quran for Beginners',
          avatar: '👩‍🏫',
          status: 'offline',
          lastSeen: 'Yesterday',
          contact: { email: 'fatima@masjideducation.org', phone: '+1 (555) 456-7890' }
        }
      ];
      
      setTeachers(mockTeachers);
      
      // Set first teacher as default selected if none is selected
      if (!selectedTeacher && mockTeachers.length > 0) {
        setSelectedTeacher(mockTeachers[0]);
      }
      
      setLoading(false);
    }, 1000);
  };
  
  const fetchMessages = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const mockMessages = [
        {
          id: 1,
          sender: 'teacher',
          content: 'Assalamu alaikum! I wanted to update you on Ibrahim\'s progress in Quran memorization.',
          timestamp: '2023-05-01T10:00:00Z'
        },
        {
          id: 2,
          sender: 'parent',
          content: 'Walaikum assalam, thank you for reaching out. How is he doing?',
          timestamp: '2023-05-01T10:15:00Z'
        },
        {
          id: 3,
          sender: 'teacher',
          content: 'Alhamdulillah, he\'s making good progress. He has completed memorizing Surah Al-Fatiha and has started with Surah Al-Baqarah. His pronunciation is excellent.',
          timestamp: '2023-05-01T10:30:00Z'
        },
        {
          id: 4,
          sender: 'parent',
          content: 'Alhamdulillah, that\'s wonderful to hear! He has been practicing at home as well.',
          timestamp: '2023-05-01T10:45:00Z'
        },
        {
          id: 5,
          sender: 'teacher',
          content: 'I\'ve noticed that. I recommend that he focuses on the tajweed rules for noon saakinah next. Would you like me to send some resources for practice at home?',
          timestamp: '2023-05-01T11:00:00Z'
        },
        {
          id: 6,
          sender: 'parent',
          content: 'Yes, that would be very helpful. Jazak Allah khair for your support.',
          timestamp: '2023-05-01T11:15:00Z'
        }
      ];
      
      setMessages(mockMessages);
      setLoading(false);
    }, 1000);
  };
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!selectedTeacher || !newMessage.trim()) return;
    
    const newMsg = {
      id: Date.now(),
      sender: 'parent',
      content: newMessage.trim(),
      timestamp: new Date().toISOString()
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage('');
  };
  
  const handleTeacherSelect = (teacher) => {
    setSelectedTeacher(teacher);
  };
  
  const formatMessageDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  const filteredTeachers = searchQuery 
    ? teachers.filter(teacher => teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                               teacher.role.toLowerCase().includes(searchQuery.toLowerCase())) 
    : teachers;

  return (
    <div className="bg-white shadow rounded-lg h-[calc(100vh-12rem)] overflow-hidden animate-fade-in">
      <div className="h-full flex flex-col md:flex-row">
        {/* Teachers sidebar */}
        <div className="w-full md:w-80 bg-gray-50 border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold flex items-center">
              <MessageCircle className="mr-2 text-green-600 w-5 h-5" />
              Messages
            </h2>
            <div className="mt-2 relative">
              <input
                type="text"
                placeholder="Search teachers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Search className="absolute left-2.5 top-2.5 text-gray-400 w-4 h-4" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {loading && !selectedTeacher ? (
              <div className="flex justify-center items-center h-32">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
              </div>
            ) : filteredTeachers.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                No teachers found
              </div>
            ) : (
              <ul>
                {filteredTeachers.map((teacher) => (
                  <li key={teacher.id}>
                    <button
                      onClick={() => handleTeacherSelect(teacher)}
                      className={`w-full text-left px-4 py-3 transition-colors flex items-start space-x-3 hover:bg-gray-100 ${
                        selectedTeacher?.id === teacher.id ? 'bg-green-50 border-l-4 border-green-500' : ''
                      }`}
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl relative">
                        {teacher.avatar}
                        {teacher.status === 'online' && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-gray-900 truncate">{teacher.name}</span>
                          <span className="text-xs text-gray-500">{teacher.status === 'online' ? 'Online' : teacher.lastSeen}</span>
                        </div>
                        <p className="text-xs text-gray-500 truncate">{teacher.role}</p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        
        {/* Chat area */}
        <div className="flex-1 flex flex-col">
          {selectedTeacher ? (
            <>
              {/* Chat header */}
              <div className="px-6 py-3 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl mr-3 relative">
                    {selectedTeacher.avatar}
                    {selectedTeacher.status === 'online' && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-md font-semibold">{selectedTeacher.name}</h3>
                    <p className="text-xs text-gray-500">{selectedTeacher.role}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <a href={`mailto:${selectedTeacher.contact.email}`} className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href={`tel:${selectedTeacher.contact.phone}`} className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                {loading ? (
                  <div className="flex justify-center items-center h-32">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
                  </div>
                ) : messages.length === 0 ? (
                  <div className="text-center text-gray-500 mt-8">
                    <MessageCircle className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                    <p>No messages yet</p>
                    <p className="text-sm">Start the conversation with {selectedTeacher.name}</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {messages.map((message, index) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === 'parent' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[75%] rounded-lg p-3 ${
                            message.sender === 'parent'
                              ? 'bg-green-600 text-white rounded-br-none'
                              : 'bg-white border border-gray-200 rounded-bl-none'
                          }`}
                        >
                          <p className={message.sender === 'parent' ? 'text-white' : 'text-gray-800'}>
                            {message.content}
                          </p>
                          <p
                            className={`text-xs mt-1 text-right ${
                              message.sender === 'parent' ? 'text-green-100' : 'text-gray-500'
                            }`}
                          >
                            {formatMessageDate(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                )}
              </div>
              
              {/* Message input */}
              <div className="border-t border-gray-200 p-4 bg-white">
                <form onSubmit={handleSendMessage} className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    disabled={!newMessage.trim()}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4 mr-1" />
                    Send
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-gray-50">
              <div className="text-center p-6">
                <MessageCircle className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-800 mb-1">Select a Teacher</h3>
                <p className="text-gray-500">Choose a teacher from the list to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParentCommunication;