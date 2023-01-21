import Data from "../Data.json";
import "../styles/Services.css";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Sub_services from "./Sub_services";
import { useState } from "react";

const Services = () => {
  const [cr_service, setCr_service] = useState("fertilitytreatment");
  console.log(cr_service);
  return (
    <section className="section services" id="services">
      <h2 className="section_title">
        {Data.landingPage.services_section.section_title}
      </h2>
      <div className="services_body">
        <div className="services_menu">
          {Data.landingPage.services_section.services.map((item, index) => {
            return (
              <div className="services_items" key={index}>
                <div className="bar"></div>
                <div className="ser_item"
                  onClick={() =>
                    setCr_service(  
                      item.service_title.split(" ").join("").toLowerCase()
                    )
                  }
                >
                  {item.service_title}
                </div>
              </div>
            );
          })}
        </div>

        <div className="services_details">
          {Data.landingPage.services_section.services.map((item, index) => {
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
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
