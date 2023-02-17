import Data from "../Data.json";
import "../styles/Choose.css";
function Choose() {
  return (
    <section className="section choose" id="choose">
      {/* <img src={require("../assests/Photos/"+Data.landingPage.choose_us_section.section_image)} alt="" className="choose_back_vdo" /> */}
      <div className="choose_body">
        
        <div>
          <h2 className="section_title">
            {Data.landingPage.choose_us_section.section_title}
          </h2>
          <div className="section_subtitle">
            {Data.landingPage.choose_us_section.section_desc}
          </div>
          
          <div className="key_factors">
            {Data.landingPage.choose_us_section.key_factors.map(
              (item, index) => {
                return (
                  <div key={index} className="keycards">
                    <div className="card_heading">{item.item_title}</div>
                    <div className="card_desc">{item.item_desc}</div>
                  </div>
                );
              }
            )}
          </div>
          
        </div>
        <div></div>
      </div>
    </section>
  );
}
export default Choose;

{/* <img
            className="backicons bi2"
            src={require("../assests/Icons/SPERMS(60x60).png")}
            alt=""
          /> */}