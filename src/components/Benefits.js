import Data from "../Data.json";
import '../styles/Benefits.css'
function Benefits() {
  // let data=require('../Data.json');

  return (
    <div>
      <div className="benefits_background">
      <h1 className="mobileView-heading">{Data.landingPage.Benefits_section.section_title}</h1>
      <div className="green-round-parent">
      <div className="green-round1"></div>
      </div>

        <div className="benefits_main">
          <p className="benefits-title">
            {Data.landingPage.Benefits_section.section_title}
          </p>

          <div className="benefits-card-main">
            {Data.landingPage.Benefits_section.benefits_items.map((item) => {
              return (
                <div className="benefits-card">
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
        </div>
        <div className="green-round-parent2">
      <div className="green-round2"></div>
      </div>

      </div>
    </div>
  );
}
export default Benefits;
