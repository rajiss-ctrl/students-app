
import './App.css';
import {Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import course from './db/Data'
import Courses from './pages/Courses';
import Signup from './pages/Signup';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './ProtectedRoute';
import CourseDetails from './pages/CourseDetails';
// import { RoutProtect } from './RoutProtect';
// import { useAuth } from './Firebase';

// import { useState } from 'react';

function App() {
  
  //  const currentStudent = useAuth();
  // const [courseData, setcourseData] = useState()
  return (
    <UserAuthContextProvider>
    <Routes>
     <Route path="/students-app" element={<LandingPage/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/signup" element={<Signup />}/>
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
                <Route
                 path="/courses" 
                 element={
                   <ProtectedRoute>
                 <Courses course={course}/>
                 </ProtectedRoute>
                 }/>
                <Route
                 path="/courseDetails/:e" 
                 element={
                   <ProtectedRoute>
                 <CourseDetails/>
                 </ProtectedRoute>
                 }/>
     {/* <Route path="/dashboard" element={<Dashboard />}/> */}
    </Routes>

    </UserAuthContextProvider>
  );
}

export default App;
