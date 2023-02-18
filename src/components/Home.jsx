import Data from "../Data.json";
import "../styles/Home.css";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useEffect, useRef } from "react";
import Slider from "react-slick";

const Home = () => {
  // let img = 1;
  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplaySpeed: 4000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
 
    // responsive:[
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       vertical:false
    //     },
    //   },
    // ]
  };
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <section className="home_section" id="home">
      <div className="home_banner_img">
        <video
          autoPlay
          ref={videoEl}
          src={require("../assests/HomeVdo.mp4")}
          type="video/mp4"
          loop
          muted
        />
        <div className="social_media_links">
          <div className="facebook">
            <a href="https://www.facebook.com/VrikshFertility?mibextid=ZbWKwL">
              <BsFacebook />
            </a>
          </div>
          <div className="instagram">
            <a href="https://www.instagram.com/vrikshfertility/">
              <BsInstagram />
            </a>
          </div>
          <div className="linkedin">
            <a href="https://www.linkedin.com/company/vrikshfertility/">
              <FaLinkedinIn />
            </a>
          </div>

          <div className="twitter">
            <a href="https://www.twitter.com/VrikshFertility">
              <AiFillTwitterCircle />
            </a>
          </div>
        </div>
      </div>
      <div className="home_content">
        
        <Slider {...settings} style={{"maxWidth":"500px","width":"100%"}} id="hometxt_head">
          <div>
            <h2 className="home_title">
              <span className="titleclr">
              Fertility Care -
              </span>
              Your Journey towards A Loving Parenthood
            </h2>
            <p className="home_desc">
              {Data.landingPage.Banner_Section.section_desc}
            </p>
          </div>
          <div>
            <h2 className="home_title">
              <span className="titleclr">
              Fertility Counseling & Treatments - 
              </span>
              Personalised care for Both Men & Women
            </h2>
          </div>
        </Slider>

        <div className="home_book_app">
          <a href="#book">{Data.landingPage.Banner_Section.section_btn_text}</a>
        </div>
        {/* <div className="home_icons">
          {Data.landingPage.Banner_Section.section_icons.map((item) => {
            return (
              <img key={img++} src={require("../assests/Icons/" + item)} />
            );
          })}
        </div> */}
      </div>
      <div></div>
      <div className="mobile_banner">
        <img src={require("../assests/Photos/homeback2.png")} alt="" />
      </div>
    </section>
  );
};

export default Home;
