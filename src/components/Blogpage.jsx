import React from "react";
import Data from "../Data.json";
import "../styles/Blogpage.css";
import { FiArrowUpRight } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Blogpage = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <section className="blogpage">
      <div className="section_header">
        <h2 className="section_title">Articles</h2>
        <div className="section_subtitle">
          Resources To Keep You Informed With Our Blog
        </div>
      </div>
      <div className="section_body">
        <div className="blogSlidebox">
          <Slider {...settings}>
            {Data.landingPage.article_section.articles.map((blog, index) => {
              return (
                <div key={index} className="blogSlide">
                  <img
                    src={require("../assests/Photos/" + blog.img)}
                    alt=""
                    className="blogImg"
                  />
                  <div className="inData">
                    <div className="blogUpload">
                      <div className="upData">
                        {blog.postby + ". " + blog.date}
                      </div>
                      <a href={blog.more_link} className="blogLink">
                        Readmore
                      </a>
                    </div>
                    <div className="blogTitle">{blog.title}</div>
                    <div className="blogDesc">{blog.desc}</div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="blogs_cards">
          {Data.landingPage.article_section.articles.map((blog, index) => {
            return (
              <div key={index} className="blogCard">
                <img
                  src={require("../assests/Photos/" + blog.img)}
                  alt=""
                  className="blogImg"
                />
                <div className="blogUpload">
                  <div className="upData">{blog.postby + ". " + blog.date}</div>
                  <a href={blog.more_link} className="blogLink">
                    <FiArrowUpRight />
                  </a>
                </div>
                <div className="blogTitle">{blog.title}</div>
                <div className="blogDesc">{blog.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blogpage;
