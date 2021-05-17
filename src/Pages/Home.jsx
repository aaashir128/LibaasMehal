import React from "react";
import { NavLink } from "react-router-dom";
import Common from "../Components/Common";
import home from "../Images/home.jpg";


const Home = () => {
  return (
    <>
  <Common name={"Welcome to the Mehal of"} imgSrc={home} visit={'/contact'} btname={"Contact Now"}/>
    
    </>
  
  );
};

export default Home;
