import "../styles/AboutVriksh.css";

const AboutVriksh = () => {
  return (
    <section className="aboutVriksh">
      <div className="header">
        <div>
          <h2>About Us</h2>
          <h3>Welcome To Vriksh Fertility Center</h3>
        </div>
      </div>
      <div className="body">
        <div className="about_desc">
          <div className="desc_heading">
            Vriksh has been conceptualised with the goal of providing a
            personalised experience for each patient looking to undergo their
            fertility treatment.
          </div>
          <ul>
            <li>
              From the first visit to their entire treatment journey, all
              patients are hand held to ensure emotional support along with medical
              care.
            </li>
            <li>
              The center is equipped with state of the art equipments and
              infrastructure optimised for high success rate with a pleasing and
              calm ambience.
            </li>
            <li>
              All the members of staff are experts in their concerned field and go through
              regular training to hone their skills.
            </li>
            <li>
              The SOPs at the center are based on the latest ICMR standards and
              are updated regularly.
            </li>
          </ul>
          {/* <div className="desc_heading">Team Values</div> */}
          {/* <ul>
            <li>
              Team Values At Vriksh, we place medical ethics and standards at
              the highest pedestal. All procedures and treatments are
              standardised and documented to ensure transparency throughout the
              patients journey.
            </li>
          </ul> */}
        </div>
        <div className="about_images">
            <img src={require("../assests/Photos/aboutImagev.jpg")} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutVriksh;
