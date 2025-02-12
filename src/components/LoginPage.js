const LoginPage = () => {
  // Use the loginData state from the parent component
  const [localLoginData, setLocalLoginData] = useState({
    email: loginData.email,
    password: loginData.password,
    role: loginData.role
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Update both local state and parent state
    setLocalLoginData(prev => ({
      ...prev,
      [name]: value
    }));

    // Also update the parent loginData state
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    // Check admin credentials
    if (localLoginData.email === adminCredentials.email &&
        localLoginData.password === adminCredentials.password) {
      setTimeout(() => {
        setUser({ ...adminCredentials });
        setCurrentPage('admin-dashboard');
        setLoading(false);
      }, 1000);
    } else {
      setLoading(false);
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[85vh] px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Welcome Back</CardTitle>
          <p className="text-gray-600 text-center">
            Enter your credentials to access your account
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleLogin}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                  value={localLoginData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your password"
                  value={localLoginData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="text-sm text-gray-500">
                Demo Admin Login:
                <div>Email: admin@school.com</div>
                <div>Password: admin123</div>
              </div>
              <Button type="submit" className="w-full py-3" disabled={loading}>
                {loading ? 'Loading...' : 'Login'}
              </Button>
            </div>
          </form>
          <div className="text-center">
            <p className="text-gray-600">Don't have an account?</p>
            <button
              onClick={() => setCurrentPage('signup')}
              className="text-purple-600 hover:text-purple-700 font-medium mt-1"
            >
              Create an account
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};