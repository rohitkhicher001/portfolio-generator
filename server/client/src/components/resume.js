import React,{useState} from 'react';
import { useHistory } from 'react-router';

const Resume = ()=> {
    const history = useHistory();
    var userdata = {
        schoolName:"",passingSchoolYear:"",schoolGrades:"",
        collageName:"",passingYear: "",collageGrades: "",skills: "",experience: "",intership: "",address: "",cityName: "", state:"",
        pincode:""
      };
    var [resumeData, setResumeData] = useState(userdata);
      let name , value;
      const handlechange = (event)=>{
        name = event.target.name;
        value = event.target.value;
        setResumeData({...resumeData,[name]:value})
      }
      const fromClick = async (e)=>{
        try {
            e.preventDefault()

            const {schoolName,passingSchoolYear,schoolGrades,
                collageName,passingYear,collageGrades,skills,experience,intership,address,cityName, state,
                pincode} = resumeData;
            const res = await fetch("/resume" ,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    schoolName,passingSchoolYear,schoolGrades,
                    collageName,passingYear,collageGrades,skills,experience,intership,address,cityName, state,
                    pincode
                })
            })
    
            const data = await res.json();
                data.alreadyResume = "false";
            if(res.status === 500 || !data){
                console.log("Your message not sent");
            }else if(res.status ===200){
                console.log("Your data are sent ");
                alert("Successfully submit");
                setResumeData(userdata);
                history.push("/about");
            } 
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className = "container border  mt-3">
            <h3 className = "text-center mb-3 mt-3">Build your Resume</h3>
           <div class="row g-3 m-2">
               <div className="col g-3">
                   <div className="row card p-2"> <h5 >Education Details : </h5>
                        <div className="row">
                            <div class="col">
                                <textarea name="schoolName" value={resumeData.schoolName} onChange ={handlechange} placeholder ="Enter Your Senior Secondary School...." id="" cols="30" rows="2" className ="form-control mt-2"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div class="col-md-6">
                            <input type="number" name="passingSchoolYear" value={resumeData.passingSchoolYear} onChange ={handlechange} class="form-control mt-2" id="inputPassword4" placeholder ="Enter year of passing"/>
                            </div>
                            <div class="col-md-6">
                                <input type="number" name="schoolGrades" value={resumeData.schoolGrades} onChange ={handlechange} class="form-control mt-2" id="inputPassword4" placeholder="Enter Percentage or Grade in /10" />
                            </div>
                        </div> 
                        <div className="row mt-4">
                            <div class="col">
                                <textarea name="collageName" value={resumeData.collageName} onChange ={handlechange} placeholder ="Enter Your Collage/University name......" id="" cols="30" rows="2" className ="form-control mt-2"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div class="col-md-6">
                            <input type="number" name="passingYear" value={resumeData.passingYear} onChange ={handlechange} class="form-control mt-2" id="inputPassword4" placeholder ="Enter year of passing...for example -(2018-2022)"/>
                            </div>
                            <div class="col-md-6">
                                <input type="number" name="collageGrades" value={resumeData.collageGrades} onChange ={handlechange} class="form-control mt-2" id="inputPassword4" placeholder="Enter Percentage or Grade in /10" />
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
            <div className="row card p-2 mt-4 m-2"> 
                <h5 >Skills : </h5>
                <div className="row">
                    <div class="col">
                        <textarea name="skills" value={resumeData.skills} onChange ={handlechange} placeholder ="Enter Your Skills...." id="" cols="30" rows="2" className ="form-control mt-2"></textarea>
                    </div>
                </div>
            </div>
            <div className="row card p-2 mt-4 m-2"> 
                <h5 >Trainings : </h5>
                <div className="row">
                    <div class="col">
                        <textarea name="experience" value={resumeData.experience} onChange ={handlechange} placeholder ="Enter Your work experience...." id="" cols="30" rows="2" className ="form-control mt-2"></textarea>
                    </div>
                </div>
            </div>
            <div className="row card p-2 m-2 mt-4"> 
                <h5 >Interships : </h5>
                <div className="row">
                    <div class="col">
                        <textarea name="intership" value={resumeData.intership} onChange ={handlechange} placeholder ="Any Other intership...." id="" cols="30" rows="2" className ="form-control mt-2"></textarea>
                    </div>
                </div>
            </div>
            <div class="row g-3 m-2 mt-4">
               <div className="col g-3">
                   <div className="row card p-2"> <h5 >Address Details : </h5>
                        <div className="row">
                            <div class="col">
                                <textarea name="address" value={resumeData.address} onChange ={handlechange} placeholder ="Enter Your Address...." id="" cols="30" rows="2" className ="form-control mt-2"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div class="col-md-6">
                            <input type="text"  name= "cityName" value={resumeData.cityName} onChange ={handlechange} class="form-control mt-2" id="inputPassword4" placeholder ="City"/>
                            </div>
                            <div class="col-md-4">
                                <input type="text" name="state" value={resumeData.state} onChange ={handlechange} class="form-control mt-2" id="inputPassword4" placeholder="State" />
                            </div>
                            <div class="col-md-2">
                                <input type="number" name="pincode" value={resumeData.pincode} onChange ={handlechange} class="form-control mt-2" id="inputPassword4" placeholder="Pincode" />
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="row mt-5 mb-3">
                <button type="submit" onClick= {fromClick} className="col-4 btn btn-primary text-center m-auto">Submit</button>
            </div>
        </div>
    )
}

export default Resume;
