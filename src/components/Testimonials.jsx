import "../styles/Testimonials.css";
import Data from "../Data.json";
import TestimonialsCard from "./TestimonialsCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };
  var settingsmob = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="testimonials section" id="testmonials">
      
      <div className="testimonial_body">
        <h2 className="section_title">
          {Data.landingPage.testimonials_section.section_title}
        </h2>
        <div className="section_subtitle">
          {Data.landingPage.testimonials_section.section_desc}
        </div>
        <div className="testimonial_cards test_multi">
          <Slider {...settings}>
            {Data.landingPage.testimonials_section.reviews_item.map(
              (item, index) => {
                return (
                  <div key={index}>
                    <TestimonialsCard
                      desc={item.review_text}
                      name={item.name}
                      age={item.age}
                      prof={item.profession}
                      pic={item.picUrl}
                      clr={item.color}
                    />
                  </div>
                );
              }
            )}
          </Slider>
        </div>
        <div className="testimonial_cards test_single">
          <Slider {...settingsmob}>
            {Data.landingPage.testimonials_section.reviews_item.map(
              (item, index) => {
                return (
                  <div key={index}>
                    <TestimonialsCard
                      desc={item.review_text}
                      name={item.name}
                      age={item.age}
                      prof={item.profession}
                      pic={item.picUrl}
                      clr={item.color}
                    />
                  </div>
                );
              }
            )}
          </Slider>
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
