import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";

const StudentLogin = () => {

  const history = useHistory(); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const user = localStorage.getItem('loggedIn')

  
const login = async() => {
  await Axios.post("http://localhost:3001/studentlogin", {
    student_username: username,
    student_password: password,
  }).then((response) => {
      if(response.data.loggedIn){
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("user", "student");
        localStorage.setItem("student_username", response.data.student_username);
        //history.push("/studenthome");
      }else{
          //setErrorMessage(response.data.message);
          console.log(response.data.message);
      }
  });
};
  
useEffect(() => {
    Axios.post("http://localhost:3001/studentlogin").then((response) => {
       if(user){
           history.push("/studenthome")
       }
    })
}, [])

  return (
    <div className="py-3 mb-5">
        <div className="card tlogin col-md-4 offset-md-4">
            <div className="card-body">
                <h1 className="card-title text-center py-4">Student Login</h1>
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
                    <button type="submit" className="btn btn-primary mx-3 px-3"  onClick={login}>
                        Login
                    </button>
                    <Link to="/studentregister"><button className="btn btn-primary">Register</button></Link>
                </div>
                </form>
                <div>
                <h1>{errorMessage}</h1>
                </div>
            </div>
        </div>
    </div>
  );
};

export default StudentLogin;
