import React,{useEffect , useState} from 'react'
import {useHistory} from 'react-router-dom';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const About = () => {
        const history = useHistory();
        const [userData , setUserData] = useState({});
        const [resumedata, setResumeData] = useState([{}]);
        console.log(resumedata);
        const callAbout = async ()=>{
            try {
                const res = await fetch("/getdata",{
                    method :"GET",
                    headers :{  
                        "Content-Type" : "application/json"
                    },
                });
                const data = await res.json();
                if(!data){
                    console.log("Data is Not found");
                }
                setUserData(data);
                console.log(data);
                setResumeData(data.resume);
                if(!res.status ===200){
                    window.alert("User Not Found!");
                }
            } catch (err) {
                console.log(err);
                history.push("/login");
            }
        }
        useEffect(() => {
        callAbout();
        }, []);

        return (
            <>
        <div ref = {ref}  className = "conatiner border m-5 p-5" >
            <form method="GET" >
                <div className="row border bg-primary">
                    <div className="col-12">
                        <h1 className = "text-center text-white">Resume</h1>
                    </div>
                </div>
                {/* Persional details  */}
                <div className="row border p-2">
                    <div className="col-12">
                        <div className="row text-center">
                            <h4 className="text-center">Personal details:</h4>
                        </div>
                        <table className="table">                       
                            <tbody>
                                <tr>
                                    <th scope="row">Name :</th>
                                    <td>{userData.name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Profession :</th>
                                    <td>{userData.profession}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Email Id :</th>
                                    <td>{userData.email}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Mobile Number :</th>
                                    <td>{userData.number}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Address :</th>
                                    <td>{resumedata[0].address} <p>{resumedata[0].city}</p><p>{resumedata[0].state}</p><p>{resumedata[0].pincode}</p> </td>
                                </tr>
                            </tbody>
                        </table>                        
                    </div>
                </div>
                {/* technical  skills */}
                <div className="row border p-2">
                    <div className="col-12">
                        <div className="row">
                            <h4 className = "text-center">Skills :</h4>
                        </div>
                        <div className="row">
                            <p>{resumedata[0].skills}</p>
                        </div>
                    </div>
                </div>
                {/* experience details */}
                <div className="row border p-2">
                    <div className="col-12">
                        <div className="row">
                            <h4 className = "text-center">Experience :</h4>
                        </div>
                        <div className="row">
                            <p>{resumedata[0].experience}</p>
                        </div>
                    </div>
                </div>
                {/* intership details */}
                <div className="row border p-2">
                    <div className="col-12">
                        <div className="row">
                            <h4 className = "text-center">Intership :</h4>
                        </div>
                        <div className="row">
                            <p>{resumedata[0].intership}</p>
                        </div>
                    </div>
                </div>
                {/* edicational details  */}
                <div className="row border p-2">
                    <div className="col-12">
                        <div className="row">
                            <h4 className = "text-center">Eduaction details:</h4>
                        </div>
                        <div className="row">
                            <div className="col m-2">
                                <div className="row">
                                    <h6 className = "text-center">Senor Secondary :</h6>
                                </div>
                                <div className="row">
                                    <p>{resumedata[0].schoolName}</p>
                                </div>
                                <div className="row">
                                    <p>Passing Year : {resumedata[0].passingSchoolYear}</p>
                                </div>
                                <div className="row">
                                    <p> %/Grades : {resumedata[0].schoolGrades}</p>
                                </div>
                            </div>
                            <div className="col m-2">
                                <div className="row">
                                    <h6 className = "text-center">Collage/University :</h6>
                                </div>
                                <div className="row">
                                    <p>{resumedata[0].collageName}</p>
                                </div>
                                <div className="row">
                                    <p>Passing Year : {resumedata[0].passingYear}</p>
                                </div>
                                <div className="row">
                                    <p> %/Grades : {resumedata[0].collageGrades}</p>
                                </div>
                            </div>
                        </div>
                                                
                    </div>
                </div> 
            </form>  
        </div>
       
        <div className="row justify-content-center">
            <div className="col-4 text-center">
            <Pdf targetRef={ref} filename="Resume.pdf">
                {({toPdf}) => (
                    <button onClick={toPdf} className = "btn btn-primary">Download Resume</button>
                )}
            </Pdf>
            </div>
        </div>
        </>
    )
}

export default About;
