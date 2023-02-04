import React from "react";
import Data from "../Data.json";
import { BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import "../styles/About.css";
import { Link } from "react-router-dom";

const Doctors = () => {
  return (
    <section className="meetDoctors about section" id="about">
      <img
        className="background"
        src={require("../assests/Photos/aboutbackg.png")}
        alt=""
      />
      <div className="about_body">
        <h2 className="section_title">
          {Data.landingPage.Doctor_section.section_title}
        </h2>
        <div className="section_body">
          <div className="about_video">
            <img
              src={require("../assests/Photos/" +
                Data.landingPage.Doctor_section.section_video)}
              alt=""
            />
          </div>
          <div className="about_doctor">
            <div className="doctor_detail">
              <div className="doc_image">
                {/* <div></div> */}
                <img
                  src={require("../assests/Photos/" +
                    Data.landingPage.Doctor_section.Doctors_detail[0].photo)}
                  alt=""
                />
              </div>

              <div className="doctor_data">
                <h4 className="doc_name">
                  {Data.landingPage.Doctor_section.Doctors_detail[0].name}
                </h4>
                {Data.landingPage.Doctor_section.Doctors_detail[0].designation.map(
                  (item, index) => {
                    return (
                      <div className="doc_desig" key={index}>
                        {item}
                      </div>
                    );
                  }
                )}
                <div className="social_media_links">
                  <div className="whatsapp">
                    <a href="">
                      <IoLogoWhatsapp />
                    </a>
                  </div>
                  <div className="instagram">
                    <a href="">
                      <BsInstagram />
                    </a>
                  </div>
                  <div className="linkedin">
                    <a href="">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="doctor_desc">
              {Data.landingPage.Doctor_section.Doctors_detail[0].desc}
            </p>
            {/* <Link to={"/about_doctor"} className="doc_knowmore_btn btn">Know More</Link> */}
            {/* <div to={"/about_doctor"} className="doc_knowmore_btn btn"><Link to={"/about_doctor"}>Know More</Link></div> */}
            <div className="home_book_app">
              <Link to="/about_doctor">Know More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
