# .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

```

# jsconfig.json

```json
{
    "compilerOptions": {
      "baseUrl": "src",
      "paths": {
        "@/components/*": ["frontend/components/*"]
      }
    }
  }
```

# package.json

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).",
  "main": "index.js",
  "dependencies": {
    "lucide-react": "^0.475.0",
    "react": "^18.2.0",
    "react-colorful": "^5.6.1",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.0",
    "recharts": "^2.15.1",
    "web-vitals": "^4.2.4"
  },
  "devDependencies": {
    "@shadcn/ui": "^0.0.4",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "ajv": "^8.17.1",
    "ajv-keywords": "^5.1.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5.2",
    "react-scripts": "^5.0.1",
    "schema-utils": "^4.3.0",
    "tailwindcss": "^3.4.17",
    "tailwindcss-animate": "^1.0.7",
    "typescript": "^4.9.5",
    "webpack-dev-server": "^5.2.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

```

# postcss.config.js

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

# public\favicon.ico

This is a binary file of the type: Binary

# public\images\masjid-classroom.jpg

This is a binary file of the type: Image

# public\images\open-quran.jpg

This is a binary file of the type: Image

# public\images\students-in-masjid.jpg

This is a binary file of the type: Image

# public\index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>

```

# public\logo192.png

This is a binary file of the type: Image

# public\logo512.png

This is a binary file of the type: Image

# public\manifest.json

```json
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

```

# public\robots.txt

```txt
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:

```

# README.md

```md
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

```

# src\App.css

```css
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}



```

# src\App.js

```js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { MasjidProvider } from './contexts/MasjidContext';
import { StudentProvider } from './contexts/StudentContext';
import { TeacherProvider } from './contexts/TeacherContext';
import { ClassesProvider } from './contexts/ClassesContext';
import { AttendanceProvider } from './contexts/AttendanceContext';
import { PaymentProvider } from './contexts/PaymentContext';
import { ProgressProvider } from './contexts/ProgressContext';
import Navigation from './components/layout/Navigation';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutUs.js';
import ServicesPage from './pages/Services.js';
import PackagesPage from './pages/Packages.js';
import PackageContactPage from './pages/PackageContactPage.js';
import ContactPage from './pages/ContactPage';

// Super Admin Pages
import SuperAdminDashboard from './pages/super-admin/SuperAdminDashboard';
import ManageMasjidsPage from './pages/super-admin/ManageMasjidsPage';
import UserManagementPage from './pages/super-admin/UserManagementPage';

// Masjid Admin Pages
import MasjidAdminDashboard from './pages/masjid-admin/MasjidAdminDashboard';
import MasjidDetailsPage from './pages/masjid-admin/MasjidDetailsPage';

// Existing Admin Pages
import AdminDashboard from './pages/AdminDashboard';
import AddStudentPage from './components/adminDashboard/AddStudentPage';
import AddWaitingListStudentPage from './components/adminDashboard/AddWaitingListStudentPage.js';
import AddTeacherPage from './components/adminDashboard/AddTeacherPage';
import AddClassPage from './components/adminDashboard/AddClassPage';

// Teacher and Parent Pages
import TeacherDashboard from './pages/TeacherDashboard';
import ParentDashboard from './pages/ParentDashboard';

import CreateMasjidPage from './pages/admin/CreateMasjidPage';
import MasjidRouter from './routes/MasjidRouter';
import PrivateRoute from './routes/PrivateRoute';
import { useAuth } from './contexts/AuthContext';
import './styles/animations.css';

// AppContent component to handle route changes and state
const AppContent = () => {
  const location = useLocation();
  const { user } = useAuth();

  // List of routes that should NOT have the Navigation component
  const routesWithoutNavigation = [
    '/login',
    '/super-admin/dashboard',
    '/masjid-admin/dashboard',
    '/teacher-dashboard',
    '/parent-dashboard'
  ];

  const shouldShowNavigation = !routesWithoutNavigation.some(route => 
    location.pathname.startsWith(route)
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {shouldShowNavigation && <Navigation />}
      <main>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/package-contact/:packageId" element={<PackageContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* Super Admin Routes */}
          <Route 
            path="/super-admin/dashboard" 
            element={
              <PrivateRoute allowedRoles={['super_admin']}>
                <SuperAdminDashboard />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/super-admin/masjids" 
            element={
              <PrivateRoute allowedRoles={['super_admin']}>
                <ManageMasjidsPage />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/super-admin/users" 
            element={
              <PrivateRoute allowedRoles={['super_admin']}>
                <UserManagementPage />
              </PrivateRoute>
            } 
          />

          {/* Masjid Admin Routes */}
          <Route 
            path="/masjid-admin/dashboard" 
            element={
              <PrivateRoute allowedRoles={['masjid_admin']}>
                <MasjidAdminDashboard />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/masjid-admin/masjid-details" 
            element={
              <PrivateRoute allowedRoles={['masjid_admin']}>
                <MasjidDetailsPage />
              </PrivateRoute>
            } 
          />

          {/* Existing Admin Routes */}
          <Route
            path="/admin-dashboard"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/masjids"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <ManageMasjidsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/masjids/create"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <CreateMasjidPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/waiting"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/teachers"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/classes"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/add-student"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AddStudentPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/waiting/add-student"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AddWaitingListStudentPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/teachers/add-teacher"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AddTeacherPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/classes/add"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AddClassPage />
              </PrivateRoute>
            }
          />

          {/* Teacher and Parent Routes */}
          <Route
            path="/teacher-dashboard"
            element={
              <PrivateRoute allowedRoles={['teacher']}>
                <TeacherDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/parent-dashboard"
            element={
              <PrivateRoute allowedRoles={['parent']}>
                <ParentDashboard />
              </PrivateRoute>
            }
          />
          
          {/* Masjid-specific routes */}
          <Route path="/masjid/:masjidId/*" element={<MasjidRouter />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <MasjidProvider>
          <StudentProvider>
            <TeacherProvider>
              <ClassesProvider>
                <AttendanceProvider>
                  <PaymentProvider>
                    <ProgressProvider>
                      <AppContent />
                    </ProgressProvider>
                  </PaymentProvider>
                </AttendanceProvider>
              </ClassesProvider>
            </TeacherProvider>
          </StudentProvider>
        </MasjidProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
```

# src\App.test.js

```js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

```

# src\backend\models\Masjid.js

```js
// src/models/Masjid.js
const mongoose = require('mongoose');

const MasjidSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String
  },
  contactInfo: {
    phone: String,
    email: String
  },
  administrators: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  classes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class'
  }],
  programs: [{
    name: String,
    description: String
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Masjid', MasjidSchema);
```

# src\backend\models\User.js

```js
// src/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['super_admin', 'masjid_admin', 'teacher', 'parent', 'student'],
    default: 'student'
  },
  masjid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Masjid',
    default: null
  },
  // Role-specific details
  profileDetails: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Password hashing middleware
UserSchema.pre('save', async function(next) {
  // Only hash the password if it has been modified
  if (!this.isModified('password')) return next();

  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Hash the password
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password
UserSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Create model
const User = mongoose.model('User', UserSchema);

module.exports = User;
```

# src\components\adminDashboard\AddClassPage.js

```js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ArrowLeft, Save, BookOpen, LogOut, Users, UserCheck, UserPlus, Calendar, TrendingUp, Wallet } from 'lucide-react';
import { Button } from '../common/button';
import { useAuth } from '../../contexts/AuthContext';
import { useTeachers } from '../../contexts/TeacherContext';
import { useClasses } from '../../contexts/ClassesContext';

const AddClassPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { teachers } = useTeachers();
  const { addClass } = useClasses();
  
  const [classDetails, setClassDetails] = useState({
    name: '',
    teacher: '',
    maxStudents: 20,
    room: '',
    schedule: [{ day: '', startTime: '', endTime: '' }],
    description: '',
    level: 'Beginner',
    ageGroup: 'Children (7-12)',
    gender: 'Mixed',
    language: 'English'
  });

  const menuItems = [
    { id: 'enrolled', name: 'Enrolled Students', icon: <Users className="w-5 h-5" /> },
    { id: 'waiting', name: 'Waiting List', icon: <UserCheck className="w-5 h-5" /> },
    { id: 'teachers', name: 'Teacher Profiles', icon: <UserPlus className="w-5 h-5" /> },
    { id: 'classes', name: 'Classes', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'attendance', name: 'Attendance', icon: <Calendar className="w-5 h-5" /> },
    { id: 'progress', name: 'Student Progress', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'payment', name: 'Payment', icon: <Wallet className="w-5 h-5" /> }
  ];

  // Expanded days to include weekends for masjid classes
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  // More comprehensive time slots that include evening times for masjid classes
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'
  ];

  // Class types specific to Islamic education
  const classTypes = [
    'Quran Recitation',
    'Quran Memorization (Hifz)',
    'Tajweed',
    'Arabic Language',
    'Islamic Studies',
    'Fiqh',
    'Seerah',
    'Aqeedah'
  ];

  // Levels for Islamic education classes
  const levelOptions = [
    'Beginner', 
    'Intermediate', 
    'Advanced'
  ];

  // Age group options
  const ageGroupOptions = [
    'Children (7-12)',
    'Teens (13-17)',
    'Adults (18+)',
    'Seniors (65+)',
    'All Ages'
  ];

  // Gender options for classes
  const genderOptions = [
    'Brothers Only',
    'Sisters Only',
    'Mixed',
    'Children (Mixed)'
  ];

  // Language options
  const languageOptions = [
    'English',
    'Arabic',
    'Urdu',
    'English & Arabic'
  ];

  // Room options
  const roomOptions = [
    'Main Prayer Hall',
    'Classroom A',
    'Classroom B',
    'Hifz Room',
    'Conference Room',
    'Sisters Section'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClassDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleScheduleChange = (index, e) => {
    const { name, value } = e.target;
    const newSchedule = [...classDetails.schedule];
    newSchedule[index][name] = value;
    setClassDetails(prev => ({
      ...prev,
      schedule: newSchedule
    }));
  };

  const addScheduleSlot = () => {
    setClassDetails(prev => ({
      ...prev,
      schedule: [...prev.schedule, { day: '', startTime: '', endTime: '' }]
    }));
  };

  const removeScheduleSlot = (index) => {
    const newSchedule = classDetails.schedule.filter((_, i) => i !== index);
    setClassDetails(prev => ({
      ...prev,
      schedule: newSchedule
    }));
  };

  const formatScheduleForSaving = () => {
    return classDetails.schedule.map(slot => ({
      day: slot.day,
      time: `${slot.startTime} - ${slot.endTime}`
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the class data for saving
    const classData = {
      ...classDetails,
      schedule: formatScheduleForSaving()
    };
    
    // Add the class using our context function
    const newClassId = addClass(classData);
    
    // Show success message
    alert(`Class "${classDetails.name}" has been added successfully!`);
    
    // Navigate back to classes page
    navigate('/admin-dashboard/classes');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <nav className="bg-black text-white shadow-md fixed top-0 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-green-800 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <button
                onClick={() => {
                  navigate('/admin-dashboard/classes');
                }}
                className="ml-4 flex items-center space-x-2 hover:bg-green-800 p-2 rounded-md transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="text-xl font-semibold">Back</span>
              </button>
            </div>
            <button
              onClick={() => {
                logout();
                navigate('/');
              }}
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-green-800 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 bg-black transition-transform duration-300 ease-in-out z-30 pt-16`}
      >
        <div className="flex flex-col space-y-2 mt-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setIsMenuOpen(false);
                navigate(`/admin-dashboard/${item.id === 'enrolled' ? '' : item.id}`);
              }}
              className="flex items-center space-x-2 px-4 py-3 text-white hover:bg-green-800 transition-colors"
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
          <button
            onClick={() => {
              logout();
              navigate('/');
            }}
            className="flex items-center space-x-2 px-4 py-3 text-white hover:bg-green-800 transition-colors mt-4"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex pt-16">
        {/* Sidebar Spacer */}
        <div className="hidden md:block w-64"></div>

        {/* Form Content */}
        <div className="flex-1 p-8 mt-0">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-green-700" />
              Add New Masjid Class
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Class Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Class Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={classDetails.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                    placeholder="e.g., Quran Recitation Level 1"
                    required
                  />
                </div>
                {/* Class Type */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Class Type
                  </label>
                  <select
                    name="type"
                    value={classDetails.type}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                    required
                  >
                    <option value="">Select Class Type</option>
                    {classTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Class Teacher */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Teacher
                </label>
                <select
                  name="teacher"
                  value={classDetails.teacher}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select Teacher</option>
                  {teachers.map(teacher => (
                    <option key={teacher.id} value={teacher.name}>{teacher.name}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Class Description
                </label>
                <textarea
                  name="description"
                  value={classDetails.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                  placeholder="Describe what will be taught in this class"
                  rows="3"
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Level */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Level
                  </label>
                  <select
                    name="level"
                    value={classDetails.level}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                  >
                    {levelOptions.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
                {/* Age Group */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Age Group
                  </label>
                  <select
                    name="ageGroup"
                    value={classDetails.ageGroup}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                  >
                    {ageGroupOptions.map(age => (
                      <option key={age} value={age}>{age}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Gender */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={classDetails.gender}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                  >
                    {genderOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                {/* Language */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Language
                  </label>
                  <select
                    name="language"
                    value={classDetails.language}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                  >
                    {languageOptions.map(lang => (
                      <option key={lang} value={lang}>{lang}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Maximum Students */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Maximum Students
                  </label>
                  <input
                    type="number"
                    name="maxStudents"
                    value={classDetails.maxStudents}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                    placeholder="Maximum number of students"
                    min="1"
                    required
                  />
                </div>
                {/* Room */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Room
                  </label>
                  <select
                    name="room"
                    value={classDetails.room}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                    required
                  >
                    <option value="">Select Room</option>
                    {roomOptions.map(room => (
                      <option key={room} value={room}>{room}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Schedule Section */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-medium text-gray-700">
                    Class Schedule
                  </label>
                  <button 
                    type="button"
                    onClick={addScheduleSlot}
                    className="text-green-700 hover:bg-green-50 border border-green-700 rounded-md px-3 py-1 text-sm"
                  >
                    Add Schedule Slot
                  </button>
                </div>
                {classDetails.schedule.map((slot, index) => (
                  <div key={index} className="grid md:grid-cols-3 gap-4 items-center">
                    <select
                      name="day"
                      value={slot.day}
                      onChange={(e) => handleScheduleChange(index, e)}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                      required
                    >
                      <option value="">Select Day</option>
                      {daysOfWeek.map(day => (
                        <option key={day} value={day}>{day}</option>
                      ))}
                    </select>
                    <select
                      name="startTime"
                      value={slot.startTime}
                      onChange={(e) => handleScheduleChange(index, e)}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                      required
                    >
                      <option value="">Start Time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                    <div className="flex items-center space-x-2">
                      <select
                        name="endTime"
                        value={slot.endTime}
                        onChange={(e) => handleScheduleChange(index, e)}
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                        required
                      >
                        <option value="">End Time</option>
                        {timeSlots.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                      {classDetails.schedule.length > 1 && (
                        <button 
                          type="button"
                          onClick={() => removeScheduleSlot(index)}
                          className="text-red-500 border border-red-500 rounded-md px-2 py-1 text-sm hover:bg-red-50"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <Button 
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-2 px-6 py-3 rounded-md transition-colors"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Save Class
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClassPage;
```

# src\components\adminDashboard\AddStudentPage.js

```js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ArrowLeft, Save, Users, UserCheck, UserPlus, BookOpen, Calendar, TrendingUp, Wallet, LogOut } from 'lucide-react';
import { Button } from '../common/button';
import { useAuth } from '../../contexts/AuthContext';
import { useStudents } from '../../contexts/StudentContext';

const AddStudentPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('enrolled');
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { addStudent } = useStudents();

  const [studentData, setStudentData] = useState({
    name: '',
    dob: '',
    address: '',
    medicalHistory: '',
    parentName: '',
    phoneNumber: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    className: 'Quran Level 1',
    prayerLevel: 'Beginner',
    quranLevel: 'Beginner',
    arabicLevel: 'None',
    previousIslamicEducation: '',
    attendancePreference: 'Weekday Evening'
  });

  const menuItems = [
    { id: 'enrolled', name: 'Enrolled Students', icon: <Users className="w-5 h-5" /> },
    { id: 'waiting', name: 'Waiting List', icon: <UserCheck className="w-5 h-5" /> },
    { id: 'teachers', name: 'Teacher Profiles', icon: <UserPlus className="w-5 h-5" /> },
    { id: 'classes', name: 'Classes', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'attendance', name: 'Attendance', icon: <Calendar className="w-5 h-5" /> },
    { id: 'progress', name: 'Student Progress', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'payment', name: 'Payment', icon: <Wallet className="w-5 h-5" /> }
  ];

  const classOptions = [
    'Quran Level 1',
    'Quran Level 2',
    'Quran Level 3',
    'Hifz Program',
    'Tajweed',
    'Arabic Basics',
    'Arabic Intermediate',
    'Islamic Studies',
    'Seerah',
    'Fiqh'
  ];

  const levelOptions = [
    'None',
    'Beginner',
    'Intermediate',
    'Advanced'
  ];

  const attendanceOptions = [
    'Weekday Evening',
    'Weekend Morning',
    'Weekend Afternoon',
    'Weekday Afternoon',
    'Flexible'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add the student using our context function
    const newStudentId = addStudent(studentData);
    
    // Show success message
    alert(`Student ${studentData.name} has been added successfully!`);
    
    // Navigate back to enrolled students in admin dashboard
    navigate('/admin-dashboard');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Simplified Top Navigation */}
      <nav className="bg-black text-white shadow-md fixed top-0 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-green-800 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <button
                onClick={() => navigate('/admin-dashboard')}
                className="ml-4 flex items-center space-x-2 hover:bg-green-800 p-2 rounded-md transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="text-xl font-semibold">Back</span>
              </button>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-green-800 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 bg-black transition-transform duration-300 ease-in-out z-30 pt-16`}
      >
        <div className="flex flex-col space-y-2 mt-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMenuOpen(false);
                navigate(`/admin-dashboard/${item.id === 'enrolled' ? '' : item.id}`);
              }}
              className={`flex items-center space-x-2 px-4 py-3 text-white hover:bg-green-800 transition-colors ${
                activeTab === item.id ? 'bg-green-800' : ''
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-3 text-white hover:bg-green-800 transition-colors mt-4"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex pt-16">
        {/* Sidebar Spacer */}
        <div className="hidden md:block w-64"></div>

        {/* Main Content Area */}
        <div className="flex-1 p-8 mt-0">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information Section */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={studentData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    placeholder="Enter student's full name"
                  />
                </div>

                <div>
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    required
                    value={studentData.dob}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={studentData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  placeholder="Enter student's full address"
                />
              </div>

              {/* Medical History */}
              <div>
                <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700 mb-2">
                  Medical History
                </label>
                <textarea
                  id="medicalHistory"
                  name="medicalHistory"
                  value={studentData.medicalHistory}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  placeholder="Enter any relevant medical information"
                  rows="3"
                />
              </div>

              {/* Parent Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                    Parent/Guardian Name
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    value={studentData.parentName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    placeholder="Enter parent/guardian name"
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                    value={studentData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    placeholder="Enter contact number"
                  />
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="emergencyContactName" className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact Name
                  </label>
                  <input
                    type="text"
                    id="emergencyContactName"
                    name="emergencyContactName"
                    required
                    value={studentData.emergencyContactName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    placeholder="Enter emergency contact name"
                  />
                </div>

                <div>
                  <label htmlFor="emergencyContactNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact Number
                  </label>
                  <input
                    type="tel"
                    id="emergencyContactNumber"
                    name="emergencyContactNumber"
                    required
                    value={studentData.emergencyContactNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    placeholder="Enter emergency contact number"
                  />
                </div>
              </div>

              {/* Islamic Education Information */}
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="text-lg font-medium text-green-800 mb-3">Islamic Education Information</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="className" className="block text-sm font-medium text-gray-700 mb-2">
                      Class Assignment
                    </label>
                    <select
                      id="className"
                      name="className"
                      value={studentData.className}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    >
                      {classOptions.map((className) => (
                        <option key={className} value={className}>
                          {className}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="attendancePreference" className="block text-sm font-medium text-gray-700 mb-2">
                      Attendance Preference
                    </label>
                    <select
                      id="attendancePreference"
                      name="attendancePreference"
                      value={studentData.attendancePreference}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    >
                      {attendanceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label htmlFor="quranLevel" className="block text-sm font-medium text-gray-700 mb-2">
                      Quran Level
                    </label>
                    <select
                      id="quranLevel"
                      name="quranLevel"
                      value={studentData.quranLevel}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    >
                      {levelOptions.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="arabicLevel" className="block text-sm font-medium text-gray-700 mb-2">
                      Arabic Level
                    </label>
                    <select
                      id="arabicLevel"
                      name="arabicLevel"
                      value={studentData.arabicLevel}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    >
                      {levelOptions.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="prayerLevel" className="block text-sm font-medium text-gray-700 mb-2">
                      Prayer Knowledge
                    </label>
                    <select
                      id="prayerLevel"
                      name="prayerLevel"
                      value={studentData.prayerLevel}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    >
                      {levelOptions.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="previousIslamicEducation" className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Islamic Education
                  </label>
                  <textarea
                    id="previousIslamicEducation"
                    name="previousIslamicEducation"
                    value={studentData.previousIslamicEducation}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    placeholder="Enter details about previous Islamic studies, if any"
                    rows="3"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <Button 
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-2 px-6 py-3 rounded-md transition-colors"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Save Student
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudentPage;
```

# src\components\adminDashboard\AddTeacherPage.js

```js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ArrowLeft, Save, Users, UserCheck, UserPlus, BookOpen, Calendar, TrendingUp, Wallet, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useTeachers } from '../../contexts/TeacherContext';

const AddTeacherPage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('teachers');
  const { logout } = useAuth();
  const { addTeacher } = useTeachers();

  const [teacherData, setTeacherData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    
    // Contact Information
    email: '',
    phoneNumber: '',
    address: '',
    
    // Professional Details
    qualifications: [],
    specialization: '',
    subjectsTaught: [],
    experience: '',
    joiningDate: new Date().toISOString().split('T')[0],
    
    // Islamic Qualification Details
    hafiz: false,
    ijazah: false,
    tajweedCertification: false,
    arabicFluency: 'Native',
    islamicEducation: '',
    
    // Employment Details
    employmentType: 'Full-Time',
    contractStartDate: '',
    contractEndDate: '',
    
    // Login Credentials
    username: '',
    password: '',
    confirmPassword: '',
    
    // Additional Information
    emergencyContactName: '',
    emergencyContactNumber: '',
    medicalConditions: '',
    
    // Professional Status
    status: 'Active',
    performanceRating: '',
    departmentAssigned: 'Quran Studies'
  });

  const menuItems = [
    { id: 'enrolled', name: 'Enrolled Students', icon: <Users className="w-5 h-5" /> },
    { id: 'waiting', name: 'Waiting List', icon: <UserCheck className="w-5 h-5" /> },
    { id: 'teachers', name: 'Teacher Profiles', icon: <UserPlus className="w-5 h-5" /> },
    { id: 'classes', name: 'Classes', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'attendance', name: 'Attendance', icon: <Calendar className="w-5 h-5" /> },
    { id: 'progress', name: 'Student Progress', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'payment', name: 'Payment', icon: <Wallet className="w-5 h-5" /> }
  ];

  const employmentTypes = [
    'Full-Time',
    'Part-Time',
    'Volunteer',
    'Weekend Only'
  ];

  const statusOptions = [
    'Active',
    'On Leave',
    'Probation',
    'Suspended',
    'Resigned'
  ];

  const qualificationOptions = [
    'Islamic Studies Degree',
    'Alim/Alimah Course',
    'Qari/Qariah Certificate',
    'Arabic Language Degree',
    'Teaching Certification'
  ];

  const arabicFluencyOptions = [
    'Native',
    'Fluent',
    'Intermediate',
    'Basic'
  ];

  const departmentOptions = [
    'Quran Studies',
    'Tajweed',
    'Hifz Program',
    'Arabic Language',
    'Islamic Studies',
    'Fiqh',
    'Seerah'
  ];

  const subjectOptions = [
    'Quran Recitation',
    'Quran Memorization',
    'Tajweed',
    'Arabic Grammar',
    'Arabic Conversation',
    'Islamic Studies',
    'Fiqh',
    'Seerah',
    'Aqeedah',
    'Islamic History'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (name === 'qualifications' || name === 'subjectsTaught') {
        setTeacherData(prev => {
          const currentValues = prev[name] || [];
          if (checked) {
            return { ...prev, [name]: [...currentValues, value] };
          } else {
            return { 
              ...prev, 
              [name]: currentValues.filter(item => item !== value) 
            };
          }
        });
      } else {
        setTeacherData(prev => ({
          ...prev,
          [name]: checked
        }));
      }
    } else {
      setTeacherData(prev => ({
        ...prev,
        [name]: value
      }));

      if (name === 'email' && !teacherData.username) {
        const generatedUsername = value.split('@')[0];
        setTeacherData(prev => ({
          ...prev,
          username: generatedUsername
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = [];

    if (teacherData.password !== teacherData.confirmPassword) {
      validationErrors.push('Passwords do not match');
    }

    const requiredFields = [
      'firstName', 'lastName', 'email', 
      'phoneNumber', 'username', 'password'
    ];
    requiredFields.forEach(field => {
      if (!teacherData[field]) {
        validationErrors.push(`${field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} is required`);
      }
    });

    if (validationErrors.length > 0) {
      alert(validationErrors.join('\n'));
      return;
    }

    // Add the teacher using our context function
    addTeacher(teacherData);
    
    alert(`Teacher ${teacherData.firstName} ${teacherData.lastName} added successfully!`);
    
    // Navigate back to teacher profiles in admin dashboard
    navigate('/admin-dashboard/teachers');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-black text-white shadow-md fixed top-0 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-green-800 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <button
                onClick={() => navigate('/admin-dashboard')}
                className="ml-4 flex items-center space-x-2 hover:bg-green-800 p-2 rounded-md transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="text-xl font-semibold">Back</span>
              </button>
            </div>
            <button
              onClick={() => {
                logout();
                navigate('/');
              }}
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-green-800 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 bg-black transition-transform duration-300 ease-in-out z-30 pt-16`}
      >
        <div className="flex flex-col space-y-2 mt-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMenuOpen(false);
                navigate(`/admin-dashboard/${item.id === 'enrolled' ? '' : item.id}`);
              }}
              className={`flex items-center space-x-2 px-4 py-3 text-white hover:bg-green-800 transition-colors ${
                activeTab === item.id ? 'bg-green-800' : ''
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
          <button
            onClick={() => {
              logout();
              navigate('/');
            }}
            className="flex items-center space-x-2 px-4 py-3 text-white hover:bg-green-800 transition-colors mt-4"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <div className="flex pt-16">
        <div className="flex-1 p-8 mt-0">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={teacherData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={teacherData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={teacherData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={teacherData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={teacherData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Login Credentials</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={teacherData.username}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={teacherData.password}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={teacherData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-green-800 mb-4">Islamic Qualifications</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-md font-medium text-gray-700 mb-2">Certifications</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="hafiz"
                          name="hafiz"
                          checked={teacherData.hafiz}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span>Hafiz/Hafiza (Complete Quran Memorization)</span>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="ijazah"
                          name="ijazah"
                          checked={teacherData.ijazah}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span>Ijazah in Quran Recitation</span>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="tajweedCertification"
                          name="tajweedCertification"
                          checked={teacherData.tajweedCertification}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span>Tajweed Certification</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Arabic Fluency</label>
                    <select
                      name="arabicFluency"
                      value={teacherData.arabicFluency}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      {arabicFluencyOptions.map((level) => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="islamicEducation" className="block text-sm font-medium text-gray-700 mb-2">
                    Islamic Education Background
                  </label>
                  <textarea
                    id="islamicEducation"
                    name="islamicEducation"
                    value={teacherData.islamicEducation}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Describe Islamic education and institutions attended"
                    rows="3"
                  />
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Professional Details</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">General Qualifications</label>
                    {qualificationOptions.map((qual) => (
                      <div key={qual} className="flex items-center">
                        <input
                          type="checkbox"
                          name="qualifications"
                          value={qual}
                          checked={teacherData.qualifications.includes(qual)}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span>{qual}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subjects Taught</label>
                    {subjectOptions.map((subject) => (
                      <div key={subject} className="flex items-center">
                        <input
                          type="checkbox"
                          name="subjectsTaught"
                          value={subject}
                          checked={teacherData.subjectsTaught.includes(subject)}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span>{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                    <select
                      name="departmentAssigned"
                      value={teacherData.departmentAssigned}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      {departmentOptions.map((dept) => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Employment Type</label>
                    <select
                      name="employmentType"
                      value={teacherData.employmentType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      {employmentTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Teaching Experience
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={teacherData.experience}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Describe previous teaching experience"
                    rows="3"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button 
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-2 px-6 py-3 rounded-md transition-colors"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Save Teacher Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeacherPage;
```

# src\components\adminDashboard\AddWaitingListStudentPage.js

```js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ArrowLeft, Save, Users, UserCheck, UserPlus, BookOpen, Calendar, TrendingUp, Wallet, LogOut } from 'lucide-react';
import { Button } from '../common/button';
import { useAuth } from '../../contexts/AuthContext';
import { useStudents } from '../../contexts/StudentContext';

const AddWaitingListStudentPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('waiting');
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { addWaitingListStudent } = useStudents();

  const [studentData, setStudentData] = useState({
    name: '',
    dob: '',
    address: '',
    medicalHistory: '',
    parentName: '',
    phoneNumber: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    status: 'Pending',
    applicationDate: new Date().toISOString().split('T')[0],
    preferredClass: 'Quran Level 1',
    notes: '',
    siblingInProgram: false,
    siblingName: '',
    reasonForApplication: '',
    quranExperience: '',
    prayerKnowledge: '',
    attendancePreference: 'Weekday Evening'
  });

  const menuItems = [
    { id: 'enrolled', name: 'Enrolled Students', icon: <Users className="w-5 h-5" /> },
    { id: 'waiting', name: 'Waiting List', icon: <UserCheck className="w-5 h-5" /> },
    { id: 'teachers', name: 'Teacher Profiles', icon: <UserPlus className="w-5 h-5" /> },
    { id: 'classes', name: 'Classes', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'attendance', name: 'Attendance', icon: <Calendar className="w-5 h-5" /> },
    { id: 'progress', name: 'Student Progress', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'payment', name: 'Payment', icon: <Wallet className="w-5 h-5" /> }
  ];

  const classOptions = [
    'Quran Level 1',
    'Quran Level 2',
    'Quran Level 3',
    'Hifz Program',
    'Tajweed',
    'Arabic Basics',
    'Arabic Intermediate',
    'Islamic Studies',
    'Seerah',
    'Fiqh'
  ];

  const statusOptions = [
    'Pending',
    'In Review',
    'Documents Required',
    'Interview Scheduled',
    'Waitlisted'
  ];

  const attendanceOptions = [
    'Weekday Evening',
    'Weekend Morning',
    'Weekend Afternoon',
    'Weekday Afternoon',
    'Flexible'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStudentData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add the waiting list student using our context function
    const newStudentId = addWaitingListStudent(studentData);
    
    // Show success message
    alert(`Student ${studentData.name} has been added to the waiting list successfully!`);
    
    // Navigate back to waiting list in admin dashboard
    navigate('/admin-dashboard/waiting');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Simplified Top Navigation */}
      <nav className="bg-black text-white shadow-md fixed top-0 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-green-800 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <button
                onClick={() => navigate('/admin-dashboard')}
                className="ml-4 flex items-center space-x-2 hover:bg-green-800 p-2 rounded-md transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="text-xl font-semibold">Back</span>
              </button>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-green-800 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 bg-black transition-transform duration-300 ease-in-out z-30 pt-16`}
      >
        <div className="flex flex-col space-y-2 mt-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMenuOpen(false);
                navigate(`/admin-dashboard/${item.id === 'enrolled' ? '' : item.id}`);
              }}
              className={`flex items-center space-x-2 px-4 py-3 text-white hover:bg-green-800 transition-colors ${
                activeTab === item.id ? 'bg-green-800' : ''
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-3 text-white hover:bg-green-800 transition-colors mt-4"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex pt-16">
        {/* Sidebar Spacer */}
        <div className="hidden md:block w-64"></div>

        {/* Main Content Area */}
        <div className="flex-1 p-8 mt-0">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Application Status */}
              <div className="bg-yellow-50 rounded-md p-4 border border-yellow-200">
                <h3 className="text-lg font-medium text-yellow-800 mb-3">Application Status</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                      Current Status
                    </label>
                    <select
                      id="status"
                      name="status"
                      value={studentData.status}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="applicationDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Application Date
                    </label>
                    <input
                      type="date"
                      id="applicationDate"
                      name="applicationDate"
                      required
                      value={studentData.applicationDate}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Personal Information Section */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={studentData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    placeholder="Enter student's full name"
                  />
                </div>

                <div>
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    required
                    value={studentData.dob}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={studentData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  placeholder="Enter student's full address"
                />
              </div>

              {/* Medical History */}
              <div>
                <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700 mb-2">
                  Medical History
                </label>
                <textarea
                  id="medicalHistory"
                  name="medicalHistory"
                  value={studentData.medicalHistory}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  placeholder="Enter any relevant medical information"
                  rows="3"
                />
              </div>

              {/* Parent Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                    Parent/Guardian Name
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    value={studentData.parentName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    placeholder="Enter parent/guardian name"
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                    value={studentData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    placeholder="Enter contact number"
                  />
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="emergencyContactName" className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact Name
                  </label>
                  <input
                    type="text"
                    id="emergencyContactName"
                    name="emergencyContactName"
                    required
                    value={studentData.emergencyContactName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    placeholder="Enter emergency contact name"
                  />
                </div>

                <div>
                  <label htmlFor="emergencyContactNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact Number
                  </label>
                  <input
                    type="tel"
                    id="emergencyContactNumber"
                    name="emergencyContactNumber"
                    required
                    value={studentData.emergencyContactNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    placeholder="Enter emergency contact number"
                  />
                </div>
              </div>

              {/* Islamic Education Preferences */}
              <div className="bg-green-50 rounded-md p-4 border border-green-200">
                <h3 className="text-lg font-medium text-green-800 mb-3">Islamic Education Preferences</h3>
                
                <div>
                  <label htmlFor="preferredClass" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Class
                  </label>
                  <select
                    id="preferredClass"
                    name="preferredClass"
                    value={studentData.preferredClass}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  >
                    {classOptions.map((className) => (
                      <option key={className} value={className}>
                        {className}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-4">
                  <label htmlFor="attendancePreference" className="block text-sm font-medium text-gray-700 mb-2">
                    Attendance Preference
                  </label>
                  <select
                    id="attendancePreference"
                    name="attendancePreference"
                    value={studentData.attendancePreference}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  >
                    {attendanceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-4">
                  <label htmlFor="quranExperience" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Quran Experience
                  </label>
                  <textarea
                    id="quranExperience"
                    name="quranExperience"
                    value={studentData.quranExperience}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    placeholder="Describe current level of Quran reading, memorization, etc."
                    rows="3"
                  />
                </div>

                <div className="mt-4">
                  <label htmlFor="prayerKnowledge" className="block text-sm font-medium text-gray-700 mb-2">
                    Prayer Knowledge
                  </label>
                  <textarea
                    id="prayerKnowledge"
                    name="prayerKnowledge"
                    value={studentData.prayerKnowledge}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    placeholder="Describe understanding of prayer, wudu, etc."
                    rows="2"
                  />
                </div>
              </div>

              {/* Siblings */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="siblingInProgram"
                    name="siblingInProgram"
                    checked={studentData.siblingInProgram}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor="siblingInProgram" className="ml-2 block text-sm text-gray-700">
                    Student has sibling already enrolled in the masjid program
                  </label>
                </div>
                
                {studentData.siblingInProgram && (
                  <div>
                    <label htmlFor="siblingName" className="block text-sm font-medium text-gray-700 mb-2">
                      Sibling Name
                    </label>
                    <input
                      type="text"
                      id="siblingName"
                      name="siblingName"
                      value={studentData.siblingName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                      placeholder="Enter sibling's name"
                    />
                  </div>
                )}
              </div>

              {/* Reason for Application */}
              <div>
                <label htmlFor="reasonForApplication" className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Application
                </label>
                <textarea
                  id="reasonForApplication"
                  name="reasonForApplication"
                  value={studentData.reasonForApplication}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  placeholder="Why does the student want to join our masjid program?"
                  rows="4"
                />
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={studentData.notes}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  placeholder="Any additional information about the application"
                  rows="3"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <Button 
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-2 px-6 py-3 rounded-md transition-colors"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Add to Waiting List
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWaitingListStudentPage;
```

# src\components\adminDashboard\AdminAttendance.js

```js
import React, { useState, useEffect } from 'react';
import { Calendar, ChevronDown, Check, X, Clock, Pencil, BookOpen } from 'lucide-react';
import { Button } from '../common/button';
import { Card } from '../common/card';
import { useClasses } from '../../contexts/ClassesContext';
import { useAttendance } from '../../contexts/AttendanceContext';

const AdminAttendance = () => {
  const { classes } = useClasses();
  const { getAttendance, updateAttendanceStatus, getAttendanceStats } = useAttendance();
  
  const [selectedClass, setSelectedClass] = useState(classes.length > 0 ? classes[0].name : '');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [notes, setNotes] = useState('');
  const [lateMinutes, setLateMinutes] = useState(0);

  // Update students when selected class or date changes
  useEffect(() => {
    if (selectedClass) {
      const attendanceRecords = getAttendance(selectedClass, selectedDate);
      setStudents(attendanceRecords);
    }
  }, [selectedClass, selectedDate, getAttendance]);

  const handleStatusChange = (studentId, status) => {
    updateAttendanceStatus(selectedClass, selectedDate, studentId, status);
    
    // Update local state
    setStudents(prevStudents => 
      prevStudents.map(student => 
        student.id === studentId 
          ? { ...student, attendance: status, lateMinutes: status === 'late' ? student.lateMinutes : 0 } 
          : student
      )
    );
  };

  const startEditing = (student) => {
    setEditingStudent(student);
    setNotes(student.notes);
    setLateMinutes(student.lateMinutes);
  };

  const saveNotes = () => {
    if (!editingStudent) return;
    
    updateAttendanceStatus(
      selectedClass, 
      selectedDate, 
      editingStudent.id, 
      editingStudent.attendance, 
      notes, 
      parseInt(lateMinutes) || 0
    );
    
    // Update local state
    setStudents(prevStudents => 
      prevStudents.map(student => 
        student.id === editingStudent.id 
          ? { ...student, notes, lateMinutes: parseInt(lateMinutes) || 0 } 
          : student
      )
    );
    
    // Reset editing state
    setEditingStudent(null);
    setNotes('');
    setLateMinutes(0);
  };

  const stats = getAttendanceStats(selectedClass, selectedDate);

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <Calendar className="w-7 h-7 mr-2 text-green-700" />
          Attendance
        </h2>
        <div className="flex gap-4">
          <div className="relative">
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {classes.map((cls) => (
                <option key={cls.id} value={cls.name}>{cls.name}</option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
          
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4 bg-green-50">
          <div className="text-sm text-gray-600">Total Students</div>
          <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
        </Card>
        <Card className="p-4 bg-blue-50">
          <div className="text-sm text-gray-600">Present</div>
          <div className="text-2xl font-bold text-gray-900">{stats.present}</div>
        </Card>
        <Card className="p-4 bg-yellow-50">
          <div className="text-sm text-gray-600">Late</div>
          <div className="text-2xl font-bold text-gray-900">{stats.late}</div>
        </Card>
        <Card className="p-4 bg-red-50">
          <div className="text-sm text-gray-600">Absent</div>
          <div className="text-2xl font-bold text-gray-900">{stats.absent}</div>
        </Card>
      </div>

      {/* Class Info */}
      <div className="mb-6">
        <Card className="p-4 bg-green-50">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-green-700" />
            <span className="text-green-700 font-semibold">
              {selectedClass} • {selectedDate} • Attendance: {stats.presentPercentage}%
            </span>
          </div>
        </Card>
      </div>

      {/* Attendance Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Late (mins)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{student.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      student.attendance === 'present' ? 'bg-green-100 text-green-800' :
                      student.attendance === 'late' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {student.attendance.charAt(0).toUpperCase() + student.attendance.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {editingStudent && editingStudent.id === student.id && editingStudent.attendance === 'late' ? (
                      <input
                        type="number"
                        min="0"
                        value={lateMinutes}
                        onChange={(e) => setLateMinutes(e.target.value)}
                        className="w-16 px-2 py-1 border rounded"
                      />
                    ) : (
                      student.lateMinutes > 0 ? `${student.lateMinutes} mins` : '-'
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {editingStudent && editingStudent.id === student.id ? (
                      <input
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full px-2 py-1 border rounded"
                        placeholder="Add notes..."
                      />
                    ) : (
                      student.notes || '-'
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {editingStudent && editingStudent.id === student.id ? (
                      <div className="flex space-x-2">
                        <button 
                          onClick={saveNotes}
                          className="text-green-600 hover:text-green-900"
                          title="Save"
                        >
                          <Check className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => setEditingStudent(null)}
                          className="text-red-600 hover:text-red-900"
                          title="Cancel"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleStatusChange(student.id, 'present')}
                          className={`${student.attendance === 'present' ? 'text-green-800 bg-green-100 p-1 rounded' : 'text-green-600 hover:text-green-900'}`}
                          title="Mark Present"
                        >
                          <Check className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleStatusChange(student.id, 'late')}
                          className={`${student.attendance === 'late' ? 'text-yellow-800 bg-yellow-100 p-1 rounded' : 'text-yellow-600 hover:text-yellow-900'}`}
                          title="Mark Late"
                        >
                          <Clock className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleStatusChange(student.id, 'absent')}
                          className={`${student.attendance === 'absent' ? 'text-red-800 bg-red-100 p-1 rounded' : 'text-red-600 hover:text-red-900'}`}
                          title="Mark Absent"
                        >
                          <X className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => startEditing(student)}
                          className="text-blue-600 hover:text-blue-900 ml-2"
                          title="Edit Notes"
                        >
                          <Pencil className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AdminAttendance;
```

# src\components\adminDashboard\Classes.js

```js
import React, { useState } from 'react';
import { Plus, Users, Clock, BookOpen } from 'lucide-react';
import { Button } from '../common/button';
import { Card } from '../common/card';
import { useNavigate } from 'react-router-dom';
import { useClasses } from '../../contexts/ClassesContext';

const Classes = () => {
  const [activeView, setActiveView] = useState('list'); // 'list' or 'schedule'
  const navigate = useNavigate();
  const { classes } = useClasses();

  // For masjid context, include weekend days
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  // Update time slots for typical masjid class times (including evening slots)
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'
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
          {classInfo.students}/{classInfo.maxStudents} students
        </span>
      </div>

      {classInfo.description && (
        <div className="mt-3 text-gray-600 text-sm">
          {classInfo.description}
        </div>
      )}

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
                      slot.day === day && slot.time.includes(time)
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
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <BookOpen className="w-6 h-6 mr-2 text-green-700" />
          Masjid Classes
        </h2>
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
            onClick={() => navigate('/admin-dashboard/classes/add')}
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
```

# src\components\adminDashboard\EnrolledStudents.js

```js
import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { Button } from '../common/button';
import { useNavigate } from 'react-router-dom';
import { useStudents } from '../../contexts/StudentContext';

const EnrolledStudents = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const { students, updateStudentClass } = useStudents();

  // Islamic education class options
  const classOptions = [
    'Quran Level 1',
    'Quran Level 2',
    'Quran Level 3',
    'Hifz Program',
    'Tajweed',
    'Arabic Basics',
    'Arabic Intermediate',
    'Islamic Studies',
    'Seerah',
    'Fiqh'
  ];

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.parentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddStudent = () => {
    navigate('/admin-dashboard/add-student');
  };

  const handleClassChange = (studentId, newClassName) => {
    updateStudentClass(studentId, newClassName);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Enrolled Students</h2>
        <Button 
          onClick={handleAddStudent}
          className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Student
        </Button>
      </div>
      
      {/* Search Bar */}
      <div className="mb-6 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by student or parent name..."
          className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DOB (Age)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medical History</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parent Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Emergency Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Emergency Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredStudents.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(student.dob).toLocaleDateString()} ({calculateAge(student.dob)} years)
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{student.address}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.medicalHistory}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.parentName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.phoneNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.emergencyContactName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.emergencyContactNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    className="border rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={student.className}
                    onChange={(e) => {
                      handleClassChange(student.id, e.target.value);
                    }}
                  >
                    {classOptions.map((className) => (
                      <option key={className} value={className}>
                        {className}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledStudents;
```

# src\components\adminDashboard\Payment.js

```js
import React, { useState } from 'react';
import { Wallet, CreditCard, DollarSign, FileText, RefreshCw, BookOpen, Calendar } from 'lucide-react';
import { usePayment } from '../../contexts/PaymentContext';
import { Card } from '../common/card';

const Payment = () => {
  const { paymentData, addPayment } = usePayment();
  const [selectedStudent, setSelectedStudent] = useState(paymentData[0]);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Cash');

  const paymentMethods = [
    'Cash',
    'Credit Card',
    'Bank Transfer',
    'Check',
    'Mobile Payment',
    'Zakat Fund'
  ];

  const handlePaymentSubmit = () => {
    if (!paymentAmount || parseFloat(paymentAmount) <= 0) {
      alert('Please enter a valid payment amount');
      return;
    }

    // Process the payment using the context function
    const success = addPayment(selectedStudent.id, paymentAmount, paymentMethod);
    
    if (success) {
      alert(`Payment of $${paymentAmount} processed for ${selectedStudent.studentName} via ${paymentMethod}`);
      setPaymentModalOpen(false);
      setPaymentAmount('');
      
      // Update the selected student with the latest data
      const updatedStudent = paymentData.find(p => p.id === selectedStudent.id);
      setSelectedStudent(updatedStudent);
    } else {
      alert('There was an error processing the payment. Please try again.');
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <Wallet className="mr-3 text-green-600" /> Masjid Program Payments
        </h2>
      </div>

      {/* Student Selection */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Select Student
        </label>
        <select 
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={selectedStudent.id}
          onChange={(e) => {
            const student = paymentData.find(
              s => s.id === parseInt(e.target.value)
            );
            setSelectedStudent(student);
          }}
        >
          {paymentData.map(student => (
            <option key={student.id} value={student.id}>
              {student.studentName} - {student.programName}
            </option>
          ))}
        </select>
      </div>

      {/* Program Details */}
      <Card className="p-4 bg-green-50 mb-6">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex items-center mb-2 md:mb-0">
            <BookOpen className="mr-2 text-green-600" />
            <span className="font-semibold text-green-800">{selectedStudent.programName}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="mr-2 text-green-600" />
            <span className="text-green-800">{selectedStudent.term} ({selectedStudent.paymentFrequency} payment)</span>
          </div>
        </div>
      </Card>

      {/* Payment Summary */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <DollarSign className="mr-2 text-green-600" />
            <h3 className="text-gray-600">Total Fees</h3>
          </div>
          <p className="text-2xl font-bold">${selectedStudent.totalFees}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <CreditCard className="mr-2 text-blue-600" />
            <h3 className="text-gray-600">Paid Amount</h3>
          </div>
          <p className="text-2xl font-bold text-green-600">
            ${selectedStudent.paidAmount}
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <FileText className="mr-2 text-red-600" />
            <h3 className="text-gray-600">Remaining Balance</h3>
          </div>
          <p className="text-2xl font-bold text-red-600">
            ${selectedStudent.remainingBalance}
          </p>
        </div>
      </div>

      {/* Payment Status */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Payment Status</h3>
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
          <span className="text-gray-700">Current Status</span>
          <span 
            className={`px-4 py-2 rounded-full font-semibold ${
              selectedStudent.status === 'Fully Paid' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {selectedStudent.status}
          </span>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Payment History</h3>
          <button 
            className="flex items-center text-white bg-green-600 hover:bg-green-700 px-3 py-2 rounded-md transition-colors"
            onClick={() => setPaymentModalOpen(true)}
          >
            <RefreshCw className="mr-2" /> Make Payment
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Amount</th>
                <th className="p-2 text-left">Method</th>
              </tr>
            </thead>
            <tbody>
              {selectedStudent.paymentHistory.map((payment, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{payment.date}</td>
                  <td className="p-2">${payment.amount}</td>
                  <td className="p-2">{payment.method}</td>
                </tr>
              ))}
              {selectedStudent.paymentHistory.length === 0 && (
                <tr>
                  <td colSpan="3" className="p-4 text-center text-gray-500">No payment history available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Financial Assistance Note */}
      {selectedStudent.remainingBalance > 0 && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-800 mb-2">Financial Assistance Options</h3>
          <p className="text-blue-700 text-sm">
            The masjid offers financial assistance for families in need. Please speak with the administration 
            if you require support with program fees. Zakat and Sadaqah funds may be available to assist with 
            educational expenses.
          </p>
        </div>
      )}

      {/* Payment Modal */}
      {paymentModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Make a Payment</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Student</label>
              <div className="p-2 bg-gray-100 rounded-md">
                {selectedStudent.studentName} - {selectedStudent.programName}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Payment Amount</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-700">$</span>
                <input 
                  type="number" 
                  className="w-full p-2 pl-8 border rounded-md"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                  placeholder="Enter payment amount"
                  min="1"
                  step="0.01"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Payment Method</label>
              <select
                className="w-full p-2 border rounded-md"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                {paymentMethods.map(method => (
                  <option key={method} value={method}>{method}</option>
                ))}
              </select>
            </div>
            <div className="flex justify-between">
              <button 
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                onClick={() => setPaymentModalOpen(false)}
              >
                Cancel
              </button>
              <button 
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                onClick={handlePaymentSubmit}
              >
                Submit Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
```

# src\components\adminDashboard\StudentProgress.js

```js
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Book, Trophy, Star, MessageCircle, BookOpen, AlignLeft } from 'lucide-react';
import { useProgress } from '../../contexts/ProgressContext';
import { Card } from '../common/card';

const StudentProgress = () => {
  const { progressData, addAssessmentScore, addTeacherNote } = useProgress();
  const [selectedStudent, setSelectedStudent] = useState(progressData[0]);
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);
  const [noteModalOpen, setNoteModalOpen] = useState(false);
  
  // Assessment form state
  const [assessmentSubject, setAssessmentSubject] = useState('');
  const [assessmentScore, setAssessmentScore] = useState('');
  
  // Note form state
  const [teacherNote, setTeacherNote] = useState('');

  const subjectOptions = selectedStudent.programName.includes('Quran') || selectedStudent.programName.includes('Hifz')
    ? ['Quran Recitation', 'Tajweed Rules', 'Memorization', 'Understanding']
    : ['Arabic Vocabulary', 'Grammar Rules', 'Conversation', 'Writing'];

  const handleAssessmentSubmit = () => {
    if (!assessmentSubject || !assessmentScore) {
      alert('Please complete all fields');
      return;
    }

    const scoreNum = parseFloat(assessmentScore);
    if (isNaN(scoreNum) || scoreNum < 0 || scoreNum > 100) {
      alert('Please enter a valid score between 0 and 100');
      return;
    }

    // Add the assessment using the context function
    const success = addAssessmentScore(selectedStudent.id, assessmentSubject, scoreNum);
    
    if (success) {
      alert(`Assessment for ${assessmentSubject} has been recorded for ${selectedStudent.name}`);
      setAssessmentModalOpen(false);
      setAssessmentSubject('');
      setAssessmentScore('');
      
      // Update the selected student with the latest data
      const updatedStudent = progressData.find(p => p.id === selectedStudent.id);
      setSelectedStudent(updatedStudent);
    } else {
      alert('There was an error recording the assessment. Please try again.');
    }
  };

  const handleNoteSubmit = () => {
    if (!teacherNote.trim()) {
      alert('Please enter a note');
      return;
    }

    // Add the note using the context function
    const success = addTeacherNote(selectedStudent.id, teacherNote);
    
    if (success) {
      alert(`Note has been added for ${selectedStudent.name}`);
      setNoteModalOpen(false);
      setTeacherNote('');
      
      // Update the selected student with the latest data
      const updatedStudent = progressData.find(p => p.id === selectedStudent.id);
      setSelectedStudent(updatedStudent);
    } else {
      alert('There was an error adding the note. Please try again.');
    }
  };

  // Calculate attendance percentage
  const attendancePercentage = ((selectedStudent.attendedClasses / selectedStudent.totalClasses) * 100).toFixed(1);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <TrendingUp className="mr-3 text-green-600" /> Islamic Education Progress
        </h2>
      </div>

      {/* Student Selection */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Select Student
        </label>
        <select 
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={selectedStudent.id}
          onChange={(e) => {
            const student = progressData.find(
              s => s.id === parseInt(e.target.value)
            );
            setSelectedStudent(student);
          }}
        >
          {progressData.map(student => (
            <option key={student.id} value={student.id}>
              {student.name} - {student.programName}
            </option>
          ))}
        </select>
      </div>

      {/* Program Info */}
      <Card className="p-4 bg-green-50 mb-6">
        <div className="flex items-center">
          <BookOpen className="w-5 h-5 text-green-700 mr-2" />
          <span className="font-semibold text-green-800">{selectedStudent.programName}</span>
        </div>
      </Card>

      {/* Student Details - Top Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Attendance Overview */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Book className="mr-2 text-blue-600" /> Class Attendance
          </h3>
          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">Total Classes</p>
              <p className="text-2xl font-bold">{selectedStudent.totalClasses}</p>
            </div>
            <div>
              <p className="text-gray-600">Attended Classes</p>
              <p className="text-2xl font-bold text-green-600">
                {selectedStudent.attendedClasses}
              </p>
            </div>
            <div>
              <p className="text-gray-600">Attendance %</p>
              <p className="text-2xl font-bold text-blue-600">
                {attendancePercentage}%
              </p>
            </div>
          </div>
        </div>

        {/* Program-Specific Progress */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Trophy className="mr-2 text-yellow-600" /> Program Progress
          </h3>
          
          {selectedStudent.quranProgress && (
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Current Surah:</span>
                <span className="font-semibold">{selectedStudent.quranProgress.currentSurah}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Page:</span>
                <span className="font-semibold">{selectedStudent.quranProgress.currentPage}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Surahs Completed:</span>
                <span className="font-semibold">{selectedStudent.quranProgress.surahsCompleted}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Last Assessment:</span>
                <span className="font-semibold">{selectedStudent.quranProgress.lastAssessment}%</span>
              </div>
            </div>
          )}
          
          {selectedStudent.arabicProgress && (
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Level:</span>
                <span className="font-semibold">{selectedStudent.arabicProgress.level}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Vocabulary:</span>
                <span className="font-semibold">{selectedStudent.arabicProgress.vocabularyLearned} words</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Grammar Concepts:</span>
                <span className="font-semibold">{selectedStudent.arabicProgress.grammarConcepts}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Last Assessment:</span>
                <span className="font-semibold">{selectedStudent.arabicProgress.lastAssessment}%</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Assessment Scores */}
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Star className="mr-2 text-yellow-500" /> Assessment Scores
            </h3>
            <button 
              onClick={() => setAssessmentModalOpen(true)}
              className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors"
            >
              Add Assessment
            </button>
          </div>
          <div className="space-y-3">
            {selectedStudent.assessmentScores.map((assessment, index) => (
              <div key={index} className="flex justify-between items-center p-2 bg-white rounded-md shadow-sm">
                <span>{assessment.subject}</span>
                <div className="flex items-center">
                  <Star className="mr-2 text-yellow-500 w-4 h-4" />
                  <span className={`font-bold ${
                    assessment.score >= 90 ? 'text-green-600' :
                    assessment.score >= 80 ? 'text-blue-600' :
                    assessment.score >= 70 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {assessment.score}%
                  </span>
                </div>
              </div>
            ))}
            {selectedStudent.assessmentScores.length === 0 && (
              <div className="text-center text-gray-500 p-4">
                No assessments recorded yet
              </div>
            )}
          </div>
        </div>

        {/* Teacher Notes */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold flex items-center">
              <MessageCircle className="mr-2 text-green-600" /> Teacher Notes
            </h3>
            <button 
              onClick={() => setNoteModalOpen(true)}
              className="px-3 py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 transition-colors"
            >
              Add Note
            </button>
          </div>
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {selectedStudent.teacherNotes.map((note, index) => (
              <div key={index} className="p-2 bg-white rounded-md shadow-sm">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <AlignLeft className="mr-1 w-4 h-4" />
                  <span>{note.date}</span>
                </div>
                <p className="text-gray-700">{note.note}</p>
              </div>
            ))}
            {selectedStudent.teacherNotes.length === 0 && (
              <div className="text-center text-gray-500 p-4">
                No teacher notes available
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Progress Chart */}
      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <TrendingUp className="mr-2 text-green-600" /> Monthly Progress
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={selectedStudent.progressData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[0, 100]} />
            <Tooltip formatter={(value) => [`${value}%`, 'Progress']} />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="progress" 
              name="Overall Progress" 
              stroke="#10B981" 
              activeDot={{ r: 8 }} 
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Assessment Modal */}
      {assessmentModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add Assessment</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Student</label>
              <div className="p-2 bg-gray-100 rounded-md">
                {selectedStudent.name} - {selectedStudent.programName}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Subject</label>
              <select
                className="w-full p-2 border rounded-md"
                value={assessmentSubject}
                onChange={(e) => setAssessmentSubject(e.target.value)}
              >
                <option value="">Select Subject</option>
                {subjectOptions.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Score (%)</label>
              <input 
                type="number" 
                className="w-full p-2 border rounded-md"
                value={assessmentScore}
                onChange={(e) => setAssessmentScore(e.target.value)}
                placeholder="Enter score (0-100)"
                min="0"
                max="100"
              />
            </div>
            <div className="flex justify-between">
              <button 
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                onClick={() => setAssessmentModalOpen(false)}
              >
                Cancel
              </button>
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                onClick={handleAssessmentSubmit}
              >
                Save Assessment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Note Modal */}
      {noteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add Teacher Note</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Student</label>
              <div className="p-2 bg-gray-100 rounded-md">
                {selectedStudent.name} - {selectedStudent.programName}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Note</label>
              <textarea 
                className="w-full p-2 border rounded-md"
                value={teacherNote}
                onChange={(e) => setTeacherNote(e.target.value)}
                placeholder="Enter teaching notes, observations, or recommendations..."
                rows="4"
              />
            </div>
            <div className="flex justify-between">
              <button 
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                onClick={() => setNoteModalOpen(false)}
              >
                Cancel
              </button>
              <button 
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                onClick={handleNoteSubmit}
              >
                Save Note
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentProgress;
```

# src\components\adminDashboard\TeacherProfiles.js

```js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, Mail, Phone } from 'lucide-react';
import { Button } from '../common/button';
import { Card } from '../common/card';
import { useTeachers } from '../../contexts/TeacherContext';

const TeacherProfiles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  // Use our context to access teachers data
  const { teachers, updateTeacherStatus } = useTeachers();
  
  const handleAddTeacher = () => {
    navigate('/admin-dashboard/teachers/add-teacher');
  };

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (teacher.subjects && teacher.subjects.join(' ').toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleStatusChange = (teacherId, newStatus) => {
    updateTeacherStatus(teacherId, newStatus);
  };

  const TeacherCard = ({ teacher }) => (
    <Card className="p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{teacher.name}</h3>
          <p className="text-gray-600">{teacher.department} Teacher</p>
        </div>
        <select
          value={teacher.status}
          onChange={(e) => handleStatusChange(teacher.id, e.target.value)}
          className={`px-3 py-1 rounded-full text-sm ${
            teacher.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
          }`}
        >
          <option value="Active">Active</option>
          <option value="On Leave">On Leave</option>
          <option value="Probation">Probation</option>
          <option value="Suspended">Suspended</option>
          <option value="Resigned">Resigned</option>
        </select>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center text-gray-600">
          <Mail className="w-4 h-4 mr-2" />
          <span>{teacher.email}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Phone className="w-4 h-4 mr-2" />
          <span>{teacher.phoneNumber}</span>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="font-medium text-gray-700">Qualifications</h4>
        <p className="text-gray-600">{Array.isArray(teacher.qualifications) ? teacher.qualifications.join(', ') : teacher.qualifications}</p>
      </div>

      <div className="mt-4">
        <h4 className="font-medium text-gray-700">Subjects</h4>
        <div className="flex flex-wrap gap-2 mt-1">
          {teacher.subjects && teacher.subjects.map((subject, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-green-50 text-green-700 rounded-md text-sm"
            >
              {subject}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        Started {new Date(teacher.startDate).toLocaleDateString()}
      </div>
      
      <div className="mt-4 text-sm text-gray-500">
        Employment: {teacher.employmentType}
      </div>
    </Card>
  );

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Teachers & Instructors</h2>
        <Button 
          onClick={handleAddTeacher}
          className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Teacher
        </Button>
      </div>

      {/* Search Bar */}
      <div className="mb-6 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by teacher name or subject..."
          className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Teacher Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.map(teacher => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
};

export default TeacherProfiles;
```

# src\components\adminDashboard\WaitingListStudents.js

```js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, UserPlus } from 'lucide-react';
import { Button } from '../common/button';
import { useStudents } from '../../contexts/StudentContext';

const WaitingListStudents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  // Use our context to access waiting list students and functions
  const { waitingListStudents, enrollWaitingListStudent, updateWaitingListStudentStatus } = useStudents();

  const handleAddStudent = () => {
    navigate('/admin-dashboard/waiting/add-student');
  };

  const statusOptions = [
    'Pending',
    'In Review',
    'Documents Required',
    'Interview Scheduled',
    'Waitlisted'
  ];

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const filteredStudents = waitingListStudents.filter(student =>
    student.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.parentName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    const colors = {
      'Pending': 'bg-yellow-100 text-yellow-800',
      'In Review': 'bg-blue-100 text-blue-800',
      'Documents Required': 'bg-red-100 text-red-800',
      'Interview Scheduled': 'bg-purple-100 text-purple-800',
      'Waitlisted': 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const handleStatusChange = (studentId, newStatus) => {
    updateWaitingListStudentStatus(studentId, newStatus);
  };

  const handleEnrollStudent = (studentId) => {
    if (confirm('Are you sure you want to enroll this student?')) {
      enrollWaitingListStudent(studentId);
      alert('Student has been enrolled successfully!');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Waiting List Students</h2>
        <Button 
          onClick={handleAddStudent}
          className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Student
        </Button>
      </div>
      
      {/* Search Bar */}
      <div className="mb-6 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by student or parent name..."
          className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredStudents.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No waiting list students found. Add a new student to the waiting list.
        </div>
      ) : (
        /* Table */
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DOB (Age)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medical History</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parent Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preferred Class</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(student.dob).toLocaleDateString()} ({calculateAge(student.dob)} years)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.address}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.medicalHistory}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.parentName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.phoneNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.preferredClass}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      className={`rounded-md px-2 py-1 text-sm font-medium ${getStatusColor(student.status)} border-0 focus:outline-none focus:ring-2 focus:ring-green-500`}
                      value={student.status}
                      onChange={(e) => handleStatusChange(student.id, e.target.value)}
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button
                      onClick={() => handleEnrollStudent(student.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-2 py-1 rounded-md flex items-center"
                    >
                      <UserPlus className="w-3 h-3 mr-1" />
                      Enroll
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default WaitingListStudents;
```

# src\components\AppContent.js

```js
// import React from 'react';
// import { useNavigation } from '../contexts/NavigationContext';

// export default AppContent;
```

# src\components\common\button.js

```js
// src/components/common/Button.jsx
import React from 'react';

export const Button = ({ 
  className, 
  variant = 'default', 
  children, 
  ...props 
}) => {
  const variants = {
    default: 'bg-green-700 text-white hover:bg-green-800',
    outline: 'border border-green-700 text-green-700 hover:bg-green-50'
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center 
        rounded-md text-sm font-medium 
        px-4 py-2 
        transition-colors 
        focus:outline-none focus:ring-2 focus:ring-green-500 
        disabled:opacity-50 disabled:pointer-events-none 
        ${variants[variant]} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
```

# src\components\common\card.js

```js
// src/components/common/Card.jsx
import React from 'react';

export const Card = ({ children, className, ...props }) => (
  <div 
    className={`rounded-lg border bg-white shadow-sm ${className}`} 
    {...props}
  >
    {children}
  </div>
);

export const CardHeader = ({ children, className, ...props }) => (
  <div 
    className={`flex flex-col space-y-1.5 p-6 ${className}`} 
    {...props}
  >
    {children}
  </div>
);

export const CardTitle = ({ children, className, ...props }) => (
  <h3 
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`} 
    {...props}
  >
    {children}
  </h3>
);

export const CardContent = ({ children, className, ...props }) => (
  <div 
    className={`p-6 pt-0 ${className}`} 
    {...props}
  >
    {children}
  </div>
);
```

# src\components\common\input.js

```js
// src/components/common/Input.jsx
import React, { forwardRef } from 'react';

export const Input = forwardRef(({ 
  className, 
  type, 
  name, 
  value, 
  onChange, 
  error,
  ...props 
}, ref) => {
  return (
    <div className="w-full">
      <input
        ref={ref}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`flex h-10 w-full rounded-md border 
          ${error 
            ? 'border-red-500 focus:ring-red-500' 
            : 'border-input focus:ring-purple-500'
          } 
          bg-background px-3 py-2 text-sm 
          ring-offset-background 
          focus:outline-none focus:ring-2 focus:ring-offset-2
          disabled:cursor-not-allowed disabled:opacity-50 
          ${className}`}
        autoComplete={type === 'password' ? 'current-password' : 'off'}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';
```

# src\components\common\label.js

```js
import * as React from "react"

const Label = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
      {...props}
    />
  )
})
Label.displayName = "Label"

export { Label }
```

# src\components\layout\ContactForm.js

```js
// src/components/layout/ContactForm.js
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../common/card';
import { Button } from '../common/button';
import { SendHorizontal } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  return (
    <section className="bg-gradient-to-r from-green-950 to-black w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
      <div className="py-10 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Get in Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm">
            Have questions about Taleem? We'd love to hear from you.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl border border-green-800/20">
            {/* Rest of your form content remains the same */}
            <CardHeader className="text-center py-3 border-b border-green-100">
              <CardTitle className="text-xl text-green-800">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="py-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="contact-name" 
                      className="block text-sm font-medium mb-1 text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all text-sm"
                      placeholder="Your name"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="contact-email" 
                      className="block text-sm font-medium mb-1 text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all text-sm"
                      placeholder="Your email"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="contact-subject" 
                    className="block text-sm font-medium mb-1 text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all text-sm"
                    placeholder="What's this about?"
                    autoComplete="off"
                    required
                  />
                </div>

                <div>
                  <label 
                    htmlFor="contact-message" 
                    className="block text-sm font-medium mb-1 text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all min-h-[100px] resize-y text-sm"
                    placeholder="Your message"
                    autoComplete="off"
                    required
                  />
                </div>

                {status === 'success' && (
                  <div className="p-2 text-sm text-green-700 bg-green-50 rounded-md border border-green-200">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-2 rounded-md transition-all flex items-center justify-center gap-2 text-sm"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <SendHorizontal className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
```

# src\components\layout\Navigation.js

```js
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';
import { Button } from '../common/button';
import { useAuth } from '../../contexts/AuthContext';

const Navigation = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = (event) => {
    if (location.pathname === '/') {
      event.preventDefault();
      window.location.reload();
    } else {
      navigate('/');
    }
  };

  const handlePageChange = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            {/* Burger Menu Button - Only visible on mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-green-800 transition-colors mr-3"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            
            <GraduationCap className="h-8 w-8 text-green-700 mr-2" />
            <Link 
              to="/" 
              onClick={handleLogoClick}
              className="text-xl font-bold text-white hover:text-green-600 transition-colors"
            >
              Ta'leem
            </Link>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/" 
              className={`px-3 py-2 transition-colors ${
                isActivePage('/')
                  ? 'text-green-500'
                  : 'text-white hover:text-green-500'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about"
              className={`px-3 py-2 transition-colors ${
                isActivePage('/about')
                  ? 'text-green-500'
                  : 'text-white hover:text-green-500'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/services"
              className={`px-3 py-2 transition-colors ${
                isActivePage('/services')
                  ? 'text-green-500'
                  : 'text-white hover:text-green-500'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/packages"
              className={`px-3 py-2 transition-colors ${
                isActivePage('/packages')
                  ? 'text-green-500'
                  : 'text-white hover:text-green-500'
              }`}
            >
              Packages
            </Link>
            
            {user ? (
              <>
                <span className="text-sm text-gray-300">{user.email}</span>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                  className="text-white border-white hover:bg-green-800 hover:border-green-800 hover:text-white"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button 
                variant="outline" 
                onClick={() => navigate('/login')}
                className={`text-white border-white transition-colors ${
                  isActivePage('/login')
                    ? 'bg-green-800 border-green-800'
                    : 'hover:bg-green-800 hover:border-green-800 hover:text-white'
                }`}
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Burger Menu Sidebar */}
      <div className={`fixed top-16 left-0 h-full w-64 bg-black transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}>
        <div className="p-4 space-y-4">
          <Link 
            to="/" 
            onClick={() => setIsMenuOpen(false)}
            className={`block py-2 transition-colors ${
              isActivePage('/')
                ? 'text-green-500'
                : 'text-white hover:text-green-500'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className={`block py-2 transition-colors ${
              isActivePage('/about')
                ? 'text-green-500'
                : 'text-white hover:text-green-500'
            }`}
          >
            About Us
          </Link>
          <Link 
            to="/services"
            onClick={() => setIsMenuOpen(false)}
            className={`block py-2 transition-colors ${
              isActivePage('/services')
                ? 'text-green-500'
                : 'text-white hover:text-green-500'
            }`}
          >
            Services
          </Link>
          <Link 
            to="/packages"
            onClick={() => setIsMenuOpen(false)}
            className={`block py-2 transition-colors ${
              isActivePage('/packages')
                ? 'text-green-500'
                : 'text-white hover:text-green-500'
            }`}
          >
            Packages
          </Link>
          
          {/* Mobile-specific login/logout */}
          <div className="mt-4">
            {user ? (
              <>
                <span className="block py-2 text-gray-300">{user.email}</span>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    logout();
                    navigate('/');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-white border-white hover:bg-green-800 hover:border-green-800 hover:text-white"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button 
                variant="outline" 
                onClick={() => {
                  navigate('/login');
                  setIsMenuOpen(false);
                }}
                className={`w-full text-white border-white transition-colors ${
                  isActivePage('/login')
                    ? 'bg-green-800 border-green-800'
                    : 'hover:bg-green-800 hover:border-green-800 hover:text-white'
                }`}
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navigation;
```

# src\components\parentDashboard\ParentAttendance.js

```js
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
```

# src\components\parentDashboard\ParentCommunication.js

```js
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
```

# src\components\parentDashboard\ParentExams.js

```js
import React, { useState, useEffect } from 'react';
import { FileText, Download, Calendar, PieChart } from 'lucide-react';

const ParentExams = ({ child }) => {
  const [examData, setExamData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedExam, setSelectedExam] = useState(null);
  const [filter, setFilter] = useState('all');
  
  const examTypes = [
    { value: 'all', label: 'All Assessments' },
    { value: 'quran', label: 'Quran Assessments' },
    { value: 'tajweed', label: 'Tajweed Assessments' },
    { value: 'arabic', label: 'Arabic Assessments' },
    { value: 'islamic', label: 'Islamic Studies Assessments' }
  ];

  useEffect(() => {
    if (child) {
      fetchExamData();
    }
  }, [child]);

  const fetchExamData = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const mockExamData = [
        {
          id: 1,
          type: 'quran',
          title: 'Surah Al-Baqarah (1-10) Memorization',
          date: '2023-05-15',
          score: 85,
          maxScore: 100,
          grade: 'B+',
          teacher: 'Ustadh Abdullah',
          feedback: 'Good memorization with minor errors. Needs to improve pronunciation of specific letters.',
          details: [
            { category: 'Memorization', score: 42, maxScore: 50 },
            { category: 'Tajweed', score: 25, maxScore: 30 },
            { category: 'Fluency', score: 18, maxScore: 20 }
          ]
        },
        {
          id: 2,
          type: 'tajweed',
          title: 'Tajweed Rules Assessment',
          date: '2023-04-10',
          score: 78,
          maxScore: 100,
          grade: 'C+',
          teacher: 'Ustadh Yusuf',
          feedback: 'Good understanding of basic rules. Needs more practice with Idgham and Ikhfa.',
          details: [
            { category: 'Noon Saakinah Rules', score: 18, maxScore: 25 },
            { category: 'Meem Saakinah Rules', score: 22, maxScore: 25 },
            { category: 'Qalqalah', score: 20, maxScore: 25 },
            { category: 'Madd', score: 18, maxScore: 25 }
          ]
        },
        {
          id: 3,
          type: 'arabic',
          title: 'Arabic Vocabulary Test',
          date: '2023-03-22',
          score: 90,
          maxScore: 100,
          grade: 'A-',
          teacher: 'Ustadha Aisha',
          feedback: 'Excellent vocabulary retention. Good sentence formation skills.',
          details: [
            { category: 'Vocabulary', score: 48, maxScore: 50 },
            { category: 'Grammar', score: 22, maxScore: 25 },
            { category: 'Sentence Structure', score: 20, maxScore: 25 }
          ]
        },
        {
          id: 4,
          type: 'islamic',
          title: 'Lives of the Prophets Assessment',
          date: '2023-02-18',
          score: 95,
          maxScore: 100,
          grade: 'A',
          teacher: 'Ustadh Ibrahim',
          feedback: 'Excellent knowledge of the subject. Great participation in class discussions.',
          details: [
            { category: 'Knowledge', score: 28, maxScore: 30 },
            { category: 'Understanding', score: 38, maxScore: 40 },
            { category: 'Application', score: 29, maxScore: 30 }
          ]
        },
        {
          id: 5,
          type: 'quran',
          title: 'Surah Al-Fatiha Recitation',
          date: '2023-01-25',
          score: 92,
          maxScore: 100,
          grade: 'A-',
          teacher: 'Ustadh Abdullah',
          feedback: 'Excellent recitation with proper tajweed. Minor issues with madd duration.',
          details: [
            { category: 'Pronunciation', score: 28, maxScore: 30 },
            { category: 'Tajweed', score: 35, maxScore: 40 },
            { category: 'Fluency', score: 29, maxScore: 30 }
          ]
        }
      ];
      
      setExamData(mockExamData);
      setLoading(false);
    }, 1000);
  };
  
  const openExamDetails = (exam) => {
    setSelectedExam(exam);
  };
  
  const closeExamDetails = () => {
    setSelectedExam(null);
  };
  
  const filteredExams = filter === 'all' 
    ? examData 
    : examData.filter(exam => exam.type === filter);
    
  const sortedExams = [...filteredExams].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  const getTypeLabel = (type) => {
    const found = examTypes.find(t => t.value === type);
    return found ? found.label.replace(' Assessments', '') : type;
  };
  
  const getGradeColor = (score, maxScore) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 90) return 'bg-green-100 text-green-800 border-green-200';
    if (percentage >= 80) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (percentage >= 70) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-red-100 text-red-800 border-red-200';
  };
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold flex items-center mb-4 md:mb-0">
            <FileText className="mr-2 text-green-600 w-6 h-6" />
            {child.name}'s Assessment Results
          </h2>
          
          <div>
            <select
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {examTypes.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {loading ? (
          <div className="h-60 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </div>
        ) : sortedExams.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No assessment results available
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assessment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedExams.map((exam, index) => (
                  <tr 
                    key={exam.id} 
                    className="hover:bg-gray-50 transition-colors animate-fade-in-up cursor-pointer"
                    style={{animationDelay: `${index * 100}ms`}}
                    onClick={() => openExamDetails(exam)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{exam.title}</div>
                      <div className="text-sm text-gray-500">{exam.teacher}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{formatDate(exam.date)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                        {getTypeLabel(exam.type)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{exam.score}/{exam.maxScore}</div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${(exam.score / exam.maxScore) * 100}%` }}></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getGradeColor(exam.score, exam.maxScore)}`}>
                        {exam.grade}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button onClick={(e) => {
                        e.stopPropagation();
                        openExamDetails(exam);
                      }} className="text-green-600 hover:text-green-900">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      
      {/* Exam details modal */}
      {selectedExam && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
            <div className="p-6 border-b">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-gray-900">{selectedExam.title}</h3>
                <button onClick={closeExamDetails} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="flex items-center mb-4">
                    <Calendar className="w-5 h-5 text-gray-500 mr-2" />
                    <div>
                      <span className="block text-sm font-medium text-gray-500">Assessment Date</span>
                      <span className="block text-gray-800">{formatDate(selectedExam.date)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <FileText className="w-5 h-5 text-gray-500 mr-2" />
                    <div>
                      <span className="block text-sm font-medium text-gray-500">Subject</span>
                      <span className="block text-gray-800">{getTypeLabel(selectedExam.type)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <PieChart className="w-5 h-5 text-gray-500 mr-2" />
                    <div>
                      <span className="block text-sm font-medium text-gray-500">Total Score</span>
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-gray-800">{selectedExam.score}/{selectedExam.maxScore}</span>
                        <span className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${getGradeColor(selectedExam.score, selectedExam.maxScore)}`}>
                          {selectedExam.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Instructor</h4>
                    <p className="text-gray-800">{selectedExam.teacher}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Feedback</h4>
                    <p className="text-gray-800">{selectedExam.feedback}</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h4 className="text-md font-medium text-gray-700 mb-4">Detailed Breakdown</h4>
                
                <div className="space-y-3">
                  {selectedExam.details.map((detail, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-700">{detail.category}</span>
                        <span className="text-gray-700">{detail.score}/{detail.maxScore}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ width: `${(detail.score / detail.maxScore) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button 
                  onClick={closeExamDetails} 
                  className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 mr-3"
                >
                  Close
                </button>
                <button 
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParentExams;
```

# src\components\parentDashboard\ParentProgress.js

```js
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
```

# src\components\sections\BenefitsSection.js

```js
// src/components/sections/BenefitsSection.jsx
import React from 'react';
import { MousePointerClick, Shield, HeadphonesIcon, RefreshCw } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <div className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-lg hover:scale-105 transform-gpu transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-green-100">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors duration-300 group-hover:rotate-12 transform">
              <MousePointerClick className="w-6 h-6 text-green-700 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-green-700 transition-colors duration-300">Easy to Use</h3>
            <p className="text-gray-600">Intuitive interface for all users</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg hover:scale-105 transform-gpu transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-green-100">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors duration-300 group-hover:rotate-12 transform">
              <Shield className="w-6 h-6 text-green-700 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-green-700 transition-colors duration-300">Secure</h3>
            <p className="text-gray-600">Data protection is our priority</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg hover:scale-105 transform-gpu transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-green-100">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors duration-300 group-hover:rotate-12 transform">
              <HeadphonesIcon className="w-6 h-6 text-green-700 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-green-700 transition-colors duration-300">24/7 Support</h3>
            <p className="text-gray-600">Always here to help you</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg hover:scale-105 transform-gpu transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-green-100">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors duration-300 group-hover:rotate-12 transform">
              <RefreshCw className="w-6 h-6 text-green-700 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-green-700 transition-colors duration-300">Regular Updates</h3>
            <p className="text-gray-600">Continuous improvements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
```

# src\components\sections\BenefitsSection1.js

```js
import React, { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  BarChart2, 
  Shield, 
  MessageCircle,
  Clock,
  Target,
  Zap,
  TrendingUp,
  Award,
  Headphones,
  FileText,
  Briefcase,
  PieChart
} from 'lucide-react';

const BenefitCard = ({ icon, title, description, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 p-6 relative overflow-hidden group"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex items-center mb-4">
        <div className="bg-green-50 text-green-600 p-3 rounded-xl mr-4">
          {React.cloneElement(icon, { className: "w-7 h-7" })}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      
      <div className={`transition-all duration-500 ease-in-out ${
        isExpanded 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <ul className="space-y-2 text-xs text-gray-600">
          {details.map((detail, index) => (
            <li key={index} className="flex items-center">
              <Zap className="w-3 h-3 mr-2 text-green-500" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </div>
  );
};

const BenefitsSection1 = () => {
  const stakeholderBenefits = [
    {
      category: 'For Administrators',
      icon: <Briefcase className="w-8 h-8 text-green-600" />,
      benefits: [
        {
          icon: <PieChart className="w-6 h-6 text-green-600" />,
          title: "Comprehensive Management",
          description: "Streamline administrative processes with an all-in-one platform",
          details: [
            "Centralized student and teacher records",
            "Real-time performance tracking",
            "Automated reporting and analytics",
            "Simplified enrollment and registration"
          ]
        },
        {
          icon: <Shield className="w-6 h-6 text-green-600" />,
          title: "Enhanced Security",
          description: "Robust data protection and access control",
          details: [
            "Multi-level user permission management",
            "Secure data encryption",
            "Comprehensive audit trails",
            "Compliance with educational data regulations"
          ]
        },
        {
          icon: <TrendingUp className="w-6 h-6 text-green-600" />,
          title: "Strategic Insights",
          description: "Data-driven decision making for institutional growth",
          details: [
            "Detailed performance analytics",
            "Comparative reporting",
            "Predictive student success modeling",
            "Resource allocation optimization"
          ]
        }
      ]
    },
    {
      category: 'For Teachers',
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      benefits: [
        {
          icon: <FileText className="w-6 h-6 text-green-600" />,
          title: "Efficient Classroom Management",
          description: "Simplify teaching and administrative tasks",
          details: [
            "Digital lesson planning",
            "Student progress tracking",
            "Automated attendance management",
            "Easy grade recording and analysis"
          ]
        },
        {
          icon: <MessageCircle className="w-6 h-6 text-green-600" />,
          title: "Enhanced Communication",
          description: "Seamless interaction with students and parents",
          details: [
            "Direct messaging systems",
            "Progress report generation",
            "Parent-teacher communication portal",
            "Scheduled consultation booking"
          ]
        },
        {
          icon: <Clock className="w-6 h-6 text-green-600" />,
          title: "Time Management",
          description: "Reduce administrative overhead",
          details: [
            "Automated administrative tasks",
            "Quick student information access",
            "Integrated scheduling tools",
            "Streamlined grading processes"
          ]
        }
      ]
    },
    {
      category: 'For Parents',
      icon: <Users className="w-8 h-8 text-green-600" />,
      benefits: [
        {
          icon: <Target className="w-6 h-6 text-green-600" />,
          title: "Student Progress Tracking",
          description: "Stay informed about your child's educational journey",
          details: [
            "Real-time academic performance updates",
            "Detailed progress reports",
            "Attendance tracking",
            "Performance trend analysis"
          ]
        },
        {
          icon: <Headphones className="w-6 h-6 text-green-600" />,
          title: "Direct Communication",
          description: "Stay connected with teachers and administration",
          details: [
            "Instant messaging with teachers",
            "Scheduled parent-teacher conferences",
            "Notification systems",
            "Easy access to school information"
          ]
        },
        {
          icon: <Award className="w-6 h-6 text-green-600" />,
          title: "Holistic Child Development",
          description: "Comprehensive insight into educational growth",
          details: [
            "Behavioral progress tracking",
            "Academic and extracurricular insights",
            "Personalized learning recommendations",
            "Goal setting and achievement tracking"
          ]
        }
      ]
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Empowering Education, Transforming Lives
        </h2>
        
        {stakeholderBenefits.map((stakeholder, catIndex) => (
          <div key={catIndex} className="mb-16">
            <div className="flex items-center justify-center mb-12">
              <div className="bg-green-50 text-green-600 p-4 rounded-xl mr-4">
                {stakeholder.icon}
              </div>
              <h3 className="text-3xl font-semibold text-gray-800">
                {stakeholder.category}
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {stakeholder.benefits.map((benefit, index) => (
                <BenefitCard 
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  details={benefit.details}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection1;
```

# src\components\sections\FeaturesSection.js

```js
// src/components/sections/FeaturesSection.jsx
import React from 'react';
import { UserRound, BookOpen, Users2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../common/card';

const FeaturesSection = () => {
  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Our Features
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Comprehensive tools designed to enhance the educational experience for everyone
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-green-700 overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-800 to-green-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-green-50 rounded-lg">
                  <UserRound className="w-5 h-5 text-green-700" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-green-700 transition-colors">Student Management</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Efficiently manage enrollments and track student progress. Keep detailed records
                and monitor academic performance with our comprehensive dashboard.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-green-700 overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-800 to-green-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-green-50 rounded-lg">
                  <BookOpen className="w-5 h-5 text-green-700" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-green-700 transition-colors">Teacher Portal</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Easy access to class schedules, student information, and grading tools.
                Streamline your teaching workflow with integrated resources.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-green-700 overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-800 to-green-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-green-50 rounded-lg">
                  <Users2 className="w-5 h-5 text-green-700" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-green-700 transition-colors">Parent Access</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Monitor your child's progress and communicate with teachers.
                Stay involved in your child's education through real-time updates.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
```

# src\components\sections\FooterSection.js

```js
// src/components/sections/FooterSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Taleem</h3>
            <p className="text-gray-400">
              Empowering education through technology and innovation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@taleem.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Education St, Learning City</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ta'leem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
```

# src\components\sections\HeroSection.js

```js
// src/components/sections/HeroSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { Button } from '../common/button';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 py-16 bg-gradient-to-r from-green-950 to-black">
      <div className="max-w-6xl mx-auto text-center">
        <GraduationCap className="w-16 h-16 mx-auto mb-6 text-green-500" />
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to Ta'leem
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Empowering education through seamless management and communication
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            onClick={() => navigate('/login')}
            className="bg-green-700 hover:bg-green-800 text-white"
          >
            Get Started
          </Button>
          <Button 
            variant="outline"
            className="border-green-500 text-green-500 hover:bg-green-800 hover:text-white hover:border-green-800"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
```

# src\components\sections\HeroSlideshow1.js

```js
import React, { useState, useEffect } from 'react';

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: "/images/open-quran.jpg",
      alt: "Open Quran",
    },
    {
      src: "/images/students-in-masjid.jpg",
      alt: "Students in Masjid",
    },
    {
      src: "/images/masjid-classroom.jpg", 
      alt: "Masjid Classroom",
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index 
              ? 'opacity-100' 
              : 'opacity-0'
          }`}
        >
          {/* Dark overlay with increased opacity */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
          
          <img 
            src={slide.src} 
            alt={slide.alt}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          
          {/* Slide title with guaranteed readability */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-sm text-white bg-green-900 bg-opacity-70 px-3 py-1 rounded">
              {slide.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlideshow;
```

# src\components\teacherDashboard\TeacherAttendance.js

```js
import React, { useState, useEffect } from 'react';
import { Calendar, Check, X, RefreshCw, Save, Plus } from 'lucide-react';

const TeacherAttendance = () => {
  const [students, setStudents] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [newStudentName, setNewStudentName] = useState('');
  const [loading, setLoading] = useState(true);
  
  // Mock classes
  const classes = [
    { id: '1', name: 'Quran Hifz - Beginner' },
    { id: '2', name: 'Tajweed - Intermediate' },
    { id: '3', name: 'Arabic - Advanced' }
  ];

  useEffect(() => {
    if (selectedClass) {
      fetchStudentsForDate(date, selectedClass);
    } else {
      setLoading(false);
    }
  }, [date, selectedClass]);

  const fetchStudentsForDate = async (selectedDate, classId) => {
    setLoading(true);
    // In a real application, this would be an API call
    setTimeout(() => {
      let mockStudents = [];
      
      if (classId === '1') {
        mockStudents = [
          { id: '1', name: 'Ahmed Hassan', present: false, notes: '' },
          { id: '2', name: 'Fatima Khan', present: true, notes: 'Completed Surah Al-Fatiha recitation' },
          { id: '3', name: 'Yusuf Ali', present: false, notes: 'Parent called - sick' },
        ];
      } else if (classId === '2') {
        mockStudents = [
          { id: '4', name: 'Zaynab Ibrahim', present: true, notes: 'Excellent tajweed practice' },
          { id: '5', name: 'Omar Abdullah', present: true, notes: '' },
          { id: '6', name: 'Maryam Siddiqui', present: false, notes: 'Family emergency' },
        ];
      } else if (classId === '3') {
        mockStudents = [
          { id: '7', name: 'Ismail Rahman', present: true, notes: '' },
          { id: '8', name: 'Aisha Mahmoud', present: true, notes: 'Completed vocabulary assignment' },
        ];
      }
      
      setStudents(mockStudents);
      setLoading(false);
    }, 500);
  };

  const toggleAttendance = (id) => {
    setStudents(students.map(student => 
      student.id === id ? { ...student, present: !student.present } : student
    ));
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  
  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };
  
  const handleNoteChange = (id, note) => {
    setStudents(students.map(student => 
      student.id === id ? { ...student, notes: note } : student
    ));
  };

  const addNewStudent = (e) => {
    e.preventDefault();
    if (newStudentName.trim() && selectedClass) {
      setStudents([...students, { 
        id: Date.now().toString(),
        name: newStudentName.trim(), 
        present: false,
        notes: ''
      }]);
      setNewStudentName('');
    }
  };

  const saveAttendance = () => {
    console.log('Saving attendance for', date, selectedClass, students);
    alert('Attendance saved successfully!');
  };

  // Prayer times display
  const prayerTimes = {
    fajr: '5:30 AM',
    dhuhr: '12:45 PM',
    asr: '4:15 PM',
    maghrib: '6:30 PM',
    isha: '8:00 PM'
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 bg-green-800 text-white flex items-center">
          <Calendar className="w-5 h-5 mr-2" />
          <h2 className="text-xl font-semibold">Daily Attendance</h2>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={handleDateChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-1">Select Class</label>
              <select
                id="class"
                name="class"
                value={selectedClass}
                onChange={handleClassChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 transition-all duration-300"
              >
                <option value="">Select a class...</option>
                {classes.map(cls => (
                  <option key={cls.id} value={cls.id}>{cls.name}</option>
                ))}
              </select>
            </div>
          </div>
          
          {!selectedClass && (
            <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg">
              <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-2" />
              <p>Please select a class to view and manage attendance</p>
            </div>
          )}
          
          {selectedClass && loading ? (
            <div className="text-center py-8">
              <RefreshCw className="h-8 w-8 mx-auto text-green-500 animate-spin mb-2" />
              <p className="text-gray-500">Loading attendance data...</p>
            </div>
          ) : selectedClass && (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {students.map((student, index) => (
                      <tr key={student.id} className="animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                        <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => toggleAttendance(student.id)}
                            className={`px-4 py-2 rounded-full flex items-center justify-center w-28 text-white font-semibold ${
                              student.present 
                                ? 'bg-green-500 hover:bg-green-600' 
                                : 'bg-red-500 hover:bg-red-600'
                            } transition duration-300 ease-in-out transform hover:scale-105`}
                          >
                            {student.present ? (
                              <>
                                <Check className="w-4 h-4 mr-1" />
                                Present
                              </>
                            ) : (
                              <>
                                <X className="w-4 h-4 mr-1" />
                                Absent
                              </>
                            )}
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          <input
                            type="text"
                            value={student.notes}
                            onChange={(e) => handleNoteChange(student.id, e.target.value)}
                            placeholder="Add notes here..."
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <form onSubmit={addNewStudent} className="flex space-x-2">
                  <input
                    type="text"
                    value={newStudentName}
                    onChange={(e) => setNewStudentName(e.target.value)}
                    placeholder="New student name"
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 transition-all duration-300"
                  />
                  <button 
                    type="submit" 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add
                  </button>
                </form>
                
                <button 
                  onClick={saveAttendance} 
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                >
                  <Save className="w-4 h-4 mr-1" />
                  Save Attendance
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Prayer Times Card */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 bg-green-800 text-white">
          <h2 className="text-xl font-semibold">Today's Prayer Times</h2>
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

export default TeacherAttendance;
```

# src\components\teacherDashboard\TeacherCommunication.js

```js
import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, User} from 'lucide-react';

const TeacherCommunication = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch students - replace with actual API call
    const mockStudents = [
      { id: 1, name: 'Ahmed Hassan', parent: 'Mr. Hassan' },
      { id: 2, name: 'Fatima Khan', parent: 'Mrs. Khan' },
      { id: 3, name: 'Yusuf Ali', parent: 'Mr. Ali' },
    ];
    setStudents(mockStudents);
  }, []);

  useEffect(() => {
    if (selectedStudent) {
      // Fetch messages for selected student - replace with actual API call
      const mockMessages = [
        { id: 1, sender: 'Teacher', content: 'Assalamu alaikum, I wanted to discuss Ahmed\'s recent Quran memorization progress.', timestamp: '2023-05-01 10:00 AM' },
        { id: 2, sender: 'Parent', content: 'Walaikum assalam, thank you for reaching out. How is he doing with Surah Al-Baqarah?', timestamp: '2023-05-01 11:30 AM' },
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
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <MessageCircle className="mr-2 text-green-600 w-6 h-6" />
        Parent Communication
      </h2>
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
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <User className="mr-2 text-green-600 w-5 h-5" />
            Messages with {selectedStudent.parent}
          </h3>
          <div className="mb-4 h-64 overflow-y-auto border rounded p-2 bg-gray-50">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 py-6">
                <p>No previous messages. Start the conversation!</p>
              </div>
            ) : (
              messages.map((message, index) => (
                <div 
                  key={message.id} 
                  className={`mb-2 p-2 rounded ${
                    message.sender === 'Teacher' 
                      ? 'bg-green-100 ml-8 border-l-4 border-green-500' 
                      : 'bg-gray-100 mr-8 border-l-4 border-gray-500'
                  } animate-fade-in-up`} 
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <p className="text-sm text-gray-600">{message.sender} - {message.timestamp}</p>
                  <p>{message.content}</p>
                </div>
              ))
            )}
          </div>
          <form onSubmit={handleSendMessage} className="animate-fade-in">
            <textarea
              className="w-full p-2 border rounded transition-all duration-300 ease-in-out focus:ring-2 focus:ring-green-500 focus:border-green-500"
              rows="3"
              value={newMessage}
              onChange={handleNewMessageChange}
              placeholder="Type your message here..."
            ></textarea>
            <button 
              type="submit" 
              className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TeacherCommunication;
```

# src\components\teacherDashboard\TeacherDiary.js

```js
import React, { useState, useEffect } from 'react';
import { Book, BookOpen, Plus, Calendar, RefreshCw } from 'lucide-react';

const TeacherDiary = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [diaryEntry, setDiaryEntry] = useState('');
  const [diaryEntries, setDiaryEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Added for Masjid focus: Quran-specific selections
  const [surahSelection, setSurahSelection] = useState('');
  const [ayatRange, setAyatRange] = useState('');
  const [entryType, setEntryType] = useState('general');
  
  const surahs = [
    "Al-Fatihah", "Al-Baqarah", "Al-Imran", "An-Nisa", "Al-Ma'idah", 
    "Al-An'am", "Al-A'raf", "Al-Anfal", "At-Tawbah", "Yunus"
  ];
  
  const entryTypes = [
    { id: 'general', name: 'General Note' },
    { id: 'memorization', name: 'Memorization Progress' },
    { id: 'tajweed', name: 'Tajweed Observation' },
    { id: 'recitation', name: 'Recitation Quality' },
    { id: 'behavior', name: 'Behavior/Attitude' }
  ];

  useEffect(() => {
    // Fetch students - replace with actual API call
    const mockStudents = [
      { id: 1, name: 'Ahmed Hassan' },
      { id: 2, name: 'Fatima Khan' },
      { id: 3, name: 'Yusuf Ali' },
    ];
    setStudents(mockStudents);
  }, []);

  useEffect(() => {
    if (selectedStudent) {
      setLoading(true);
      // Fetch diary entries for selected student - replace with actual API call
      setTimeout(() => {
        const mockEntries = [
          { 
            id: 1, 
            date: '2023-05-01', 
            type: 'memorization',
            surah: 'Al-Fatihah',
            ayat: '1-7',
            content: 'Completed memorization of Surah Al-Fatihah with excellent tajweed.' 
          },
          { 
            id: 2, 
            date: '2023-05-02', 
            type: 'behavior',
            content: 'Showed excellent adab (manners) in class today.' 
          },
        ];
        setDiaryEntries(mockEntries);
        setLoading(false);
      }, 500);
    }
  }, [selectedStudent]);

  const handleStudentChange = (e) => {
    const student = students.find(s => s.id === parseInt(e.target.value));
    setSelectedStudent(student);
  };

  const handleDiaryEntryChange = (e) => {
    setDiaryEntry(e.target.value);
  };
  
  const handleSurahChange = (e) => {
    setSurahSelection(e.target.value);
  };
  
  const handleAyatChange = (e) => {
    setAyatRange(e.target.value);
  };
  
  const handleEntryTypeChange = (e) => {
    setEntryType(e.target.value);
    
    // Reset Surah and Ayat if not memorization or recitation
    if (e.target.value !== 'memorization' && e.target.value !== 'recitation' && e.target.value !== 'tajweed') {
      setSurahSelection('');
      setAyatRange('');
    }
  };

  const handleSubmitEntry = (e) => {
    e.preventDefault();
    if (selectedStudent && diaryEntry.trim()) {
      const newEntry = {
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
        type: entryType,
        content: diaryEntry.trim(),
      };
      
      // Add Surah and Ayat info if relevant
      if (['memorization', 'recitation', 'tajweed'].includes(entryType) && surahSelection) {
        newEntry.surah = surahSelection;
        newEntry.ayat = ayatRange;
      }
      
      setDiaryEntries([newEntry, ...diaryEntries]);
      setDiaryEntry('');
      setSurahSelection('');
      setAyatRange('');
      setEntryType('general');
    }
  };
  
  // Function to get color based on entry type
  const getEntryTypeColor = (type) => {
    switch(type) {
      case 'memorization': return 'bg-green-100 border-green-500 text-green-700';
      case 'tajweed': return 'bg-purple-100 border-purple-500 text-purple-700';
      case 'recitation': return 'bg-blue-100 border-blue-500 text-blue-700';
      case 'behavior': return 'bg-yellow-100 border-yellow-500 text-yellow-700';
      default: return 'bg-gray-50 border-gray-300 text-gray-700';
    }
  };
  
  // Get entry type label
  const getEntryTypeLabel = (type) => {
    const found = entryTypes.find(t => t.id === type);
    return found ? found.name : 'Note';
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Book className="mr-2 text-green-600 w-6 h-6" />
        Student Diary
      </h2>
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
          <form onSubmit={handleSubmitEntry} className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="text-lg font-medium mb-3 flex items-center">
              <Plus className="w-5 h-5 mr-2 text-green-600" />
              New Diary Entry
            </h4>
            
            <div className="mb-3">
              <label htmlFor="entryType" className="block text-sm font-medium text-gray-700 mb-1">Entry Type</label>
              <select
                id="entryType"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                value={entryType}
                onChange={handleEntryTypeChange}
              >
                {entryTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>
            
            {['memorization', 'recitation', 'tajweed'].includes(entryType) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div>
                  <label htmlFor="surah" className="block text-sm font-medium text-gray-700 mb-1">Surah</label>
                  <select
                    id="surah"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                    value={surahSelection}
                    onChange={handleSurahChange}
                  >
                    <option value="">Select a Surah</option>
                    {surahs.map(surah => (
                      <option key={surah} value={surah}>{surah}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="ayat" className="block text-sm font-medium text-gray-700 mb-1">Ayat Range</label>
                  <input
                    id="ayat"
                    type="text"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                    placeholder="e.g., 1-7, All"
                    value={ayatRange}
                    onChange={handleAyatChange}
                  />
                </div>
              </div>
            )}
            
            <label htmlFor="diaryEntry" className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
            <textarea
              id="diaryEntry"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
              rows="3"
              value={diaryEntry}
              onChange={handleDiaryEntryChange}
              placeholder={
                entryType === 'memorization' ? "Details about memorization progress..." :
                entryType === 'tajweed' ? "Observations on tajweed rules application..." :
                entryType === 'recitation' ? "Comments on recitation quality..." :
                entryType === 'behavior' ? "Notes on student's behavior and attitude..." :
                "General notes about the student..."
              }
            ></textarea>
            <button 
              type="submit" 
              className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Add Entry
            </button>
          </form>
          
          <h3 className="text-xl font-semibold mb-3 flex items-center border-b pb-2">
            <BookOpen className="mr-2 text-green-600 w-5 h-5" />
            Previous Entries
          </h3>
          
          {loading ? (
            <div className="text-center py-8">
              <RefreshCw className="h-8 w-8 mx-auto text-green-500 animate-spin mb-2" />
              <p className="text-gray-500">Loading diary entries...</p>
            </div>
          ) : diaryEntries.length === 0 ? (
            <p className="text-center text-gray-500 py-4">No entries found for this student.</p>
          ) : (
            <div className="space-y-4">
              {diaryEntries.map((entry, index) => (
                <div 
                  key={entry.id} 
                  className={`p-4 rounded-md border-l-4 animate-fade-in-up ${getEntryTypeColor(entry.type)}`} 
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-600" />
                      <span className="text-sm text-gray-600">{entry.date}</span>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-200">
                      {getEntryTypeLabel(entry.type)}
                    </span>
                  </div>
                  
                  {(entry.surah) && (
                    <div className="text-sm font-medium mb-1">
                      Surah {entry.surah} {entry.ayat ? `(${entry.ayat})` : ''}
                    </div>
                  )}
                  
                  <p className="text-gray-800">{entry.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TeacherDiary;
```

# src\components\teacherDashboard\TeacherExam.js

```js
import React, { useState, useEffect } from 'react';
import { FileText, Plus, Save, Calendar } from 'lucide-react';

const TeacherExam = () => {
  const [exams, setExams] = useState([]);
  const [selectedExam, setSelectedExam] = useState(null);
  const [students, setStudents] = useState([]);
  const [examResults, setExamResults] = useState({});
  const [newExam, setNewExam] = useState({ name: '', date: '' });

  useEffect(() => {
    // Fetch exams - replace with actual API call
    fetchExams();
    fetchStudents();
  }, []);

  const fetchExams = () => {
    const mockExams = [
      { id: 1, name: 'Surah Al-Fatiha Assessment', date: '2023-05-15' },
      { id: 2, name: 'Tajweed Rules Exam', date: '2023-06-30' },
    ];
    setExams(mockExams);
  };

  const fetchStudents = () => {
    const mockStudents = [
      { id: 1, name: 'Ahmed Hassan' },
      { id: 2, name: 'Fatima Khan' },
      { id: 3, name: 'Yusuf Ali' },
    ];
    setStudents(mockStudents);
  };

  useEffect(() => {
    if (selectedExam) {
      // Fetch exam results for selected exam - replace with actual API call
      fetchExamResults(selectedExam.id);
    }
  }, [selectedExam]);

  const fetchExamResults = (examId) => {
    const mockResults = {
      1: 85,
      2: 92,
      3: 78,
    };
    setExamResults(mockResults);
  };

  const handleExamChange = (e) => {
    const exam = exams.find(ex => ex.id === parseInt(e.target.value));
    setSelectedExam(exam);
  };

  const handleScoreChange = (studentId, score) => {
    setExamResults(prev => ({
      ...prev,
      [studentId]: score
    }));
  };

  const handleNewExamChange = (e) => {
    setNewExam({ ...newExam, [e.target.name]: e.target.value });
  };

  const addNewExam = (e) => {
    e.preventDefault();
    if (newExam.name && newExam.date) {
      const newExamWithId = { ...newExam, id: Date.now() };
      setExams([...exams, newExamWithId]);
      setNewExam({ name: '', date: '' });
    }
  };

  const saveExamResults = () => {
    console.log('Saving exam results for', selectedExam, examResults);
    alert('Exam results saved successfully!');
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <FileText className="mr-2 text-green-600 w-6 h-6" />
        Quran Assessments
      </h2>
      <div className="mb-4">
        <label htmlFor="exam" className="block text-sm font-medium text-gray-700">Select Assessment</label>
        <select
          id="exam"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
          onChange={handleExamChange}
          value={selectedExam?.id || ''}
        >
          <option value="">Select an assessment</option>
          {exams.map(exam => (
            <option key={exam.id} value={exam.id}>{exam.name} - {exam.date}</option>
          ))}
        </select>
      </div>
      {selectedExam && (
        <div className="mb-4 animate-fade-in">
          <h3 className="text-lg font-medium mb-2 flex items-center">
            <Calendar className="mr-2 text-green-600 w-5 h-5" />
            Enter Assessment Scores for {selectedExam.name}
          </h3>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student, index) => (
                <tr key={student.id} className="animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                  <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={examResults[student.id] || ''}
                      onChange={(e) => handleScoreChange(student.id, e.target.value)}
                      className="w-20 px-2 py-1 border rounded transition-all duration-300 ease-in-out focus:ring-2 focus:ring-green-500"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {examResults[student.id] ? (
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        examResults[student.id] >= 90 ? 'bg-green-100 text-green-800' :
                        examResults[student.id] >= 70 ? 'bg-blue-100 text-blue-800' :
                        examResults[student.id] >= 50 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {examResults[student.id] >= 90 ? 'Excellent' :
                         examResults[student.id] >= 70 ? 'Good' :
                         examResults[student.id] >= 50 ? 'Average' : 'Needs Improvement'}
                      </span>
                    ) : ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button 
            onClick={saveExamResults} 
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Assessment Results
          </button>
        </div>
      )}
      <div className="mt-8 animate-fade-in border-t pt-4">
        <h3 className="text-lg font-medium mb-2 flex items-center">
          <Plus className="mr-2 text-green-600 w-5 h-5" />
          Add New Assessment
        </h3>
        <form onSubmit={addNewExam} className="flex space-x-2">
          <input
            type="text"
            name="name"
            value={newExam.name}
            onChange={handleNewExamChange}
            placeholder="Assessment Name (e.g., Surah Al-Kahf Test)"
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
          />
          <input
            type="date"
            name="date"
            value={newExam.date}
            onChange={handleNewExamChange}
            className="w-48 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
          />
          <button 
            type="submit" 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Add Assessment
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherExam;
```

# src\components\teacherDashboard\TeacherProgress.js

```js
import React, { useState, useEffect } from 'react';
import { TrendingUp, User, ChevronUp, ChevronDown, Minus, Plus } from 'lucide-react';

const TeacherProgress = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [progressData, setProgressData] = useState([]);
  const [newProgress, setNewProgress] = useState({ subject: '', score: '' });

  useEffect(() => {
    // Fetch students - replace with actual API call
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    const mockStudents = [
      { id: 1, name: 'Ahmed Hassan' },
      { id: 2, name: 'Fatima Khan' },
      { id: 3, name: 'Yusuf Ali' },
    ];
    setStudents(mockStudents);
  };

  useEffect(() => {
    if (selectedStudent) {
      // Fetch progress data for selected student - replace with actual API call
      fetchProgressData(selectedStudent.id);
    }
  }, [selectedStudent]);

  const fetchProgressData = (studentId) => {
    const mockProgressData = [
      { subject: 'Quran Memorization', scores: [85, 90, 88, 92] },
      { subject: 'Tajweed Rules', scores: [78, 82, 85, 80] },
      { subject: 'Arabic Vocabulary', scores: [90, 88, 92, 95] },
    ];
    setProgressData(mockProgressData);
  };

  const handleStudentChange = (e) => {
    const student = students.find(s => s.id === parseInt(e.target.value));
    setSelectedStudent(student);
  };

  const handleNewProgressChange = (e) => {
    setNewProgress({ ...newProgress, [e.target.name]: e.target.value });
  };

  const addNewProgress = (e) => {
    e.preventDefault();
    if (newProgress.subject && newProgress.score) {
      const updatedProgressData = progressData.map(item => {
        if (item.subject === newProgress.subject) {
          return { ...item, scores: [...item.scores, parseInt(newProgress.score)] };
        }
        return item;
      });

      if (!progressData.some(item => item.subject === newProgress.subject)) {
        updatedProgressData.push({ subject: newProgress.subject, scores: [parseInt(newProgress.score)] });
      }

      setProgressData(updatedProgressData);
      setNewProgress({ subject: '', score: '' });
    }
  };

  const calculateAverage = (scores) => {
    return scores.reduce((a, b) => a + b, 0) / scores.length;
  };

  const getProgressTrend = (scores) => {
    if (scores.length < 2) return 'neutral';
    return scores[scores.length - 1] > scores[scores.length - 2] ? 'positive' : 'negative';
  };

  // Subject options specific to Islamic education
  const subjectOptions = [
    'Quran Memorization',
    'Tajweed Rules',
    'Arabic Vocabulary',
    'Islamic Studies',
    'Quranic Grammar',
    'Du\'a Memorization'
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <TrendingUp className="mr-2 text-green-600 w-6 h-6" />
        Student Progress
      </h2>
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
          <h3 className="text-xl font-semibold mb-4 flex items-center border-b pb-2">
            <User className="mr-2 text-green-600 w-5 h-5" />
            Progress Report for {selectedStudent.name}
          </h3>
          <table className="min-w-full divide-y divide-gray-200 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress Trend</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Latest Score</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {progressData.map((subject, index) => (
                <tr key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{subject.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{calculateAverage(subject.scores).toFixed(1)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded flex items-center w-28 justify-center ${
                      getProgressTrend(subject.scores) === 'positive' ? 'bg-green-100 text-green-800' :
                      getProgressTrend(subject.scores) === 'negative' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    } transition-colors duration-300 ease-in-out`}>
                      {getProgressTrend(subject.scores) === 'positive' ? (
                        <>
                          <ChevronUp className="w-4 h-4 mr-1" />
                          Improving
                        </>
                      ) : getProgressTrend(subject.scores) === 'negative' ? (
                        <>
                          <ChevronDown className="w-4 h-4 mr-1" />
                          Declining
                        </>
                      ) : (
                        <>
                          <Minus className="w-4 h-4 mr-1" />
                          Stable
                        </>
                      )}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {subject.scores.length > 0 ? (
                      <span className={`px-3 py-1 rounded-full font-semibold ${
                        subject.scores[subject.scores.length - 1] >= 90 ? 'bg-green-100 text-green-800' :
                        subject.scores[subject.scores.length - 1] >= 75 ? 'bg-blue-100 text-blue-800' :
                        subject.scores[subject.scores.length - 1] >= 60 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {subject.scores[subject.scores.length - 1]}
                      </span>
                    ) : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 bg-gray-50 p-4 rounded-lg border">
            <h4 className="text-lg font-medium mb-3 flex items-center">
              <Plus className="w-5 h-5 mr-2 text-green-600" />
              Add New Progress Entry
            </h4>
            <form onSubmit={addNewProgress} className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-2">
              <div className="flex-1">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select
                  name="subject"
                  id="subject"
                  value={newProgress.subject}
                  onChange={handleNewProgressChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                  required
                >
                  <option value="">Select Subject</option>
                  {subjectOptions.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>
              <div className="w-full md:w-1/4">
                <label htmlFor="score" className="block text-sm font-medium text-gray-700 mb-1">Score</label>
                <input
                  type="number"
                  name="score"
                  id="score"
                  value={newProgress.score}
                  onChange={handleNewProgressChange}
                  placeholder="1-100"
                  min="0"
                  max="100"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                  required
                />
              </div>
              <div className="flex items-end">
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 w-full md:w-auto"
                >
                  Add Progress
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherProgress;
```

# src\contexts\AttendanceContext.js

```js
import React, { createContext, useState, useContext } from 'react';
import { useClasses } from './ClassesContext';

// Create context
const AttendanceContext = createContext();

// Provider component
export const AttendanceProvider = ({ children }) => {
  const { classes } = useClasses();
  
  // Initial attendance data - with masjid focus
  const [attendanceData, setAttendanceData] = useState({
    'Quran Level 1': {
      '2025-02-24': [
        {
          id: 1,
          name: 'Ahmad Khan',
          attendance: 'present',
          notes: '',
          lateMinutes: 0
        },
        {
          id: 2,
          name: 'Fatima Ali',
          attendance: 'absent',
          notes: 'Family emergency',
          lateMinutes: 0
        },
        {
          id: 3,
          name: 'Yusuf Rahman',
          attendance: 'late',
          notes: 'Traffic delay',
          lateMinutes: 15
        }
      ]
    },
    'Hifz Program': {
      '2025-02-24': [
        {
          id: 1,
          name: 'Ibrahim Hassan',
          attendance: 'present',
          notes: '',
          lateMinutes: 0
        },
        {
          id: 2,
          name: 'Aisha Ahmed',
          attendance: 'present',
          notes: '',
          lateMinutes: 0
        },
        {
          id: 3,
          name: 'Zainab Khan',
          attendance: 'absent',
          notes: 'Sick',
          lateMinutes: 0
        }
      ]
    },
    'Arabic Basics': {
      '2025-02-24': [
        {
          id: 1,
          name: 'Omar Farooq',
          attendance: 'present',
          notes: '',
          lateMinutes: 0
        },
        {
          id: 2,
          name: 'Mariam Siddiqui',
          attendance: 'late',
          notes: 'Traffic',
          lateMinutes: 10
        }
      ]
    }
  });

  // Get attendance for a specific class and date
  const getAttendance = (className, date) => {
    if (attendanceData[className] && attendanceData[className][date]) {
      return attendanceData[className][date];
    }
    return [];
  };

  // Update attendance status
  const updateAttendanceStatus = (className, date, studentId, status, notes = '', lateMinutes = 0) => {
    setAttendanceData(prevData => {
      // Create deep copy to avoid mutation
      const newData = JSON.parse(JSON.stringify(prevData));
      
      // Ensure the structure exists
      if (!newData[className]) {
        newData[className] = {};
      }
      
      if (!newData[className][date]) {
        newData[className][date] = [];
      }
      
      // Find the student
      const studentIndex = newData[className][date].findIndex(s => s.id === studentId);
      
      if (studentIndex !== -1) {
        // Update existing student
        newData[className][date][studentIndex] = {
          ...newData[className][date][studentIndex],
          attendance: status,
          notes: notes || newData[className][date][studentIndex].notes,
          lateMinutes: status === 'late' ? (lateMinutes || newData[className][date][studentIndex].lateMinutes) : 0
        };
      } else {
        // Student not found - this would typically not happen in a real app
        // as attendance records would be initialized for all students
        console.error('Student not found in attendance records');
      }
      
      return newData;
    });
  };

  // Add new attendance records for a class and date
  const addAttendanceRecords = (className, date, students) => {
    setAttendanceData(prevData => {
      // Create deep copy to avoid mutation
      const newData = JSON.parse(JSON.stringify(prevData));
      
      // Ensure the structure exists
      if (!newData[className]) {
        newData[className] = {};
      }
      
      // Initialize with all students marked as 'present'
      newData[className][date] = students.map(student => ({
        id: student.id,
        name: student.name,
        attendance: 'present',
        notes: '',
        lateMinutes: 0
      }));
      
      return newData;
    });
  };

  // Calculate attendance statistics for a specific class and date
  const getAttendanceStats = (className, date) => {
    const records = getAttendance(className, date);
    const total = records.length;
    const present = records.filter(s => s.attendance === 'present').length;
    const absent = records.filter(s => s.attendance === 'absent').length;
    const late = records.filter(s => s.attendance === 'late').length;

    return {
      total,
      present,
      absent,
      late,
      presentPercentage: total > 0 ? ((present + late) / total * 100).toFixed(1) : '0.0'
    };
  };

  return (
    <AttendanceContext.Provider 
      value={{ 
        getAttendance,
        updateAttendanceStatus,
        addAttendanceRecords,
        getAttendanceStats
      }}
    >
      {children}
    </AttendanceContext.Provider>
  );
};

// Custom hook for using the attendance context
export const useAttendance = () => {
  const context = useContext(AttendanceContext);
  if (!context) {
    throw new Error('useAttendance must be used within an AttendanceProvider');
  }
  return context;
};
```

# src\contexts\AuthContext.js

```js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Existing demo users and new user structure
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = async (email, password, loginType) => {
    // Super admin login
    if (loginType === 'super_admin' && email === 'admin@taleem.com' && password === 'admin123') {
      const adminUser = {
        email,
        role: 'super_admin', // This matches what LoginPage expects
        name: 'Admin User',
        masjid: null // Super admin doesn't belong to a specific masjid
      };
      setUser(adminUser);
      localStorage.setItem('user', JSON.stringify(adminUser));
      return adminUser;
    } 
    // Teacher login
    else if (loginType === 'teacher' && email === 'teacher@demo.com' && password === 'teacher123') {
      const teacherUser = {
        email,
        role: 'teacher',
        name: 'Demo Teacher',
        subject: 'Quran & Tajweed',
        masjid: 'demo-masjid-id' // Add a demo masjid ID
      };
      setUser(teacherUser);
      localStorage.setItem('user', JSON.stringify(teacherUser));
      return teacherUser;
    } 
    // Parent login
    else if (loginType === 'parent' && email === 'parent@demo.com' && password === 'parent123') {
      const parentUser = {
        email,
        role: 'parent',
        name: 'Ahmed Hassan',
        masjid: 'demo-masjid-id', // Add a demo masjid ID
        children: [
          { id: 1, name: 'Amina Hassan', grade: 'Grade 3', classes: ['Quran Hifz - Beginner', 'Arabic - Basic'] },
          { id: 2, name: 'Ibrahim Hassan', grade: 'Grade 5', classes: ['Tajweed - Intermediate', 'Islamic Studies'] },
        ]
      };
      setUser(parentUser);
      localStorage.setItem('user', JSON.stringify(parentUser));
      return parentUser;
    }
    // Masjid admin login (adding this for masjid administrators)
    else if (loginType === 'masjid_admin' && email === 'masjid_admin@demo.com' && password === 'admin123') {
      const masjidAdminUser = {
        email,
        role: 'masjid_admin',
        name: 'Masjid Administrator',
        masjid: 'demo-masjid-id' // The masjid they administer
      };
      setUser(masjidAdminUser);
      localStorage.setItem('user', JSON.stringify(masjidAdminUser));
      return masjidAdminUser;
    }

    throw new Error('Invalid credentials');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const isAuthenticated = () => {
    const storedUser = localStorage.getItem('user');
    return !!storedUser;
  };

  const getCurrentUser = () => {
    return user;
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated,
      getCurrentUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
```

# src\contexts\ClassesContext.js

```js
import React, { createContext, useState, useContext } from 'react';

// Initial classes data - Adapted for masjid context
const initialClasses = [
  {
    id: 1,
    name: 'Quran Recitation Level 1',
    teacher: 'Ustadh Abdullah Rahman',
    students: 15,
    schedule: [
      { day: 'Monday', time: '6:00 PM - 7:30 PM' },
      { day: 'Wednesday', time: '6:00 PM - 7:30 PM' }
    ],
    room: 'Classroom A',
    maxStudents: 20,
    description: 'For beginners learning to read the Quran with basic tajweed rules.'
  },
  {
    id: 2,
    name: 'Hifz Program',
    teacher: 'Hafiz Muhammad Saeed',
    students: 10,
    schedule: [
      { day: 'Tuesday', time: '5:00 PM - 7:00 PM' },
      { day: 'Thursday', time: '5:00 PM - 7:00 PM' },
      { day: 'Saturday', time: '10:00 AM - 12:00 PM' }
    ],
    room: 'Hifz Room',
    maxStudents: 12,
    description: 'Advanced program for memorization of the Quran.'
  },
  {
    id: 3,
    name: 'Arabic for Beginners',
    teacher: 'Ustadha Maryam Siddiqui',
    students: 18,
    schedule: [
      { day: 'Monday', time: '7:30 PM - 9:00 PM' },
      { day: 'Friday', time: '6:30 PM - 8:00 PM' }
    ],
    room: 'Classroom B',
    maxStudents: 25,
    description: 'Introduction to Arabic alphabet, vocabulary, and basic conversation.'
  },
  {
    id: 4,
    name: 'Islamic Studies',
    teacher: 'Imam Yusuf Ali',
    students: 20,
    schedule: [
      { day: 'Saturday', time: '2:00 PM - 4:00 PM' },
      { day: 'Sunday', time: '11:00 AM - 1:00 PM' }
    ],
    room: 'Main Hall',
    maxStudents: 30,
    description: 'Covers fundamentals of Islamic beliefs, practices, and history.'
  }
];

// Create context
const ClassesContext = createContext();

// Provider component
export const ClassesProvider = ({ children }) => {
  const [classes, setClasses] = useState(initialClasses);

  // Add new class
  const addClass = (classData) => {
    const newClass = {
      ...classData,
      id: classes.length > 0 ? Math.max(...classes.map(c => c.id)) + 1 : 1,
      students: 0 // New classes start with 0 students
    };
    
    setClasses([...classes, newClass]);
    
    return newClass.id;
  };

  // Update class
  const updateClass = (classId, updatedData) => {
    setClasses(classes.map(cls => 
      cls.id === classId 
        ? { ...cls, ...updatedData }
        : cls
    ));
  };

  // Delete class
  const deleteClass = (classId) => {
    setClasses(classes.filter(cls => cls.id !== classId));
  };

  // Assign student to class
  const assignStudentToClass = (classId) => {
    setClasses(classes.map(cls => 
      cls.id === classId 
        ? { ...cls, students: cls.students + 1 }
        : cls
    ));
  };

  // Remove student from class
  const removeStudentFromClass = (classId) => {
    setClasses(classes.map(cls => 
      cls.id === classId && cls.students > 0
        ? { ...cls, students: cls.students - 1 }
        : cls
    ));
  };

  return (
    <ClassesContext.Provider 
      value={{ 
        classes,
        addClass,
        updateClass,
        deleteClass,
        assignStudentToClass,
        removeStudentFromClass
      }}
    >
      {children}
    </ClassesContext.Provider>
  );
};

// Custom hook for using the classes context
export const useClasses = () => {
  const context = useContext(ClassesContext);
  if (!context) {
    throw new Error('useClasses must be used within a ClassesProvider');
  }
  return context;
};
```

# src\contexts\MasjidContext.js

```js
// src/contexts/MasjidContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';

const MasjidContext = createContext(null);

export const MasjidProvider = ({ children }) => {
  const [currentMasjid, setCurrentMasjid] = useState(null);
  const [masjidTheme, setMasjidTheme] = useState({});
  const [loading, setLoading] = useState(true);
  const [masjids, setMasjids] = useState({});
  const { user } = useAuth(); // Integrate with AuthContext

  // Existing methods remain the same...
  const loadMasjidData = async (masjidId) => {
    // ... (keep existing implementation)
  };

  const addMasjid = async (masjidData) => {
    try {
      setLoading(true);
      
      // Add createdBy field for tracking who created the masjid
      const formattedMasjidData = {
        ...masjidData,
        createdBy: user ? user._id : null,
        createdAt: new Date().toISOString(),
        status: 'active',
        usersCount: 0,
        administrators: [], // New field for tracking masjid admins
      };
      
      // Update the local masjids state
      setMasjids(prev => ({
        ...prev,
        [masjidData.id]: formattedMasjidData
      }));
      
      setLoading(false);
      return masjidData.id;
    } catch (error) {
      console.error("Error adding masjid:", error);
      setLoading(false);
      throw error;
    }
  };

  // New method to update a masjid
  const updateMasjid = async (masjidId, masjidData) => {
    try {
      setLoading(true);
      
      // Update the local masjids state
      setMasjids(prev => ({
        ...prev,
        [masjidId]: {
          ...prev[masjidId],
          ...masjidData,
          updatedAt: new Date().toISOString()
        }
      }));
      
      // If this is the current masjid, update current masjid state
      if (currentMasjid && currentMasjid.id === masjidId) {
        setCurrentMasjid(prev => ({
          ...prev,
          ...masjidData,
          updatedAt: new Date().toISOString()
        }));
      }
      
      setLoading(false);
      return true;
    } catch (error) {
      console.error("Error updating masjid:", error);
      setLoading(false);
      throw error;
    }
  };

  // New method to delete a masjid
  const deleteMasjid = async (masjidId) => {
    try {
      setLoading(true);
      
      // Remove from local state
      setMasjids(prev => {
        const updatedMasjids = {...prev};
        delete updatedMasjids[masjidId];
        return updatedMasjids;
      });
      
      // If this is the current masjid, clear current masjid state
      if (currentMasjid && currentMasjid.id === masjidId) {
        setCurrentMasjid(null);
      }
      
      setLoading(false);
      return true;
    } catch (error) {
      console.error("Error deleting masjid:", error);
      setLoading(false);
      throw error;
    }
  };

  // New method to add masjid administrator
  const addMasjidAdmin = async (masjidId, adminData) => {
    try {
      setLoading(true);
      
      // Update the local state
      setMasjids(prev => {
        const updatedMasjids = {...prev};
        if (updatedMasjids[masjidId]) {
          updatedMasjids[masjidId].administrators = [
            ...(updatedMasjids[masjidId].administrators || []),
            adminData
          ];
        }
        return updatedMasjids;
      });

      // If this is the current masjid, update current masjid state
      if (currentMasjid && currentMasjid.id === masjidId) {
        setCurrentMasjid(prev => ({
          ...prev,
          administrators: [
            ...(prev.administrators || []),
            adminData
          ]
        }));
      }
      
      setLoading(false);
      return adminData;
    } catch (error) {
      console.error("Error adding masjid admin:", error);
      setLoading(false);
      throw error;
    }
  };

  // New method to remove masjid administrator
  const removeMasjidAdmin = async (masjidId, adminId) => {
    try {
      setLoading(true);
      
      // Update the local state
      setMasjids(prev => {
        const updatedMasjids = {...prev};
        if (updatedMasjids[masjidId]) {
          updatedMasjids[masjidId].administrators = 
            (updatedMasjids[masjidId].administrators || [])
              .filter(admin => admin._id !== adminId);
        }
        return updatedMasjids;
      });

      // If this is the current masjid, update current masjid state
      if (currentMasjid && currentMasjid.id === masjidId) {
        setCurrentMasjid(prev => ({
          ...prev,
          administrators: 
            (prev.administrators || [])
              .filter(admin => admin._id !== adminId)
        }));
      }
      
      setLoading(false);
      return true;
    } catch (error) {
      console.error("Error removing masjid admin:", error);
      setLoading(false);
      throw error;
    }
  };

  // Enhanced method to get masjids for super admin
  const getAllMasjids = async () => {
    try {
      setLoading(true);
      
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // If user is super admin, return all masjids
      if (user && user.role === 'super_admin') {
        // Convert object to array for easier usage in components
        const masjidArray = Object.values(masjids);
        
        setLoading(false);
        return masjidArray;
      }
      
      // If not super admin, return only relevant masjids
      setLoading(false);
      return [];
    } catch (error) {
      console.error("Error getting all masjids:", error);
      setLoading(false);
      throw error;
    }
  };

  // Update the context value to include new methods
  return (
    <MasjidContext.Provider value={{
      currentMasjid,
      masjidTheme,
      loading,
      loadMasjidData,
      addMasjid,
      updateMasjid,
      deleteMasjid,
      getAllMasjids,
      // New methods
      addMasjidAdmin,
      removeMasjidAdmin
    }}>
      {children}
    </MasjidContext.Provider>
  );
};

export const useMasjid = () => {
  const context = useContext(MasjidContext);
  if (!context) {
    throw new Error('useMasjid must be used within a MasjidProvider');
  }
  return context;
};

export default MasjidContext;
```

# src\contexts\NavigationContext.js

```js
import React, { createContext, useState, useContext } from 'react';

const NavigationContext = createContext(null);

export const NavigationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const navigate = (page) => setCurrentPage(page);

  return (
    <NavigationContext.Provider value={{ currentPage, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
```

# src\contexts\PaymentContext.js

```js
import React, { createContext, useState, useContext } from 'react';

// Initial payment data - Adapted for masjid context
const initialPaymentData = [
  {
    id: 1,
    studentName: 'Ahmad Khan',
    totalFees: 300,
    paidAmount: 200,
    remainingBalance: 100,
    paymentHistory: [
      { date: '2025-01-10', amount: 100, method: 'Cash' },
      { date: '2025-02-15', amount: 100, method: 'Bank Transfer' }
    ],
    status: 'Partially Paid',
    programName: 'Quran Level 1',
    term: 'Spring 2025',
    paymentFrequency: 'Monthly'
  },
  {
    id: 2,
    studentName: 'Fatima Ali',
    totalFees: 500,
    paidAmount: 500,
    remainingBalance: 0,
    paymentHistory: [
      { date: '2025-01-05', amount: 500, method: 'Credit Card' }
    ],
    status: 'Fully Paid',
    programName: 'Hifz Program',
    term: 'Annual 2025',
    paymentFrequency: 'Annual'
  },
  {
    id: 3,
    studentName: 'Yusuf Rahman',
    totalFees: 180,
    paidAmount: 60,
    remainingBalance: 120,
    paymentHistory: [
      { date: '2025-01-15', amount: 60, method: 'Cash' }
    ],
    status: 'Partially Paid',
    programName: 'Arabic Basics',
    term: 'Spring 2025',
    paymentFrequency: 'Monthly'
  }
];

// Create context
const PaymentContext = createContext();

// Provider component
export const PaymentProvider = ({ children }) => {
  const [paymentData, setPaymentData] = useState(initialPaymentData);

  // Get payment data for a specific student
  const getStudentPayment = (studentId) => {
    return paymentData.find(payment => payment.id === studentId);
  };

  // Add a new payment
  const addPayment = (studentId, amount, method) => {
    setPaymentData(prevData => 
      prevData.map(payment => {
        if (payment.id === studentId) {
          const newPaidAmount = payment.paidAmount + parseFloat(amount);
          const newRemainingBalance = payment.totalFees - newPaidAmount;
          const newStatus = newRemainingBalance <= 0 ? 'Fully Paid' : 'Partially Paid';
          
          return {
            ...payment,
            paidAmount: newPaidAmount,
            remainingBalance: newRemainingBalance,
            status: newStatus,
            paymentHistory: [
              ...payment.paymentHistory,
              {
                date: new Date().toISOString().split('T')[0],
                amount: parseFloat(amount),
                method
              }
            ]
          };
        }
        return payment;
      })
    );
    
    return true; // Success indicator
  };

  // Add a new payment record
  const addPaymentRecord = (paymentData) => {
    setPaymentData(prevData => [...prevData, {
      ...paymentData,
      id: prevData.length > 0 ? Math.max(...prevData.map(p => p.id)) + 1 : 1,
      status: paymentData.paidAmount >= paymentData.totalFees ? 'Fully Paid' : 'Partially Paid',
      paymentHistory: paymentData.paymentHistory || []
    }]);
  };

  // Update an existing payment record
  const updatePaymentRecord = (studentId, updatedData) => {
    setPaymentData(prevData => 
      prevData.map(payment => {
        if (payment.id === studentId) {
          return {
            ...payment,
            ...updatedData,
            status: (updatedData.paidAmount >= updatedData.totalFees) ? 'Fully Paid' : 'Partially Paid'
          };
        }
        return payment;
      })
    );
  };

  return (
    <PaymentContext.Provider 
      value={{ 
        paymentData,
        getStudentPayment,
        addPayment,
        addPaymentRecord,
        updatePaymentRecord
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

// Custom hook for using the payment context
export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
};
```

# src\contexts\ProgressContext.js

```js
import React, { createContext, useState, useContext } from 'react';

// Initial progress data - Adapted for masjid context
const initialProgressData = [
  {
    id: 1,
    name: 'Ahmad Khan',
    totalClasses: 25,
    attendedClasses: 22,
    programName: 'Quran Level 1',
    quranProgress: {
      surahsCompleted: 5,
      currentSurah: 'Al-Fatihah',
      currentPage: 8,
      lastAssessment: 85
    },
    assessmentScores: [
      { subject: 'Quran Recitation', score: 85 },
      { subject: 'Tajweed Rules', score: 78 },
      { subject: 'Memorization', score: 82 }
    ],
    progressData: [
      { month: 'Jan', progress: 65 },
      { month: 'Feb', progress: 72 },
      { month: 'Mar', progress: 80 },
      { month: 'Apr', progress: 85 },
      { month: 'May', progress: 90 }
    ],
    teacherNotes: [
      { date: '2025-01-15', note: 'Ahmad has excellent pronunciation in recitation.' },
      { date: '2025-02-20', note: 'Needs to work on tajweed rules for noon sakinah.' },
      { date: '2025-04-10', note: 'Great improvement in memorization speed.' }
    ]
  },
  {
    id: 2,
    name: 'Fatima Ali',
    totalClasses: 26,
    attendedClasses: 24,
    programName: 'Hifz Program',
    quranProgress: {
      surahsCompleted: 12,
      currentSurah: 'Al-Baqarah',
      currentPage: 32,
      lastAssessment: 92
    },
    assessmentScores: [
      { subject: 'Quran Recitation', score: 95 },
      { subject: 'Tajweed Rules', score: 88 },
      { subject: 'Memorization', score: 92 }
    ],
    progressData: [
      { month: 'Jan', progress: 70 },
      { month: 'Feb', progress: 78 },
      { month: 'Mar', progress: 85 },
      { month: 'Apr', progress: 90 },
      { month: 'May', progress: 95 }
    ],
    teacherNotes: [
      { date: '2025-01-10', note: 'Excellent memorization pace.' },
      { date: '2025-03-05', note: 'Mastering tajweed rules exceptionally well.' },
      { date: '2025-04-15', note: 'Completed Juz 1 with excellent retention.' }
    ]
  },
  {
    id: 3,
    name: 'Yusuf Rahman',
    totalClasses: 24,
    attendedClasses: 19,
    programName: 'Arabic Basics',
    arabicProgress: {
      level: 'Beginner',
      vocabularyLearned: 120,
      grammarConcepts: 8,
      lastAssessment: 78
    },
    assessmentScores: [
      { subject: 'Arabic Vocabulary', score: 82 },
      { subject: 'Grammar Rules', score: 75 },
      { subject: 'Conversation', score: 68 }
    ],
    progressData: [
      { month: 'Jan', progress: 60 },
      { month: 'Feb', progress: 65 },
      { month: 'Mar', progress: 72 },
      { month: 'Apr', progress: 78 },
      { month: 'May', progress: 82 }
    ],
    teacherNotes: [
      { date: '2025-01-20', note: 'Good progress with basic vocabulary.' },
      { date: '2025-02-15', note: 'Needs extra practice with verb conjugations.' },
      { date: '2025-04-05', note: 'Showing improvement in forming basic sentences.' }
    ]
  }
];

// Create context
const ProgressContext = createContext();

// Provider component
export const ProgressProvider = ({ children }) => {
  const [progressData, setProgressData] = useState(initialProgressData);

  // Get progress data for a specific student
  const getStudentProgress = (studentId) => {
    return progressData.find(progress => progress.id === studentId);
  };

  // Add a new assessment score
  const addAssessmentScore = (studentId, subject, score) => {
    setProgressData(prevData => 
      prevData.map(student => {
        if (student.id === studentId) {
          // Check if the subject already exists
          const existingIndex = student.assessmentScores.findIndex(
            assessment => assessment.subject === subject
          );
          
          let updatedScores;
          if (existingIndex !== -1) {
            // Update existing assessment
            updatedScores = student.assessmentScores.map((assessment, index) => 
              index === existingIndex 
                ? { ...assessment, score: parseFloat(score) }
                : assessment
            );
          } else {
            // Add new assessment
            updatedScores = [
              ...student.assessmentScores, 
              { subject, score: parseFloat(score) }
            ];
          }
          
          return {
            ...student,
            assessmentScores: updatedScores
          };
        }
        return student;
      })
    );
    
    return true; // Success indicator
  };

  // Add a teacher note
  const addTeacherNote = (studentId, note) => {
    setProgressData(prevData => 
      prevData.map(student => {
        if (student.id === studentId) {
          return {
            ...student,
            teacherNotes: [
              ...student.teacherNotes,
              {
                date: new Date().toISOString().split('T')[0],
                note
              }
            ]
          };
        }
        return student;
      })
    );
    
    return true; // Success indicator
  };

  // Update Quran progress
  const updateQuranProgress = (studentId, progressData) => {
    setProgressData(prevData => 
      prevData.map(student => {
        if (student.id === studentId && student.quranProgress) {
          return {
            ...student,
            quranProgress: {
              ...student.quranProgress,
              ...progressData
            }
          };
        }
        return student;
      })
    );
    
    return true; // Success indicator
  };

  // Update Arabic progress
  const updateArabicProgress = (studentId, progressData) => {
    setProgressData(prevData => 
      prevData.map(student => {
        if (student.id === studentId && student.arabicProgress) {
          return {
            ...student,
            arabicProgress: {
              ...student.arabicProgress,
              ...progressData
            }
          };
        }
        return student;
      })
    );
    
    return true; // Success indicator
  };

  return (
    <ProgressContext.Provider 
      value={{ 
        progressData,
        getStudentProgress,
        addAssessmentScore,
        addTeacherNote,
        updateQuranProgress,
        updateArabicProgress
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

// Custom hook for using the progress context
export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
```

# src\contexts\StudentContext.js

```js
import React, { createContext, useState, useContext } from 'react';

// Initial students data - Now adjusted for masjid/Islamic classes
const initialStudents = [
  {
    id: 1,
    name: 'Ahmad Khan',
    dob: '2018-05-15',
    address: '123 Main Street, City',
    medicalHistory: 'No allergies',
    parentName: 'Yusuf Khan',
    phoneNumber: '07700 900123',
    emergencyContactName: 'Sarah Khan',
    emergencyContactNumber: '07700 900124',
    className: 'Quran Level 1'
  },
  {
    id: 2,
    name: 'Fatima Ali',
    dob: '2017-08-22',
    address: '456 Mosque Road, Town',
    medicalHistory: 'Asthma',
    parentName: 'Ibrahim Ali',
    phoneNumber: '07700 900125',
    emergencyContactName: 'Aisha Ali',
    emergencyContactNumber: '07700 900126',
    className: 'Islamic Studies'
  }
];

// Initial waiting list data - Adjusted for masjid context
const initialWaitingList = [
  {
    id: 1,
    name: 'Hassan Ahmed',
    dob: '2019-03-10',
    address: '789 Prayer Ave, City',
    medicalHistory: 'None',
    parentName: 'Mohammed Ahmed',
    phoneNumber: '07700 900127',
    emergencyContactName: 'Khadija Ahmed',
    emergencyContactNumber: '07700 900128',
    status: 'Pending',
    applicationDate: '2025-01-15',
    preferredClass: 'Quran Level 1',
    notes: '',
    siblingInProgram: false,
    siblingName: '',
    reasonForApplication: 'Wants to learn Quran'
  },
  {
    id: 2,
    name: 'Zainab Hassan',
    dob: '2018-11-25',
    address: '321 Community Street, Town',
    medicalHistory: 'Peanut allergy',
    parentName: 'Omar Hassan',
    phoneNumber: '07700 900129',
    emergencyContactName: 'Mariam Hassan',
    emergencyContactNumber: '07700 900130',
    status: 'Documents Required',
    applicationDate: '2025-01-20',
    preferredClass: 'Arabic Basics',
    notes: 'Needs to provide medical documentation',
    siblingInProgram: true,
    siblingName: 'Abdullah Hassan',
    reasonForApplication: 'Sibling already enrolled'
  }
];

// Create context
const StudentContext = createContext();

// Provider component
export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(initialStudents);
  const [waitingListStudents, setWaitingListStudents] = useState(initialWaitingList);

  // Add new enrolled student
  const addStudent = (studentData) => {
    const newStudent = {
      ...studentData,
      id: students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1
    };
    setStudents([...students, newStudent]);
    return newStudent.id;
  };

  // Add new waiting list student
  const addWaitingListStudent = (studentData) => {
    const newStudent = {
      ...studentData,
      id: waitingListStudents.length > 0 
        ? Math.max(...waitingListStudents.map(s => s.id)) + 1 
        : 1
    };
    setWaitingListStudents([...waitingListStudents, newStudent]);
    return newStudent.id;
  };

  // Move student from waiting list to enrolled
  const enrollWaitingListStudent = (studentId) => {
    const student = waitingListStudents.find(s => s.id === studentId);
    if (student) {
      // Convert waiting list student to enrolled student format
      const enrolledStudent = {
        id: students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1,
        name: student.name,
        dob: student.dob,
        address: student.address,
        medicalHistory: student.medicalHistory,
        parentName: student.parentName,
        phoneNumber: student.phoneNumber,
        emergencyContactName: student.emergencyContactName,
        emergencyContactNumber: student.emergencyContactNumber,
        className: student.preferredClass // Use preferred class as initial class
      };
      
      // Add to enrolled students
      setStudents([...students, enrolledStudent]);
      
      // Remove from waiting list
      setWaitingListStudents(waitingListStudents.filter(s => s.id !== studentId));
      
      return enrolledStudent.id;
    }
    return null;
  };

  // Update student class
  const updateStudentClass = (studentId, newClassName) => {
    setStudents(students.map(student => 
      student.id === studentId 
        ? { ...student, className: newClassName }
        : student
    ));
  };

  // Update waiting list student status
  const updateWaitingListStudentStatus = (studentId, newStatus) => {
    setWaitingListStudents(waitingListStudents.map(student => 
      student.id === studentId 
        ? { ...student, status: newStatus }
        : student
    ));
  };

  // Delete student
  const deleteStudent = (studentId) => {
    setStudents(students.filter(student => student.id !== studentId));
  };

  // Delete waiting list student
  const deleteWaitingListStudent = (studentId) => {
    setWaitingListStudents(waitingListStudents.filter(student => student.id !== studentId));
  };

  // Update student information
  const updateStudent = (studentId, updatedData) => {
    setStudents(students.map(student => 
      student.id === studentId 
        ? { ...student, ...updatedData }
        : student
    ));
  };

  // Update waiting list student information
  const updateWaitingListStudent = (studentId, updatedData) => {
    setWaitingListStudents(waitingListStudents.map(student => 
      student.id === studentId 
        ? { ...student, ...updatedData }
        : student
    ));
  };

  return (
    <StudentContext.Provider 
      value={{ 
        students, 
        waitingListStudents,
        addStudent, 
        addWaitingListStudent,
        enrollWaitingListStudent,
        updateStudentClass,
        updateWaitingListStudentStatus,
        deleteStudent,
        deleteWaitingListStudent,
        updateStudent,
        updateWaitingListStudent
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

// Custom hook for using the student context
export const useStudents = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudents must be used within a StudentProvider');
  }
  return context;
};
```

# src\contexts\TeacherContext.js

```js
import React, { createContext, useState, useContext } from 'react';

// Initial teachers data - Adapted for masjid context
const initialTeachers = [
  {
    id: 1,
    name: 'Imam Abdullah Rahman',
    firstName: 'Abdullah',
    lastName: 'Rahman',
    email: 'abdullah.rahman@masjid.com',
    phoneNumber: '07700 900131',
    qualifications: ['Hafiz', 'Alim'],
    subjects: ['Quran', 'Tafsir'],
    department: 'Quran Studies',
    startDate: '2022-09-01',
    status: 'Active',
    username: 'abdullahrahman',
    employmentType: 'Full-Time'
  },
  {
    id: 2,
    name: 'Ustadha Maryam Siddiqui',
    firstName: 'Maryam',
    lastName: 'Siddiqui',
    email: 'maryam.siddiqui@masjid.com',
    phoneNumber: '07700 900132',
    qualifications: ['Ijazah in Quran', 'Arabic Diploma'],
    subjects: ['Arabic', 'Islamic Studies'],
    department: 'Arabic Studies',
    startDate: '2021-09-01',
    status: 'Active',
    username: 'maryamsiddiqui',
    employmentType: 'Part-Time'
  }
];

// Create context
const TeacherContext = createContext();

// Provider component
export const TeacherProvider = ({ children }) => {
  const [teachers, setTeachers] = useState(initialTeachers);

  // Add new teacher
  const addTeacher = (teacherData) => {
    // Format the teacher data to match our expected structure
    const newTeacher = {
      ...teacherData,
      id: teachers.length > 0 ? Math.max(...teachers.map(t => t.id)) + 1 : 1,
      name: `${teacherData.firstName} ${teacherData.lastName}`,
      subjects: teacherData.subjectsTaught || [],
      startDate: teacherData.joiningDate,
      department: teacherData.departmentAssigned
    };
    
    setTeachers([...teachers, newTeacher]);
    
    return newTeacher.id;
  };

  // Update teacher
  const updateTeacher = (teacherId, updatedData) => {
    setTeachers(teachers.map(teacher => 
      teacher.id === teacherId 
        ? { 
            ...teacher, 
            ...updatedData,
            name: `${updatedData.firstName || teacher.firstName} ${updatedData.lastName || teacher.lastName}`
          }
        : teacher
    ));
  };

  // Delete teacher
  const deleteTeacher = (teacherId) => {
    setTeachers(teachers.filter(teacher => teacher.id !== teacherId));
  };

  // Update teacher status
  const updateTeacherStatus = (teacherId, newStatus) => {
    setTeachers(teachers.map(teacher => 
      teacher.id === teacherId 
        ? { ...teacher, status: newStatus }
        : teacher
    ));
  };

  return (
    <TeacherContext.Provider 
      value={{ 
        teachers,
        addTeacher,
        updateTeacher,
        deleteTeacher,
        updateTeacherStatus
      }}
    >
      {children}
    </TeacherContext.Provider>
  );
};

// Custom hook for using the teacher context
export const useTeachers = () => {
  const context = useContext(TeacherContext);
  if (!context) {
    throw new Error('useTeachers must be used within a TeacherProvider');
  }
  return context;
};
```

# src\contexts\TeacherDashboardContext.js

```js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';

// Initial class data for teacher
const initialClassData = [
  {
    id: 1,
    name: 'Quran Level 1',
    days: ['Monday', 'Wednesday'],
    times: '5:00 PM - 6:30 PM',
    room: 'Classroom A',
    students: [
      { id: 1, name: 'Ahmad Khan', attendanceHistory: {} },
      { id: 2, name: 'Fatima Ali', attendanceHistory: {} },
      { id: 3, name: 'Yusuf Rahman', attendanceHistory: {} }
    ]
  },
  {
    id: 2,
    name: 'Tajweed Basics',
    days: ['Tuesday', 'Thursday'],
    times: '6:30 PM - 8:00 PM',
    room: 'Classroom B',
    students: [
      { id: 4, name: 'Ibrahim Hassan', attendanceHistory: {} },
      { id: 5, name: 'Aisha Ahmed', attendanceHistory: {} },
      { id: 6, name: 'Omar Farooq', attendanceHistory: {} }
    ]
  }
];

// Initial diary entries
const initialDiaryEntries = [
  {
    id: 1,
    date: '2025-02-20',
    className: 'Quran Level 1',
    content: 'Covered Surah Al-Fatiha, focusing on proper pronunciation of Arabic letters.',
    homeworkAssigned: 'Practice reciting Surah Al-Fatiha 5 times daily.',
    materialsNeeded: 'Quran, Tajweed rules handout'
  },
  {
    id: 2,
    date: '2025-02-21',
    className: 'Tajweed Basics',
    content: 'Introduced rules of noon saakinah and tanween.',
    homeworkAssigned: 'Complete exercise sheet on noon saakinah rules.',
    materialsNeeded: 'Tajweed textbook, practice worksheets'
  }
];

// Initial exam data
const initialExamData = [
  {
    id: 1,
    title: 'Quran Recitation Assessment',
    date: '2025-03-15',
    className: 'Quran Level 1',
    description: 'Assessment of Surah Al-Fatiha and Al-Ikhlas recitation with proper tajweed.',
    totalMarks: 50,
    studentScores: [
      { studentId: 1, studentName: 'Ahmad Khan', score: 42, feedback: 'Excellent pronunciation' },
      { studentId: 2, studentName: 'Fatima Ali', score: 48, feedback: 'Outstanding tajweed application' },
      { studentId: 3, studentName: 'Yusuf Rahman', score: 38, feedback: 'Needs practice with makhaarij' }
    ]
  },
  {
    id: 2,
    title: 'Tajweed Rules Quiz',
    date: '2025-03-10',
    className: 'Tajweed Basics',
    description: 'Written quiz on noon saakinah, tanween, and meem saakinah rules.',
    totalMarks: 30,
    studentScores: [
      { studentId: 4, studentName: 'Ibrahim Hassan', score: 24, feedback: 'Good understanding of concepts' },
      { studentId: 5, studentName: 'Aisha Ahmed', score: 28, feedback: 'Excellent grasp of rules' },
      { studentId: 6, studentName: 'Omar Farooq', score: 22, feedback: 'Needs more practice with examples' }
    ]
  }
];

// Initial progress record
const initialProgressData = {
  'Quran Level 1': {
    'Ahmad Khan': {
      current: {
        surah: 'Al-Baqarah',
        ayah: 5,
        page: 2,
        juz: 1
      },
      memorization: {
        surahsCompleted: ['Al-Fatiha', 'Al-Ikhlas', 'Al-Falaq', 'An-Nas'],
        currentSurah: 'Al-Kawthar',
        progress: 67 // percentage
      },
      tajweed: {
        rulesLearned: ['Noon Saakinah', 'Meem Saakinah', 'Qalqalah'],
        currentFocus: 'Madd',
        overall: 75 // percentage
      },
      notes: [
        { date: '2025-02-20', note: 'Excellent progress with makhaarij' },
        { date: '2025-02-15', note: 'Needs practice with qalqalah' }
      ]
    },
    'Fatima Ali': {
      current: {
        surah: 'Al-Baqarah',
        ayah: 10,
        page: 3,
        juz: 1
      },
      memorization: {
        surahsCompleted: ['Al-Fatiha', 'Al-Ikhlas', 'Al-Falaq', 'An-Nas', 'Al-Kawthar', 'Al-Asr'],
        currentSurah: 'Al-Masad',
        progress: 80 // percentage
      },
      tajweed: {
        rulesLearned: ['Noon Saakinah', 'Meem Saakinah', 'Qalqalah', 'Madd'],
        currentFocus: 'Waqf',
        overall: 85 // percentage
      },
      notes: [
        { date: '2025-02-20', note: 'Outstanding memorization ability' },
        { date: '2025-02-12', note: 'Excellent application of tajweed rules' }
      ]
    }
  },
  'Tajweed Basics': {
    'Ibrahim Hassan': {
      tajweed: {
        rulesLearned: ['Noon Saakinah', 'Meem Saakinah'],
        currentFocus: 'Qalqalah',
        overall: 70 // percentage
      },
      practiceTexts: ['Surah Al-Fatiha', 'Surah Al-Ikhlas'],
      notes: [
        { date: '2025-02-18', note: 'Good progress with noon saakinah rules' }
      ]
    }
  }
};

// Initial communication data
const initialCommunicationData = [
  {
    id: 1,
    type: 'announcement',
    date: '2025-02-22',
    title: 'Eid Celebration',
    content: 'We will have a special Eid celebration after class next Wednesday. Please inform parents to pick children up 30 minutes later than usual.',
    sent: true,
    recipients: 'All Classes'
  },
  {
    id: 2,
    type: 'message',
    date: '2025-02-20',
    title: 'Homework Reminder',
    content: 'Please remind your child to complete the tajweed exercises before next class.',
    sent: true,
    recipient: 'Ibrahim Hassan',
    response: 'Thank you for the reminder, we will make sure he completes it.'
  },
  {
    id: 3,
    type: 'notification',
    date: '2025-02-25',
    title: 'Class Cancellation',
    content: 'Due to building maintenance, classes will be canceled on Friday. We will make up this session the following week.',
    sent: false,
    recipients: 'Quran Level 1'
  }
];

// Create the context
const TeacherDashboardContext = createContext();

// Provider component
export const TeacherDashboardProvider = ({ children }) => {
  const { user } = useAuth();
  const [teacherClasses, setTeacherClasses] = useState(initialClassData);
  const [diaryEntries, setDiaryEntries] = useState(initialDiaryEntries);
  const [examData, setExamData] = useState(initialExamData);
  const [progressData, setProgressData] = useState(initialProgressData);
  const [communicationData, setCommunicationData] = useState(initialCommunicationData);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   // In a real app, you would fetch data based on the logged-in teacher
  //   if (user) {
  //     // fetchTeacherData(user.id)
  //   }
  // }, [user]);

  // Attendance functions
  const getStudentsForClass = (classId) => {
    const classData = teacherClasses.find(c => c.id === classId);
    return classData ? classData.students : [];
  };

  const getAttendanceForDate = (classId, date) => {
    const classData = teacherClasses.find(c => c.id === classId);
    if (!classData) return [];

    return classData.students.map(student => {
      const attendance = student.attendanceHistory[date] || false;
      return { ...student, present: attendance };
    });
  };

  const saveAttendance = (classId, date, attendanceData) => {
    setTeacherClasses(currentClasses => 
      currentClasses.map(classItem => {
        if (classItem.id === classId) {
          const updatedStudents = classItem.students.map(student => {
            const studentAttendance = attendanceData.find(a => a.id === student.id);
            return {
              ...student,
              attendanceHistory: {
                ...student.attendanceHistory,
                [date]: studentAttendance ? studentAttendance.present : false
              }
            };
          });
          return { ...classItem, students: updatedStudents };
        }
        return classItem;
      })
    );
    return true;
  };

  // Diary functions
  const addDiaryEntry = (entry) => {
    const newEntry = {
      ...entry,
      id: diaryEntries.length > 0 ? Math.max(...diaryEntries.map(e => e.id)) + 1 : 1,
      date: entry.date || new Date().toISOString().split('T')[0]
    };
    setDiaryEntries([...diaryEntries, newEntry]);
    return newEntry.id;
  };

  const updateDiaryEntry = (entryId, updatedData) => {
    setDiaryEntries(currentEntries => 
      currentEntries.map(entry => 
        entry.id === entryId ? { ...entry, ...updatedData } : entry
      )
    );
    return true;
  };

  const deleteDiaryEntry = (entryId) => {
    setDiaryEntries(currentEntries => 
      currentEntries.filter(entry => entry.id !== entryId)
    );
    return true;
  };

  // Exam functions
  const addExam = (exam) => {
    const newExam = {
      ...exam,
      id: examData.length > 0 ? Math.max(...examData.map(e => e.id)) + 1 : 1,
      studentScores: exam.studentScores || []
    };
    setExamData([...examData, newExam]);
    return newExam.id;
  };

  const updateExam = (examId, updatedData) => {
    setExamData(currentExams => 
      currentExams.map(exam => 
        exam.id === examId ? { ...exam, ...updatedData } : exam
      )
    );
    return true;
  };

  const updateStudentScore = (examId, studentId, score, feedback) => {
    setExamData(currentExams => 
      currentExams.map(exam => {
        if (exam.id === examId) {
          const studentScoreIndex = exam.studentScores.findIndex(s => s.studentId === studentId);
          let updatedScores;
          
          if (studentScoreIndex !== -1) {
            updatedScores = exam.studentScores.map((scoreItem, index) => 
              index === studentScoreIndex ? { ...scoreItem, score, feedback } : scoreItem
            );
          } else {
            const student = teacherClasses
              .flatMap(c => c.students)
              .find(s => s.id === studentId);
              
            updatedScores = [
              ...exam.studentScores,
              { 
                studentId, 
                studentName: student ? student.name : `Student ID: ${studentId}`, 
                score, 
                feedback 
              }
            ];
          }
          
          return { ...exam, studentScores: updatedScores };
        }
        return exam;
      })
    );
    return true;
  };

  // Progress functions
  const updateStudentProgress = (className, studentName, progressType, progressData) => {
    setProgressData(currentProgress => {
      const classProgress = currentProgress[className] || {};
      const studentProgress = classProgress[studentName] || {};
      
      return {
        ...currentProgress,
        [className]: {
          ...classProgress,
          [studentName]: {
            ...studentProgress,
            [progressType]: {
              ...studentProgress[progressType],
              ...progressData
            }
          }
        }
      };
    });
    return true;
  };

  const addProgressNote = (className, studentName, note) => {
    setProgressData(currentProgress => {
      const classProgress = currentProgress[className] || {};
      const studentProgress = classProgress[studentName] || {};
      const studentNotes = studentProgress.notes || [];
      
      const newNote = {
        date: new Date().toISOString().split('T')[0],
        note
      };
      
      return {
        ...currentProgress,
        [className]: {
          ...classProgress,
          [studentName]: {
            ...studentProgress,
            notes: [...studentNotes, newNote]
          }
        }
      };
    });
    return true;
  };

  // Communication functions
  const addCommunication = (communication) => {
    const newCommunication = {
      ...communication,
      id: communicationData.length > 0 ? Math.max(...communicationData.map(c => c.id)) + 1 : 1,
      date: communication.date || new Date().toISOString().split('T')[0],
      sent: communication.sent || false
    };
    setCommunicationData([...communicationData, newCommunication]);
    return newCommunication.id;
  };

  const sendCommunication = (communicationId) => {
    setCommunicationData(currentCommunications => 
      currentCommunications.map(comm => 
        comm.id === communicationId ? { ...comm, sent: true } : comm
      )
    );
    return true;
  };

  const deleteCommunication = (communicationId) => {
    setCommunicationData(currentCommunications => 
      currentCommunications.filter(comm => comm.id !== communicationId)
    );
    return true;
  };

  return (
    <TeacherDashboardContext.Provider value={{
      teacherClasses,
      diaryEntries,
      examData,
      progressData,
      communicationData,
      loading,
      
      // Attendance
      getStudentsForClass,
      getAttendanceForDate,
      saveAttendance,
      
      // Diary
      addDiaryEntry,
      updateDiaryEntry,
      deleteDiaryEntry,
      
      // Exam
      addExam,
      updateExam,
      updateStudentScore,
      
      // Progress
      updateStudentProgress,
      addProgressNote,
      
      // Communication
      addCommunication,
      sendCommunication,
      deleteCommunication
    }}>
      {children}
    </TeacherDashboardContext.Provider>
  );
};

// Custom hook for using the teacher dashboard context
export const useTeacherDashboard = () => {
  const context = useContext(TeacherDashboardContext);
  if (!context) {
    throw new Error('useTeacherDashboard must be used within a TeacherDashboardProvider');
  }
  return context;
};
```

# src\hooks\useScrollAnimation.js

```js
import { useState, useEffect, useRef } from 'react';

const useScrollAnimation = () => {
  const [animatedElements, setAnimatedElements] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    // Create Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Mark the element as animated when it comes into view
            setAnimatedElements((prev) => ({
              ...prev,
              [entry.target.id]: true
            }));
            
            // Stop observing this element once it's animated
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of element is visible
      }
    );

    // Find and observe elements with scroll-animate class
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => {
      observerRef.current.observe(el);
    });

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Helper function to get animation classes
  const getAnimationClasses = (elementId) => {
    return animatedElements[elementId] 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-10';
  };

  return { getAnimationClasses };
};

export default useScrollAnimation;
```

# src\index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
 
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }
}
/* src/index.css or src/App.css */
body {
  padding-top: 64px; /* Adjust this value to match the height of your navigation bar */
  margin: 0;
}

/* Optional: Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
```

# src\index.js

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

# src\logo.svg

This is a file of the type: SVG Image

# src\pages\AboutUs.js

```js
// src/pages/AboutPage.js
import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Target, Award, Building2, BookOpen, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/common/card';
import { Button } from '../components/common/button';

const AboutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  
  // const stats = [
  //   { label: 'Schools Using Taleem', value: '500+' },
  //   { label: 'Active Students', value: '100K+' },
  //   { label: 'Countries', value: '25+' },
  //   { label: 'Years Experience', value: '10+' }
  // ];

  const values = [
    {
      icon: <Users className="w-6 h-6 text-green-700" />,
      title: 'Community Focused',
      description: 'Building strong relationships between students, teachers, and parents.'
    },
    {
      icon: <Target className="w-6 h-6 text-green-700" />,
      title: 'Goal Oriented',
      description: 'Helping institutions achieve their educational objectives efficiently.'
    },
    {
      icon: <Award className="w-6 h-6 text-green-700" />,
      title: 'Excellence',
      description: 'Committed to providing the highest quality educational management solutions.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-950 to-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6 animate-fade-in">About Ta'leem</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto animate-fade-in delay-200">
            Revolutionizing educational management through innovative technology and comprehensive solutions.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-duration-300 animate-fade-in">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Building2 className="w-5 h-5 text-green-700" />
                  </div>
                  <CardTitle>Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To empower educational institutions with cutting-edge technology that simplifies administration
                  and enhances the learning experience. We strive to create a seamless connection between
                  administrators, teachers, and parents, fostering a collaborative educational environment.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-duration-300 animate-fade-in delay-200">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <BookOpen className="w-5 h-5 text-green-700" />
                  </div>
                  <CardTitle>Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To be the global leader in educational management solutions, pioneering innovative
                  approaches that transform how educational institutions operate. We envision a future
                  where technology seamlessly integrates with education to create better learning outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-fade-in">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-lg transition-duration-300 animate-fade-in delay-${(index + 1) * 100}`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-green-50 rounded-lg">
                      {value.icon}
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-green-950 to-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">Join Our Journey</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in delay-200">
            Be part of the educational revolution. Partner with Taleem to transform
            your institution's management and enhance the learning experience.
          </p>
          <Button 
            onClick={() => navigate('/contact')}
            className="inline-flex items-center space-x-2 bg-green-700 hover:bg-green-800 transition-colors px-6 py-3 rounded-lg animate-fade-in delay-300 hover-lift"
          >
            <GraduationCap className="w-5 h-5" />
            <span>Contact Us Today</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
```

# src\pages\admin\CreateMasjidPage.js

```js
// src/pages/admin/CreateMasjidPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HexColorPicker } from 'react-colorful';
import { Save, Upload, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { useMasjid } from '../../contexts/MasjidContext';

const CreateMasjidPage = () => {
  const navigate = useNavigate();
  const { addMasjid } = useMasjid();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    contact: {
      email: '',
      phone: '',
      address: '',
      website: '',
    },
    theme: {
      primary: '#006400',
      secondary: '#4B0082',
      headerBg: 'from-green-950 to-green-900',
      sidebarBg: 'bg-green-950'
    },
    features: {
      attendance: true,
      payments: true,
      events: true,
      quranTracker: true
    },
    logo: null,
    logoPreview: null
  });
  
  // Handle general input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
      
      // Auto-generate slug from name
      if (name === 'name') {
        const slug = value
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w\-]+/g, '')
          .replace(/\-\-+/g, '-')
          .replace(/^-+/, '')
          .replace(/-+$/, '');
        
        setFormData(prevState => ({
          ...prevState,
          slug
        }));
      }
    }
  };
  
  // Handle feature toggles
  const handleFeatureToggle = (feature) => {
    setFormData({
      ...formData,
      features: {
        ...formData.features,
        [feature]: !formData.features[feature]
      }
    });
  };
  
  // Handle logo upload
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        logo: file,
        logoPreview: URL.createObjectURL(file)
      });
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Call the addMasjid function from context
      const newMasjidId = await addMasjid({
        id: formData.slug,
        name: formData.name,
        logo: formData.logoPreview, // In a real app, you'd handle file uploads
        contact: formData.contact,
        theme: formData.theme,
        features: formData.features,
        status: 'active',
        createdAt: new Date().toISOString()
      });
      
      // Show success message
      alert(`Masjid "${formData.name}" created successfully!`);
      
      // Redirect to the new masjid
      navigate(`/masjid/${newMasjidId}`);
    } catch (error) {
      console.error("Error creating masjid:", error);
      alert("There was an error creating the masjid. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Color change handlers
  const handlePrimaryColorChange = (color) => {
    setFormData({
      ...formData,
      theme: {
        ...formData.theme,
        primary: color
      }
    });
  };
  
  const handleSecondaryColorChange = (color) => {
    setFormData({
      ...formData,
      theme: {
        ...formData.theme,
        secondary: color
      }
    });
  };
  
  // Update theme based on primary color
  const updateThemeFromPrimaryColor = (color) => {
    // Extract color without the # symbol
    const hexColor = color.replace('#', '');
    
    // Determine theme based on color
    let headerBg, sidebarBg;
    
    if (color.toLowerCase().startsWith('#00')) {  // Green or Blue
      if (hexColor.substring(2, 4).toLowerCase() === '64') {  // Green
        headerBg = 'from-green-950 to-green-900';
        sidebarBg = 'bg-green-950';
      } else {  // Blue
        headerBg = 'from-blue-950 to-blue-900';
        sidebarBg = 'bg-blue-950';
      }
    } else if (color.toLowerCase().startsWith('#ff') || color.toLowerCase().startsWith('#8b00')) {  // Red
      headerBg = 'from-red-950 to-red-900';
      sidebarBg = 'bg-red-950';
    } else if (color.toLowerCase().startsWith('#4b00') || color.toLowerCase().startsWith('#80')) {  // Purple
      headerBg = 'from-purple-950 to-purple-900';
      sidebarBg = 'bg-purple-950';
    } else if (color.toLowerCase().startsWith('#8b4') || color.toLowerCase().startsWith('#a5')) {  // Brown
      headerBg = 'from-amber-950 to-amber-900';
      sidebarBg = 'bg-amber-950';
    } else {  // Default to neutral
      headerBg = 'from-gray-950 to-gray-900';
      sidebarBg = 'bg-gray-950';
    }
    
    setFormData({
      ...formData,
      theme: {
        ...formData.theme,
        primary: color,
        headerBg,
        sidebarBg
      }
    });
  };
  
  // Render step 1: Basic information
  const renderStep1 = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Masjid Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Masjid Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Al-Falah Islamic Center"
            required
          />
        </div>
        <div>
          <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">URL Slug</label>
          <div className="flex">
            <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              masjid/
            </span>
            <input
              type="text"
              id="slug"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="al-falah"
              required
            />
          </div>
          <p className="mt-1 text-sm text-gray-500">This will be used in the URL: /masjid/{formData.slug || 'al-falah'}</p>
        </div>
      </div>
      
      <div>
        <label htmlFor="logo" className="block text-sm font-medium text-gray-700 mb-2">Masjid Logo</label>
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 border border-gray-300 rounded-md flex items-center justify-center overflow-hidden bg-gray-50">
            {formData.logoPreview ? (
              <img src={formData.logoPreview} alt="Logo preview" className="max-w-full max-h-full object-contain" />
            ) : (
              <div className="text-gray-400 text-center text-sm">
                <Upload className="w-8 h-8 mx-auto mb-1" />
                <span>No logo</span>
              </div>
            )}
          </div>
          <div className="flex-1">
            <label className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
              <Upload className="w-5 h-5 mr-2 text-gray-600" />
              <span>Upload Logo</span>
              <input
                type="file"
                id="logo"
                name="logo"
                onChange={handleLogoChange}
                accept="image/*"
                className="sr-only"
              />
            </label>
            <p className="mt-1 text-xs text-gray-500">PNG or JPG, 1:1 ratio recommended. Max 2MB.</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Contact Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="contact.email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="contact.email"
                name="contact.email"
                value={formData.contact.email}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="info@example.com"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="contact.phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="tel"
                id="contact.phone"
                name="contact.phone"
                value={formData.contact.phone}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>
          </div>
        </div>
        
        <div>
          <label htmlFor="contact.address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="contact.address"
              name="contact.address"
              value={formData.contact.address}
              onChange={handleChange}
              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="123 Main St, City, State, Zip"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="contact.website" className="block text-sm font-medium text-gray-700 mb-1">Website (Optional)</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Globe className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="url"
              id="contact.website"
              name="contact.website"
              value={formData.contact.website}
              onChange={handleChange}
              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="https://www.example.com"
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setStep(2)}
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Continue
        </button>
      </div>
    </div>
  );
  
  // Render step 2: Theme and features
  const renderStep2 = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Theme & Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Color Scheme</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
            <div className="flex space-x-4">
              <HexColorPicker color={formData.theme.primary} onChange={handlePrimaryColorChange} />
              <div className="space-y-2">
                <div 
                  className="w-16 h-16 rounded border"
                  style={{ backgroundColor: formData.theme.primary }}
                ></div>
                <input
                  type="text"
                  value={formData.theme.primary}
                  onChange={(e) => handlePrimaryColorChange(e.target.value)}
                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                />
                <button
                  type="button"
                  onClick={() => updateThemeFromPrimaryColor(formData.theme.primary)}
                  className="w-full text-xs px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                >
                  Auto-set theme
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
            <div className="flex space-x-4">
              <HexColorPicker color={formData.theme.secondary} onChange={handleSecondaryColorChange} />
              <div className="space-y-2">
                <div 
                  className="w-16 h-16 rounded border"
                  style={{ backgroundColor: formData.theme.secondary }}
                ></div>
                <input
                  type="text"
                  value={formData.theme.secondary}
                  onChange={(e) => handleSecondaryColorChange(e.target.value)}
                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Preview</h3>
          
          <div className="border rounded-lg overflow-hidden shadow-sm">
            {/* Header preview */}
            <div className={`bg-gradient-to-r ${formData.theme.headerBg} p-4`}>
              <div className="flex items-center text-white">
                {formData.logoPreview ? (
                  <img src={formData.logoPreview} alt="Logo" className="w-10 h-10 mr-3 rounded" />
                ) : (
                  <div className="w-10 h-10 mr-3 rounded bg-white/10 flex items-center justify-center">
                    <span className="text-xs">Logo</span>
                  </div>
                )}
                <div>
                  <div className="font-semibold">{formData.name || "Masjid Name"}</div>
                  <div className="text-xs text-gray-300">Education Portal</div>
                </div>
              </div>
            </div>
            
            {/* Sidebar preview */}
            <div className="flex">
              <div className={`${formData.theme.sidebarBg} w-1/3 p-3`}>
                <div className="py-2 px-3 text-white text-xs rounded bg-white/10">Dashboard</div>
                <div className="py-2 px-3 text-gray-300 text-xs">Students</div>
                <div className="py-2 px-3 text-gray-300 text-xs">Classes</div>
              </div>
              
              <div className="bg-gray-50 w-2/3 p-3">
                <div className="h-32 flex items-center justify-center text-gray-400 text-sm">
                  Content Area
                </div>
              </div>
            </div>
            
            {/* Button preview */}
            <div className="p-4 bg-white border-t flex justify-end space-x-2">
              <button
                type="button"
                className="px-3 py-1 rounded text-xs bg-gray-200 text-gray-800"
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-3 py-1 rounded text-xs text-white"
                style={{ backgroundColor: formData.theme.primary }}
              >
                Primary Button
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Enabled Features</h3>
            
            <div className="space-y-3">
              {[
                { id: 'attendance', name: 'Attendance Tracking' },
                { id: 'payments', name: 'Payment System' },
                { id: 'events', name: 'Events Calendar' },
                { id: 'quranTracker', name: 'Quran Progress Tracker' }
              ].map(feature => (
                <div key={feature.id} className="flex items-center">
                  <button
                    type="button"
                    onClick={() => handleFeatureToggle(feature.id)}
                    className={`w-10 h-6 flex items-center ${formData.features[feature.id] ? 'bg-green-500 justify-end' : 'bg-gray-300 justify-start'} rounded-full p-1 transition-colors duration-300 mr-3`}
                  >
                    <div className="bg-white w-4 h-4 rounded-full shadow-sm"></div>
                  </button>
                  <span className="text-gray-700">{feature.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between pt-4 border-t">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Back
        </button>
        <button
          type="submit"
          className={`px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating...
            </>
          ) : (
            <>
              <Save className="w-5 h-5 mr-2" />
              Create Masjid
            </>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Create New Masjid</h1>
          <p className="text-gray-600 mt-1">Set up a new masjid portal with customized branding and features.</p>
        </div>
        
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              1
            </div>
            <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              2
            </div>
          </div>
          <div className="flex text-xs mt-2">
            <div className="flex-1 text-center">Masjid Information</div>
            <div className="flex-1 text-center">Theme & Features</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <form onSubmit={handleSubmit}>
            {step === 1 ? renderStep1() : renderStep2()}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateMasjidPage;
```

# src\pages\admin\ManageMasjidsPage.js

```js
// src/pages/admin/ManageMasjidsPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit, Trash, ExternalLink, Search } from 'lucide-react';

const ManageMasjidsPage = () => {
  const [masjids, setMasjids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  
  useEffect(() => {
    // Fetch masjids from the server
    fetchMasjids();
  }, []);
  
  const fetchMasjids = async () => {
    setLoading(true);
    try {
      // In a real application, you would fetch from your API
      // For now, we'll use mock data
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockMasjids = [
        {
          id: 'al-falah',
          name: 'Al-Falah Islamic Center',
          status: 'active',
          createdAt: '2023-01-15',
          usersCount: 124,
          theme: {
            primary: '#006400',
            headerBg: 'from-green-950 to-green-900'
          }
        },
        {
          id: 'al-noor',
          name: 'Al-Noor Masjid',
          status: 'active',
          createdAt: '2023-02-28',
          usersCount: 87,
          theme: {
            primary: '#00008B',
            headerBg: 'from-blue-950 to-blue-900'
          }
        },
        {
          id: 'masjid-ibrahim',
          name: 'Masjid Ibrahim',
          status: 'pending',
          createdAt: '2023-05-10',
          usersCount: 42,
          theme: {
            primary: '#4B0082',
            headerBg: 'from-purple-950 to-purple-900'
          }
        }
      ];
      
      setMasjids(mockMasjids);
    } catch (error) {
      console.error("Error fetching masjids:", error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleDelete = async (masjidId) => {
    try {
      // In a real application, you would make an API call to delete the masjid
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Update the state to remove the deleted masjid
      setMasjids(masjids.filter(masjid => masjid.id !== masjidId));
      
      // Close the confirmation dialog
      setShowDeleteConfirm(null);
    } catch (error) {
      console.error("Error deleting masjid:", error);
      alert("There was an error deleting the masjid.");
    }
  };
  
  const filteredMasjids = masjids.filter(masjid => 
    masjid.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    masjid.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fixed gradient styling function
  const getGradientStyle = (headerBg) => {
    if (!headerBg) return { backgroundColor: '#333' };
    
    // Extract color classes from the Tailwind class string
    const fromClass = headerBg.match(/from-(\w+)-(\d+)/);
    const toClass = headerBg.match(/to-(\w+)-(\d+)/);
    
    if (!fromClass || !toClass) return { backgroundColor: '#333' };
    
    // Map Tailwind color classes to hex values
    const colorMap = {
      green: {
        '900': '#14532d',
        '950': '#052e16'
      },
      blue: {
        '900': '#1e3a8a',
        '950': '#172554'
      },
      purple: {
        '900': '#581c87',
        '950': '#3b0764'
      },
      gray: {
        '900': '#111827',
        '950': '#030712'
      }
    };
    
    const fromColor = colorMap[fromClass[1]]?.[fromClass[2]] || '#333';
    const toColor = colorMap[toClass[1]]?.[toClass[2]] || '#111';
    
    return {
      background: `linear-gradient(to right, ${fromColor}, ${toColor})`
    };
  };
  
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Manage Masjids</h1>
            <p className="text-gray-600 mt-1">Create and manage masjid portals on your platform.</p>
          </div>
          
          <Link
            to="/admin-dashboard/masjids/create"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Masjid
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
          <div className="p-4 border-b flex justify-between items-center">
            <div className="relative w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search masjids..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div className="text-sm text-gray-500">
              {filteredMasjids.length} {filteredMasjids.length === 1 ? 'masjid' : 'masjids'} found
            </div>
          </div>
          
          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading masjids...</p>
            </div>
          ) : filteredMasjids.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-600">No masjids found.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Masjid</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Users</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredMasjids.map((masjid) => (
                    <tr key={masjid.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div 
                            className="w-10 h-10 rounded-full mr-3 flex items-center justify-center text-white"
                            style={getGradientStyle(masjid.theme.headerBg)}
                          >
                            {masjid.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{masjid.name}</div>
                            <div className="text-sm text-gray-500">/masjid/{masjid.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          masjid.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {masjid.status === 'active' ? 'Active' : 'Pending'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(masjid.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {masjid.usersCount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2 relative">
                          <a
                            href={`/masjid/${masjid.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
                            title="View"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                          <Link
  to={`/admin-dashboard/masjids/edit/${masjid.id}`}
  className="text-indigo-600 hover:text-indigo-900 p-2 rounded-full hover:bg-indigo-50"
  title="Edit"
>
  <Edit className="w-5 h-5" />
</Link>
                          <button
                            onClick={() => setShowDeleteConfirm(masjid.id)}
                            className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50"
                            title="Delete"
                          >
                            <Trash className="w-5 h-5" />
                          </button>
                          
                          {showDeleteConfirm === masjid.id && (
                            <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-md shadow-lg border border-gray-200 z-10 p-4">
                              <h4 className="text-sm font-medium text-gray-900 mb-2">Delete Masjid</h4>
                              <p className="text-xs text-gray-600 mb-4">
                                Are you sure you want to delete "{masjid.name}"? This action cannot be undone.
                              </p>
                              <div className="flex justify-end space-x-2">
                                <button
                                  type="button"
                                  onClick={() => setShowDeleteConfirm(null)}
                                  className="px-3 py-1.5 text-xs bg-gray-100 text-gray-800 rounded hover:bg-gray-200"
                                >
                                  Cancel
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDelete(masjid.id)}
                                  className="px-3 py-1.5 text-xs bg-red-600 text-white rounded hover:bg-red-700"
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageMasjidsPage;
```

# src\pages\AdminDashboard.js

```js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Menu, X, Users, UserCheck, UserPlus, BookOpen, Calendar, TrendingUp, Wallet, LogOut, Building } from 'lucide-react';
import EnrolledStudents from '../components/adminDashboard/EnrolledStudents';
import WaitingListStudents from '../components/adminDashboard/WaitingListStudents';
import TeacherProfiles from '../components/adminDashboard/TeacherProfiles';
import Classes from '../components/adminDashboard/Classes';
import AdminAttendance from '../components/adminDashboard/AdminAttendance'; // Changed from Attendance to AdminAttendance
import StudentProgress from '../components/adminDashboard/StudentProgress';
import Payment from '../components/adminDashboard/Payment';

const AdminDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('enrolled');
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  // Menu items with their corresponding paths
  const menuItems = [
    { id: 'enrolled', name: 'Enrolled Students', icon: <Users className="w-5 h-5" />, path: '/admin-dashboard' },
    { id: 'waiting', name: 'Waiting List', icon: <UserCheck className="w-5 h-5" />, path: '/admin-dashboard/waiting' },
    { id: 'teachers', name: 'Teacher Profiles', icon: <UserPlus className="w-5 h-5" />, path: '/admin-dashboard/teachers' },
    { id: 'classes', name: 'Classes', icon: <BookOpen className="w-5 h-5" />, path: '/admin-dashboard/classes' },
    { id: 'attendance', name: 'Attendance', icon: <Calendar className="w-5 h-5" />, path: '/admin-dashboard/attendance' },
    { id: 'progress', name: 'Student Progress', icon: <TrendingUp className="w-5 h-5" />, path: '/admin-dashboard/progress' },
    { id: 'payment', name: 'Payment', icon: <Wallet className="w-5 h-5" />, path: '/admin-dashboard/payment' }
  ];

  // Set the active tab based on the current URL path
  useEffect(() => {
    const currentPath = location.pathname;
    const matchedItem = menuItems.find(item => item.path === currentPath);
    if (matchedItem) {
      setActiveTab(matchedItem.id);
    } else if (currentPath === '/admin-dashboard') {
      setActiveTab('enrolled');
    }
  }, [location.pathname]);

  const renderContent = () => {
    switch (activeTab) {
      case 'enrolled': return <EnrolledStudents />;
      case 'waiting': return <WaitingListStudents />;
      case 'teachers': return <TeacherProfiles />;
      case 'classes': return <Classes />;
      case 'attendance': return <AdminAttendance />; // Changed from Attendance to AdminAttendance
      case 'progress': return <StudentProgress />;
      case 'payment': return <Payment />;
      default: return <EnrolledStudents />;
    }
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    const selectedItem = menuItems.find(item => item.id === tabId);
    if (selectedItem) {
      navigate(selectedItem.path);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-black transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 bg-black">
          <span className="text-white text-xl font-semibold">Masjid Admin Dashboard</span>
        </div>
        <nav className="mt-5">
          {menuItems.map((item) => (
            <a
              key={item.id}
              className={`flex items-center mt-4 py-2 px-6 text-gray-300 hover:bg-green-800 hover:bg-opacity-25 hover:text-gray-100 ${
                activeTab === item.id ? 'bg-green-800 bg-opacity-25 text-gray-100' : ''
              } transition-all duration-300 ease-in-out`}
              onClick={() => handleTabChange(item.id)}
            >
              {item.icon}
              <span className="mx-3">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <Link
  to="/admin-dashboard/masjids"
  className="p-4 bg-white shadow rounded-lg hover:shadow-md transition-shadow"
>
  <div className="flex items-center space-x-3">
    <div className="p-2 bg-green-100 rounded-full">
      <Building className="h-6 w-6 text-green-600" />
    </div>
    <div>
      <h3 className="font-medium">Manage Masjids</h3>
      <p className="text-sm text-gray-500">Create and customize masjid portals</p>
    </div>
  </div>
</Link>
        <header className="flex justify-between items-center py-4 px-6 bg-black text-white">
          <div className="flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none lg:hidden transition-transform duration-300 ease-in-out transform hover:scale-110">
              <Menu className="h-6 w-6" />
            </button>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-green-800 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8 animate-fade-in">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
```

# src\pages\ContactPage.js

```js
// src/pages/ContactPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/common/card';
import { Button } from '../components/common/button';
import { Send, ArrowLeft } from 'lucide-react';

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Initialize animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-r from-green-950 to-black min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-white mb-6 hover:text-green-400 transition-colors animate-fade-in"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>

        <div className="animate-on-scroll opacity-0">
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Contact Taleem
                <div className="text-base font-normal text-gray-600 mt-2">
                  Have a question or want to learn more? We'd love to hear from you.
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="animate-on-scroll opacity-0" style={{ animationDelay: '100ms' }}>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="animate-on-scroll opacity-0" style={{ animationDelay: '300ms' }}>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
                      Phone Number (Optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="animate-on-scroll opacity-0" style={{ animationDelay: '400ms' }}>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="animate-on-scroll opacity-0" style={{ animationDelay: '500ms' }}>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {status === 'success' && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-md animate-fade-in">
                    Thank you for your message! We'll be in touch shortly.
                  </div>
                )}

                <div className="animate-on-scroll opacity-0" style={{ animationDelay: '600ms' }}>
                  <Button
                    type="submit"
                    disabled={status !== ''}
                    className="w-full bg-green-700 hover:bg-green-800 text-white flex items-center justify-center gap-2 hover-lift"
                  >
                    {status === 'sending' ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
```

# src\pages\HomePage.js

```js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  BookOpen, 
  BarChart2, 
  GraduationCap, 
  Shield, 
  MessageCircle,
  ChevronRight,
  Target
} from 'lucide-react';
import { Button } from '../components/common/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/common/card';
import BenefitsSection1 from '../components/sections/BenefitsSection1';
import HeroSlideshow from '../components/sections/HeroSlideshow1';
import useScrollAnimation from '../hooks/useScrollAnimation';

const HomePage = () => {
  const navigate = useNavigate();
  const { getAnimationClasses } = useScrollAnimation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const features = [
    {
      icon: <Users className="w-6 h-6 text-green-700" />,
      title: "Student Management",
      description: "Comprehensive tracking of student progress, attendance, and performance."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-green-700" />,
      title: "Academic Insights",
      description: "Detailed analytics and reporting to support educational strategies."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-green-700" />,
      title: "Communication Hub",
      description: "Seamless communication between teachers, students, and parents."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-green-700" />,
      title: "Secure Platform",
      description: "Enterprise-grade security to protect sensitive educational data."
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-green-700" />,
      title: "Data-Driven Insights",
      description: "Advanced analytics to track and improve institutional performance."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-green-700" />,
      title: "Comprehensive Solution",
      description: "All-in-one platform covering every aspect of educational management."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div 
        id="hero-section"
        className={`relative -mt-16 scroll-animate transition-all duration-700 ease-out ${getAnimationClasses('hero-section')}`}
      >
        <HeroSlideshow />
        
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 bg-black bg-opacity-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-700 rounded-xl p-1 inline-block mb-4">
              <div className="flex items-center text-white text-sm px-3 py-1">
                <Target className="w-4 h-4 mr-2" />
                Empowering Islamic Educational Institutions
              </div>
            </div>
            <h1 
              className="text-4xl font-bold mb-4 text-white"
            >
              Ta'leem: Transforming Education Management
            </h1>
            <p 
              className="text-xl text-white max-w-2xl mx-auto mb-8"
            >
              An intelligent, integrated solution designed to streamline administrative processes, enhance communication, and drive educational excellence.
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                className="bg-green-500 text-black hover:bg-green-600 px-8 py-3 rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex items-center"
                onClick={() => navigate('/packages')}
              >
                Get Started
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                className="bg-green text-green-900 hover:bg-green-50 px-8 py-3 rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex items-center"
                onClick={() => navigate('/about')}
              >
                Learn More
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the page remains the same */}
      {/* Features Section */}
      <div 
        id="features-section"
        className={`py-16 bg-white scroll-animate transition-all duration-700 ease-out ${getAnimationClasses('features-section')}`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
                      {feature.icon}
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div 
        id="benefits-section"
        className={`bg-gray-50 py-16 scroll-animate transition-all duration-700 ease-out ${getAnimationClasses('benefits-section')}`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Taleem
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
                      {benefit.icon}
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Comprehensive Benefits Section */}
      <div 
        id="comprehensive-benefits-section"
        className={`scroll-animate transition-all duration-700 ease-out ${getAnimationClasses('comprehensive-benefits-section')}`}
      >
        <BenefitsSection1 />
      </div>

      {/* CTA Section */}
      <div 
        id="cta-section"
        className={`bg-gradient-to-r from-green-950 to-black text-white py-16 scroll-animate transition-all duration-700 ease-out ${getAnimationClasses('cta-section')}`}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Revolutionize Your Institution?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join hundreds of educational institutions transforming their management with Taleem
          </p>
          <Button 
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full shadow-md"
            onClick={() => navigate('/contact')}
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
```

# src\pages\LandingPage.js

```js
// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { Button } from '../components/common/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/common/card';

const LandingPage = () => {
  const features = [
    {
      title: 'Student Management',
      description: 'Efficiently manage enrollments and track student progress.',
      icon: GraduationCap
    },
    {
      title: 'Teacher Portal',
      description: 'Easy access to class schedules and student information.',
      icon: GraduationCap
    },
    {
      title: 'Parent Access',
      description: 'Monitor your child\'s progress and communicate with teachers.',
      icon: GraduationCap
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div 
        className="px-6 py-16 bg-gradient-to-r from-green-950 to-black text-white"
        style={{
          animation: 'fadeIn 0.5s ease-out forwards',
          opacity: 0
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <GraduationCap 
            style={{
              animation: 'fadeIn 0.5s ease-out forwards 0.2s',
              opacity: 0
            }}
            className="w-16 h-16 mx-auto mb-6 text-green-500"
          />
          <h1 
            style={{
              animation: 'fadeIn 0.5s ease-out forwards 0.4s',
              opacity: 0
            }}
            className="text-4xl font-bold mb-4"
          >
            Welcome to School Management System
          </h1>
          <p 
            style={{
              animation: 'fadeIn 0.5s ease-out forwards 0.6s',
              opacity: 0
            }}
            className="text-xl text-gray-300 mb-8"
          >
            Empowering education through seamless management and communication
          </p>
          <div 
            style={{
              animation: 'fadeIn 0.5s ease-out forwards 0.8s',
              opacity: 0
            }}
            className="flex gap-4 justify-center"
          >
            <Button 
              className="bg-green-700 hover:bg-green-800 text-white"
            >
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button 
              variant="outline"
              className="border-green-700 text-green-700 hover:bg-green-950 hover:text-white"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div 
        className="py-16 px-6"
        style={{
          animation: 'fadeIn 0.5s ease-out forwards 1s',
          opacity: 0
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            style={{
              animation: 'fadeIn 0.5s ease-out forwards 1.2s',
              opacity: 0
            }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Our Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                style={{
                  animation: `fadeIn 0.5s ease-out forwards ${1.4 + index * 0.2}s`,
                  opacity: 0
                }}
                className="hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-green-50 rounded-lg">
                      <feature.icon className="w-6 h-6 text-green-700" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Add global style for fadeIn animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
```

# src\pages\LoginPage.js

```js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/common/card';
import { Button } from '../components/common/button';
import { GraduationCap, User, Lock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Navigation from '../components/layout/Navigation';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginType, setLoginType] = useState('super_admin');

  useEffect(() => {
    if (isAuthenticated()) {
      const user = JSON.parse(localStorage.getItem('user'));
      switch(user.role) {
        case 'super_admin':
          navigate('/super-admin/dashboard');
          break;
        case 'masjid_admin':
          navigate(`/masjid/${user.masjid}/dashboard`);
          break;
        case 'teacher':
          navigate(`/masjid/${user.masjid}/teacher-dashboard`);
          break;
        case 'parent':
          navigate(`/masjid/${user.masjid}/parent-dashboard`);
          break;
        case 'admin': // Keeping existing admin route
          navigate('/admin-dashboard');
          break;
        default:
          navigate('/');
      }
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Use loginType parameter to pass to the login function
      const user = await login(email, password, loginType);
      console.log("Logged in user:", user); // Debug log
      
      // Mapping login types to navigation
      switch(user.role) {
        case 'super_admin':
          navigate('/super-admin/dashboard');
          break;
        case 'masjid_admin':
          navigate(`/masjid/${user.masjid}/dashboard`);
          break;
        case 'teacher':
          navigate(`/masjid/${user.masjid}/teacher-dashboard`);
          break;
        case 'parent':
          navigate(`/masjid/${user.masjid}/parent-dashboard`);
          break;
        case 'admin': // Keeping existing admin route
          navigate('/admin-dashboard');
          break;
        default:
          navigate('/');
      }
    } catch (error) {
      console.error("Login error:", error); // Debug log
      setError('Invalid credentials. Please try again.');
      setLoading(false);
    }
  };

  // Determine placeholder based on login type
  const getEmailPlaceholder = () => {
    switch(loginType) {
      case 'super_admin':
        return 'admin@taleem.com';
      case 'masjid_admin':
        return 'masjid_admin@demo.com';
      case 'teacher':
        return 'teacher@demo.com';
      case 'parent':
        return 'parent@demo.com';
      default:
        return 'Enter your email';
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden flex flex-col">
      <Navigation />
      <div className="flex-grow bg-gradient-to-r from-green-950 to-black flex items-center justify-center overflow-auto">
        <div className="w-full max-w-md px-4">
          <div className="text-center mb-8 opacity-0 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-700/10 mb-4 mx-auto">
              <GraduationCap className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-sm sm:text-base text-gray-400">Sign in to your account</p>
          </div>

          <Card className="w-full bg-white/95 backdrop-blur-sm shadow-2xl border border-green-800/20 opacity-0 animate-fade-in delay-200">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-gray-800 text-center">Login</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md border border-red-200">
                    {error}
                  </div>
                )}
                
                <div className="mb-4 flex flex-wrap justify-center gap-3">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="loginType"
                      value="super_admin"
                      checked={loginType === 'super_admin'}
                      onChange={() => setLoginType('super_admin')}
                    />
                    <span className="ml-2 text-sm">Super Admin</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="loginType"
                      value="masjid_admin"
                      checked={loginType === 'masjid_admin'}
                      onChange={() => setLoginType('masjid_admin')}
                    />
                    <span className="ml-2 text-sm">Masjid Admin</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="loginType"
                      value="teacher"
                      checked={loginType === 'teacher'}
                      onChange={() => setLoginType('teacher')}
                    />
                    <span className="ml-2 text-sm">Teacher</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="loginType"
                      value="parent"
                      checked={loginType === 'parent'}
                      onChange={() => setLoginType('parent')}
                    />
                    <span className="ml-2 text-sm">Parent</span>
                  </label>
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-8 sm:pl-10 p-2 sm:p-3 text-sm sm:text-base border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                      placeholder={getEmailPlaceholder()}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="password" className="block text-xs sm:text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-8 sm:pl-10 p-2 sm:p-3 text-sm sm:text-base border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-green-700 hover:bg-green-800 text-white py-2 sm:py-3 text-sm sm:text-base rounded-md transition-colors"
                    disabled={loading}
                  >
                    {loading ? 'Signing in...' : 'Sign In'}
                  </Button>
                </div>

                <div className="mt-4 text-center">
                  <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                    <div>Demo Credentials:</div>
                    <div className="font-medium">Super Admin: admin@taleem.com / admin123</div>
                    <div className="font-medium">Masjid Admin: masjid_admin@demo.com / admin123</div>
                    <div className="font-medium">Teacher: teacher@demo.com / teacher123</div>
                    <div className="font-medium">Parent: parent@demo.com / parent123</div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
```

# src\pages\masjid-admin\MasjidAdminDashboard.js

```js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Menu, Building, Users, UserCheck, UserPlus, BookOpen, Calendar, TrendingUp, Wallet, LogOut, Settings } from 'lucide-react';
import { useMasjid } from '../../contexts/MasjidContext';

// Import a placeholder for MasjidDetailsContent if it doesn't exist yet
const MasjidDetailsContent = () => (
  <div className="p-8 text-center">
    <h2 className="text-2xl font-bold">Masjid Details</h2>
    <p className="text-gray-600 mt-4">Masjid details content will be shown here.</p>
  </div>
);

// Placeholder components for other tabs
const EnrolledStudents = () => (
  <div className="p-8 text-center">
    <h2 className="text-2xl font-bold">Enrolled Students</h2>
    <p className="text-gray-600 mt-4">Enrolled students list will be shown here.</p>
  </div>
);

const WaitingListStudents = () => (
  <div className="p-8 text-center">
    <h2 className="text-2xl font-bold">Waiting List</h2>
    <p className="text-gray-600 mt-4">Waiting list students will be shown here.</p>
  </div>
);

const TeacherProfiles = () => (
  <div className="p-8 text-center">
    <h2 className="text-2xl font-bold">Teacher Profiles</h2>
    <p className="text-gray-600 mt-4">Teacher profiles will be shown here.</p>
  </div>
);

const Classes = () => (
  <div className="p-8 text-center">
    <h2 className="text-2xl font-bold">Classes</h2>
    <p className="text-gray-600 mt-4">Classes will be shown here.</p>
  </div>
);

const AdminAttendance = () => (
  <div className="p-8 text-center">
    <h2 className="text-2xl font-bold">Attendance</h2>
    <p className="text-gray-600 mt-4">Attendance records will be shown here.</p>
  </div>
);

const StudentProgress = () => (
  <div className="p-8 text-center">
    <h2 className="text-2xl font-bold">Student Progress</h2>
    <p className="text-gray-600 mt-4">Student progress will be shown here.</p>
  </div>
);

const Payment = () => (
  <div className="p-8 text-center">
    <h2 className="text-2xl font-bold">Payment</h2>
    <p className="text-gray-600 mt-4">Payment information will be shown here.</p>
  </div>
);

const MasjidAdminDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('masjid');
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user } = useAuth();
  
  // Safely access currentMasjid even if useMasjid is not available yet
  const masjidContext = {};
  try {
    const context = useMasjid();
    Object.assign(masjidContext, context);
  } catch (error) {
    console.warn("MasjidContext not available", error);
  }
  const { currentMasjid } = masjidContext;

  // Menu items with their corresponding paths
  const menuItems = [
    { id: 'masjid', name: 'Masjid Details', icon: <Building className="w-5 h-5" />, path: '/masjid-admin/masjid-details' },
    { id: 'enrolled', name: 'Enrolled Students', icon: <Users className="w-5 h-5" />, path: '/masjid-admin/students' },
    { id: 'waiting', name: 'Waiting List', icon: <UserCheck className="w-5 h-5" />, path: '/masjid-admin/waiting' },
    { id: 'teachers', name: 'Teacher Profiles', icon: <UserPlus className="w-5 h-5" />, path: '/masjid-admin/teachers' },
    { id: 'classes', name: 'Classes', icon: <BookOpen className="w-5 h-5" />, path: '/masjid-admin/classes' },
    { id: 'attendance', name: 'Attendance', icon: <Calendar className="w-5 h-5" />, path: '/masjid-admin/attendance' },
    { id: 'progress', name: 'Student Progress', icon: <TrendingUp className="w-5 h-5" />, path: '/masjid-admin/progress' },
    { id: 'payment', name: 'Payment', icon: <Wallet className="w-5 h-5" />, path: '/masjid-admin/payment' },
    { id: 'settings', name: 'Settings', icon: <Settings className="w-5 h-5" />, path: '/masjid-admin/settings' }
  ];

  // Set the active tab based on the current URL path
  useEffect(() => {
    const currentPath = location.pathname;
    const matchedItem = menuItems.find(item => item.path === currentPath);
    if (matchedItem) {
      setActiveTab(matchedItem.id);
    } else if (currentPath === '/masjid-admin/dashboard') {
      setActiveTab('masjid');
    }
  }, [location.pathname]);

  const renderContent = () => {
    switch (activeTab) {
      case 'masjid': return <MasjidDetailsContent />;
      case 'enrolled': return <EnrolledStudents />;
      case 'waiting': return <WaitingListStudents />;
      case 'teachers': return <TeacherProfiles />;
      case 'classes': return <Classes />;
      case 'attendance': return <AdminAttendance />;
      case 'progress': return <StudentProgress />;
      case 'payment': return <Payment />;
      case 'settings': return <div className="text-center p-10">Masjid settings coming soon</div>;
      default: return <MasjidDetailsContent />;
    }
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    const selectedItem = menuItems.find(item => item.id === tabId);
    if (selectedItem) {
      navigate(selectedItem.path);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getMasjidName = () => {
    if (currentMasjid && currentMasjid.name) {
      return currentMasjid.name;
    }
    return user?.masjid || "Your Masjid";
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-black transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 bg-black">
          <span className="text-white text-xl font-semibold">Masjid Admin Dashboard</span>
        </div>
        <nav className="mt-5">
          {menuItems.map((item) => (
            <a
              key={item.id}
              className={`flex items-center mt-4 py-2 px-6 text-gray-300 hover:bg-green-800 hover:bg-opacity-25 hover:text-gray-100 ${
                activeTab === item.id ? 'bg-green-800 bg-opacity-25 text-gray-100' : ''
              } transition-all duration-300 ease-in-out cursor-pointer`}
              onClick={() => handleTabChange(item.id)}
            >
              {item.icon}
              <span className="mx-3">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex justify-between items-center py-4 px-6 bg-black text-white">
          <div className="flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none lg:hidden transition-transform duration-300 ease-in-out transform hover:scale-110">
              <Menu className="h-6 w-6" />
            </button>
            <span className="ml-4 text-lg font-medium">{getMasjidName()}</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-green-800 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8 animate-fade-in">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MasjidAdminDashboard;
```

# src\pages\masjid-admin\MasjidDetailsContent.js

```js
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useMasjid } from '../../contexts/MasjidContext';
import { Edit, Save, X, Upload, Mail, Phone, MapPin, Clock, Users, BookOpen, Building } from 'lucide-react';

const MasjidDetailsContent = () => {
  const { user } = useAuth();
  
  // Safely access masjid context
  const masjidContext = {};
  try {
    const context = useMasjid();
    Object.assign(masjidContext, context);
  } catch (error) {
    console.warn("MasjidContext not available", error);
  }
  const { currentMasjid, updateMasjid } = masjidContext;
  
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Demo Masjid',
    address: '123 Main Street, Springfield, IL 12345',
    phone: '(555) 123-4567',
    email: 'info@demomasjid.org',
    website: 'www.demomasjid.org',
    operatingHours: '5:00 AM - 10:00 PM',
    aboutUs: 'Our masjid is dedicated to serving the Muslim community through education, worship, and community service.',
    logo: null,
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would call updateMasjid and save to backend
    console.log('Saving masjid data:', formData);
    setEditing(false);
  };
  
  const stats = [
    { label: 'Students', value: 145, icon: <Users className="h-5 w-5 text-blue-500" /> },
    { label: 'Teachers', value: 12, icon: <Users className="h-5 w-5 text-green-500" /> },
    { label: 'Classes', value: 24, icon: <BookOpen className="h-5 w-5 text-purple-500" /> },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Masjid Details</h2>
        {!editing ? (
          <button 
            onClick={() => setEditing(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center transition-colors"
          >
            <Edit className="w-5 h-5 mr-2" />
            Edit Details
          </button>
        ) : (
          <div className="flex space-x-2">
            <button 
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md flex items-center transition-colors"
            >
              <Save className="w-5 h-5 mr-2" />
              Save
            </button>
            <button 
              onClick={() => setEditing(false)}
              className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md flex items-center transition-colors"
            >
              <X className="w-5 h-5 mr-2" />
              Cancel
            </button>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Masjid Info Card */}
        <div className="bg-white rounded-lg shadow-md md:col-span-2">
          {editing ? (
            <form className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Masjid Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Operating Hours</label>
                  <input
                    type="text"
                    name="operatingHours"
                    value={formData.operatingHours}
                    onChange={handleChange}
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">About Us</label>
                  <textarea
                    name="aboutUs"
                    value={formData.aboutUs}
                    onChange={handleChange}
                    rows="4"
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  ></textarea>
                </div>
              </div>
            </form>
          ) : (
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{formData.name}</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">{formData.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-700">{formData.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-700">{formData.email}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-700">{formData.operatingHours}</span>
                </div>
                <div className="pt-4 border-t mt-4">
                  <h4 className="text-md font-medium text-gray-800 mb-2">About Us</h4>
                  <p className="text-gray-700">{formData.aboutUs}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Logo Upload and Stats */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Masjid Logo</h3>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                {formData.logo ? (
                  <img src={formData.logo} alt="Masjid logo" className="w-full h-full object-cover" />
                ) : (
                  <Building className="h-16 w-16 text-gray-400" />
                )}
              </div>
              {editing && (
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center transition-colors">
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Logo
                </button>
              )}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Quick Stats</h3>
            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center p-3 border rounded-lg">
                  <div className="p-2 bg-gray-100 rounded-full mr-3">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <p className="text-lg font-semibold">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasjidDetailsContent;
```

# src\pages\masjid-admin\MasjidDetailsPage.js

```js
// src/pages/masjid-admin/MasjidDetailsPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMasjid } from '../../contexts/MasjidContext';
import { useAuth } from '../../contexts/AuthContext';
import { HexColorPicker } from 'react-colorful';
import { 
  Building2, 
  Save, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  User, 
  Upload,
  ArrowLeft,
  Plus,
  Trash2,
  Check
} from 'lucide-react';
import { Button } from '../../components/common/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/common/card';

const MasjidDetailsPage = () => {
  const navigate = useNavigate();
  const { currentMasjid, updateMasjid, addMasjidAdmin, removeMasjidAdmin } = useMasjid();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('details');
  const [successMessage, setSuccessMessage] = useState('');
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [showAdminForm, setShowAdminForm] = useState(false);
  
  // Form state for masjid details
  const [masjidForm, setMasjidForm] = useState({
    name: '',
    slug: '',
    contact: {
      email: '',
      phone: '',
      address: '',
      website: '',
    },
    theme: {
      primary: '#006400',
      secondary: '#4B0082',
      headerBg: 'from-green-950 to-green-900',
      sidebarBg: 'bg-green-950'
    },
    features: {
      attendance: true,
      payments: true,
      events: true,
      quranTracker: true
    },
    logo: null,
    logoPreview: null
  });
  
  // Initialize form with current masjid data
  useEffect(() => {
    if (currentMasjid) {
      setMasjidForm({
        name: currentMasjid.name || '',
        slug: currentMasjid.id || '',
        contact: {
          email: currentMasjid.contact?.email || '',
          phone: currentMasjid.contact?.phone || '',
          address: currentMasjid.contact?.address || '',
          website: currentMasjid.contact?.website || '',
        },
        theme: {
          primary: currentMasjid.theme?.primary || '#006400',
          secondary: currentMasjid.theme?.secondary || '#4B0082',
          headerBg: currentMasjid.theme?.headerBg || 'from-green-950 to-green-900',
          sidebarBg: currentMasjid.theme?.sidebarBg || 'bg-green-950'
        },
        features: {
          attendance: currentMasjid.features?.attendance !== false,
          payments: currentMasjid.features?.payments !== false,
          events: currentMasjid.features?.events !== false,
          quranTracker: currentMasjid.features?.quranTracker !== false
        },
        logo: null,
        logoPreview: currentMasjid.logo || null
      });
    }
  }, [currentMasjid]);
  
  // Handle general input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setMasjidForm({
        ...masjidForm,
        [parent]: {
          ...masjidForm[parent],
          [child]: value
        }
      });
    } else {
      setMasjidForm({
        ...masjidForm,
        [name]: value
      });
    }
  };
  
  // Handle feature toggles
  const handleFeatureToggle = (feature) => {
    setMasjidForm({
      ...masjidForm,
      features: {
        ...masjidForm.features,
        [feature]: !masjidForm.features[feature]
      }
    });
  };
  
  // Handle logo upload
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMasjidForm({
        ...masjidForm,
        logo: file,
        logoPreview: URL.createObjectURL(file)
      });
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    
    try {
      // Call the update masjid function from context
      await updateMasjid(currentMasjid.id, {
        name: masjidForm.name,
        contact: masjidForm.contact,
        theme: masjidForm.theme,
        features: masjidForm.features,
        logo: masjidForm.logoPreview // In a real app, you'd handle file uploads
      });
      
      // Show success message
      setSuccessMessage('Masjid details updated successfully!');
      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (error) {
      console.error("Error updating masjid:", error);
      alert("There was an error updating the masjid details. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Color change handlers
  const handlePrimaryColorChange = (color) => {
    setMasjidForm({
      ...masjidForm,
      theme: {
        ...masjidForm.theme,
        primary: color
      }
    });
  };
  
  const handleSecondaryColorChange = (color) => {
    setMasjidForm({
      ...masjidForm,
      theme: {
        ...masjidForm.theme,
        secondary: color
      }
    });
  };
  
  // Update theme based on primary color
  const updateThemeFromPrimaryColor = (color) => {
    // Extract color without the # symbol
    const hexColor = color.replace('#', '');
    
    // Determine theme based on color
    let headerBg, sidebarBg;
    
    if (color.toLowerCase().startsWith('#00')) {  // Green or Blue
      if (hexColor.substring(2, 4).toLowerCase() === '64') {  // Green
        headerBg = 'from-green-950 to-green-900';
        sidebarBg = 'bg-green-950';
      } else {  // Blue
        headerBg = 'from-blue-950 to-blue-900';
        sidebarBg = 'bg-blue-950';
      }
    } else if (color.toLowerCase().startsWith('#ff') || color.toLowerCase().startsWith('#8b00')) {  // Red
      headerBg = 'from-red-950 to-red-900';
      sidebarBg = 'bg-red-950';
    } else if (color.toLowerCase().startsWith('#4b00') || color.toLowerCase().startsWith('#80')) {  // Purple
      headerBg = 'from-purple-950 to-purple-900';
      sidebarBg = 'bg-purple-950';
    } else if (color.toLowerCase().startsWith('#8b4') || color.toLowerCase().startsWith('#a5')) {  // Brown
      headerBg = 'from-amber-950 to-amber-900';
      sidebarBg = 'bg-amber-950';
    } else {  // Default to neutral
      headerBg = 'from-gray-950 to-gray-900';
      sidebarBg = 'bg-gray-950';
    }
    
    setMasjidForm({
      ...masjidForm,
      theme: {
        ...masjidForm.theme,
        primary: color,
        headerBg,
        sidebarBg
      }
    });
  };
  
  // Handle adding a new administrator
  const handleAddAdmin = (e) => {
    e.preventDefault();
    
    if (!newAdminEmail) {
      alert('Please enter an email address');
      return;
    }
    
    // Create a new admin object
    const newAdmin = {
      email: newAdminEmail,
      name: 'Admin ' + newAdminEmail.split('@')[0], // Generate a name from the email
      role: 'masjid_admin',
      addedBy: user?.name || 'current admin',
      addedAt: new Date().toISOString()
    };
    
    // Call the context function to add a new admin
    addMasjidAdmin(currentMasjid.id, newAdmin);
    
    // Reset form
    setNewAdminEmail('');
    setShowAdminForm(false);
    
    // Show success message
    setSuccessMessage('Administrator added successfully!');
    setTimeout(() => setSuccessMessage(''), 5000);
  };
  
  // Handle removing an administrator
  const handleRemoveAdmin = (adminId) => {
    if (window.confirm('Are you sure you want to remove this administrator?')) {
      removeMasjidAdmin(currentMasjid.id, adminId);
      
      // Show success message
      setSuccessMessage('Administrator removed successfully!');
      setTimeout(() => setSuccessMessage(''), 5000);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-6">
          <Button 
            onClick={() => navigate('/masjid-admin/dashboard')}
            variant="ghost"
            className="mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </Button>
          <h1 className="text-2xl font-bold text-gray-800">Masjid Settings</h1>
        </div>
        
        {successMessage && (
          <div className="mb-6 bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded relative">
            <span className="font-medium">{successMessage}</span>
          </div>
        )}
        
        {/* Tabs */}
        <div className="flex border-b mb-6">
          <button
            onClick={() => setActiveTab('details')}
            className={`px-4 py-2 font-medium ${
              activeTab === 'details'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            Masjid Details
          </button>
          <button
            onClick={() => setActiveTab('appearance')}
            className={`px-4 py-2 font-medium ${
              activeTab === 'appearance'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            Appearance
          </button>
          <button
            onClick={() => setActiveTab('administrators')}
            className={`px-4 py-2 font-medium ${
              activeTab === 'administrators'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            Administrators
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`px-4 py-2 font-medium ${
              activeTab === 'features'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            Features
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* Masjid Details Tab */}
          {activeTab === 'details' && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building2 className="w-5 h-5 mr-2" />
                  Masjid Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Masjid Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={masjidForm.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Al-Falah Islamic Center"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">URL Slug (Read only)</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        masjid/
                      </span>
                      <input
                        type="text"
                        id="slug"
                        name="slug"
                        value={masjidForm.slug}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-r-md bg-gray-100 text-gray-700"
                        placeholder="al-falah"
                        disabled
                      />
                    </div>
                    <p className="mt-1 text-sm text-gray-500">URL: /masjid/{masjidForm.slug}</p>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="logo" className="block text-sm font-medium text-gray-700 mb-2">Masjid Logo</label>
                  <div className="flex items-center space-x-6">
                    <div className="w-24 h-24 border border-gray-300 rounded-md flex items-center justify-center overflow-hidden bg-gray-50">
                      {masjidForm.logoPreview ? (
                        <img src={masjidForm.logoPreview} alt="Logo preview" className="max-w-full max-h-full object-contain" />
                      ) : (
                        <div className="text-gray-400 text-center text-sm">
                          <Upload className="w-8 h-8 mx-auto mb-1" />
                          <span>No logo</span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <label className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                        <Upload className="w-5 h-5 mr-2 text-gray-600" />
                        <span>Upload Logo</span>
                        <input
                          type="file"
                          id="logo"
                          name="logo"
                          onChange={handleLogoChange}
                          accept="image/*"
                          className="sr-only"
                        />
                      </label>
                      <p className="mt-1 text-xs text-gray-500">PNG or JPG, 1:1 ratio recommended. Max 2MB.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact.email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="contact.email"
                          name="contact.email"
                          value={masjidForm.contact.email}
                          onChange={handleChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="info@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="contact.phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="contact.phone"
                          name="contact.phone"
                          value={masjidForm.contact.phone}
                          onChange={handleChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <label htmlFor="contact.address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="contact.address"
                        name="contact.address"
                        value={masjidForm.contact.address}
                        onChange={handleChange}
                        className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="123 Main St, City, State, Zip"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <label htmlFor="contact.website" className="block text-sm font-medium text-gray-700 mb-1">Website (Optional)</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Globe className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="url"
                        id="contact.website"
                        name="contact.website"
                        value={masjidForm.contact.website}
                        onChange={handleChange}
                        className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="https://www.example.com"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* Appearance Tab */}
          {activeTab === 'appearance' && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Theme & Appearance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                      <div className="flex space-x-4">
                        <HexColorPicker color={masjidForm.theme.primary} onChange={handlePrimaryColorChange} />
                        <div className="space-y-2">
                          <div 
                            className="w-16 h-16 rounded border"
                            style={{ backgroundColor: masjidForm.theme.primary }}
                          ></div>
                          <input
                            type="text"
                            value={masjidForm.theme.primary}
                            onChange={(e) => handlePrimaryColorChange(e.target.value)}
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                          />
                          <button
                            type="button"
                            onClick={() => updateThemeFromPrimaryColor(masjidForm.theme.primary)}
                            className="w-full text-xs px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                          >
                            Auto-set theme
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                      <div className="flex space-x-4">
                        <HexColorPicker color={masjidForm.theme.secondary} onChange={handleSecondaryColorChange} />
                        <div className="space-y-2">
                          <div 
                            className="w-16 h-16 rounded border"
                            style={{ backgroundColor: masjidForm.theme.secondary }}
                          ></div>
                          <input
                            type="text"
                            value={masjidForm.theme.secondary}
                            onChange={(e) => handleSecondaryColorChange(e.target.value)}
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-700">Preview</h3>
                    
                    <div className="border rounded-lg overflow-hidden shadow-sm">
                      {/* Header preview */}
                      <div className={`bg-gradient-to-r ${masjidForm.theme.headerBg} p-4`}>
                        <div className="flex items-center text-white">
                          {masjidForm.logoPreview ? (
                            <img src={masjidForm.logoPreview} alt="Logo" className="w-10 h-10 mr-3 rounded" />
                          ) : (
                            <div className="w-10 h-10 mr-3 rounded bg-white/10 flex items-center justify-center">
                              <span className="text-xs">Logo</span>
                            </div>
                          )}
                          <div>
                            <div className="font-semibold">{masjidForm.name || "Masjid Name"}</div>
                            <div className="text-xs text-gray-300">Education Portal</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Sidebar preview */}
                      <div className="flex">
                        <div className={`${masjidForm.theme.sidebarBg} w-1/3 p-3`}>
                          <div className="py-2 px-3 text-white text-xs rounded bg-white/10">Dashboard</div>
                          <div className="py-2 px-3 text-gray-300 text-xs">Students</div>
                          <div className="py-2 px-3 text-gray-300 text-xs">Classes</div>
                        </div>
                        
                        <div className="bg-gray-50 w-2/3 p-3">
                          <div className="h-32 flex items-center justify-center text-gray-400 text-sm">
                            Content Area
                          </div>
                        </div>
                      </div>
                      
                      {/* Button preview */}
                      <div className="p-4 bg-white border-t flex justify-end space-x-2">
                        <button
                          type="button"
                          className="px-3 py-1 rounded text-xs bg-gray-200 text-gray-800"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="px-3 py-1 rounded text-xs text-white"
                          style={{ backgroundColor: masjidForm.theme.primary }}
                        >
                          Primary Button
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* Administrators Tab */}
          {activeTab === 'administrators' && (
            <Card className="mb-6">
              <CardHeader>
                <div className="flex justify-between">
                  <CardTitle>Masjid Administrators</CardTitle>
                  <Button 
                    type="button"
                    onClick={() => setShowAdminForm(!showAdminForm)} 
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Add Administrator
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {showAdminForm && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-medium mb-4">Add New Administrator</h3>
                    <form onSubmit={handleAddAdmin} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Administrator Email
                        </label>
                        <input
                          type="email"
                          value={newAdminEmail}
                          onChange={(e) => setNewAdminEmail(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="administrator@example.com"
                          required
                        />
                        <p className="mt-1 text-xs text-gray-500">
                          An invitation will be sent to this email address.
                        </p>
                      </div>
                      <div className="flex justify-end space-x-3">
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setShowAdminForm(false)}
                        >
                          Cancel
                        </Button>
                        <Button 
                          type="submit" 
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add Admin
                        </Button>
                      </div>
                    </form>
                  </div>
                )}
                
                <div>
                  <h3 className="text-gray-600 font-medium mb-4">Current Administrators</h3>
                  {currentMasjid && currentMasjid.administrators && currentMasjid.administrators.length > 0 ? (
                    <div className="space-y-3">
                      {currentMasjid.administrators.map((admin, index) => (
                        <div 
                          key={index} 
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center">
                            <div className="bg-green-100 p-2 rounded-full mr-3">
                              <User className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-800">{admin.name}</div>
                              <div className="text-sm text-gray-500">{admin.email}</div>
                            </div>
                          </div>
                          <Button 
                            type="button" 
                            variant="ghost" 
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            onClick={() => handleRemoveAdmin(admin._id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-6 text-gray-500 bg-gray-50 rounded-lg">
                      <User className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p>No administrators have been added yet.</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* Features Tab */}
          {activeTab === 'features' && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Enabled Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    Enable or disable features for your masjid portal. Disabled features will be hidden from the interface.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { id: 'attendance', name: 'Attendance Tracking', description: 'Track and manage student attendance' },
                      { id: 'payments', name: 'Payment System', description: 'Process and manage payments and donations' },
                      { id: 'events', name: 'Events Calendar', description: 'Manage and display masjid events' },
                      { id: 'quranTracker', name: 'Quran Progress Tracker', description: 'Track student Quran memorization progress' }
                    ].map(feature => (
                      <div key={feature.id} className="flex items-start p-4 bg-gray-50 rounded-lg">
                        <button
                          type="button"
                          onClick={() => handleFeatureToggle(feature.id)}
                          className={`relative inline-flex items-center h-6 rounded-full w-11 mr-4 flex-shrink-0 ${
                            masjidForm.features[feature.id] ? 'bg-green-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`${
                              masjidForm.features[feature.id] ? 'translate-x-6' : 'translate-x-1'
                            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out`}
                          />
                        </button>
                        <div>
                          <div className="flex items-center">
                            <div className="font-medium text-gray-800">{feature.name}</div>
                            {masjidForm.features[feature.id] && (
                              <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full flex items-center">
                                <Check className="w-3 h-3 mr-1" />
                                Active
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* Save Button - always visible */}
          <div className="flex justify-end">
            <Button 
              type="submit" 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 flex items-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving Changes...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MasjidDetailsPage;
```

# src\pages\masjid\MasjidDashboard.js

```js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMasjid } from '../../contexts/MasjidContext';
import { useAuth } from '../../contexts/AuthContext';
import { BookOpen, Calendar, User, GraduationCap, Users, MessageCircle, ChevronRight, Phone, Mail, MapPin, Clock } from 'lucide-react';

const MasjidDashboard = () => {
  const { currentMasjid, masjidTheme, loading } = useMasjid();
  const { isAuthenticated, getCurrentUser } = useAuth();
  const navigate = useNavigate();
  const [prayerTimes, setPrayerTimes] = useState({});
  const user = getCurrentUser();

  // Automatically redirect to appropriate dashboard if already logged in
  useEffect(() => {
    if (isAuthenticated() && user) {
      switch (user.role) {
        case 'admin':
          navigate('admin-dashboard');
          break;
        case 'teacher':
          navigate('teacher-dashboard');
          break;
        case 'parent':
          navigate('parent-dashboard');
          break;
        default:
          break;
      }
    }
  }, [isAuthenticated, user, navigate]);

  useEffect(() => {
    // Mock prayer times - in a real app, this would come from an API or be part of masjid data
    setPrayerTimes({
      fajr: '5:30 AM',
      dhuhr: '12:45 PM',
      asr: '4:15 PM',
      maghrib: '6:30 PM',
      isha: '8:00 PM',
      jummah: '1:30 PM'
    });
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (!currentMasjid) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Masjid Not Found</h1>
          <p className="text-gray-600 mb-6">
            The masjid portal you're looking for doesn't exist or isn't available.
          </p>
          <Link 
            to="/"
            className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  // Apply dynamic theme using the masjid's theme colors
  const headerBgClass = masjidTheme.headerBg || 'from-green-950 to-black';
  const primaryColor = masjidTheme.primary || '#006400';
  const primaryButtonClass = 'bg-green-600 hover:bg-green-700';
  const secondaryButtonClass = 'bg-blue-600 hover:bg-blue-700';

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className={`bg-gradient-to-r ${headerBgClass} text-white`}>
        <div className="container mx-auto px-4 py-6 md:py-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold">{currentMasjid.name}</h1>
              <p className="mt-2 text-gray-300">Education Portal</p>
            </div>
            <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-3">
              <Link
                to="login"
                className={`px-4 py-2 rounded ${primaryButtonClass} text-white font-medium text-center`}
              >
                Sign In
              </Link>
              <a
                href="#contact"
                className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 text-white font-medium text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Prayer Times */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center flex-wrap gap-4 md:gap-8">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-sm font-semibold">Prayer Times:</span>
            </div>
            {Object.entries(prayerTimes).map(([prayer, time]) => (
              <div key={prayer} className="flex flex-col items-center">
                <span className="text-xs text-gray-500 capitalize">{prayer}</span>
                <span className="text-sm font-medium">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Islamic Education for All Ages</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Join our comprehensive education programs designed to nurture faith, 
                  knowledge, and character in children and adults alike.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#programs" 
                    className={`px-6 py-3 rounded ${primaryButtonClass} text-white font-medium text-center`}
                  >
                    Explore Programs
                  </a>
                  <a 
                    href="#register" 
                    className="px-6 py-3 rounded bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium text-center"
                  >
                    Register Now
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-lg h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-24 h-24 text-gray-400" />
                  {/* In a real implementation, this would be an image related to the masjid */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portal Overview */}
        <section className="py-12 bg-gray-50" id="programs">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Education Portal Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quran Learning</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive Quran memorization and tajweed programs for students of all ages.
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
                <p className="text-gray-600 mb-4">
                  Real-time progress monitoring, attendance tracking, and performance reports.
                </p>
                <a href="#" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Communication</h3>
                <p className="text-gray-600 mb-4">
                  Direct communication between parents, teachers, and administrators.
                </p>
                <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Classes Overview */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Classes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-blue-100 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-blue-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Quran Memorization</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Comprehensive hifz program with qualified instructors.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    <span>Ages 7-15</span>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-green-100 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-green-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Tajweed Rules</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Master the rules of Quranic recitation and pronunciation.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    <span>All ages</span>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-yellow-100 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-yellow-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Arabic Language</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Learn to read, write and speak Arabic from beginner to advanced.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    <span>Ages 8+</span>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-purple-100 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-purple-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Islamic Studies</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Learn about Islamic history, fiqh, and character development.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    <span>All ages</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="#register" 
                className={`inline-block px-6 py-3 rounded ${primaryButtonClass} text-white font-medium`}
              >
                Register for Classes
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={`py-16 bg-gradient-to-r ${headerBgClass} text-white`} id="register">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Education Programs Today</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Register now to access our comprehensive Islamic education portal and give your family the gift of knowledge.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="login"
                className="px-6 py-3 bg-white text-gray-900 rounded hover:bg-gray-100 font-medium"
              >
                Sign In
              </Link>
              <a 
                href="#contact"
                className="px-6 py-3 bg-transparent border border-white text-white rounded hover:bg-white/10 font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-white" id="contact">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <p className="text-gray-600 mb-6">
                  We're here to answer any questions you may have about our education programs.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-gray-600">{currentMasjid.contact?.address || '123 Main St, City, State'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600">{currentMasjid.contact?.phone || '+1-555-123-4567'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">{currentMasjid.contact?.email || 'info@masjid.org'}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className={`w-full px-4 py-2 ${primaryButtonClass} text-white rounded font-medium`}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{currentMasjid.name}</h3>
              <p className="text-gray-400">
                Providing quality Islamic education for our community since 2005.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
                <li><a href="#register" className="hover:text-white transition-colors">Register</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Quran Memorization</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tajweed</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Arabic Language</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Islamic Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center">
                    <span className="w-5 h-5 mr-2 bg-gray-700 rounded-full flex items-center justify-center">f</span>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center">
                    <span className="w-5 h-5 mr-2 bg-gray-700 rounded-full flex items-center justify-center">t</span>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center">
                    <span className="w-5 h-5 mr-2 bg-gray-700 rounded-full flex items-center justify-center">i</span>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center">
                    <span className="w-5 h-5 mr-2 bg-gray-700 rounded-full flex items-center justify-center">y</span>
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} {currentMasjid.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MasjidDashboard;
```

# src\pages\masjid\MasjidLogin.js

```js
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useMasjid } from '../../contexts/MasjidContext';
import { useAuth } from '../../contexts/AuthContext';
import { GraduationCap, User, Lock, ArrowLeft } from 'lucide-react';

const MasjidLogin = () => {
  const navigate = useNavigate();
  const { currentMasjid, masjidTheme, loading } = useMasjid();
  const { login, isAuthenticated } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('admin');
  const [error, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user.role === 'admin') {
        navigate('../admin-dashboard');
      } else if (user.role === 'teacher') {
        navigate('../teacher-dashboard');
      } else if (user.role === 'parent') {
        navigate('../parent-dashboard');
      }
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoggingIn(true);

    try {
      const user = await login(email, password, loginType);
      if (user.role === 'admin') {
        navigate('../admin-dashboard');
      } else if (user.role === 'teacher') {
        navigate('../teacher-dashboard');
      } else if (user.role === 'parent') {
        navigate('../parent-dashboard');
      }
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (!currentMasjid) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Masjid Not Found</h1>
          <p className="text-gray-600 mb-6">
            The masjid portal you're looking for doesn't exist or isn't available.
          </p>
          <Link 
            to="/"
            className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  // Get theme colors from the masjid context
  const headerBgClass = masjidTheme.headerBg || 'from-green-950 to-black';
  const primaryButtonClass = 'bg-green-600 hover:bg-green-700';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
      {/* Header */}
      <header className={`bg-gradient-to-r ${headerBgClass} text-white`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to=".." className="flex items-center text-white hover:text-gray-200 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span>Back to {currentMasjid.name}</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <GraduationCap className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{currentMasjid.name}</h1>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden animate-fade-in delay-200">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Login</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md border border-red-200">
                    {error}
                  </div>
                )}
                
                <div className="mb-4 flex justify-center space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="loginType"
                      value="admin"
                      checked={loginType === 'admin'}
                      onChange={() => setLoginType('admin')}
                    />
                    <span className="ml-2 text-sm">Admin</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="loginType"
                      value="teacher"
                      checked={loginType === 'teacher'}
                      onChange={() => setLoginType('teacher')}
                    />
                    <span className="ml-2 text-sm">Teacher</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="loginType"
                      value="parent"
                      checked={loginType === 'parent'}
                      onChange={() => setLoginType('parent')}
                    />
                    <span className="ml-2 text-sm">Parent</span>
                  </label>
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                      placeholder={
                        loginType === 'admin' ? 'admin@taleem.com' : 
                        loginType === 'teacher' ? 'teacher@demo.com' : 
                        'parent@demo.com'
                      }
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="text-green-600 hover:text-green-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className={`w-full ${primaryButtonClass} text-white py-3 rounded-md font-medium transition-colors ${isLoggingIn ? 'opacity-75 cursor-not-allowed' : ''}`}
                    disabled={isLoggingIn}
                  >
                    {isLoggingIn ? 'Signing in...' : 'Sign In'}
                  </button>
                </div>

                <div className="mt-4 text-center">
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Demo Credentials:</div>
                    <div className="font-medium">Admin: admin@taleem.com / admin123</div>
                    <div className="font-medium">Teacher: teacher@demo.com / teacher123</div>
                    <div className="font-medium">Parent: parent@demo.com / parent123</div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          <div className="text-center mt-6 text-sm text-gray-600">
            <p>
              Don't have an account?{' '}
              <a href="#" className="text-green-600 hover:text-green-500 font-medium">
                Contact the masjid administration
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} {currentMasjid.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MasjidLogin;
```

# src\pages\PackageContactPage.js

```js
// src/pages/PackageContactPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/common/card';
import { Button } from '../components/common/button';
import { ArrowLeft, Send } from 'lucide-react';

const PackageContactPage = () => {
  const { packageId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const packageDetails = {
    basic: {
      name: 'Basic Package',
      price: '£99',
      color: 'green'
    },
    professional: {
      name: 'Professional Package',
      price: '£150',
      color: 'green'
    },
    enterprise: {
      name: 'Enterprise Package',
      price: 'Custom',
      color: 'green'
    }
  };

  useEffect(() => {
    // Initialize animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!packageDetails[packageId]) {
      navigate('/packages');
    }
  }, [packageId, navigate]);

  const currentPackage = packageDetails[packageId];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        navigate('/packages');
      }, 2000);
    }, 1500);
  };

  if (!currentPackage) return null;

  return (
    <div className="bg-gradient-to-r from-green-950 to-black min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={() => navigate('/packages')}
          className="flex items-center text-white mb-6 hover:text-green-400 transition-colors animate-fade-in"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Packages
        </button>

        <div className="animate-on-scroll opacity-0">
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                {currentPackage.name}
                <div className="text-lg font-normal text-gray-600 mt-1">
                  {currentPackage.price} per month
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="animate-on-scroll opacity-0" style={{ animationDelay: '100ms' }}>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="animate-on-scroll opacity-0" style={{ animationDelay: '300ms' }}>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="animate-on-scroll opacity-0" style={{ animationDelay: '400ms' }}>
                    <label htmlFor="institution" className="block text-sm font-medium mb-2 text-gray-700">
                      Institution Name
                    </label>
                    <input
                      id="institution"
                      name="institution"
                      type="text"
                      required
                      className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                      value={formData.institution}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="animate-on-scroll opacity-0" style={{ animationDelay: '500ms' }}>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {status === 'success' && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-md animate-fade-in">
                    Thank you for your interest! We'll be in touch shortly.
                  </div>
                )}

                <div className="animate-on-scroll opacity-0" style={{ animationDelay: '600ms' }}>
                  <Button
                    type="submit"
                    disabled={status !== ''}
                    className="w-full bg-green-700 hover:bg-green-800 text-white flex items-center justify-center gap-2 hover-lift"
                  >
                    {status === 'sending' ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Inquiry
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PackageContactPage;
```

# src\pages\Packages.js

```js
// src/pages/PackagesPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Star, Shield, Clock, Users } from 'lucide-react';
import { Button } from '../components/common/button';

const PackagesPage = () => {
  const navigate = useNavigate();
  
  const packages = [
    {
      id: 'basic',
      name: "Basic",
      price: "£99",
      period: "per month",
      description: "Perfect for small institutions just getting started",
      features: [
        "Up to 250 students",
        "Basic attendance tracking",
        "Simple grade book",
        "Email support",
        "Basic reporting",
        "Parent portal access",
        "Standard updates"
      ],
      highlighted: false
    },
    {
      id: 'professional',
      name: "Professional",
      price: "£150",
      period: "per month",
      description: "Ideal for growing institutions with advanced needs",
      features: [
        "Up to 500 students",
        "Advanced attendance system",
        "Complete grade management",
        "Priority email & phone support",
        "Advanced reporting & analytics",
        "Parent portal access",
        "Custom branding",
        "API access",
        "Priority updates"
      ],
      highlighted: true
    },
    {
      id: 'enterprise',
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "Tailored solutions for large institutions",
      features: [
        "Unlimited students",
        "Full feature access",
        "24/7 premium support",
        "Custom integrations",
        "Dedicated account manager",
        "On-premise deployment option",
        "Custom development",
        "SLA guarantee",
        "Custom reporting"
      ],
      highlighted: false
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-green-700" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee"
    },
    {
      icon: <Clock className="w-6 h-6 text-green-700" />,
      title: "Quick Setup",
      description: "Get started in minutes with our guided setup process"
    },
    {
      icon: <Users className="w-6 h-6 text-green-700" />,
      title: "Dedicated Support",
      description: "Expert support team available to help you succeed"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-950 to-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6 animate-fade-in">Flexible Pricing Plans</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto animate-fade-in delay-200">
            Choose the perfect plan for your institution. All plans include our core features with different scales of functionality.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl animate-fade-in delay-${(index + 1) * 100} ${
                  pkg.highlighted 
                    ? 'border-2 border-green-500 shadow-lg' 
                    : 'border border-gray-200'
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-lg">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  </div>
                )}
                <div className={`p-6 ${pkg.highlighted ? 'bg-green-50' : 'bg-white'}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4 min-h-[4rem]">{pkg.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600">/{pkg.period}</span>
                  </div>
                  <Button 
                    onClick={() => navigate(`/package-contact/${pkg.id}`)}
                    className={`w-full hover-lift ${
                      pkg.highlighted 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'bg-gray-800 hover:bg-gray-900'
                    } text-white`}
                  >
                    {pkg.id === 'enterprise' ? 'Contact Us' : 'Get Started'}
                  </Button>
                </div>
                <div className="p-6 bg-white border-t border-gray-100">
                  <p className="text-sm text-gray-600 mb-4">Features include:</p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-fade-in">Why Choose Our Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in delay-${(index + 1) * 100}`}
              >
                <div className="p-2 bg-green-50 rounded-lg w-fit mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-950 to-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">Need a Custom Solution?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in delay-200">
            Contact our team for a tailored package that meets your specific requirements.
          </p>
          <Button 
            onClick={() => navigate('/package-contact/enterprise')}
            className="bg-green-700 hover:bg-green-800 text-white animate-fade-in delay-300 hover-lift"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;
```

# src\pages\ParentDashboard.js

```js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Menu, Users, Book, Calendar, FileText, TrendingUp, MessageCircle, LogOut } from 'lucide-react';
import ParentAttendance from '../components/parentDashboard/ParentAttendance';
import ParentProgress from '../components/parentDashboard/ParentProgress';
import ParentExams from '../components/parentDashboard/ParentExams';
import ParentCommunication from '../components/parentDashboard/ParentCommunication';

const ParentDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('attendance');
  const [selectedChild, setSelectedChild] = useState(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Mock children data - in a real app this would come from an API
  const [children, setChildren] = useState([]);

  useEffect(() => {
    // Fetch children data - replace with actual API call
    const mockChildren = [
      { id: 1, name: 'Amina Hassan', grade: 'Grade 3', classes: ['Quran Hifz - Beginner', 'Arabic - Basic'] },
      { id: 2, name: 'Ibrahim Hassan', grade: 'Grade 5', classes: ['Tajweed - Intermediate', 'Islamic Studies'] },
    ];
    setChildren(mockChildren);
    
    // Set first child as default selected
    if (mockChildren.length > 0 && !selectedChild) {
      setSelectedChild(mockChildren[0]);
    }
  }, []);

  const menuItems = [
    { id: 'attendance', name: 'Attendance', icon: <Calendar className="w-5 h-5" /> },
    { id: 'progress', name: 'Progress', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'exams', name: 'Exam Results', icon: <FileText className="w-5 h-5" /> },
    { id: 'communication', name: 'Communication', icon: <MessageCircle className="w-5 h-5" /> },
  ];

  const renderContent = () => {
    if (!selectedChild) return <div className="text-center p-8">Please select a child</div>;
    
    switch (activeTab) {
      case 'attendance': return <ParentAttendance child={selectedChild} />;
      case 'progress': return <ParentProgress child={selectedChild} />;
      case 'exams': return <ParentExams child={selectedChild} />;
      case 'communication': return <ParentCommunication child={selectedChild} />;
      default: return <ParentAttendance child={selectedChild} />;
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-black transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 bg-black">
          <span className="text-white text-xl font-semibold">Masjid Parent Portal</span>
        </div>
        
        {/* Children Selection */}
        <div className="p-4 border-b border-gray-700">
          <label className="block text-sm font-medium text-gray-300 mb-2">Select Child</label>
          <select
            className="w-full bg-gray-800 text-white border border-gray-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={selectedChild?.id || ''}
            onChange={(e) => {
              const childId = parseInt(e.target.value);
              const child = children.find(c => c.id === childId);
              setSelectedChild(child);
            }}
          >
            <option value="">Select...</option>
            {children.map(child => (
              <option key={child.id} value={child.id}>{child.name}</option>
            ))}
          </select>
          
          {selectedChild && (
            <div className="mt-3 p-3 bg-green-800 bg-opacity-25 rounded">
              <h4 className="text-green-400 font-semibold">{selectedChild.name}</h4>
              <p className="text-xs text-gray-400">{selectedChild.grade}</p>
              <div className="mt-1 text-xs text-gray-400">
                {selectedChild.classes.join(', ')}
              </div>
            </div>
          )}
        </div>
        
        <nav className="mt-5">
          {menuItems.map((item) => (
            <a
              key={item.id}
              className={`flex items-center mt-4 py-2 px-6 text-gray-300 hover:bg-green-800 hover:bg-opacity-25 hover:text-gray-100 ${
                activeTab === item.id ? 'bg-green-800 bg-opacity-25 text-gray-100' : ''
              } transition-all duration-300 ease-in-out`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.icon}
              <span className="mx-3">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex justify-between items-center py-4 px-6 bg-black text-white">
          <div className="flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none lg:hidden transition-transform duration-300 ease-in-out transform hover:scale-110">
              <Menu className="h-6 w-6" />
            </button>
            <div className="ml-4 hidden md:block">
              <span className="text-gray-300">Masjid Education Program</span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-4 text-sm text-gray-300">Welcome, {user?.name || 'Parent'}</span>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-green-800 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8 animate-fade-in">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ParentDashboard;
```

# src\pages\Services.js

```js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  UserRound, 
  BookOpen, 
  Users2, 
  ClipboardList, 
  Calendar, 
  Shield, 
  BarChart2 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/common/card';
import { Button } from '../components/common/button';

const ServicesPage = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/packages');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const services = [
    {
      icon: <UserRound className="w-6 h-6 text-green-700" />,
      title: "Student Management",
      description: "Comprehensive student information system including enrollment, attendance, and performance tracking.",
      features: ["Digital student profiles", "Attendance tracking", "Grade management", "Behavior monitoring"]
    },
    {
      icon: <BookOpen className="w-6 h-6 text-green-700" />,
      title: "Academic Management",
      description: "Course planning, curriculum management, and assessment tools for educators.",
      features: ["Curriculum planning", "Assignment management", "Online assessments", "Resource library"]
    },
    {
      icon: <Users2 className="w-6 h-6 text-green-700" />,
      title: "Parent Portal",
      description: "Direct communication channel between parents and teachers with real-time updates.",
      features: ["Progress tracking", "Direct messaging", "Event calendar", "Payment management"]
    }
  ];

  const additionalFeatures = [
    {
      icon: <ClipboardList className="w-5 h-5 text-green-700" />,
      title: "Attendance System",
      description: "Automated attendance tracking with detailed reports."
    },
    {
      icon: <Calendar className="w-5 h-5 text-green-700" />,
      title: "Scheduling",
      description: "Efficient timetable management system."
    },
    {
      icon: <Shield className="w-5 h-5 text-green-700" />,
      title: "Security",
      description: "Advanced data protection protocols."
    },
    {
      icon: <BarChart2 className="w-5 h-5 text-green-700" />,
      title: "Analytics",
      description: "Comprehensive reporting and insights."
    }
  ];

  return (
    <div>
    {/* Hero Section */}
<div className="bg-gradient-to-r from-green-950 to-black text-white py-16">
  <div className="max-w-6xl mx-auto px-4">
    <h1 className="text-4xl font-bold text-center mb-6 animate-fade-in">Our Services</h1>
    <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto animate-fade-in delay-200">
      Comprehensive educational management solutions designed to transform your institution
    </p>
  </div>
</div>

{/* Main Services Section */}
<div className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <Card 
          key={index} 
          className={`hover-lift transition-all duration-300 animate-fade-in delay-${(index + 1) * 100}`}
        >
          <CardHeader>
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-green-50 rounded-lg">
                {service.icon}
              </div>
              <CardTitle>{service.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</div>

{/* Additional Features Section */}
<div className="bg-gray-50 py-16">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
      Additional Features
    </h2>
    <div className="grid md:grid-cols-4 gap-6">
      {additionalFeatures.map((feature, index) => (
        <div 
          key={index} 
          className={`bg-white p-6 rounded-lg shadow-md hover-lift transition-all duration-300 animate-fade-in delay-${(index + 1) * 100}`}
        >
          <div className="p-2 bg-green-50 rounded-lg w-fit mb-4">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>

{/* CTA Section */}
<div className="bg-gradient-to-r from-green-950 to-black text-white py-16">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-6 animate-fade-in">Ready to Transform Your Institution?</h2>
    <p className="text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in delay-200">
      Join thousands of educational institutions that trust Taleem for their management needs.
    </p>
    <Button 
      onClick={handleNavigation}
      className="bg-green-700 hover:bg-green-800 text-white animate-fade-in delay-300 hover-lift"
    >
      Get Started Today
    </Button>
  </div>
</div>
    </div>
  );
};

export default ServicesPage;
```

# src\pages\SignUpPage.js

```js
// src/pages/SignupPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { Button } from './components/common/Button';
import { Input } from './components/common/Input';
import { Card, CardContent, CardHeader, CardTitle } from './components/common/Card';
import { useAuth } from '../contexts/AuthContext';

const SignupPage = () => {
  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'parent' // Default role
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();

  const validateForm = () => {
    const newErrors = {};
    
    if (!signupForm.name) newErrors.name = 'Name is required';
    
    if (!signupForm.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(signupForm.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!signupForm.password) {
      newErrors.password = 'Password is required';
    } else if (signupForm.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (signupForm.password !== signupForm.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (validateForm()) {
      try {
        await register(signupForm);
        navigate('/login');
      } catch (error) {
        setErrors({ submit: error.message });
      }
      
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[85vh] px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <GraduationCap className="h-12 w-12 text-purple-600" />
          </div>
          <CardTitle className="text-center">Create Account</CardTitle>
          <p className="text-gray-600 text-center">
            Join us to start managing your school experience
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSignup}>
            <div className="space-y-4">
              {errors.submit && (
                <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded">
                  {errors.submit}
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={signupForm.name}
                  onChange={handleInputChange}
                  error={errors.name}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={signupForm.email}
                  onChange={handleInputChange}
                  error={errors.email}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  value={signupForm.password}
                  onChange={handleInputChange}
                  error={errors.password}
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={signupForm.confirmPassword}
                  onChange={handleInputChange}
                  error={errors.confirmPassword}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full py-3"
                disabled={loading}
              >
                {loading ? 'Signing Up...' : 'Sign Up'}
              </Button>
            </div>
          </form>
          
          <div className="text-center">
            <p className="text-gray-600">Already have an account?</p>
            <Link 
              to="/login" 
              className="text-purple-600 hover:text-purple-700 font-medium mt-1"
            >
              Login to your account
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;
```

# src\pages\super-admin\DashboardContent.js

```js
import React from 'react';
import { PieChart, Building, Users } from 'lucide-react';

const DashboardContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Total Masjids</h3>
          <Building className="h-8 w-8 text-green-600" />
        </div>
        <p className="text-3xl font-bold text-gray-900">12</p>
        <p className="text-sm text-gray-500 mt-2">2 new masjids this month</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Total Users</h3>
          <Users className="h-8 w-8 text-blue-600" />
        </div>
        <p className="text-3xl font-bold text-gray-900">358</p>
        <p className="text-sm text-gray-500 mt-2">+24 users this week</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Active Students</h3>
          <PieChart className="h-8 w-8 text-purple-600" />
        </div>
        <p className="text-3xl font-bold text-gray-900">245</p>
        <p className="text-sm text-gray-500 mt-2">90% attendance rate</p>
      </div>
      
      <div className="md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">System Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500">Teachers</p>
            <p className="text-xl font-bold">42</p>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500">Classes</p>
            <p className="text-xl font-bold">68</p>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500">Admin Users</p>
            <p className="text-xl font-bold">24</p>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500">Average Class Size</p>
            <p className="text-xl font-bold">16</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
```

# src\pages\super-admin\ManageMasjidsContent.js

```js
import React, { useState } from 'react';
import { Plus, Search, Edit, Trash, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManageMasjidsContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Demo data
  const masjids = [
    { id: 1, name: 'Masjid Al-Noor', location: 'New York, NY', students: 45, teachers: 5, admins: 2, status: 'active' },
    { id: 2, name: 'Islamic Center of Springfield', location: 'Springfield, IL', students: 32, teachers: 3, admins: 1, status: 'active' },
    { id: 3, name: 'Masjid Al-Taqwa', location: 'Chicago, IL', students: 78, teachers: 8, admins: 3, status: 'active' },
    { id: 4, name: 'Masjid Al-Huda', location: 'Dallas, TX', students: 56, teachers: 6, admins: 2, status: 'active' },
    { id: 5, name: 'Masjid Al-Iman', location: 'Miami, FL', students: 42, teachers: 4, admins: 2, status: 'inactive' },
  ];
  
  const filteredMasjids = masjids.filter(masjid => 
    masjid.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    masjid.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Manage Masjids</h2>
        <Link to="/admin-dashboard/masjids/create" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md flex items-center transition-colors">
          <Plus className="w-5 h-5 mr-2" />
          Add New Masjid
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500"
              placeholder="Search masjids..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teachers</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Admins</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredMasjids.map((masjid) => (
                <tr key={masjid.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{masjid.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{masjid.location}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{masjid.students}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{masjid.teachers}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{masjid.admins}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      masjid.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {masjid.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="text-blue-600 hover:text-blue-900" title="View">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="text-indigo-600 hover:text-indigo-900" title="Edit">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-900" title="Delete">
                        <Trash className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageMasjidsContent;
```

# src\pages\super-admin\ManageMasjidsPage.js

```js
// src/pages/super-admin/ManageMasjidsPage.js
import React, { useState, useEffect } from 'react';
import { 
  PlusCircle, 
  Edit, 
  Trash2, 
  Users 
} from 'lucide-react';
import { Button } from '../../components/common/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/common/card';
import { useMasjid } from '../../contexts/MasjidContext';
import { useAuth } from '../../contexts/AuthContext';

const ManageMasjidsPage = () => {
  const { user } = useAuth();
  
  // Safely access the masjid context
  const masjidContext = useMasjid() || {};
  const { 
    masjids = {}, // Provide default empty object
    getAllMasjids = async () => console.warn("getAllMasjids not available"), 
    addMasjid = async () => console.warn("addMasjid not available"), 
    updateMasjid = async () => console.warn("updateMasjid not available"), 
    deleteMasjid = async () => console.warn("deleteMasjid not available")
  } = masjidContext;

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedMasjid, setSelectedMasjid] = useState(null);

  // Form state for create/edit
  const [masjidForm, setMasjidForm] = useState({
    id: '',
    name: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: ''
    },
    contact: {
      email: '',
      phone: ''
    }
  });

  // Fetch masjids on component mount
  useEffect(() => {
    const fetchMasjids = async () => {
      try {
        await getAllMasjids();
      } catch (error) {
        console.error('Failed to fetch masjids', error);
      }
    };

    fetchMasjids();
  }, [getAllMasjids]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Handle nested object inputs
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setMasjidForm(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setMasjidForm(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Open create modal
  const openCreateModal = () => {
    // Reset form
    setMasjidForm({
      id: `masjid-${Date.now()}`, // Generate unique ID
      name: '',
      address: {
        street: '',
        city: '',
        state: '',
        zipCode: ''
      },
      contact: {
        email: '',
        phone: ''
      }
    });
    setIsCreateModalOpen(true);
  };

  // Handle masjid creation
  const handleCreateMasjid = async (e) => {
    e.preventDefault();
    try {
      await addMasjid({
        ...masjidForm,
        createdBy: user ? user.id : null
      });
      setIsCreateModalOpen(false);
    } catch (error) {
      console.error('Failed to create masjid', error);
    }
  };

  // Open edit modal
  const openEditModal = (masjid) => {
    setSelectedMasjid(masjid);
    setMasjidForm({
      ...masjid,
      address: masjid.address || {},
      contact: masjid.contact || {}
    });
    setIsEditModalOpen(true);
  };

  // Handle masjid update
  const handleUpdateMasjid = async (e) => {
    e.preventDefault();
    try {
      await updateMasjid(selectedMasjid.id, masjidForm);
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Failed to update masjid', error);
    }
  };

  // Handle masjid deletion
  const handleDeleteMasjid = async (masjidId) => {
    if (window.confirm('Are you sure you want to delete this masjid?')) {
      try {
        await deleteMasjid(masjidId);
      } catch (error) {
        console.error('Failed to delete masjid', error);
      }
    }
  };

  // Safely handle masjids data
  const masjidsList = masjids ? Object.values(masjids) : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Masjids</h1>
        <Button 
          onClick={openCreateModal}
          className="bg-green-700 hover:bg-green-800 text-white"
        >
          <PlusCircle className="mr-2" /> Add New Masjid
        </Button>
      </div>

      {/* Masjids Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {masjidsList.length > 0 ? (
          masjidsList.map((masjid) => (
            <Card 
              key={masjid.id} 
              className="hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{masjid.name}</CardTitle>
                  <div className="flex space-x-2">
                    <Button 
                      variant="ghost"
                      size="icon"
                      onClick={() => openEditModal(masjid)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteMasjid(masjid.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  {masjid.address?.street}, {masjid.address?.city}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="mr-2 h-4 w-4" />
                  Administrators: {masjid.administrators?.length || 0}
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-3 text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No masjids found. Click 'Add New Masjid' to create one.</p>
          </div>
        )}
      </div>

      {/* Create Masjid Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Create New Masjid</h2>
            <form onSubmit={handleCreateMasjid}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Masjid Name</label>
                <input
                  type="text"
                  name="name"
                  value={masjidForm.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Street Address</label>
                <input
                  type="text"
                  name="address.street"
                  value={masjidForm.address.street}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    name="address.city"
                    value={masjidForm.address.city}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">State</label>
                  <input
                    type="text"
                    name="address.state"
                    value={masjidForm.address.state}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Contact Email</label>
                <input
                  type="email"
                  name="contact.email"
                  value={masjidForm.contact.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Contact Phone</label>
                <input
                  type="tel"
                  name="contact.phone"
                  value={masjidForm.contact.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <Button 
                  type="button"
                  variant="outline"
                  onClick={() => setIsCreateModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white"
                >
                  Create Masjid
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Masjid Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Edit Masjid</h2>
            <form onSubmit={handleUpdateMasjid}>
              {/* Similar fields to create modal, but pre-filled with existing data */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Masjid Name</label>
                <input
                  type="text"
                  name="name"
                  value={masjidForm.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                />
              </div>
              {/* Rest of the form fields similar to create modal */}
              <div className="flex justify-end space-x-4">
                <Button 
                  type="button"
                  variant="outline"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white"
                >
                  Update Masjid
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageMasjidsPage;
```

# src\pages\super-admin\SuperAdminDashboard.js

```js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Menu, X, Building, Users, Settings, LogOut, PieChart } from 'lucide-react';

// Import placeholders for required content components
const DashboardContent = () => (
  <div>
    <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Total Masjids</h3>
          <Building className="h-8 w-8 text-green-600" />
        </div>
        <p className="text-3xl font-bold text-gray-900">12</p>
        <p className="text-sm text-gray-500 mt-2">2 new masjids this month</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Total Users</h3>
          <Users className="h-8 w-8 text-blue-600" />
        </div>
        <p className="text-3xl font-bold text-gray-900">358</p>
        <p className="text-sm text-gray-500 mt-2">+24 users this week</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Active Students</h3>
          <PieChart className="h-8 w-8 text-purple-600" />
        </div>
        <p className="text-3xl font-bold text-gray-900">245</p>
        <p className="text-sm text-gray-500 mt-2">90% attendance rate</p>
      </div>
    </div>
  </div>
);

const ManageMasjidsContent = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-6">Manage Masjids</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Al-Falah Masjid</h3>
          <Building className="h-6 w-6 text-green-600" />
        </div>
        <p className="text-sm text-gray-500">123 Main St, City</p>
        <p className="text-sm font-medium mt-2">Active Students: 86</p>
        <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm">
          Manage
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Al-Noor Center</h3>
          <Building className="h-6 w-6 text-green-600" />
        </div>
        <p className="text-sm text-gray-500">456 Oak St, Town</p>
        <p className="text-sm font-medium mt-2">Active Students: 64</p>
        <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm">
          Manage
        </button>
      </div>
      <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center">
        <Building className="h-10 w-10 text-gray-400 mb-2" />
        <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors text-sm">
          Add New Masjid
        </button>
      </div>
    </div>
  </div>
);

const UserManagementContent = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-6">User Management</h2>
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Masjid</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm font-medium text-gray-900">Ahmed Khan</div>
              <div className="text-sm text-gray-500">ahmed@example.com</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Al-Falah Masjid</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
              <button className="text-red-600 hover:text-red-900">Disable</button>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm font-medium text-gray-900">Sara Patel</div>
              <div className="text-sm text-gray-500">sara@example.com</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Teacher</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Al-Noor Center</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
              <button className="text-red-600 hover:text-red-900">Disable</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const SettingsContent = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-6">System Settings</h2>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">General Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">System Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" defaultValue="Taleem Management System" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded-md" defaultValue="support@taleem.org" />
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Email Notifications</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input type="checkbox" id="new-user" className="mr-2" defaultChecked />
            <label htmlFor="new-user" className="text-sm text-gray-700">New user registrations</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="payment-received" className="mr-2" defaultChecked />
            <label htmlFor="payment-received" className="text-sm text-gray-700">Payment received</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="new-masjid" className="mr-2" defaultChecked />
            <label htmlFor="new-masjid" className="text-sm text-gray-700">New masjid registration</label>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  </div>
);

const SuperAdminDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();
  const { logout } = useAuth();

  // Menu items
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: <PieChart className="w-5 h-5" /> },
    { id: 'masjids', name: 'Manage Masjids', icon: <Building className="w-5 h-5" /> },
    { id: 'users', name: 'User Management', icon: <Users className="w-5 h-5" /> },
    { id: 'settings', name: 'System Settings', icon: <Settings className="w-5 h-5" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardContent />;
      case 'masjids': return <ManageMasjidsContent />;
      case 'users': return <UserManagementContent />;
      case 'settings': return <SettingsContent />;
      default: return <DashboardContent />;
    }
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setIsMenuOpen(false); // Close mobile menu when a tab is selected
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-black transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 bg-black">
          <span className="text-white text-xl font-semibold">Super Admin Dashboard</span>
        </div>
        <nav className="mt-5">
          {menuItems.map((item) => (
            <a
              key={item.id}
              className={`flex items-center mt-4 py-2 px-6 text-gray-300 hover:bg-green-800 hover:bg-opacity-25 hover:text-gray-100 ${
                activeTab === item.id ? 'bg-green-800 bg-opacity-25 text-gray-100' : ''
              } transition-all duration-300 ease-in-out cursor-pointer`}
              onClick={() => handleTabChange(item.id)}
            >
              {item.icon}
              <span className="mx-3">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex justify-between items-center py-4 px-6 bg-black text-white">
          <div className="flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none lg:hidden transition-transform duration-300 ease-in-out transform hover:scale-110">
              <Menu className="h-6 w-6" />
            </button>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-green-800 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-6 animate-fade-in">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
```

# src\pages\super-admin\UserManagementContent.js

```js
import React, { useState } from 'react';
import { Search, Plus, Edit, Trash } from 'lucide-react';

const UserManagementContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  
  // Demo data
  const users = [
    { id: 1, name: 'Ahmed Ali', email: 'ahmed@example.com', role: 'masjid_admin', masjid: 'Masjid Al-Noor', status: 'active' },
    { id: 2, name: 'Sara Khan', email: 'sara@example.com', role: 'teacher', masjid: 'Islamic Center of Springfield', status: 'active' },
    { id: 3, name: 'Omar Farooq', email: 'omar@example.com', role: 'teacher', masjid: 'Masjid Al-Taqwa', status: 'active' },
    { id: 4, name: 'Fatima Ali', email: 'fatima@example.com', role: 'parent', masjid: 'Masjid Al-Huda', status: 'active' },
    { id: 5, name: 'Khalid Hassan', email: 'khalid@example.com', role: 'masjid_admin', masjid: 'Masjid Al-Iman', status: 'inactive' },
  ];
  
  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.masjid.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    
    return matchesSearch && matchesRole;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md flex items-center transition-colors">
          <Plus className="w-5 h-5 mr-2" />
          Add New User
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <select 
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" 
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
              >
                <option value="all">All Roles</option>
                <option value="masjid_admin">Masjid Admin</option>
                <option value="teacher">Teacher</option>
                <option value="parent">Parent</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Masjid</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.role}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.masjid}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="text-indigo-600 hover:text-indigo-900" title="Edit">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-900" title="Delete">
                        <Trash className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagementContent;
```

# src\pages\super-admin\UserManagementPage.js

```js
// src/pages/super-admin/UserManagementPage.js
import React, { useState, useEffect } from 'react';
import { 
  PlusCircle, 
  Edit, 
  Trash2, 
  User 
} from 'lucide-react';
import { Button } from '../../components/common/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/common/card';
import { useMasjid } from '../../contexts/MasjidContext';
import { useAuth } from '../../contexts/AuthContext';

const UserManagementPage = () => {
  const [users, setUsers] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const { getAllMasjids } = useMasjid();
  const { user: currentUser } = useAuth();

  // User form state
  const [userForm, setUserForm] = useState({
    name: '',
    email: '',
    role: 'student',
    masjid: null,
    profileDetails: {}
  });

  // Mock list of masjids
  const [masjidList, setMasjidList] = useState([]);

  // Fetch masjids on component mount
  useEffect(() => {
    const fetchMasjids = async () => {
      try {
        const fetchedMasjids = await getAllMasjids();
        setMasjidList(fetchedMasjids);
      } catch (error) {
        console.error('Failed to fetch masjids', error);
      }
    };

    fetchMasjids();
  }, []);

  // Simulate user fetching (would be an API call in real implementation)
  useEffect(() => {
    const mockUsers = [
      {
        _id: '1',
        name: 'Super Admin',
        email: 'admin@taleem.com',
        role: 'super_admin',
        masjid: null
      },
      {
        _id: '2',
        name: 'Masjid Admin',
        email: 'masjid.admin@taleem.com',
        role: 'masjid_admin',
        masjid: 'al-falah'
      },
      {
        _id: '3',
        name: 'Teacher Ahmed',
        email: 'teacher@demo.com',
        role: 'teacher',
        masjid: 'al-noor'
      },
      {
        _id: '4',
        name: 'Parent Hassan',
        email: 'parent@demo.com',
        role: 'parent',
        masjid: 'masjid-ibrahim'
      }
    ];

    setUsers(mockUsers);
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Handle nested object inputs
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setUserForm(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setUserForm(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Open create user modal
  const openCreateModal = () => {
    setUserForm({
      name: '',
      email: '',
      role: 'student',
      masjid: null,
      profileDetails: {}
    });
    setIsCreateModalOpen(true);
  };

  // Handle user creation
  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      // In a real app, this would be an API call
      const newUser = {
        _id: `user-${Date.now()}`,
        ...userForm,
        createdBy: currentUser._id
      };

      setUsers(prev => [...prev, newUser]);
      setIsCreateModalOpen(false);
    } catch (error) {
      console.error('Failed to create user', error);
    }
  };

  // Open edit user modal
  const openEditModal = (userData) => {
    setSelectedUser(userData);
    setUserForm({
      ...userData,
      profileDetails: userData.profileDetails || {}
    });
    setIsEditModalOpen(true);
  };

  // Handle user update
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      // In a real app, this would be an API call
      setUsers(prev => 
        prev.map(u => 
          u._id === selectedUser._id 
            ? { ...u, ...userForm } 
            : u
        )
      );
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Failed to update user', error);
    }
  };

  // Handle user deletion
  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        // In a real app, this would be an API call
        setUsers(prev => prev.filter(u => u._id !== userId));
      } catch (error) {
        console.error('Failed to delete user', error);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">User Management</h1>
        <Button 
          onClick={openCreateModal}
          className="bg-green-700 hover:bg-green-800 text-white"
        >
          <PlusCircle className="mr-2" /> Add New User
        </Button>
      </div>

      {/* Users Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {users.map((userData) => (
          <Card 
            key={userData._id} 
            className="hover:shadow-lg transition-all duration-300"
          >
            <CardHeader>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <User className="h-6 w-6 text-gray-500" />
                  <CardTitle>{userData.name}</CardTitle>
                </div>
                <div className="flex space-x-2">
                  <Button 
                    variant="ghost"
                    size="icon"
                    onClick={() => openEditModal(userData)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteUser(userData._id)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <strong>Email:</strong> {userData.email}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Role:</strong> {userData.role}
                </p>
                {userData.masjid && (
                  <p className="text-sm text-gray-600">
                    <strong>Masjid:</strong> {userData.masjid}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Create User Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Create New User</h2>
            <form onSubmit={handleCreateUser}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={userForm.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userForm.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <select
                  name="role"
                  value={userForm.role}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="parent">Parent</option>
                  <option value="masjid_admin">Masjid Admin</option>
                </select>
              </div>
              {(userForm.role === 'teacher' || userForm.role === 'masjid_admin') && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Masjid</label>
                  <select
                    name="masjid"
                    value={userForm.masjid || ''}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  >
                    <option value="">Select Masjid</option>
                    {masjidList.map((masjid) => (
                      <option key={masjid.id} value={masjid.id}>
                        {masjid.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div className="flex justify-end space-x-4">
                <Button 
                  type="button"
                  variant="outline"
                  onClick={() => setIsCreateModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white"
                >
                  Create User
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Edit User</h2>
            <form onSubmit={handleUpdateUser}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={userForm.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userForm.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <select
                  name="role"
                  value={userForm.role}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="parent">Parent</option>
                  <option value="masjid_admin">Masjid Admin</option>
                </select>
              </div>
              {(userForm.role === 'teacher' || userForm.role === 'masjid_admin') && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Masjid</label>
                  <select
                    name="masjid"
                    value={userForm.masjid || ''}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  >
                    <option value="">Select Masjid</option>
                    {masjidList.map((masjid) => (
                      <option key={masjid.id} value={masjid.id}>
                        {masjid.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div className="flex justify-end space-x-4">
                <Button 
                  type="button"
                  variant="outline"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white"
                >
                  Update User
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagementPage;
```

# src\pages\TeacherDashboard.js

```js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Menu, Calendar, Book, FileText, TrendingUp, MessageCircle, LogOut, BookOpen, Plus} from 'lucide-react';
import TeacherAttendance from '../components/teacherDashboard/TeacherAttendance';
import TeacherDiary from '../components/teacherDashboard/TeacherDiary';
import TeacherExam from '../components/teacherDashboard/TeacherExam';
import TeacherProgress from '../components/teacherDashboard/TeacherProgress';
import TeacherCommunication from '../components/teacherDashboard/TeacherCommunication';

const TeacherDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('attendance');
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const menuItems = [
    { id: 'attendance', name: 'Attendance', icon: <Calendar className="w-5 h-5" /> },
    { id: 'diary', name: 'Lesson Diary', icon: <Book className="w-5 h-5" /> },
    { id: 'exam', name: 'Quran Assessments', icon: <FileText className="w-5 h-5" /> },
    { id: 'progress', name: 'Student Progress', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'communication', name: 'Parent Communication', icon: <MessageCircle className="w-5 h-5" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'attendance': return <TeacherAttendance />;
      case 'diary': return <TeacherDiary />;
      case 'exam': return <TeacherExam />;
      case 'progress': return <TeacherProgress />;
      case 'communication': return <TeacherCommunication />;
      default: return <TeacherAttendance />;
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-black transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 bg-black">
          <BookOpen className="w-6 h-6 text-green-500 mr-2" />
          <span className="text-white text-xl font-semibold">Masjid Teacher Dashboard</span>
        </div>
        
        <nav className="mt-5">
          {menuItems.map((item) => (
            <a
              key={item.id}
              className={`flex items-center mt-4 py-2 px-6 text-gray-300 hover:bg-green-800 hover:bg-opacity-25 hover:text-gray-100 ${
                activeTab === item.id ? 'bg-green-800 bg-opacity-25 text-gray-100' : ''
              } transition-all duration-300 ease-in-out`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.icon}
              <span className="mx-3">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex justify-between items-center py-4 px-6 bg-black text-white">
          <div className="flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none lg:hidden transition-transform duration-300 ease-in-out transform hover:scale-110">
              <Menu className="h-6 w-6" />
            </button>
            <div className="ml-4 hidden md:block">
              <span className="text-gray-300">Masjid Education Program</span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-green-800 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8 animate-fade-in">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;
```

# src\pages\TeacherLoginPage.js

```js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const TeacherLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(username, password, 'teacher');
      navigate('/teacher-dashboard');
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Teacher Login</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherLoginPage;
```

# src\pages\UnauthorizedPage.js

```js
// src/pages/UnauthorizedPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const UnauthorizedPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="flex justify-center">
          <Shield className="h-16 w-16 text-red-500" />
        </div>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Unauthorized Access
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          You do not have permission to access this page.
        </p>
        <div className="mt-6">
          <Link 
            to="/login"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          >
            Return to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
```

# src\reportWebVitals.js

```js
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

```

# src\routes\AppRoute.js

```js
// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import AdminDashboardPage from '../pages/AdminDashboardPage';
import TeacherDashboardPage from '../pages/TeacherDashboardPage';
import ParentDashboardPage from '../pages/ParentDashboardPage';
import UnauthorizedPage from '../pages/UnauthorizedPage';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />

      {/* Protected Routes */}
      <Route element={<PrivateRoute allowedRoles={['admin']} />}>
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
      </Route>

      <Route element={<PrivateRoute allowedRoles={['teacher']} />}>
        <Route path="/teacher-dashboard" element={<TeacherDashboardPage />} />
      </Route>

      <Route element={<PrivateRoute allowedRoles={['parent']} />}>
        <Route path="/parent-dashboard" element={<ParentDashboardPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
```

# src\routes\authRoutes.js

```js
// src/routes/authRoutes.js
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Login Route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email }).populate('masjid');
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create token
    const token = jwt.sign(
      { 
        id: user._id, 
        role: user.role,
        masjid: user.masjid?._id 
      }, 
      process.env.JWT_SECRET, 
      { expiresIn: '24h' }
    );

    // Send user info (excluding password)
    const userResponse = user.toObject();
    delete userResponse.password;

    res.json({
      token,
      user: userResponse
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get current user
router.get('/me', async (req, res) => {
  // Middleware to verify token would be implemented separately
  // This is a placeholder
});

module.exports = router;
```

# src\routes\MasjidRouter.js

```js
import React, { useEffect } from 'react';
import { Routes, Route, useParams, Navigate } from 'react-router-dom';
import { useMasjid } from '../contexts/MasjidContext';
import { useAuth } from '../contexts/AuthContext';

// Import dashboard components
import AdminDashboard from '../pages/AdminDashboard';
import TeacherDashboard from '../pages/TeacherDashboard';
import ParentDashboard from '../pages/ParentDashboard';
import MasjidDashboard from '../pages/masjid/MasjidDashboard';
import MasjidLogin from '../pages/masjid/MasjidLogin';
import PrivateRoute from './PrivateRoute';

const MasjidRouter = () => {
  const { masjidId } = useParams();
  const { loadMasjidData, loading, currentMasjid } = useMasjid();
  const { isAuthenticated, getCurrentUser } = useAuth();
  
  useEffect(() => {
    if (masjidId) {
      loadMasjidData(masjidId);
    }
  }, [masjidId, loadMasjidData]);
  
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading {masjidId} portal...</p>
        </div>
      </div>
    );
  }
  
  if (!currentMasjid) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Masjid Not Found</h1>
          <p className="text-gray-600 mb-6">
            The masjid portal "{masjidId}" you're looking for doesn't exist or isn't available.
          </p>
          <a 
            href="/"
            className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Return to Homepage
          </a>
        </div>
      </div>
    );
  }
  
  return (
    <Routes>
      {/* Masjid public homepage */}
      <Route path="/" element={<MasjidDashboard />} />
      
      {/* Masjid login page */}
      <Route path="/login" element={<MasjidLogin />} />
      
      {/* Admin routes for this specific masjid */}
      <Route path="/admin-dashboard/*" element={
        <PrivateRoute allowedRoles={['admin']}>
          <AdminDashboard />
        </PrivateRoute>
      } />
      
      {/* Teacher routes for this specific masjid */}
      <Route path="/teacher-dashboard/*" element={
        <PrivateRoute allowedRoles={['teacher']}>
          <TeacherDashboard />
        </PrivateRoute>
      } />
      
      {/* Parent routes for this specific masjid */}
      <Route path="/parent-dashboard/*" element={
        <PrivateRoute allowedRoles={['parent']}>
          <ParentDashboard />
        </PrivateRoute>
      } />
      
      {/* Auto-redirect to the appropriate dashboard if logged in */}
      <Route path="/dashboard" element={
        isAuthenticated() ? (
          (() => {
            const user = getCurrentUser();
            switch(user?.role) {
              case 'admin':
                return <Navigate to="admin-dashboard" replace />;
              case 'teacher':
                return <Navigate to="teacher-dashboard" replace />;
              case 'parent':
                return <Navigate to="parent-dashboard" replace />;
              default:
                return <Navigate to="/" replace />;
            }
          })()
        ) : (
          <Navigate to="login" replace />
        )
      } />
      
      {/* Catch-all route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default MasjidRouter;
```

# src\routes\PrivateRoute.js

```js
// src/routes/PrivateRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();
  const location = useLocation();

  // Not authenticated
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check role-based access
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Redirect to unauthorized page or home
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
```

# src\services\authService.js

```js
// src/services/authService.js
import axios from 'axios';

const TEST_CREDENTIALS = {
  admin: {
    email: 'admin@school.com',
    password: 'admin123',
    role: 'admin',
    name: 'Admin User'
  },
  teacher: {
    email: 'teacher@school.com',
    password: 'teacher123',
    role: 'teacher',
    name: 'Teacher User'
  },
  parent: {
    email: 'parent@school.com',
    password: 'parent123',
    role: 'parent',
    name: 'Parent User'
  }
};

export const authService = {
  async login(email, password) {
    // Simulate backend authentication
    const user = Object.values(TEST_CREDENTIALS).find(
      u => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    }

    throw new Error('Invalid credentials');
  },

  async register(userData) {
    // Basic validation
    if (!userData.email || !userData.password) {
      throw new Error('Email and password are required');
    }

    // In a real app, this would call a backend registration endpoint
    const newUser = {
      ...userData,
      role: 'parent', // Default role
      id: Date.now()
    };

    localStorage.setItem('user', JSON.stringify(newUser));
    return newUser;
  },

  logout() {
    localStorage.removeItem('user');
  },

  getCurrentUser() {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }
};
```

# src\setupTests.js

```js
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

```

# src\styles\animations.css

```css
/* src/styles/animations.css */
@keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }
  
  .animate-slide-left {
    animation: slideInFromLeft 0.6s ease-out forwards;
  }
  
  .animate-slide-right {
    animation: slideInFromRight 0.6s ease-out forwards;
  }
  
  /* Delay classes */
  .delay-100 {
    animation-delay: 100ms;
  }
  
  .delay-200 {
    animation-delay: 200ms;
  }
  
  .delay-300 {
    animation-delay: 300ms;
  }
  
  .delay-400 {
    animation-delay: 400ms;
  }
  
  /* Hover animations */
  .hover-lift {
    transition: transform 0.2s ease-out;
  }
  
  .hover-lift:hover {
    transform: translateY(-4px);
  }
  
  .hover-scale {
    transition: transform 0.2s ease-out;
  }
  
  .hover-scale:hover {
    transform: scale(1.02);
  }
```

# tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          700: '#15803d',
          800: '#166534',
          950: '#052e16'
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        'fade-in': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
}
```

