import "../styles/FaqPage.css";
import { FiSearch } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import Data from "../Data.json";

const FaqPage = () => {

  const fqdropHandler = (e) => {
    e.currentTarget.classList.toggle("factive");
  };

  return (
    <section className="faqPage">
      <div className="header">
        <div className="header_left">
          <div>
            <h2>FAQ’s</h2>
            <h3>Top Questions about Treatments</h3>
            <div className="searchBar">
              <FiSearch />
              <input type="text" placeholder="Search here" />
            </div>
          </div>
        </div>
        <div className="header_right">
          <p>
            Need something cleared up? Here are our most frequently asked
            questions.
          </p>
        </div>
      </div>
      <div className="faqpage_body">
        {Data.faqpage.map((item, index) => {
          return (
            <div 
            key={index}
              className="faqItem"
              onClick={(e) => {
                fqdropHandler(e);
              }}
            >
              <div className="faqItem_head">
                <div className="faq_title">{item.title}</div>
                <FaAngleDown />
              </div>
              <div className="faq_desc">
                {item.fdesc}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqPage;
