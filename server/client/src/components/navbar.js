import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary  pt-3 pb-3">
                <div class="container-fluid">
                    <h1 className="navbar-brand text-white" >RESUME WEB</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                           
                            <li className="nav-item">
                                <NavLink className="nav-link active text-white" aria-current="page" to="/" >Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link  text-white" aria-current="page" to="/about" >About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link  text-white" aria-current="page" to="/contact" >Contact</NavLink>
                            </li>
                           
                            <li class="nav-item">
                                <NavLink className="nav-link  text-white" aria-current="page" to="/login" >Login</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link  text-white" aria-current="page" to="/register">Registration</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link  text-white" aria-current="page" to="/logout">Logout</NavLink>
                            </li> 
                           
                           
                           
                        </ul>
                    </div>
                </div>
            </nav>   
        </>
    )
}

export default Navbar
