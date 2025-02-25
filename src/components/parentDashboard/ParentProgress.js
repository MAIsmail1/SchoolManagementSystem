import React, { useState, useEffect } from 'react';
import { TrendingUp, BookOpen, BarChart } from 'lucide-react';

const ParentProgress = ({ child }) => {
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState('all');

  useEffect(() => {
    if (child) {
      fetchProgressData();
    }
  }, [child]);

  const fetchProgressData = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const mockProgressData = [
        {
          subject: 'Quran Memorization',
          scores: [
            { date: '2023-01-15', score: 75 },
            { date: '2023-02-10', score: 78 },
            { date: '2023-03-05', score: 82 },
            { date: '2023-04-12', score: 85 },
            { date: '2023-05-20', score: 88 }
          ],
          lastAssessment: 'Completed Surah Al-Fatiha and first 10 ayat of Al-Baqarah',
          teacherComment: 'Shows excellent dedication to memorization. Tajweed needs more practice.',
          currentUnit: 'Surah Al-Baqarah (Ayat 11-20)'
        },
        {
          subject: 'Tajweed',
          scores: [
            { date: '2023-01-20', score: 70 },
            { date: '2023-02-15', score: 75 },
            { date: '2023-03-10', score: 80 },
            { date: '2023-04-18', score: 82 },
            { date: '2023-05-25', score: 85 }
          ],
          lastAssessment: 'Rules of Noon Saakinah and Tanween',
          teacherComment: 'Improving steadily. Needs to focus on correct pronunciation of heavy letters.',
          currentUnit: 'Rules of Meem Saakinah'
        },
        {
          subject: 'Arabic Language',
          scores: [
            { date: '2023-01-25', score: 65 },
            { date: '2023-02-20', score: 70 },
            { date: '2023-03-15', score: 72 },
            { date: '2023-04-22', score: 75 },
            { date: '2023-05-28', score: 80 }
          ],
          lastAssessment: 'Basic vocabulary and simple sentence structure',
          teacherComment: 'Making good progress with vocabulary. Needs more practice with sentence formation.',
          currentUnit: 'Intermediate conversation practice'
        },
        {
          subject: 'Islamic Studies',
          scores: [
            { date: '2023-01-30', score: 80 },
            { date: '2023-02-25', score: 85 },
            { date: '2023-03-20', score: 88 },
            { date: '2023-04-25', score: 90 },
            { date: '2023-05-30', score: 92 }
          ],
          lastAssessment: 'Lives of the Prophets',
          teacherComment: 'Excellent understanding of the subject matter. Participates actively in discussions.',
          currentUnit: 'Pillars of Faith'
        }
      ];
      
      setProgressData(mockProgressData);
      setLoading(false);
    }, 1000);
  };
  
  // Calculate performance indicators
  const calculateOverallProgress = () => {
    if (progressData.length === 0) return 0;
    
    let totalLastScore = 0;
    let totalFirstScore = 0;
    
    progressData.forEach(subject => {
      if (subject.scores.length > 0) {
        totalLastScore += subject.scores[subject.scores.length - 1].score;
        totalFirstScore += subject.scores[0].score;
      }
    });
    
    const averageLastScore = totalLastScore / progressData.length;
    const averageFirstScore = totalFirstScore / progressData.length;
    
    return Math.round(((averageLastScore - averageFirstScore) / averageFirstScore) * 100);
  };
  
  const getSubjectProgress = (subject) => {
    if (subject.scores.length < 2) return 0;
    const firstScore = subject.scores[0].score;
    const lastScore = subject.scores[subject.scores.length - 1].score;
    return Math.round(((lastScore - firstScore) / firstScore) * 100);
  };
  
  const getProgressColor = (progress) => {
    if (progress >= 15) return 'text-green-600';
    if (progress >= 5) return 'text-blue-600';
    if (progress >= 0) return 'text-yellow-600';
    return 'text-red-600';
  };
  
  const filteredSubjects = selectedSubject === 'all' 
    ? progressData 
    : progressData.filter(subject => subject.subject === selectedSubject);

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6 animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold flex items-center">
            <TrendingUp className="mr-2 text-green-600 w-6 h-6" />
            {child.name}'s Learning Progress
          </h2>
          
          <div>
            <select
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="all">All Subjects</option>
              {progressData.map(subject => (
                <option key={subject.subject} value={subject.subject}>
                  {subject.subject}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {loading ? (
          <div className="h-60 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </div>
        ) : progressData.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No progress data available
          </div>
        ) : (
          <>
            {/* Overall progress card */}
            <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200 flex items-center">
                <div className="bg-green-200 rounded-full p-3 mr-4">
                  <TrendingUp className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Overall Improvement</h3>
                  <p className={`text-2xl font-bold ${getProgressColor(calculateOverallProgress())}`}>
                    {calculateOverallProgress() > 0 ? '+' : ''}{calculateOverallProgress()}%
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200 flex items-center">
                <div className="bg-blue-200 rounded-full p-3 mr-4">
                  <BookOpen className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Subjects</h3>
                  <p className="text-2xl font-bold text-blue-700">{progressData.length}</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200 flex items-center">
                <div className="bg-purple-200 rounded-full p-3 mr-4">
                  <BarChart className="h-6 w-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Best Subject</h3>
                  <p className="text-2xl font-bold text-purple-700">
                    {progressData.length > 0 
                      ? progressData.reduce((best, current) => 
                          current.scores[current.scores.length - 1].score > best.scores[best.scores.length - 1].score ? current : best
                        ).subject.split(' ')[0]
                      : 'N/A'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Subject progress cards */}
            <div className="space-y-4">
              {filteredSubjects.map((subject, index) => (
                <div 
                  key={subject.subject} 
                  className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow animate-fade-in-up" 
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
                    <h3 className="font-semibold text-lg text-gray-800">{subject.subject}</h3>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getProgressColor(getSubjectProgress(subject))}`}>
                      {getSubjectProgress(subject) > 0 ? '+' : ''}{getSubjectProgress(subject)}% improvement
                    </div>
                  </div>
                  
                  <div className="p-4">
                    {/* Progress chart */}
                    <div className="h-20 flex items-end space-x-1 mb-2">
                      {subject.scores.map((score, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center group">
                          <div className="w-full px-2">
                            <div 
                              className="w-full bg-green-500 rounded-t" 
                              style={{ height: `${score.score}%`, maxHeight: '100%' }}
                              title={`${score.score}%`}
                            ></div>
                          </div>
                          <span className="text-xs mt-1 text-gray-500 truncate w-full text-center" title={new Date(score.date).toLocaleDateString()}>
                            {new Date(score.date).toLocaleDateString('en-US', { month: 'short' })}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Current Unit</h4>
                        <p className="text-gray-800">{subject.currentUnit}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Last Assessment</h4>
                        <p className="text-gray-800">{subject.lastAssessment}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Teacher Comment</h4>
                        <p className="text-gray-800">{subject.teacherComment}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ParentProgress;