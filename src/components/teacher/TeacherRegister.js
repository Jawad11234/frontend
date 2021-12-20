import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
const TeacherRegister = () => {

    const [nameReg, setNameReg] = useState("");
    const [gender, setGender] = useState("");
    const [contact, setContact] = useState("");
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const register = () => {
        Axios.post("http://localhost:3001/teacherregister", {
          name: nameReg,
          gender: gender,
          contact: contact,
          username: usernameReg,
          password: passwordReg,
        }).then((response) => {
          console.log(response);
          alert("Register Successfully")
        });
      };
    
    const uploadImage = (files) => {
        //console.log(files[0]);
        const formData = new FormData();
        formData.append("teacher_username", usernameReg);
        formData.append("file", files[0]);
        formData.append("upload_preset", "shkp92br");

        Axios.post("https://api.cloudinary.com/v1_1/jawad11/image/upload", formData).then((response) => {
            console.log(response.data);
        })
    }

    return (
        <div className="py-3">
            <div className="card tlogin col-md-4 offset-md-4">
                <div className="card-body">
                    <h1 className="card-title text-center py-4">Teacher Register</h1>
                    <form className="">
                    <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                required
                                value={nameReg}
                                className="form-control"
                                id="name"
                                placeholder="Name"
                                onChange={(e) => {
                                    setNameReg(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="gender" className="form-label">
                                Gender
                            </label>
                            <input
                                type="text"
                                required
                                value={gender}
                                className="form-control"
                                id="gender"
                                placeholder="Enter Gender"
                                onChange={(e) => {
                                    setGender(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">
                                Contact
                            </label>
                            <input
                                type="text"
                                required
                                value={contact}
                                className="form-control"
                                id="contact"
                                placeholder="Enter Contact"
                                onChange={(e) => {
                                    setContact(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                required
                                value={usernameReg}
                                className="form-control"
                                id="email"
                                placeholder="Email address"
                                onChange={(e) => {
                                    setUsernameReg(e.target.value);
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
                                value={passwordReg}
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                onChange={(e) => {
                                    setPasswordReg(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="file" className="form-label">
                                Profile Image
                            </label>
                            <input
                                type="file"
                                className="form-control"
                                onChange={(e) => {
                                    uploadImage(e.target.files);
                                }}
                            />
                        </div>
                        <div className="text-center">
                        <button type="submit" onClick={register} className="btn btn-primary">
                            Register
                        </button>
                        <Link to="/teacherlogin"><button className="btn btn-primary mx-3 px-3">Login</button></Link>
                        </div>
                    </form>
                </div>
            </div>
            </div>
    )
}

export default TeacherRegister
