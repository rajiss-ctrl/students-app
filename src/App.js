
import './App.css';
import {Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import course from './db/Data'
import Courses from './pages/Courses';
import Signup from './pages/Signup';
import { RoutProtect } from './RoutProtect';
import { useAuth } from './Firebase';

// import { useState } from 'react';

function App() {
   const currentStudent = useAuth();
  // const [courseData, setcourseData] = useState()
  return (
    <>
    <Routes>
      <Route element={<RoutProtect/>}>
            <Route path='/login' element={<Login/>}/>
      </Route>

     <Route path="/students-app" element={<LandingPage/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/signup" element={<Signup currentStudent={currentStudent}/>}/>
     <Route path="/dashboard" element={<Dashboard currentStudent={currentStudent}/>}/>
     <Route path="/courses" element={<Courses course={course}/>}/>
    </Routes>

    </>
  );
}

export default App;
