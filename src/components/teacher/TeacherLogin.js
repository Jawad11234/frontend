import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

const TeacherLogin = () => {

  const history = useHistory(); 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const user = localStorage.getItem('loggedIn')

  
const login = async() => {
  await Axios.post("http://localhost:3001/teacherlogin", {
    teacher_username: username,
    teacher_password: password,
  }).then((response) => {
      if(response.data.loggedIn){
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("user", "teacher");
        localStorage.setItem("teacher_username", response.data.teacher_username);
        history.push("/viewcourses");
      }else{
          setErrorMessage(response.data.message);
          console.log(response.data.message);
          alert(response.data.message);
      }
  });
};
  
useEffect(() => {
    Axios.post("http://localhost:3001/teacherlogin").then((response) => {
       if(user){
           history.push("/viewcourses")
       }else{
           setErrorMessage(response.data.message);
        }
    })
}, [])
    return (
        <div className="">
        <div className="py-4">
            <div className="card tlogin col-md-4 offset-md-4">
                <div className="card-body">
                    <h1 className="card-title text-center py-4">Teacher Login</h1>
                    <form className="">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                required
                                className="form-control"
                                id="email"
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                className="form-control"
                                id="password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>
                        <div className="text-center">
                        <button type="submit" className="btn btn-primary mx-3 px-3" onClick={login}>
                            Login
                        </button>
                        <Link  to="/teacherregister"><button className="btn btn-primary">Register</button></Link>
                        </div>
                    </form>
                {/* <h3>{errorMessage} </h3> */}
                </div>
            </div>
        </div>
        </div>
    )
}

export default TeacherLogin
