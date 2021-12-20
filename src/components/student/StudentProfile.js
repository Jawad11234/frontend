import React,{useState, useEffect} from 'react'
import Axios from 'axios';

const StudentProfile = () => {

        const [profile, setProfile] = useState([])
        const student_username = localStorage.getItem('student_username');
    
        useEffect(() => {
            viewprofile();
        }, [])
    
        const viewprofile = async() =>{
            await Axios.get(`http://localhost:3001/getstudentprofile/${student_username}`).then((response) => {
                setProfile(response.data);
                console.log(response.data);
        })}
        return (
            <>
            <div className="d-flex justify-content-center"><h1>Your Profile</h1></div>
                <div className="d-flex align-content-start flex-wrap justify-content: space-between mx-5">
                    {profile.map((profile) => (
                        <div className="col-md-8  mx-5">
                            <div className="card tlogin offset-md-4 my-3">
                                <div className="card-body mx-3 py-3">
                                    <div className="align-item-center">
                                        <h5 className="card-title">Name</h5>
                                        <p className="card-text">{profile.student_name}</p>
                                        <h5 className="card-title">Father Name</h5>
                                        <p className="card-text">{profile.student_fathername}</p>
                                        <h5 className="card-title">Age</h5>
                                        <p className="card-text">{profile.student_age}</p>
                                        <h5 className="card-title">Gender</h5>
                                        <p className="card-text">{profile.student_gender}</p>
                                        <h5 className="card-title">Contact</h5>
                                        <p className="card-text">{profile.student_contact}</p>
                                        <h5 className="card-title">Username</h5>
                                        <p className="card-text">{profile.student_username}</p>
                                        <h5 className="card-title">Password</h5>
                                        <p className="card-text">{profile.student_password}</p>
                                    </div>
                                    <a href="#" className="btn btn-primary" >Update</a>
                                {/*   <a className="btn btn-danger" onClick={() => {deleteschedule(schedule.Day)}}>Delete</a>*/}
                                </div>
                            </div>
                        </div>
                    ))}
            </div> 
            </>       
        )
}

export default StudentProfile
