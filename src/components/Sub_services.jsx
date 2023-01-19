import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Data from "../Data.json";
import "../styles/Sub_services.css";
const Sub_services = ({ ser_data }) => {
  return (
    <BrowserRouter>
      <div className="sub_compo">
        <div className="sub_service">
          <div className="compo_header">
            {ser_data.sub_services.map((item, index) => {
              return (
                <div key={index} className="compo_nav_items">
                  <Link to={item.sub_service_name.toLocaleLowerCase()}>
                    {item.sub_service_name}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="compo_body">
            <Switch>
              {/* <Route
                exact
                path={ser_data.sub_services[0].sub_service_name.toLowerCase()}
              >
                <div className="compo_title">
                  {ser_data.sub_services[0].sub_service_title}
                </div>
                <div className="compo_desc">
                  {ser_data.sub_services[0].sub_service_desc}
                </div>
                <div className="compo_keyfactors">
                  {ser_data.sub_services[0].sub_service_keypoints.map(
                    (item, index) => {
                      return <div className="key_item">{item}</div>;
                    }
                  )}
                </div>
              </Route> */}

              {ser_data.sub_services.map((item, index) => {
                return (
                  <Route
                    key={index}
                    path={"/" + item.sub_service_name.toLowerCase()}
                  >
                    <div className="compo_title">{item.sub_service_title}</div>
                    <div className="compo_desc">{item.sub_service_desc}</div>
                    <div className="compo_keyfactors">
                      <ul>
                      {item.sub_service_keypoints.map((item, index) => {
                        return <li className="key_item" key={index}>{item}</li>;
                      })}
                      </ul>
                    </div>
                  </Route>
                );
              })}
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Sub_services;
