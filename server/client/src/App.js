import React from 'react'
import {Route} from 'react-router-dom';
import "./App.css";
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Login from './components/login';
import Logout from './components/logout';
import Navbar from './components/navbar';
import Register from './components/register';
import Resume from './components/resume';
const App = () => {
  return (
    <>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path='/register'>
        <Register />
      </Route>
      <Route path="/resume">
        <Resume />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>
    </>
  )
}

export default App
