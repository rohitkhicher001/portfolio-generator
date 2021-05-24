import React, {useState} from "react";
import {NavLink ,useHistory} from "react-router-dom";

  const Register = ()=>{ 
  const history = useHistory();
  var [userData, setUserData] = useState({
    name:"" ,email:"" , number :"" ,profession :"",password:'',cpassword:""
  });
  let name , value;
  const handlechange = (event)=>{
    name = event.target.name;
    value = event.target.value;
    setUserData({...userData,[name]:value})
  }

  const registerData = async (event)=>{

      const {name,email,number,profession,password,cpassword} = userData;

      const res = await fetch("/register",{
        method : "POST",
        headers :{
          "Content-Type" : "application/json",
        },
        body: JSON.stringify({
          name,email,number,profession,password,cpassword
        })
      });

      const data = await res.json();
      if(res.status === 422 || !data){
        window.alert(data.error);
        console.log("Invalid");
      }else if(res.status === 500){
        window.alert("Sucessfully Registration");
        console.log("Successfull");
        history.push("/login");
      }
      event.preventDefault()
  }
    return (
     <>
     <form method = "POST" className="container form-group p-5">
       <div className="row  justify-content-center">
         <div className="col-md-7 border">
          <div className="row  ml-4 mr-4 m-2 ">
            <div className="col-md">
              <h1>Sign Up</h1>
            </div>
          </div>
          <div className="row m-4">
            <div className="col-md-6 mt-1">
              <input type="text" name = "name" value ={userData.name} class="form-control" placeholder="Name" id="name" autoComplete="off" onChange = {handlechange} /> 
            </div>
            <div className="col-md-6 mt-1">
              <input type="email" name = "email" value = {userData.email} placeholder="Email" className="form-control" autoComplete="off" onChange = {handlechange} />
            </div>
          </div>
          <div className="row m-4">
            <div className="col-md-6">
              <input type="number" name = "number" value = {userData.number} class="form-control" placeholder="Contact Number" id="number" autoComplete="off" onChange = {handlechange} /> 
            </div>
            <div className="col-md-6">
              <input type="text" name = "profession" value = {userData.profession} class="form-control" placeholder="Profession" id="email" autoComplete="off" onChange = {handlechange} /> 
            </div>
          </div>
          <div className="row  m-4">
            <div className="col-md">
              <input type="password" name = "password" value = {userData.password} placeholder="Password" className="form-control" onChange = {handlechange} />
            </div>
          </div>
          <div className="row  m-4">
            <div className="col-md">
              <input type="password" name = "cpassword" value = {userData.cpassword} placeholder="Confirm Password" className="form-control" onChange = {handlechange} />
            </div>
          </div>
       <div className="row  m-4">
         <div className="col-md-12 mt-1">
            <NavLink to="/register" className="btn btn-primary col-md-12" onClick = {registerData}>Sign Up</NavLink>
         </div>
       </div>
        <div className="row  m-4">
            <div className="col-md- 12 mt-1">
              Already account ?  <NavLink to="/login" className="col-md-12">Sign In</NavLink>
            </div>
        </div>
      </div>
      
    </div>     
  </form>     
  </>
    );
  }

export default Register;