import React from "react";
import "../styles/Footer.css";
import Data from "../Data.json";
import Phone from "../assests/Icons/phone.png";
import Mail from "../assests/Icons/envelope.png";
import { BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="section footer" id="footer">
        <div className="footer_body">
          <div className="footer_head">
            <img
              src={require("../assests/Icons/" + Data.footer.section_image)}
              alt=""
              className="ft_logo"
            />
            <div className="ft_services">
              <div className="ft_ser_heading">Contact</div>
              <div className="ft_con_data">
                <div className="ft_con">
                  <img src={Phone} alt="" className="ft_icons" />{" "}
                  {Data.footer.contact.mail}
                </div>
                <div className="ft_con">
                  <img src={Mail} alt="" className="ft_icons" />{" "}
                  {Data.footer.contact.phone_no}
                </div>
              </div>
            </div>
            <div></div>
            <div className="ft_services">
              <div className="ft_ser_heading">Social Media Links</div>
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
          <div className="footer_sec_body">
            <div className="ft_services">
              <div className="ft_ser_heading">Our Services</div>
              {Data.footer.services.map((item, index) => {
                return (
                  <a key={index} href="/">
                    {item}
                  </a>
                );
              })}
            </div>
            <div className="ft_services">
              <div className="ft_ser_heading">Fertility Preservation</div>
              {Data.footer.Fertility_Preservation.map((item, index) => {
                return (
                  <a key={index} href="/">
                    {item}
                  </a>
                );
              })}

              <div className="ft_services">
                <div className="ft_ser_heading">Third Party Services</div>
                {Data.footer.Third_Party_Services.map((item, index) => {
                  return (
                    <a key={index} href="/">
                      {item}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="ft_services">
              <div className="ft_ser_heading">Surgeries</div>
              {Data.footer.Surgeries.map((item, index) => {
                return (
                  <a key={index} href="/">
                    {item}
                  </a>
                );
              })}
            </div>
            <div className="ft_services">
              <div className="ft_ser_heading">International Patients</div>
              {Data.footer.International_Patients.map((item, index) => {
                return (
                  <a key={index} href="/">
                    {item}
                  </a>
                );
              })}

              <div className="ft_services">
                <div className="ft_ser_heading">Resources</div>
                {Data.footer.Resources.map((item, index) => {
                  return (
                    <a key={index} href="/">
                      {item}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="ft_foot">Vriksh Fertility &copy; 2022 All Right Reserved.</div>
    </>
  );
};

export default Footer;
