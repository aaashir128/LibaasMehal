import React from "react";
import InputField from '../Components/inputField'


const Contact = (props) => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
          {
           <InputField />
            
          }
          
            </form>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
