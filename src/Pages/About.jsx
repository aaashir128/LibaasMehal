import React from 'react'
import Common from '../Components/Common'
import stats from '../Images/dev1.jpg'
const About = ()=> {
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
      <Common name={"Here you can find the premium quality Fabrics"} imgSrc={stats} visit={'./contact'} btname={"Order Now"}/>

        </div>
      </div>
    </div>

  );
}

export default About;
