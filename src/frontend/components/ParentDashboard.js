import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ParentDashboard = () => {
  const [children] = useState([
    {
      id: 1,
      name: 'John Jr.',
      attendance: '95%',
      grades: [
        { subject: 'Math', grade: 'A' },
        { subject: 'Science', grade: 'B+' }
      ]
    }
  ]);

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Parent Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="child1">
            <TabsList>
              {children.map((child) => (
                <TabsTrigger key={child.id} value={`child${child.id}`}>
                  {child.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {children.map((child) => (
              <TabsContent key={child.id} value={`child${child.id}`}>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Attendance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">{child.attendance}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Grades</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {child.grades.map((grade, index) => (
                          <div key={index} className="flex justify-between">
                            <span>{grade.subject}</span>
                            <span className="font-bold">{grade.grade}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ParentDashboard;