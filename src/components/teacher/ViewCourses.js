import React, { useState, useEffect, Button } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import AddCourses from './AddCourses';

const ViewCourses = () => {

    const [courseList, setcourseList] = useState([]);
    const teacher_username = localStorage.getItem('teacher_username');
    const [courseCode, setcourseCode] = useState('');
    const [courseName, setcourseName] = useState('');
    const [coursePrice, setcoursePrice] = useState('');
    //const teacher_username = localStorage.getItem('teacher_username');
    // Add a course function
    const AddCourse = async() => {
        await Axios.post("http://localhost:3001/addcourse", {
            course_code:courseCode,
            course_name: courseName,
            course_price: coursePrice,
            teacher_username: teacher_username,
        }).then((response) => {
            console.log(response);
          });
    };

    useEffect(() => {
        viewcourses();
    }, [])

    const viewcourses = async() =>{
        await Axios.get(`http://localhost:3001/getcourses/${teacher_username}`).then((response) => {
            setcourseList(response.data);
            console.log(response.data);
    })}


    const deleteCourse = async(course_code) => {
        await Axios.delete(`http://localhost:3001/deletecourses/${course_code}`).then((response) => {
            if(response){
                alert("Successfully Deleted");
            } else{
                alert("Failed to Delete");
            } 
            viewcourses();
        })
    }

    return (
        <>
         <div className="py-3">
        <div className="card tlogin col-md-4 offset-md-4">
            <div className="card-body">
                <h1 className="card-title text-center py-4">Add Course</h1>
                <form className="">
                <div className="mb-3">
                        <label htmlFor="coursecode" className="form-label">
                            Course Code
                        </label>
                        <input
                            type="text"
                            required
                            value={courseCode}
                            className="form-control"
                            id="coursecode"
                            placeholder="Course Code"
                            onChange={(e) => {
                                setcourseCode(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="coursename" className="form-label">
                            Course Name
                        </label>
                        <input
                            type="text"
                            required
                            value={courseName}
                            className="form-control"
                            id="coursename"
                            placeholder="Course Name"
                            onChange={(e) => {
                                setcourseName(e.target.value);
                            }}
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="courseprice" className="form-label">
                            Course Price
                        </label>
                        <input
                            type="text"
                            required
                            value={coursePrice}
                            className="form-control"
                            id="courseprice"
                            placeholder="Enter Course Price"
                            onChange={(e) => {
                                setcoursePrice(e.target.value);
                            }}
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="">
                    <button type="submit" onClick={AddCourse} className="btn btn-primary">
                        Add Course
                    </button>
                    </div>
                </form>
            </div>
        </div>
        </div>

        <div className="d-flex justify-content-center"><h1>Your Courses List</h1></div>
            <div className="d-flex align-content-start flex-wrap justify-content: space-between mx-5">
                {courseList.map((course, index) => (
                    <div className="col-md-3 mx-5">
                        <div className="card tlogin my-3">
                            <div className="card-body mx-3 py-4">
                                <div>
                                    <h5 className="card-title">{course.course_code}:{course.course_name}</h5>
                                    <h5 className="card-title">Price:{course.course_price}</h5>
                                </div>
                                <div className="text-center">
                                <Link to="#" className="btn btn-primary" >Update</Link>
                                <a className="btn btn-danger mx-3 px-3" onClick={() => {deleteCourse(course.course_code)}}>Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ViewCourses
