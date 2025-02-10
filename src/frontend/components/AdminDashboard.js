const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('enrolled');
    const [enrolledStudents] = useState([
      { id: 1, name: 'John Doe', dob: '2010-05-15', address: '123 Main St', 
        medicalHistory: 'None', parentName: 'Jane Doe', phone: '123-456-7890', 
        emergencyContact: 'Jane Doe', emergencyPhone: '123-456-7890', class: 'Class A' }
    ]);
    const [waitingStudents] = useState([
      { id: 1, name: 'Alice Smith', dob: '2010-06-20', address: '456 Oak St', 
        medicalHistory: 'Allergies', parentName: 'Bob Smith', phone: '098-765-4321', 
        emergencyContact: 'Bob Smith', emergencyPhone: '098-765-4321', status: 'Pending' }
    ]);
    const [teachers] = useState([
      { id: 1, name: 'Prof. Johnson', subject: 'Mathematics', qualifications: 'M.Ed', 
        phone: '555-0123', email: 'johnson@school.com' }
    ]);
    const [classes] = useState([
      { id: 1, name: 'Class A', teacher: 'Prof. Johnson', students: 25, schedule: 'Mon-Fri 9AM' }
    ]);
  
    return (
      <div className="p-6 bg-gradient-to-b from-blue-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Admin Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-7 w-full">
                  <TabsTrigger value="enrolled">Enrolled Students</TabsTrigger>
                  <TabsTrigger value="waiting">Waiting List</TabsTrigger>
                  <TabsTrigger value="teachers">Teachers</TabsTrigger>
                  <TabsTrigger value="classes">Classes</TabsTrigger>
                  <TabsTrigger value="attendance">Attendance</TabsTrigger>
                  <TabsTrigger value="progress">Student Progress</TabsTrigger>
                  <TabsTrigger value="payment">Payment</TabsTrigger>
                </TabsList>
  
                <TabsContent value="enrolled">
                  <div className="space-y-4">
                    <div className="overflow-x-auto border rounded-lg">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">DOB</th>
                            <th className="px-4 py-2 text-left">Address</th>
                            <th className="px-4 py-2 text-left">Medical History</th>
                            <th className="px-4 py-2 text-left">Parent Name</th>
                            <th className="px-4 py-2 text-left">Phone</th>
                            <th className="px-4 py-2 text-left">Emergency Contact</th>
                            <th className="px-4 py-2 text-left">Emergency Phone</th>
                            <th className="px-4 py-2 text-left">Class</th>
                          </tr>
                        </thead>
                        <tbody>
                          {enrolledStudents.map((student) => (
                            <tr key={student.id} className="border-t">
                              <td className="px-4 py-2">{student.name}</td>
                              <td className="px-4 py-2">{student.dob}</td>
                              <td className="px-4 py-2">{student.address}</td>
                              <td className="px-4 py-2">{student.medicalHistory}</td>
                              <td className="px-4 py-2">{student.parentName}</td>
                              <td className="px-4 py-2">{student.phone}</td>
                              <td className="px-4 py-2">{student.emergencyContact}</td>
                              <td className="px-4 py-2">{student.emergencyPhone}</td>
                              <td className="px-4 py-2">
                                <Select defaultValue={student.class}>
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Class A">Class A</SelectItem>
                                    <SelectItem value="Class B">Class B</SelectItem>
                                    <SelectItem value="Class C">Class C</SelectItem>
                                  </SelectContent>
                                </Select>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </TabsContent>
  
                <TabsContent value="waiting">
                  <div className="space-y-4">
                    <div className="overflow-x-auto border rounded-lg">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">DOB</th>
                            <th className="px-4 py-2 text-left">Address</th>
                            <th className="px-4 py-2 text-left">Medical History</th>
                            <th className="px-4 py-2 text-left">Parent Name</th>
                            <th className="px-4 py-2 text-left">Phone</th>
                            <th className="px-4 py-2 text-left">Emergency Contact</th>
                            <th className="px-4 py-2 text-left">Emergency Phone</th>
                            <th className="px-4 py-2 text-left">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {waitingStudents.map((student) => (
                            <tr key={student.id} className="border-t">
                              <td className="px-4 py-2">{student.name}</td>
                              <td className="px-4 py-2">{student.dob}</td>
                              <td className="px-4 py-2">{student.address}</td>
                              <td className="px-4 py-2">{student.medicalHistory}</td>
                              <td className="px-4 py-2">{student.parentName}</td>
                              <td className="px-4 py-2">{student.phone}</td>
                              <td className="px-4 py-2">{student.emergencyContact}</td>
                              <td className="px-4 py-2">{student.emergencyPhone}</td>
                              <td className="px-4 py-2">
                                <Select defaultValue={student.status}>
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Pending">Pending</SelectItem>
                                    <SelectItem value="Approved">Approved</SelectItem>
                                    <SelectItem value="Rejected">Rejected</SelectItem>
                                  </SelectContent>
                                </Select>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </TabsContent>
  
                <TabsContent value="teachers">
                  <div className="space-y-4">
                    <div className="flex justify-end">
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        Create Teacher Profile
                      </Button>
                    </div>
                    <div className="overflow-x-auto border rounded-lg">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Subject</th>
                            <th className="px-4 py-2 text-left">Qualifications</th>
                            <th className="px-4 py-2 text-left">Phone</th>
                            <th className="px-4 py-2 text-left">Email</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {teachers.map((teacher) => (
                            <tr key={teacher.id} className="border-t">
                              <td className="px-4 py-2">{teacher.name}</td>
                              <td className="px-4 py-2">{teacher.subject}</td>
                              <td className="px-4 py-2">{teacher.qualifications}</td>
                              <td className="px-4 py-2">{teacher.phone}</td>
                              <td className="px-4 py-2">{teacher.email}</td>
                              <td className="px-4 py-2">
                                <Button variant="outline" size="sm">Edit</Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </TabsContent>
  
                <TabsContent value="classes">
                  <div className="space-y-4">
                    <div className="overflow-x-auto border rounded-lg">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-2 text-left">Class Name</th>
                            <th className="px-4 py-2 text-left">Teacher</th>
                            <th className="px-4 py-2 text-left">Students</th>
                            <th className="px-4 py-2 text-left">Schedule</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {classes.map((cls) => (
                            <tr key={cls.id} className="border-t">
                              <td className="px-4 py-2">{cls.name}</td>
                              <td className="px-4 py-2">{cls.teacher}</td>
                              <td className="px-4 py-2">{cls.students}</td>
                              <td className="px-4 py-2">{cls.schedule}</td>
                              <td className="px-4 py-2">
                                <Button variant="outline" size="sm">Manage</Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </TabsContent>
  
                <TabsContent value="attendance">
                  <div className="p-4 text-center text-gray-500">
                    Attendance tracking coming soon...
                  </div>
                </TabsContent>
  
                <TabsContent value="progress">
                  <div className="p-4 text-center text-gray-500">
                    Student progress tracking coming soon...
                  </div>
                </TabsContent>
  
                <TabsContent value="payment">
                  <div className="p-4 text-center text-gray-500">
                    Payment management coming soon...
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };