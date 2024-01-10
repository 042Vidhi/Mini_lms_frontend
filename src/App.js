import React from 'react';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from './pages/Home'; 
// import Login from './pages/Login';
import MyCourses from './pages/MyCourses';
import VrLearning from './pages/VrLearning';
import Shorts from './pages/Shorts';
import Profile from './pages/Profile';
import CoursePage from './pages/CoursePage';
import Planner from './pages/Planner';
import {Auth} from './components/auth';
import Register from './pages/Register';

function App() {
  return (
    <Router>
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Auth/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/course/:courseId"  element={<CoursePage/>}/>
          <Route path="/mycourses" element={<MyCourses/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/3dlearning" element={<VrLearning/>} />
          <Route path="/shorts" element={<Shorts/>}/>
          <Route path="/planner" element={<Planner/>}/>
        </Routes>
      
    </div>
    </Router>
  );
}

export default App;
