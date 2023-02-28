import "../styles/About_Doctor.css";
import DoctorPic from "../assests/Photos/drsneha_abt.png";
import Doctor2Pic from "../assests/Photos/drvikram.png";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { useEffect } from "react";

function AboutDr() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className="about-doctor">
      {/* <div className="about-doc-heading">About Doctors</div> */}
      <div className="about_doc_body">
        <div className="about-doc-left">
          <img src={DoctorPic} alt="" />
          <div className="about-doc-name">Dr.Sneha Shetty</div>
          <div className="about-doc-desc">
            Clinical Director & Chief Fertility Specialist
          </div>
          <div className="about-doc-desig">
            <ul>
              <li>MBBS</li>
              <li>D.G.O</li>
              <li>DIPLOMA IN MINIMAL ACCESS SURGERY- [D.M.A.S]</li>
              <li>FELLOWSHIP IN REPRODUCTIVE MEDICINE (LONDON) - [FRMI]</li>
              <li>
                FELLOWSHIP IN IVF & REPRODUCTIVE MEDICINE (GERMANY) [FIVF & RM]
              </li>
              <li>
                FELLOWSHIP IN ASSISTED REPRODUCTIVE TECHNOLOGY (INDIA) [F.ART]
              </li>
            </ul>
          </div>
          <div className="about-doc-social-media-links">
            <div className="social_media_links">
              {/* <div className="whatsapp">
                    <a href="">
                      <IoLogoWhatsapp />
                    </a>
                  </div> */}
              <div className="instagram">
                <a
                  href="https://www.instagram.com/drsneha_shettyofficial/"
                  target={"_blank"}
                >
                  <BsInstagram />
                </a>
              </div>
              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/drsnehashetty"
                  target={"_blank"}
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <h1>Follow Her</h1>
          </div>
        </div>
        <div className="about-doctor-right">
          <div className="about-doc-title">Dr.Sneha Shetty</div>
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
              With a total experience of 13+ years of handling various
              Gynaecological & Infertility related issues, she has been able to
              achieve the best pregnancy results through Assisted Reproductive
              Techniques such as Natural Cycle Management, IUI, IVF, ICSI, &
              ICSI-OD through Drugs, Surgeries & Basic to Advanced Fertility
              Treatments.
            </p>
            <p>
              In addition to her degrees, Dr. Sneha Shetty has been contributing
              to healthcare needs by her acute sense of medical analysis. She
              loves taking care of patients. In order to build a relationship
              with couples she strives to listen to her patients and be their
              advocate through empathy & patience. She is one of the Best
              Fertility Specialists & Laparoscopic surgeons in Bangalore.
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

      {/* doc2 */}
      <div className="about_doc_body">
        <div className="about-doc-left">
          <img src={Doctor2Pic} alt="" />
          <div className="about-doc-name">Dr. Vikram J Rao</div>
          <div className="about-doc-desc">Consultant</div>
          <div className="about-doc-desig">
            <ul>
              <li>MBBS, MS (General Surgery)</li>
              <li>DNB, Surgical Gastroentrology (KEM, Mumbai)</li>
              <li>FMAS</li>
              <li>FIAGES</li>
              <li>FACRSI</li>
            </ul>
          </div>
          <div className="about-doc-social-media-links">
            {/* <div className="social_media_links">
              <div className="whatsapp">
                    <a href="">
                      <IoLogoWhatsapp />
                    </a>
                  </div> 
               <div className="instagram">
                <a
                  href="https://www.instagram.com/drsneha_shettyofficial/"
                  target={"_blank"}
                >
                  <BsInstagram />
                </a>
              </div>
              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/drsnehashetty"
                  target={"_blank"}
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>  
            <h1>Follow Her</h1> */}
          </div>
        </div>
        <div className="about-doctor-right">
          <div className="about-doc-title">Dr. Vikram J Rao</div>
          <div className="about-doc-subtitle">Consultant</div>
          <div className="about-doc-description">
            <p>
              Dr. Vikram J Rao is a specialist in the field of Advanced
              laparoscopic, Hepato-Pancreatic-Biliary (HPB) and Colorectal
              surgeries. He is a seasoned doctor with demonstrated
              accomplishments in skilled patient evaluation, diagnostics, and
              management in his area of interest with great testimonials to
              prove it. He completed his master’s in general surgery from MRMC,
              Gulbarga under R.G.U.H.S. He had developed a passion for abdominal
              ailments and Minimally Invasive Surgeries since then which led him
              to pursue Surgical Gastroenterology at the prestigious King Edward
              Memorial College and Seth G S Hospital (K.E.M, Mumbai).
            </p>
            <p>
              Dr Vikram J Rao has experience working with stalwarts like Dr R D
              Bapat, Dr Ashwin Supe, and Dr Ramesh Makom. He is passionate about
              surgeries for Gastrointestinal cancers including HPB and
              colorectal malignancies. His team at Belenus Champion Hospital
              strive to be updated and incorporate a holistic approach that
              combines the latest advances with a human touch to ensure quality
              care for our patients.
            </p>
          </div>
          {/* <div className="about-doc-membership">
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
          </div> */}
        </div>
      </div>

      {/* doc3 */}
      <div className="about_doc_body">
        <div className="about-doc-left">
          <img src={Doctor2Pic} alt="" />
          <div className="about-doc-name">Dr. Manohar Bhadrappa</div>
          <div className="about-doc-desc">Consultant</div>
          <div className="about-doc-desig">
            <ul>
              <li>MBBS, MS (General Surgery)</li>
              <li>MCH (Urology)</li>
            </ul>
          </div>
          <div className="about-doc-social-media-links">
            {/* <div className="social_media_links">
              <div className="whatsapp">
                    <a href="">
                      <IoLogoWhatsapp />
                    </a>
                  </div> 
               <div className="instagram">
                <a
                  href="https://www.instagram.com/drsneha_shettyofficial/"
                  target={"_blank"}
                >
                  <BsInstagram />
                </a>
              </div>
              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/drsnehashetty"
                  target={"_blank"}
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>  
            <h1>Follow Her</h1> */}
          </div>
        </div>
        <div className="about-doctor-right">
          <div className="about-doc-title">Dr. Manohar Bhadrappa</div>
          <div className="about-doc-subtitle">Consultant</div>
          <div className="about-doc-description">
            <p>
              Dr. Manohar Bhadrappa is an expert in Laparoscopic treatment for kidney
              diseases, kidney transplant (paediatric kidney transplant, double
              or triple vessel kidney transplant, ABO incompatible kidney
              transplant and swap kidney transplant) and laser endourology with
              expertise in use of Holmium and Thulium lasers (for large
              prostates and staghorn calculi).
            </p>
            
          </div>
          {/* <div className="about-doc-membership">
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
          </div> */}
        </div>
      </div>
    </section>
  );
}
export default AboutDr;
