import React from "react";
import "../styles/OnlineConsultation.css";
import Data from "../Data.json";

const OnlineConsultation = () => {
  return (
    <div className="online_consultation" id="online_consultation">
      <div className="section_header">
        <div className="section_title">Online Consultation</div>
        <div className="section_desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
      <div className="section_body">
        <div className="consultation_form">
          <div>
            <div className="input_field">
              <div className="input_title">Full Name</div>
              <input type="text" placeholder="Name Please" />
            </div>
            <div className="input_field">
              <div className="input_title">Email Address</div>
              <input type="text" placeholder="Emailid@email.com" />
            </div>
            <div className="input_field">
              <div className="input_title">Phone Number</div>
              <input type="text" placeholder="Name Please" />
            </div>
            <div className="input_field">
              <div className="input_title">Gender</div>
              <select>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="input_field">
              <div className="input_title">Where are you from?</div>
              <input type="text" placeholder="Select Location" />
            </div>
            <div className="input_field">
              <div className="input_title">
                Have you taken any treatment before?
              </div>
              <select name="treatmentTaken" id="treatmentTaken">
                <option value={"yes"}>Yes</option>
                <option value={"no"}>No</option>
              </select>
            </div>
          </div>
          <div></div>
        </div>
        <div className="checkbox">
          <div className="input_title">What treatments you choose for?</div>
          <div className="multi_select_checkbox">
            {Data.treatmentOptions.map((treatment, index) => {
              return (
                <div className="select_items" key={index}>
                  <input
                    type="checkbox"
                    className="select_treatments"
                    name={treatment.split(" ").join("_").toLowerCase()}
                    value={treatment}
                  />
                  <span>{treatment}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div to={"/about_doctor"} className="doc_knowmore_btn btn">Send Enquiry</div>
      </div>
    </div>
  );
};

export default OnlineConsultation;
