import Data from "../Data.json";
import "../styles/Services.css";
import Sub_services from "./Sub_services";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const Services = () => {
  // "fertilitytreatment"
  const [cr_service, setCr_service] = useState(Data.landingPage.services_section.services[0]);
  const [ser, setSer] = useState(false);
  const [subSer, setSubSer] = useState(false);

  // console.log(cr_service);

  const handler = (e) => {
    document.querySelectorAll(".services_items").forEach((item) => {
      item.classList.remove("active");
    });

    e.currentTarget.classList.add("active");
  };
  const serHandler1 = (e) => {
    document.querySelectorAll(".heading1").forEach((item) => {
      item.classList.remove("vactive");
    });
    e.currentTarget.classList.add("vactive");
  };
  const serHandler2 = (e) => {
    document.querySelectorAll(".sub-ser-view").forEach((item) => {
      item.classList.remove("sactive");
    });
    e.currentTarget.classList.add("sactive");
  };
  useEffect(() => {
    document
      .querySelector(".services_items:first-child")
      .classList.add("active");
  }, []);

  return (
    <section className="section services" id="services">
      <h2 className="section_title">
        {Data.landingPage.services_section.section_title}
      </h2>
      <div className="services_body">
        <div className="webService">
          <div className="services_menu">
            {Data.landingPage.services_section.services.map((item, index) => {
              return (
                <div
                  className="services_items"
                  key={index}
                  onClick={(e) => handler(e)}
                >
                  <div className="bar"></div>
                  <div className="ser_item" onClick={() => setCr_service(item)}>
                    {item.service_title}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="services_details">
            <Sub_services ser_data={cr_service}/>
            {/* {Data.landingPage.services_section.services.map((item, index) => {
              return (
                <div key={index}>
                  {cr_service ===
                  item.service_title.split(" ").join("").toLowerCase() ? (
                    <Sub_services ser_data={item} />
                  ) : (
                    ""
                  )}
                </div>
              );
            })} */}
          </div>
        </div>
        {/* mobile */}
        <div className="phoneService">
          {Data.landingPage.services_section.services.map((item, index) => {
            return (
              <div className="heading1" onClick={(e) => serHandler1(e)}>
                <div className="ser-mob-h1" key={index}>
                  {item.service_title}{" "}
                  <span className="dropicon1">
                    <FaAngleRight />
                  </span>
                </div>

                <div className="submob-ser">
                  {item.sub_services.map((item, index) => {
                    return (
                      <div
                      key={index}
                        className="sub-ser-view"
                        onClick={(e) => {
                          serHandler2(e);
                        }}
                      >
                        <div className="sub-mob-ser-h2" >
                          {item.sub_service_name}{" "}
                          <span className="dropicon2">
                            <FaAngleRight />
                          </span>
                        </div>

                        <div className="sub-ser-body">
                          <img src={""} alt="" className="sub-item-img" />
                          <div className="msub-item-title">
                            {item.sub_service_title}
                          </div>
                          <div className="msub-item-desc">
                            {item.sub_service_desc}
                          </div>
                          {/* <ul className="msub-item-keys">
                            {item.sub_service_keypoints.map((item, index) => {
                              return <li className="msub-key-pts">{item}</li>;
                            })}
                          </ul> */}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
// .service_title.split(" ").join("").toLowerCase()