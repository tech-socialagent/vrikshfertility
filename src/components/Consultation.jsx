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
      case "revisit":
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
        <div className="tabs tactive" id="firstvisit" onClick={(e) => tabhandler(e)}>
          Primary Consultation
        </div>
        <div className="tabs" id="revisit" onClick={(e) => tabhandler(e)}>
          Follow Up Consultation
        </div>
        <div className="tabs" id="videocons" onClick={(e) => tabhandler(e)}>
          Video Consultation
        </div>
      </div>


      <iframe
        width="100%"
        height="600px"
        src={book}
        FrameBorder="0"
        // allowfullscreen=""
      ></iframe>
    </section>
  );
}
export default Consultation;
