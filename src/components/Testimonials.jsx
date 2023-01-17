import "../Styles/Testimonials.css";
import Data from "../Data.json";
import TestimonialsBackground from "../Assets/SVG/TestimonialsBackground.svg";
import TestimonialsCard from "./TestimonialsCard";

function Testimonials() {
  return (
    <section className="testimonials-main" id="testimonials">
      <div className="testimonials-background">
        <img src={TestimonialsBackground} alt="" />
      </div>

      <div className="testimonials-heading">
        <h1>{Data.landingPage.testimonials_section.section_title}</h1>
        <p>{Data.landingPage.testimonials_section.section_desc}</p>
      </div>
      <div className="testimonialsCard-parent"></div>
      <TestimonialsCard />
      <div className="changing-btn">
        <button></button>
        <button> </button>
        <button></button>
        <button></button>
      </div>
    </section>
  );
}
export default Testimonials;
