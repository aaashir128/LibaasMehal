import React, { useState } from "react";
import fire from '../Config/FirebaseAuth'

const InputField = (props) => {
    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: ''
    })

    const InputEvent = (event) => {
        const {name, value} = event.target
        setData((preVal) => {
            return{
                ...preVal,
                [name] : value
            }
        })
        console.log(data)
    }
    const formSubmit = (e) => {
      e.preventDefault()
      alert(`Welcome ${data.fullname}.
       Contact Us on ${data.phone}.
        Also you can send us Email on ${data.email}
      what I want to say is ${data.msg}`)
      fire.database().ref('/').child(`users`).push(data)

    }

    return (
    <>
      <div className="mb-3" name={props.name}>
        <label for="exampleFormControlInput1" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="fullname"
          value={data.fullname}
          onChange={InputEvent}
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-3" phone={props.phone}>
        <label for="exampleFormControlInput1" className="form-label">
          Phone
        </label>
        <input
          type="number"
          className="form-control"
          id="phone"
          name="phone"
          value={data.phone}
          onChange={InputEvent}
          placeholder="Phone number"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={data.email}
          onChange={InputEvent}
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          name="msg"
          value={data.msg}
          onChange={InputEvent}
        ></textarea>
      </div>
      <div className="col-12">
        <button className="btn btn-outline-primary" type="submit" onClick={formSubmit}>
          Submit form
        </button>
      </div>
    </>
  );
};

export default InputField;
