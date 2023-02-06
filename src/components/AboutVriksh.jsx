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
              From their first visit to the entire treatment journey, all
              patients are hand held to ensure emotional care along with medical
              care.
            </li>
            <li>
              The centre is equipped with State of the ART equipments and
              infrastructure optimised for high success rate with a pleasing and
              calm ambience.
            </li>
            <li>
              All the staff are experts in their concerned field and go through
              regular training to hone their skills.
            </li>
            <li>
              The SOPs at the centre are based on the latest ICMR standards and
              are updated regularly.
            </li>
          </ul>
          <div className="desc_heading">Team Values</div>
          <ul>
            <li>
              Team Values At Vriksh, we place medical ethics and standards at
              the highest pedestal. All procedures and treatments are
              standardised and documented to ensure transparency throughout the
              patients journey.
            </li>
          </ul>
        </div>
        <div className="about_images">
            <img src={require("../assests/Photos/aboutImagev.jpg")} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutVriksh;
