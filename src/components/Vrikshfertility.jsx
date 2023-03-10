import React, { useEffect } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Benefits from "./Benefits";
import Choose from "./Choose";
import Teams from "./Teams";
import Testimonials from "./Testimonials";
import Articles from "./Articles";
import Consultation from "./Consultation";
import Services from "./Services";
import { openForm } from "../App";
import { useDispatch } from "react-redux";

const Vrikshfertility = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(openForm())
  })
  return (
    <div>
      <Home />
      <About />
      <Teams />
      <Services />
      <Benefits />
      <Choose />
      <Testimonials />
      <Articles />
      <Contact />
      <Consultation />
    </div>
  );
};

export default Vrikshfertility;
