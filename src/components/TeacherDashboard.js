import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from 'components/common/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from 'components/common/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, ClipboardList } from 'lucide-react';

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('attendance');
  const [students] = useState([
    { id: 1, name: 'John Doe', attendance: 'present', grade: 'A' },
    { id: 2, name: 'Jane Smith', attendance: 'absent', grade: 'B' }
  ]);

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Teacher Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="attendance">
                <Calendar className="w-4 h-4 mr-2" />
                Attendance
              </TabsTrigger>
              <TabsTrigger value="grades">
                <ClipboardList className="w-4 h-4 mr-2" />
                Grades
              </TabsTrigger>
            </TabsList>

            <TabsContent value="attendance">
              <div className="border rounded-lg">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left">Name</th>
                      <th className="px-4 py-2 text-left">Attendance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.id} className="border-t">
                        <td className="px-4 py-2">{student.name}</td>
                        <td className="px-4 py-2">
                          <Select defaultValue={student.attendance}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="present">Present</SelectItem>
                              <SelectItem value="absent">Absent</SelectItem>
                              <SelectItem value="late">Late</SelectItem>
                            </SelectContent>
                          </Select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="grades">
              <div className="border rounded-lg">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left">Name</th>
                      <th className="px-4 py-2 text-left">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.id} className="border-t">
                        <td className="px-4 py-2">{student.name}</td>
                        <td className="px-4 py-2">
                          <Input 
                            defaultValue={student.grade}
                            className="w-20"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherDashboard;