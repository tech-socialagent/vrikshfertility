import { useState } from "react";
import Data from "../Data.json";
import "../styles/Sub_services.css";
const Sub_services = ({ ser_data }) => {
  const [sub, setSub] = useState(
    ser_data.sub_services[0].sub_service_name.split(" ").join("").toLowerCase()
  );

  console.log(sub);
  return (
    <div className="sub_compo">
      <div className="sub_service">
        <div className="compo_header">
          {ser_data.sub_services.map((item, index) => {
            return (
              <div key={index} className="compo_nav_items">
                <div
                  className="sub_item"
                  onClick={() =>
                    setSub(
                      item.sub_service_name.split(" ").join("").toLowerCase()
                    )
                  }
                >
                  {item.sub_service_name}
                </div>
              </div>
            );
          })}
        </div>

        <div className="compo_body">
          {ser_data.sub_services.map((item, index) => {
            return (
              <div key={index}>
                {sub ===
                item.sub_service_name.split(" ").join("").toLowerCase() ? (
                  <>
                    <div className="compo_title">{item.sub_service_title}</div>
                    <div className="compo_desc">{item.sub_service_desc}</div>
                    <div className="compo_keyfactors">
                      <ul>
                        {item.sub_service_keypoints.map((item, index) => {
                          return (
                            <li className="key_item" key={index}>
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sub_services;
