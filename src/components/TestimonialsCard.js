import Data from "../Data.json";
import "../styles/TestimonialsCard.css";
import TestimonialsCardPhoto from "../assests/Icons/TestimonialsCardPhoto.png";
function TestimonialsCard() {
  return (
    <section className="testimonialsCard">
      <div className="testimonialsCard-Main">
        <div className="testimonialsCard-dec">
          <p>
            {Data.landingPage.testimonials_section.reviews_item[0].review_text}
          </p>
        </div>

        <div className="testimonials-About">
          <div className="testimonials-Image">
            <img src={TestimonialsCardPhoto} alt="" />
          </div>
          <p className="testimonialsCard-name">
            {Data.landingPage.testimonials_section.reviews_item[0].name},
          </p>
          <p className="testimonialsCard-age">
            {" "}
            {Data.landingPage.testimonials_section.reviews_item[0].age}
          </p>
        </div>
        <p className="testimonialsCard-degig">
          {Data.landingPage.testimonials_section.reviews_item[0].profession}
        </p>
      </div>
    </section>
  );
}
export default TestimonialsCard;
