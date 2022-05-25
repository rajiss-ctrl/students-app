
import './App.css';
import {Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import course from './db/Data'
import Logout from './pages/Logout';
import Courses from './pages/Courses';
import Signup from './pages/Signup';
// import { useState } from 'react';

function App() {
  
  // const [courseData, setcourseData] = useState()
  return (
    <>
    <Routes>
     <Route path="/" element={<LandingPage/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/logout" element={<Logout/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/dashboard" element={<Dashboard/>}/>
     <Route path="/courses" element={<Courses course={course}/>}/>
    </Routes>

    </>
  );
}

export default App;
