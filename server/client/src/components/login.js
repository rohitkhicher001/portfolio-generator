import React,{useState} from 'react'
import {NavLink , useHistory} from 'react-router-dom';
function Login() {
  const history= useHistory();
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const loginHandle = async (e)=>{
    const res = await fetch("/login",{
      method : "POST",
      headers :{
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        email,password
      })
    });

    const data = await res.json();
    if(res.status === 422 || !data){
      window.alert(data.error);
      console.log("Invalid");
      // history.push("/register");

    }else if(res.status === 500){
      console.log("Successfull");
      history.push("/");
    }
    
    e.preventDefault();
  }
  return (
  <div>
     <form className="container form-group p-5">
       <div className="row  justify-content-center">
         <div className="col-md-4 border">
          <div className="row  m-4 ">
            <div className="col-md">
              <h1>Sign In</h1>
            </div>
          </div>
          <div className="row m-4">
            <div className="col-md">
              <input type="email" name="email" value={email} placeholder="Email" className="form-control" 
                onChange ={ (e)=>{ setEmail(e.target.value) } }  />
            </div>
          </div>
          <div className="row  m-4">
            <div className="col-md">
              <input type="password" name="password" value={password} placeholder="Password" className="form-control" onChange ={ (e)=>{ setPassword(e.target.value) } } />
            </div>
          </div>
       <div className="row  m-4">
         <div className="col-12">
            <NavLink to="/login" className="btn btn-primary col-md-12" onClick={loginHandle} >Sign In </NavLink>
         </div>
      </div>
      <div className="row  m-4">
         <div className="col-12">
            Create new account <NavLink to="/register" className="col-md-12">Sign Up </NavLink>
         </div>
       </div>
      </div>
    </div>
       
  </form>
  </div>
  )
}

export default Login;
