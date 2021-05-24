import React,{useEffect} from 'react'
import {useHistory} from "react-router-dom";

function Logout() {
    const history = useHistory();
    useEffect(() => {
           fetch('/logout',{
               method:"GET",
               headers:{
                   "Content-Type" : "application/json"
               },
           }).then((res)=>{
                history.push("/login");
                if(res.status !== 200){
                    throw new Error();
                }
           }).catch((err)=>{
               console.log(err);
           })
    });
    return (
        <div>
           
        </div>
    )
}

export default Logout;
