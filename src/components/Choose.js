import Data from "../Data.json";
import "../Styles/Choose.css";
function Choose() {
  return (
    <div className="Choose-main">
      <div className="choose-text-part">
        <h1>{Data.landingPage.choose_us_section.section_title}</h1>
        <p className="choose-reason">
          {Data.landingPage.choose_us_section.section_desc}
        </p>
        <section className="choose-quality-part">
          <div>
            <h1>
              {Data.landingPage.choose_us_section.key_factors[0].item_title}
            </h1>
            <p>{Data.landingPage.choose_us_section.key_factors[0].item_desc}</p>
          </div>
          <div>
            <h1>
              {Data.landingPage.choose_us_section.key_factors[1].item_title}
            </h1>
            <p>{Data.landingPage.choose_us_section.key_factors[1].item_desc}</p>
          </div>
        </section>

        <section className="choose-quality-part2">
          <div>
            <h1>
              {Data.landingPage.choose_us_section.key_factors[2].item_title}
            </h1>
            <p>{Data.landingPage.choose_us_section.key_factors[2].item_desc}</p>
          </div>
          <div>
            <h1>
              {Data.landingPage.choose_us_section.key_factors[3].item_title}
            </h1>
            <p>{Data.landingPage.choose_us_section.key_factors[3].item_desc}</p>
          </div>
        </section>
      </div>
      <div className="choose-video-part">
        {/* <video>
                <sourse src="video"/>
                </video> */}
        {/* <img src="../Assets/Photos/baby-parents.jpg" alt=""/> */}
        <img
          src={require("../Assets/Photos/choose-us.jpg")}
          alt=""
          className="benefits-image"
        />
      </div>
    </div>
  );
}
export default Choose;
