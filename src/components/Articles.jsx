import "../styles/Articles.css";
import Data from "../Data.json";
import Article_card from "./Article_card";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";

const Articles = () => {
  const [slide,setSlide]=useState(1);

  var settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slide,
    slidesToScroll: 0,
  };
  useState(()=>{
    if(window.innerWidth> 450 && window.innerWidth <850) setSlide(2); 
    else if(window.innerWidth > 850) setSlide(3);
    else setSlide(1);
    // console.log(window.innerWidth)
  },[])

  return (
    <section className="articles section" id="articles">
      <div className="articles_body">
        <h2 className="section_title">
          {Data.landingPage.article_section.section_title}
        </h2>
        <div className="section_subtitle">
          {Data.landingPage.article_section.section_desc}
        </div>
        <div className="section_body">
          <div className="article_items multi">
            {Data.landingPage.article_section.articles.map((item, index) => {
              return (
                <div className="arItems" key={index}>
                  <Article_card
                    title={item.title}
                    img={item.img}
                    user={item.postby}
                    desc={item.desc}
                    time={item.date}
                    arlink={item.more_link}
                  />
                </div>
              );
            })}
          </div>
          <div className="single">
            <Slider {...settings2}>
              {Data.landingPage.article_section.articles.map((item, index) => {
                return (
                  <div className="arItems" key={index}>
                    <Article_card
                      title={item.title}
                      img={item.img}
                      user={item.postby}
                      desc={item.desc}
                      time={item.date}
                      arlink={item.more_link}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
