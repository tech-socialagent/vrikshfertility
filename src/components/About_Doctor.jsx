import { useEffect } from "react";
import "../styles/About_Doctor.css";

const About_Doctor = ({ doctor }) => {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
  return (
    <section className="about-doctor">
      {/* <div className="about-doc-heading">About Doctors</div> */}
      <div className="about_doc_body">
        <div className="about-doc-left">
          <img src={require("../assests/Photos/" + doctor.photo)} alt="" />
          {/* <div className="about-doc-name">{doctor.name}</div>
          <div className="about-doc-desc">
            {doctor.designation}
          </div> */}
          <div className="about-doc-desig">
            <ul>
              {doctor.degrees.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
          <div className="about-doc-social-media-links"></div>
        </div>
        <div className="about-doctor-right">
          <div className="about-doc-title">{doctor.name}</div>
          <div className="about-doc-subtitle">{doctor.designation}</div>
          <div className="about-doc-description">
            {doctor.desc.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_Doctor;
