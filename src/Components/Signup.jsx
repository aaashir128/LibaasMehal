import React, { useState } from 'react';
import fire from '../Config/FirebaseAuth'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [contact, setContact] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault()   
        console.log(email, password,contact, fullName)
        fire.auth().createUserWithEmailAndPassword(email,password).then(()=>{
            alert("User Created")
            
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
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your Full Name"
          onChange={(e) => setFullName(e.target.value)}
          />
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
          />
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Contact
        </label>
        <input
          type="number"
          className="form-control"
          placeholder="12346789"
          onChange={(e) => setContact(e.target.value)}
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
                        to="/login"
                      >
                        Already a user
                      </NavLink>

      </div>
    </div>
    </div>
        </>
    )
}

export default SignUp ;