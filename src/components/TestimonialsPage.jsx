import React, { useEffect } from "react";
import "../styles/Testimonialpage.css";
import Data from "../Data.json";
import "../styles/TestimonialsCard.css";

const TestimonialsPage = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <div className="testimonial_page">
      <div className="backg"></div>
      <div className="testimonial_page_body">
        <h3>Testimonials</h3>
        <p>
          Bringing hope to families with our personalized and compassionate
          fertility treatments.
        </p>
        <div className="testimonials">
          {Data.testimonial_page.map((item, index) => {
            return (
              <div className="test_card" key={index}>
                <div className="test_desc">{item.desc}</div>
                <div className="test_user">
                  <img
                    src={require("../assests/Icons/dummyuser.png")}
                    alt=""
                    className="user_pic"
                  />
                  <div className="test_user_detail">
                    <div className="user_name">{item.name}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
