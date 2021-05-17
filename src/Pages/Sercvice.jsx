import React from "react";
import Card from '../Components/Card'
import Sdata from "../Components/Sdata";
const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">

               {
                 Sdata.map((v,i) => {
                   return <Card 
                   key={i}
                   imgsrc ={v.imgsrc}
                   title = {v.title}
                   />
                 })
               }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
