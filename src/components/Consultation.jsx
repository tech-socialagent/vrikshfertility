import "../styles/Consultation.css";
import Data from "../Data.json";
import ConsultationImg from "../assests/Photos/Frame 52.png";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
function Consultation() {
  const today = new Date();
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <section className="consultation-main section" id="book">
      {/* <div className="consultion">
        <form className="consultion-form">
          <h1>{Data.landingPage.consultation_section.section_title}</h1>
          <input
            type="text"
            placeholder={Data.landingPage.consultation_section.form_items[0]}
          />
          <input
            type="email"
            placeholder={Data.landingPage.consultation_section.form_items[1]}
          />
          <input
            type="date"
          />
          <input
            type="time"
            placeholder={Data.landingPage.consultation_section.form_items[3]}
          />
          
          <div className="home_book_app">
            <Link to="/about_doctor">Book Appointment</Link>
          </div>
        </form>
      </div>
      <div className="consultation-form-img">
        <video className="vdo" autoPlay ref={videoEl} src={require("../assests/ConsoleVdo.mp4")} type="video/mp4" loop muted />  
      </div> */}

      <iframe
        width="100%"
        height="500px"
        src="https://harishetty-vrikshfertility.zohobookings.in/portal-embed#/customer/117018000000025066"
        frameborder="0"
        allowfullscreen=""
      >
        {" "}
      </iframe>
    </section>
  );
}
export default Consultation;
