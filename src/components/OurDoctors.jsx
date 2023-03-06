import React from "react";
import { Link } from "react-router-dom";
import Data from "../Data.json";
import "../styles/OurDoctors.css";

const OurDoctors = () => {
  return (
    <div className="our_doctors_section">
      {Data.doctors_detail.map((doc, index) => {
        return (
          <div key={index} className="doctor_card">
            <img src={require("../assests/Photos/"+doc.photo)} alt="doctors" />
            <h3>{doc.name}</h3>
            <h6>{doc.designation}</h6>
            <Link to={doc.link}>Know More</Link>
          </div>
        );
      })}
    </div>
  );
};

export default OurDoctors;
