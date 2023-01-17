import React from "react";
import '../styles/Contact.css'
import Data from "../Data.json";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="contact_body">
        <div className="contact_map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.109814196897!2d77.64832121401902!3d12.90065971992333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15a7a2eefe8d%3A0x368b0a8a95c64724!2sVriksh%20Fertility!5e0!3m2!1sen!2sin!4v1673859055077!5m2!1sen!2sin"
          allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="timings">
          <div>
            <div className="time_heading">
              {Data.landingPage.location_time_section.timing.heading}
            </div>
            <div className="workinghours">
              <div className="time_sub_heading">Monday - Friday</div>
              <div className="main_time">
                {Data.landingPage.location_time_section.timing.weekdays}
              </div>
              <div className="time_sub_heading">Saturday - Sunday</div>
              <div className="main_time">
                {Data.landingPage.location_time_section.timing.weekends}
              </div>
            </div>
            <div className="contact_details">
              <div className="time_sub_heading">Email</div>
              <div className="main_time">
                {Data.landingPage.location_time_section.email}
              </div>
              <div className="time_sub_heading">Call</div>
              <div className="main_time">
                {Data.landingPage.location_time_section.phone_no}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
