import "../styles/Consultation.css";
import ConsultationImg from '../assests/Photos/Frame 52.png'
function Consultation(){
    return(
        <section className="consultation-main">
        <div className="consultion">
              <form className="consultion-form">
                <h1>Need Consultation</h1>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email ID"/>
                <select className="dropdown-option">
                    <option>17/01/2023</option>
                </select>
                <select className="dropdown-option">
                    <option>10:00AM</option>
                </select>
                <button>Book Appointment</button>
            </form>
        </div>
        <div className="consultation-form-img">
        <img src={ConsultationImg} alt=""/>
        </div>

        </section>
    )
}
export default Consultation;