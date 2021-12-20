import React, {useState, useEffect, Button}from 'react'
import Axios from 'axios';

const Profile = () => {

    const [image, setImage] = useState("");
    const [uploadStatus, setUploadStatus] = useState('');

    const [profile, setProfile] = useState([])
    const teacher_username = localStorage.getItem('teacher_username');

    useEffect(() => {
        viewprofile();
    }, [])

    const viewprofile = async() =>{
        await Axios.get(`http://localhost:3001/getprofile/${teacher_username}`).then((response) => {
            setProfile(response.data);
            console.log(response.data);
    })}

    const [selectfile, setselectfile] = useState("");
    const [getfiles, setGetfiles] = useState([]);  
    const selectFile = (e) => {
      const files = e.target.files;
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "shkp92br");
      setselectfile(data);
    };
  
    const uploadFile = (e) => {
      e.preventDefault();
  
      Axios.post(
        "https://api.cloudinary.com/v1_1/jawad11/image/upload",
        selectfile
      )
        .then((response) => {
          console.log(response);
          const url = response.data.secure_url;
          console.log(url);
          Axios.post("http://localhost:3001/urlupload", { url: url, teacher_username: teacher_username })
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
      const GetFiles = () => {
           Axios.get(`http://localhost:3001/getbooks/${teacher_username}`).then((response) => {
              setGetfiles(response.data);
              console.log(response.data);
          })
  }
  useEffect(() => {
    GetFiles();
  }, [])
    return (
        <>
                    <div className="d-flex justify-content-center"><h1>Your Profile</h1></div>
            <div className="d-flex align-content-start flex-wrap justify-content: space-between mx-5">
        {getfiles.map((course, index) => (
                    <div className="col-md-8 ">
                        <div className="card tlogin ">
                            <div className="card-body mx-3 py-4">

                                <div>
                                    {/* <h5 className="card-title">{course.image_id}:{course.image_name}</h5> */}
                                    <img src={course.image_name} className="card-img-top w-25 h-25 img-thumbnail" alt="..."/>
                                    <div className="img-fluid w-25 h-25">
                                        <input type="file" onChange={selectFile} />
                                        <button className="btn btn-primary" onClick={uploadFile}>Upload</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
      ))}

                {profile.map((profile) => (
                    <div className="col-md-8  mx-5">
                        <div className="card tlogin offset-md-4 my-3">
                            <div className="card-body mx-3 py-3">
                                <div>
                                    <h5 className="card-title">Name</h5>
                                    <p className="card-title">{profile.teacher_name}</p>
                                    <h5 className="card-title">Gender</h5>
                                    <p className="card-title">{profile.teacher_gender}</p>
                                    <h5 className="card-title">Contact</h5>
                                    <p className="card-title">{profile.teacher_contact}</p>
                                    <h5 className="card-title">Username</h5>
                                    <p className="card-title">{profile.teacher_username}</p>
                                    <h5 className="card-title">Password</h5>
                                    <p className="card-title">{profile.teacher_password}</p>
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

export default Profile
