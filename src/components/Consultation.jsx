import "../styles/Consultation.css";
import Data from "../Data.json";
import ConsultationImg from "../assests/Photos/Frame 52.png";
import { Link } from "react-router-dom";
function Consultation() {
  const today=new Date();

  return (
    <section className="consultation-main section" id="book">
      <div className="consultion">
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
            value={`${today.getFullYear()+'-'+today.getDate()+"-"+today.getMonth()}`}          
            
          />
          <input
            type="time"
            placeholder={Data.landingPage.consultation_section.form_items[3]}
          />
          {/* <button>Book Appointment</button> */}
          {/* <div to={"/about_doctor"} className="doc_knowmore_btn btn"><Link to={"/about_doctor"}>Book Appointment</Link></div> */}
          <div className="home_book_app">
              <Link to="/about_doctor">Book Appointment</Link>
            </div>
        </form>
      </div>
      <div className="consultation-form-img">
        <img src={ConsultationImg} alt="" />
      </div>
    </section>
  );
}
export default Consultation;
