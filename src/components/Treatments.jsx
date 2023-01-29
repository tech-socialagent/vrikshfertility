import "../styles/Treatments.css";
import Trimg from "../assests/Photos/Servicesbackg.png";
import FAQImg from "../assests/Photos/christian-bowen-OJOE587CWuE-unsplash.jpg";
import { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

function Treatments({ data }) {
  const sections = document.querySelectorAll(".treatments-subtitle section");
  const navLi = document.querySelectorAll(".treatments-list li");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(" scrolllll");
      var current = "";
      sections.forEach((sec) => {
        const sectionTop = sec.offsetTop;
        // console.log(sectionTop);
        if (window.scrollY >= sectionTop - 100) {
          current = sec.getAttribute("id");
          console.log("oo yesh " + current);
        }
      });

      navLi.forEach((li) => {
        li.classList.remove("liactive");
        if (li.classList.contains(current)) {
          li.classList.add("liactive");
        }
      });
    });
  }, []);

  const myfunc = (e) => {
    // document
    //   .querySelectorAll(".faqdrop")
    //   .forEach((item) => item.classList.remove("show"));
    e.currentTarget.classList.toggle("show");
  };
  return (
    <div className="treatment">
      <img src={Trimg} alt="" className="treatment_top_image" />
      <div className="Treatments-main">
        <div className="Treatments-left">
          <ul className="treatments-list">
            {data.sub_data.map((item, index) => {
              return (
                <li key={index} className={`sec${++index}`}>
                  <a href={`#sec${index}`}>- {item["sub-title"]}</a>
                </li>
              );
            })}
            {/* <li className="sec1">
              <a href="#sec1">- Ovulation Induction</a>
            </li>
            <li className="sec2">
              <a href="#sec2">- When is OI-TI advised?</a>
            </li>
            <li className="sec3"> 
              <a href="#sec3">- What should I expect?</a>
            </li>
            <li className="sec4">
              <a href="#sec4">- Guidelines for Post Procedure</a>
            </li>
            <li className="sec5">
              <a href="#sec5">- Are there any risks?</a>
            </li>
            <li className="sec6">
              <a href="#sec6">- FAQs</a>
            </li> */}
          </ul>
        </div>
        <div></div>
        <div className="Treatments-right">
          <div className="treatments-title">
            <h1>{data.treatment_name} Treatments</h1>
            <p>Our Services {data.treatment_name}</p>
          </div>
          <div className="treatments-subtitle">
            {data.sub_data.map((item, index) => {
              return (
                <section key={index} id={`sec${index++}`}>
                  <h1 id="treatments-subtitle-1">{item["sub-title"]}</h1>
                  {item.desc.map((des,index)=>{
                    return(<p key={index}>{des}</p>)
                  })}
                  <p></p>
                </section>
              );
            })}
           {/* 
            <img src="" alt="" />
            <section id="sec2">
              <h1 id="treatments-subtitle-2">When is OI-TI advised?</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat exercitation ullamco
                laboris nis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat exercitation ullamco
                laboris nis.
              </p>
            </section>
            <section id="sec3">
              <h1 id="treatments-subtitle-3">What should I expect?</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat exercitation ullamco
                laboris nis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat exercitation ullamco
                laboris nis.
              </p>
            </section>
            <section id="sec4">
              <h1 id="treatments-subtitle-4">Guidelines for Post Procedure</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat exercitation ullamco
                laboris nis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat exercitation ullamco
                laboris nis.
              </p>
            </section>
            <section id="sec5">
              <h1 id="treatments-subtitle-5">Are there any risks?</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat exercitation ullamco
                laboris nis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat exercitation ullamco
                laboris nis.
              </p>
            </section>
            <section id="sec6">
              <div className="FAQ-main" id="faq">
                <div className="faq-text">FAQ's</div>
                <h1 className="faq-heading">FAQ's on OT-TI Treatment</h1>
                <div className="FAQ-left">
                  <div className="dropdowntt">
                    <div className="faqdrop " onClick={(e) => myfunc(e)}>
                      <button className="dropbtn">
                        Do you do residential work?{" "}
                        <span className="fqicon">
                          <FaAngleDown />
                        </span>
                      </button>
                      <div id="myDropdown" className="dropdown-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                    <div className="faqdrop " onClick={(e) => myfunc(e)}>
                      <button className="dropbtn">
                        Do you do residential work?{" "}
                        <span className="fqicon">
                          <FaAngleDown />
                        </span>
                      </button>
                      <div id="myDropdown2" className="dropdown-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                    <div className="faqdrop " onClick={(e) => myfunc(e)}>
                      <button className="dropbtn">
                        Do you do residential work? <FaAngleDown />
                      </button>
                      <div id="myDropdown3" className="dropdown-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                 <div className="FAQ-right">
              <img src={FAQImg} alt="" className="FAQ-right-baby-img1" />
              <img src={FAQImg} alt="" className="FAQ-right-baby-img2" />
            </div> 
              </div>
            </section> 
             */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Treatments;
