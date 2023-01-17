import "../styles/Testimonials.css";
import Data from "../Data.json";
import TestimonialsCard from "./TestimonialsCard";

function Testimonials() {
  return (
    <section className="testimonials section" id="testmonials">
      <div className="testimonial_body">
        <h2 className="section_title">
          {Data.landingPage.testimonials_section.section_title}
        </h2>
        <div className="section_subtitle">
          {Data.landingPage.testimonials_section.section_desc}
        </div>
        <div className="testimonial_cards">
          {Data.landingPage.testimonials_section.reviews_item.map(
            (item, index) => {
              return (
                <TestimonialsCard
                  desc={item.review_text}
                  name={item.name}
                  age={item.age}
                  prof={item.profession}
                  pic={item.picUrl}
                  clr={item.color}
                />
              );
            }
          )}
        </div>
      </div>
      <img
        src={require("../assests/Photos/aboutbackg.png")}
        alt=""
        className="background"
      />
    </section>
  );
}
export default Testimonials;
