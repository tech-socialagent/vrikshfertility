import "../styles/Sub_services.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import{BsArrowRightCircle} from "react-icons/bs"

const Sub_services = ({ ser_data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade:true,
  };
  
  return (
    <div className="service_slides" >

      <Slider {...settings}>
        {ser_data.sub_services.map((item, index) => {
          return (
            <div className="ser_slide" key={index}>
              <div className="compo_heading">{item.sub_service_name}</div>
              <div className="compo_title">{item.sub_service_title}</div>
              {item.sub_service_desc.map((item,index)=>{
                return<div className="compo_desc" key={index}>{item}</div>
              })}
              {/* <Link to={item.sub_service_name.replace(/[^a-zA-Z0-9 ]/g,' ').split(" ").join("_").toLowerCase()}>Readmore <span className="readarr"><BsArrowRightCircle/></span></Link> */}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Sub_services;
