import "../styles/FaqPage.css";
import { FiSearch } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import Data from "../Data.json";
import { useEffect, useState,useRef } from "react";

const FaqPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const inputdata=useRef()

  const updateData = () => {
    setFaqs([...Data.faqpage]);
  };
  useEffect(() => {
    updateData();
  }, []);

  const searchFunc = (words) => {
    if (words.trim().length > 0) {
      const res = faqs.filter((item) =>
        Object.values(item).join(" ").toLocaleLowerCase().includes(words)
      );
      setSearchData(res);
    }
  };
  const fqdropHandler = (e) => {
    e.currentTarget.classList.toggle("factive");
  };

  const search=()=>{
    searchFunc(inputdata.current.value.toLowerCase())
  }
  return (
    <section className="faqPage">
      <div className="header">
        <div className="header_left">
          <div>
            <h2>FAQ’s</h2>
            <h3>Top Questions about Treatments</h3>
            <div className="searchBar">
              <FiSearch />
              <input ref={inputdata} type="text" placeholder="Search here" onChange={search} />
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
        {faqs.length>0 && searchData.length>0?
          searchData.map((item,index)=>{
            return(
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
              <div className="faq_desc">{item.fdesc}</div>
            </div>
            )
          })
        : faqs.map((item, index) => {
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
              <div className="faq_desc">{item.fdesc}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqPage;
