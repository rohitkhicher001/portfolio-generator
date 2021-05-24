import React,{useState,useEffect} from 'react'
import {NavLink} from 'react-router-dom';
const Home= () => {
    const [userName , setUserName] = useState({});
    const [accessHome , setAccessHome] = useState(false);
    const callHome = async ()=>{
        try {
            const res = await fetch('/getdata',{
                method :"GET",
                headers :{
                    "Content-Type" : "application/json"
                },
            });
            const data = await res.json();
            console.log(data);
            setUserName(data.name);
            setAccessHome(true);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
    callHome();
    }, []);    
    return (
        <>
        <div className="container p-5">
            <div class="row justify-content-center pt-5">
                <div class="col-4 text-center">
                    {accessHome ? 
                       <> <h1 className = "mt-md-5 mb-3">Welcome</h1> 
                        <h2>{userName}</h2>
                        <NavLink to = "/resume" className ="btn btn-primary mt-md-5" >Create Your Resume</NavLink>
                        </> : <h1 className = "mt-md-5 mb-3">Welcome</h1> 
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;
