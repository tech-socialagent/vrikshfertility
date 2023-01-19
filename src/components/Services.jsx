import Data from "../Data.json";
import "../styles/Services.css";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Sub_services from "./Sub_services";

const Services = () => {
  return (
    <BrowserRouter>
      <section className="section services" id="services">
        <h2 className="section_title">
          {Data.landingPage.services_section.section_title}
        </h2>
        <div className="services_body">
          <div className="services_menu">
            {Data.landingPage.services_section.services.map((item, index) => {
              return (
                <div className="services_items" key={index}>
                  <span className="bar"></span>
                  <Link to={item.service_title.toLowerCase()}>
                    {item.service_title}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="services_details">
            <Switch>
              {/* <Route exact path={Data.landingPage.services_section.services[0].service_title.toLowerCase()}>
              <Sub_services ser_data={Data.landingPage.services_section.services[0]} />
              </Route> */}

              {Data.landingPage.services_section.services.map((item, index) => {
                return (
                  <Route
                    key={index}
                    path={"/" + item.service_title.toLowerCase()}
                  >
                    <Sub_services ser_data={item} />
                  </Route>
                );
              })}
            </Switch>
          </div>
        </div>
      </section>
    </BrowserRouter>
  );
};

export default Services;
