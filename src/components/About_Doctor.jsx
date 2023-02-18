import "../styles/About_Doctor.css";
// import youtube from "../assests/Icons/youtube-3.png";
// import insta from "../assests/Icons/IG.png";
// import linkdin from "../assests/Icons/linkedin.png";
// import twitter from "../assests/Icons/Twitter.png";
import DoctorPic from "../assests/Photos/drsneha_abt.png";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { useEffect } from "react";

function AboutDr() {
  // const sendMail = () => {
  //   console.log(".................................");
  //   const mail = document.getElementById("form_mailid");
  //   const config = {
  //     Username: "bayawi8712@mirtox.com",
  //     Password: "CB9F3A42CB7E4AA7424E6659836C1D008359",
  //     Host: "smtp.elasticemail.com",
  //     Port: "2525",

  //     To: "bayawi8712@mirtox.com",
  //     From: "bkmahapatra27@gmail.com",
  //     Subject: "test",
  //     Body: "test",
  //   };

  //   if (window.Email) {
  //     window.Email.send(config).then((res) => console.log(res));
  //   } else {
  //     console.log("Nnoooo********************");
  //   }
  // };
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className="about-doctor">
      <div className="about_doc_body">
        <div className="about-doc-left">
          <img src={DoctorPic} alt="" />
          <div className="about-doc-name">Dr.Sneha Shetty</div>
          <div className="about-doc-desc">
            Clinical Director & Chief Fertility Specialist
          </div>
          <div className="about-doc-social-media-links">
            <div className="social_media_links">
              {/* <div className="whatsapp">
                    <a href="">
                      <IoLogoWhatsapp />
                    </a>
                  </div> */}
              <div className="instagram">
                <a href="https://www.instagram.com/drsneha_fertilitydoc">
                  <BsInstagram />
                </a>
              </div>
              <div className="linkedin">
                <a href="https://www.linkedin.com/in/drsnehashetty">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <h1>Follow Her</h1>
          </div>
        </div>
        <div className="about-doctor-right">
          <div className="about-doc-title">About Dr.Sneha Shetty</div>
          <div className="about-doc-subtitle">
            Clinical Director & Chief Fertility Specialist
          </div>
          <div className="about-doc-description">
            <p>
              Dr. Sneha Shetty has completed her Bachelor of Medicine & Bachelor
              of Surgery – MBBS From the esteemed S.D.M College of Medical
              Sciences & Hospital. She went on to complete her Post Graduation
              in Obstetrics & gynaecology from the prestigious Mahadevappa
              Rampure College of Medical Sciences and Hospital.
            </p>
            <p>
              Dr. Sneha Shetty has completed her Fellowship & Diploma in Minimal
              Access Surgery from World Laparoscopy Hospital, Delhi, and has
              also done her Fellowship in Reproductive Medicine & IVF from
              Homerton University Hospital – London & UKSH Germany - While also
              having trained extensively in the management of Infertility
              through a One Year full time fellowship In ART in India.
            </p>
            <p>
              With a total experience of 12+ years of handling various
              Gynaecological & Infertility, Assisted Reproductive Techniques.
              She has been getting the best Pregnancy results with Naturally
              Cycles, IUI, IVF, ICSI, & ICSI-OD through Drugs, Surgeries & Basic
              to Advanced Fertility Treatments.
            </p>
            <p>
              In addition to her degrees, Dr. Sneha Shetty has been contributing
              to healthcare needs by her acute sense of medical analysis. She
              loves taking care of patients. In order to build a relationship
              with a patient, she strives to listen to her patients and be their
              advocate through empathy & patience. By making the visit
              comfortable and relaxed, she makes them feel like she's not only
              their doctor but a friend they can talk to about any health
              concerns they may have. She is one of the Best Fertility
              Specialists & Laparoscopic surgeons in Bangalore.
            </p>
          </div>
          <div className="about-doc-membership">
            <h1>Membership</h1>
            <ul>
              <li>
                Executive member of Bangalore Society of Obstetrics and
                Gynaecology (BSOG)
              </li>
              <li>
                Karnataka Chapter -Indian Society of Assisted Reproduction
                (KISAR & ISAR)
              </li>
              <li>World Association of Laparoscopic Surgeons ( WALS)</li>
              <li>
                Society of American Gastroenterologists and endoscopic Surgeon
                (SAGES)
              </li>
              <li>Indian Medical Association (IMA)</li>
              <li>Academy of Clinical Embryologists- (ACE)</li>
            </ul>
            <h1>Awards</h1>
            <ul>
              <li>Best outgoing student during post-graduation.</li>
              <li>
                A.P.J ABDUL KALAM health and medical excellence award for best
                and dedicated services in the medical field 2021.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="about-doctor-contact">
        <div className="about-doctor-form-contact">
          <h1>Contact Me</h1>
          <div className="about-contact-form">
            <div className="input-section">
              <input type="name" placeholder="Name" id="form_name" />
              <input type="email" placeholder="Email ID" id="form_mailid" />
              <input type="number" placeholder="Contact Number" id="form_ph" />
              <input type="name" placeholder="Subject" id="form_subject" />
            </div>
            <div className="about-doc-contact-form-second">
              <textarea placeholder="meassage" className="contact-meassage" />
              <button >Send meassage</button>
              {/* <button onClick={() => sendMail()}>Send meassage</button> */}
            </div>
          </div>
        </div>
        <div className="about-doctor-form-photo">
          <img
            src={require("../assests/Photos/michal-bar-haim-NYvRaxVZ-_M-unsplash.jpg")}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
export default AboutDr;
