// Add this to your AdminDashboard component
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('teachers');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [profiles, setProfiles] = useState({
    teachers: [],
    students: [],
    parents: []
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    subject: '', // for teachers
    grade: '',   // for students
    address: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfiles(prev => ({
      ...prev,
      [activeTab]: [...prev[activeTab], { ...formData, id: Date.now() }]
    }));
    setShowCreateForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      role: '',
      subject: '',
      grade: '',
      address: ''
    });
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Admin Dashboard</CardTitle>
            <Button onClick={() => setShowCreateForm(true)}>
              Create New Profile
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="teachers">Teachers</TabsTrigger>
              <TabsTrigger value="students">Students</TabsTrigger>
              <TabsTrigger value="parents">Parents</TabsTrigger>
            </TabsList>

            {showCreateForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                <Card className="w-full max-w-md">
                  <CardHeader>
                    <CardTitle>Create New {activeTab.slice(0, -1)} Profile</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label>Full Name</Label>
                        <Input
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label>Email</Label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label>Phone</Label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label>Address</Label>
                        <Input
                          value={formData.address}
                          onChange={(e) => setFormData({...formData, address: e.target.value})}
                          required
                        />
                      </div>

                      {activeTab === 'teachers' && (
                        <div>
                          <Label>Subject</Label>
                          <Input
                            value={formData.subject}
                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            required
                          />
                        </div>
                      )}

                      {activeTab === 'students' && (
                        <div>
                          <Label>Grade</Label>
                          <Input
                            value={formData.grade}
                            onChange={(e) => setFormData({...formData, grade: e.target.value})}
                            required
                          />
                        </div>
                      )}

                      <div className="flex gap-2 justify-end">
                        <Button type="button" variant="outline" onClick={() => setShowCreateForm(false)}>
                          Cancel
                        </Button>
                        <Button type="submit">
                          Create Profile
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            )}

            <TabsContent value="teachers">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-2 text-left">Name</th>
                      <th className="p-2 text-left">Email</th>
                      <th className="p-2 text-left">Phone</th>
                      <th className="p-2 text-left">Subject</th>
                      <th className="p-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profiles.teachers.map(teacher => (
                      <tr key={teacher.id} className="border-t">
                        <td className="p-2">{teacher.name}</td>
                        <td className="p-2">{teacher.email}</td>
                        <td className="p-2">{teacher.phone}</td>
                        <td className="p-2">{teacher.subject}</td>
                        <td className="p-2">
                          <Button variant="outline" size="sm">Edit</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="students">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-2 text-left">Name</th>
                      <th className="p-2 text-left">Grade</th>
                      <th className="p-2 text-left">Contact</th>
                      <th className="p-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profiles.students.map(student => (
                      <tr key={student.id} className="border-t">
                        <td className="p-2">{student.name}</td>
                        <td className="p-2">{student.grade}</td>
                        <td className="p-2">{student.phone}</td>
                        <td className="p-2">
                          <Button variant="outline" size="sm">Edit</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="parents">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-2 text-left">Name</th>
                      <th className="p-2 text-left">Email</th>
                      <th className="p-2 text-left">Phone</th>
                      <th className="p-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profiles.parents.map(parent => (
                      <tr key={parent.id} className="border-t">
                        <td className="p-2">{parent.name}</td>
                        <td className="p-2">{parent.email}</td>
                        <td className="p-2">{parent.phone}</td>
                        <td className="p-2">
                          <Button variant="outline" size="sm">Edit</Button>
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