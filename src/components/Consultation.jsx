import "../styles/Consultation.css";
// import Data from "../Data.json";
// import ConsultationImg from "../assests/Photos/Frame 52.png";
// import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function Consultation() {
  
  const [book, setBook] = useState(
    "https://harishetty-vrikshfertility.zohobookings.in/portal-embed#/customer/117018000000025066"
  );
  const setactive=(e)=>{
    document.querySelectorAll(".tabs").forEach(item=>{
      item.classList.remove("tactive")
    })

    e.target.classList.add("tactive");
  }

  const tabhandler = (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case "firstvisit":
        setBook(
          "https://harishetty-vrikshfertility.zohobookings.in/portal-embed#/customer/117018000000025066"
        );
        setactive(e)
        break;
      case "revist":
        setBook(
          "https://harishetty-vrikshfertility.zohobookings.in/portal-embed#/customer/117018000000031108"
        );
        setactive(e)
        break;
      case "videocons":
        setBook(
          "https://harishetty-vrikshfertility.zohobookings.in/portal-embed#/customer/117018000000031028"
        );
        setactive(e)
        break;
      default:
        setBook(
          "https://harishetty-vrikshfertility.zohobookings.in/portal-embed#/customer/117018000000025066"
        );
    }
  };
  return (
    <section className="consultation-main section" id="book">
      <div className="appointment_title">Book Your Appointment</div>
      <div className="consultation_tab">
        <div className="tabs" id="firstvisit" onClick={(e) => tabhandler(e)}>
          First Visit
        </div>
        <div className="tabs" id="revist" onClick={(e) => tabhandler(e)}>
          Revist
        </div>
        <div className="tabs" id="videocons" onClick={(e) => tabhandler(e)}>
          Video Consultation
        </div>
      </div>
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
        src={book}
        FrameBorder="0"
        // allowfullscreen=""
      ></iframe>
    </section>
  );
}
export default Consultation;
