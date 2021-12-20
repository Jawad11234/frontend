import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from 'react-router-dom';
import './teacher/teacher.css'
const Header = () => {
    const location = useLocation();
    const history = useHistory();
    const [loggedIn, setLoggedIn] = useState(false);
    const user = localStorage.getItem('teacher_username');
    const usertype = localStorage.getItem('user');
    const student = localStorage.getItem('student_username');

    useEffect(() => {
        setLoggedIn(localStorage.getItem("loggedIn"));
    }, [localStorage.getItem("loggedIn")]);

    const logout = () => {
        localStorage.removeItem("loggedIn");
        localStorage.removeItem('user');
        localStorage.removeItem('teacher_username');
        localStorage.removeItem('student_username');
        history.push('/');
    }
    return (
        <>
        <div className="body">
            <nav className="navbar navbar-expand-lg navbar-dark bg-success navbarborder py-3">
                <div className="container-fluid">
                    <Link className="navbar-brand navbarName" to="/">
                        Tutor Finder
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            {loggedIn ? (
                                <>
                            { usertype === 'teacher' ? (
                                <>
                                    <Link className={`nav-link navbarlink ${location.pathname === '/viewcourses' ? 'active' : ''}`} to="/viewcourses">Courses</Link>
                                    <Link className={`nav-link navbarlink ${location.pathname === '/addclass' ? 'active' : ''}`} to="/addclass">Classes</Link>
                                    <Link className={`nav-link navbarlink ${location.pathname === '/addshedule' ? 'active' : ''}`} to="/addshedule">Shedule</Link>
                                    <Link className={`nav-link navbarlink ${location.pathname === '/profile' ? 'active' : ''}`} to="/profile">Profile</Link>
                                    <Link className={`nav-link navbarlink ${location.pathname === '/library' ? 'active' : ''}`} to="/library">Library</Link>
                                    <div className="dropdown">
                                        <button className="btn btn-success dropdown-toggle d-flex flex-end" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            {user}
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                                        </ul>
                                    </div>
                                </>
                            ) : ( 
                                <>
                                    <Link className={`nav-link navbarlink ${location.pathname === '/studenthome' ? 'active' : ''}`} aria-current="page" to="/studenthome">Home</Link>
                                    <Link className={`nav-link navbarlink ${location.pathname === '/studentprofile' ? 'active' : ''}`} to="/studentprofile">Profile</Link>
                                    <Link className={`nav-link navbarlink ${location.pathname === '/library' ? 'active' : ''}`} to="/library">Library</Link>
                                    <div className="dropdown">
                                        <button className="btn btn-success dropdown-toggle d-flex flex-end" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            {student}
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                                        </ul>
                                    </div>
                                </>
                            )} </>): (
                                <>
                                <Link className={`nav-link navbarlink ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                                <Link className={`nav-link navbarlink ${location.pathname === '/studentlogin' ? 'active' : ''}`} to="/studentlogin">Student</Link>
                                <Link className={`nav-link navbarlink ${location.pathname === '/teacherlogin' ? 'active' : ''}`} to="/teacherlogin">Teacher</Link>
                            </>
                            ) }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        </>
    );
};

export default Header;
