import React, { useState } from 'react';
import { Redirect } from 'react-router';
import fire from '../Config/FirebaseAuth'
import Home from './Home';
import SignUp from '../Components/Signup'
import {NavLink} from 'react-router-dom'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault()   
        console.log(email, password)
        fire.auth().signInWithEmailAndPassword(email,password).then(()=>{
            alert("Login Successfull")
            
        }).catch((error) => {
            alert("Wrong details" ,error)
        })
    }   
    
    
    return(
        <>
         <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">

    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
          />
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Password
        </label>
        <input
          type='password'
          className="form-control"
          placeholder="Password"
          onChange={(e)=> setPassword(e.target.value)}
          />
      <div className="col-12 mb-10">
        <button className="btn btn-outline-primary" type="submit" >
          Submit form
        </button>
      </div>
      </div>
        </div>
          </form>
          <NavLink
                      exact
                      activeClassName="menu_active"
                        className="nav-link active"
                        aria-current="page"
                        to="/signup"
                      >
                        Sign-up
                      </NavLink>

      </div>
    </div>
    </div>
        </>
    )
}

export default LoginPage ;