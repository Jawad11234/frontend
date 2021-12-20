import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Switch} from 'react-router-dom'
import Header from "./components/Header";
import Home from "./components/teacher/Home";
import TeacherLogin from "./components/teacher/TeacherLogin";
import TeacherRegister from "./components/teacher/TeacherRegister";
import ViewCourses from "./components/teacher/ViewCourses";
import StudentRegister from "./components/student/StudentRegister";
import StudentLogin from "./components/student/StudentLogin";
import AddClass from "./components/teacher/AddClass";
import AddShedule from "./components/teacher/AddSchedule";
import Profile from "./components/teacher/Profile";
import StudentHome from "./components/student/StudentHome";
import StudentProfile from "./components/student/StudentProfile";
import UpdateClass from "./components/teacher/UpdateClass";
import Library from "./components/teacher/Library";

function App() {
  return (
    
    <div className="App">
      <Router>
        <div>
          <Header />
          <Switch> 
          <Route path="/viewcourses">
              <ViewCourses />
            </Route>
            <Route path="/addclass">
              <AddClass />
            </Route>
            <Route path="/addshedule">
              <AddShedule />
            </Route>
            <Route path="/teacherlogin">
              <TeacherLogin />
            </Route>
            <Route path="/teacherregister">
              <TeacherRegister />
            </Route>
            <Route path="/studentregister">
              <StudentRegister />
            </Route>
            <Route path="/studentlogin">
              <StudentLogin />
            </Route>
            <Route path="/profile">
              <Profile />  
            </Route>  
            <Route path="/studenthome">
              <StudentHome />  
            </Route>     
            <Route path="/studentprofile">
              <StudentProfile />  
            </Route>
            <Route path="/updateclass/:id">
              <UpdateClass />
            </Route>    
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/library">
              <Library />  
            </Route>   
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
