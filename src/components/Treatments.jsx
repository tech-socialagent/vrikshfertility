import "../styles/Treatments.css";
import Trimg from "../assests/Photos/Servicesbackg.png";
import { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";

function Treatments({ data }) {
  window.scrollTo(0, 0);
  const sections = document.querySelectorAll(".treatments-subtitle .section");
  const navLi = document.querySelectorAll(".treatments-list li");
  useEffect(() => {

    window.addEventListener("scroll", () => {
      console.log(" scrolllll");
      var current = "";
      sections.forEach((sec) => {
        const sectionTop = sec.offsetTop;

        if (document.documentElement.scrollTop >= sectionTop - 200) {
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
  }, [navLi,sections]);

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
        <aside className="Treatments-left">
          <ul className="treatments-list">
            {data.sub_data.map((item, index) => {
              return (
                <li key={index} className={`sec${++index}`}>
                  <a href={`#sec${index}`}>
                    <div className="bar"></div>
                    {item["sub-title"]}
                  </a>
                </li>
              );
            })}
          </ul>
        </aside>
        {/* <div className="mid"></div> */}
        <div className="Treatments-right">
          <div className="treatments-title">
            <h1>
              {data.treatment_subdt
                ? data.treatment_subdt
                : data.treatment_name}
            </h1>
            {/* <h1>{data.treatment_name+" "}{data.treatment_subdt.length>=1 && data.treatment_subdt}</h1> */}
            {data.treatment_desc.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
          <div className="treatments-subtitle">
            {data.sub_data.slice(0, -1).map((item, index) => {
              return (
                <section key={index} id={`sec${++index}`} className={"section"}>
                  <h1 id="treatments-subtitle-1">{item["sub-title"]}</h1>
                  {item.desc.map((des, index) => {
                    return <p key={index}>{des}</p>;
                  })}
                </section>
              );
            })}

            <section id={`sec${data.sub_data.length}`}>
              <div className="FAQ-main" id="faq">
                <h1 className="faq-heading">
                  FAQ's on {data.treatment_name} Treatment
                </h1>
                <div className="FAQ-left">
                  <div className="dropdowntt">
                    {data.sub_data[data.sub_data.length - 1].desc.map(
                      (item, index) => {
                        return (
                          <div
                            key={index}
                            className="faqdrop "
                            onClick={(e) => myfunc(e)}
                          >
                            <button className="dropbtn">
                              {item.title}
                              <span className="fqicon">
                                <FaAngleDown />
                              </span>
                            </button>
                            <div id="myDropdown" className="dropdown-content">
                              {item.fdesc.map((item, index) => {
                                return <p key={index}>{item}</p>;
                              })}
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Treatments;
