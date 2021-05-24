import React,{useState,useEffect} from 'react'
const Contact = () => {
    const [userData , setUserData] = useState({
        messagess:"",subject:"",name:"",email:""
    });


    let name,value;
    const handlechange = (event)=>{
        name = event.target.name;
        value = event.target.value;
        setUserData({...userData, [name]:value});

    }

    const fromClick = async (e)=>{
        try {
            e.preventDefault()

            const {name,email,subject,messagess1} = userData;
            const res = await fetch("/contact" ,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,email,subject,messagess1
                })
            })
    
            const data = await res.json();
            
            if(res.status === 500 || !data){
                console.log("Your message not sent");
            }else if(res.status ===200){
                console.log("Your data are sent ");
                alert("message sent");
                setUserData({...userData,subject:"",messagess1:""})
            } 
        } catch (error) {
            console.log(error)
        }
      
    }

    const callContact = async ()=>{
        try {
            const res = await fetch('/getdata',{
                method :"GET",
                headers :{
                    "Content-Type" : "application/json"
                },
            });
            const data = await res.json();
            // console.log("data" + data);
        
            setUserData({...userData, name:data.name, email:data.email});

            if(!res.status ===200){
                // window.alert("User Not Found!");
                console.log("User Not Found");
            }
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        callContact();
    },[]);
    return (
        <div className = "container mt-5">
            <form method="POST" className="row justify-content-center">
                <div className="col-md-4 border">
                    <div className="row p-3">
                        <h3>Get in touch</h3>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <input type="name" name="name" value={userData.name} onChange={handlechange}   class="form-control mt-2" id="inputPassword4" placeholder="Name" />
                        </div>
                        <div className="col-6">
                            <input type="email" name ="email" value={userData.email} onChange={handlechange}  class="form-control mt-2" id="inputPassword4" placeholder="Email" />
                        </div>
                    </div>
                    <div className="row">
                        <input type="text" name= "subject" value={userData.subject} onChange={handlechange} class="form-control m-3" id="inputPassword4" placeholder="Subject" />    
                    </div>
                    <div className="row">
                        <textarea  name= "messagess1" value={userData.messagess1} onChange={handlechange}  placeholder ="Message..." id="" cols="30" rows="3" className ="form-control m-3"></textarea>
                    </div>
                    <div className="row">
                        <button type="submit" onClick={fromClick} className="btn btn-primary m-3">Send Message</button>
                    </div>
                </div>
                <div className="col-md-4  bg-primary text-white">
                    <div className="row m-3">
                        <h3>Contact Us</h3>
                    </div>
                    <div className="row  m-3">
                        <p> <b>Adress</b> :  Ellenabad ,Sirsa, Haryana , India, 125012</p>
                    </div>
                    <div className="row  m-3">
                        <p> <b>Phone </b>:  +91428782932</p>
                    </div>
                    <div className="row  m-3">
                        <p><b>Email</b> :  support@kumar.com </p>
                    </div>
                    <div className="row  m-3">
                        <p><b>Website</b> :  www.google.com </p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact;
