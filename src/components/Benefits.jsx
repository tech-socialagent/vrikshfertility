import { useEffect } from "react";
import Data from "../Data.json";
import "../styles/Benefits.css";

function Benefits() {
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      const benefit=document.querySelector(".benefits");
      if(document.documentElement.scrollTop+100 < benefit.offsetTop){
        benefit.classList.add("focus");
      }
      // console.log(document.documentElement.scrollTop)
      // console.log(document.querySelector(".benefits").offsetTop)
    })
  },[])
  return (
    <section className="benefits section" id="benefits">
      <div className="benefit_body">
        <h2 className="section_title">
          {Data.landingPage.Benefits_section.section_title}
        </h2>
        <div className="section_body">
          <div className="colorDot1"></div>
          <div className="benefits_items">
            {Data.landingPage.Benefits_section.benefits_items.map((item,index) => {
              return (
                <div className="benefits-card" key={index}>
                  <div>
                    <img
                      src={require("../assests/Icons/" + item.item_image)}
                      alt=""
                      className="benefits-image"
                    />
                  </div>

                  <h1 className="benefits-card-heading">{item.item_title}</h1>

                  <p className="benefits-card-description">{item.item_desc}</p>
                </div>
              );
            })}
          </div>
          <div className="colorDot2"></div>
        </div>
      </div>
    </section>
  );
}
export default Benefits;

