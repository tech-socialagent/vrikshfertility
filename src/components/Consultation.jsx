import "../styles/Consultation.css";
import Data from "../Data.json";
import ConsultationImg from "../assests/Photos/Frame 52.png";
function Consultation() {
  return (
    <section className="consultation-main section">
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
            placeholder={Data.landingPage.consultation_section.form_items[2]}
          />
          <input
            type="time"
            placeholder={Data.landingPage.consultation_section.form_items[3]}
          />
          <button>Book Appointment</button>
        </form>
      </div>
      <div className="consultation-form-img">
        <img src={ConsultationImg} alt="" />
      </div>
    </section>
  );
}
export default Consultation;
