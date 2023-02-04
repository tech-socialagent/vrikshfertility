import "../styles/Sub_services.css";
import Slider from "react-slick";

const Sub_services = ({ ser_data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 2000,
    autoplay: true,
    fade:true
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
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
              
              {/* <div className="compo_keyfactors">
                <ul>
                  {item.sub_service_keypoints.map((item, index) => {
                    return <li className="key_item" key={index}>{item}</li>;
                  })}
                </ul>
              </div> */}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Sub_services;
