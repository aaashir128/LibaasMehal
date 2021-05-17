import React from "react";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Services from "./Pages/Sercvice";
import LoginPage from './Pages/LoginPage' 
import Navbar from './Components/Navbar'
import { Redirect, Route, Switch } from "react-router";
import Footer from './Components/Footer'
import SignUp from './Components/Signup'

const App = () => {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signUp" component={SignUp} />
        <Redirect to="/" />
      </Switch>
      <Footer />

          </>
  );
};

export default App;
