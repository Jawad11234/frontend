import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import './student.css';
import { Link } from 'react-router-dom';

const StudentHome = () => {

    const [teacherList, setteacherList] = useState([])
    useEffect(() => {
        viewteachers();
    }, [])

    const viewteachers = () =>{
        Axios.get('http://localhost:3001/teachersdetail').then((response) => {
            setteacherList(response.data);
            console.log(response);
    })}

    return (
        <>
            <div className="d-flex align-content-start flex-wrap justify-content: space-between mx-5">
                {teacherList.map((profile) => (
                    <div className="col-md-3 mx-5">
                        <div className="card tlogin my-3">
                            <div className="card-body mx-3">
                                <div>
                                    <h5 className="card-title">Name</h5>
                                    <p className="card-text">{profile.teacher_name}</p>
                                    <h5 className="card-title">Email Address</h5>
                                    <p className="card-text">{profile.teacher_username}</p>
                                </div>
                                <div>
                                <Link className="btn btn-primary" to>View More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>       
    )
}

export default StudentHome
