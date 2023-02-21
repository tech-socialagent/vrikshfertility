import "../styles/Navbar.css";
import { HashLink } from "react-router-hash-link";
import { BiX, BiMenu } from "react-icons/bi";
import { useState } from "react";
import MenuItems from "./MenuItems";
import Data from "../Data.json";
import "../styles/Dropdown.css";
import EnquiryForm from "./EnquiryForm";

const Navbar = () => {
  const [enq, setEnq] = useState(false);
  const [menuBtn, setMenuBtn] = useState(false);
  const navMenuToggle = () => {
    setMenuBtn(!menuBtn);
    document.querySelector(".nav_menu").classList.toggle("to_right");
  };

  const enquiry = (e) => {
    if (e.target.innerText === "Enquiry Now") {
      setEnq(true);
    }
  };

  const closeform=()=>{
    setEnq(false)
  }

  return (
    <div className="Nav_body">
      <div className="app_logo">
        <a href="/">
          <img
            src={require("../assests/svgs/" + Data.header.header_icon)}
            alt="logo"
          />
        </a>
      </div>

      <div className="menu_bar" onClick={navMenuToggle}>
        {!menuBtn ? <BiMenu /> : <BiX />}
      </div>

      <div className="nav_menu">
        <ul className="menus">
          {Data.header.nav_items.map((item, index) => {
            const depthLevel = 0;
            return (
              <MenuItems items={item} depthLevel={depthLevel} key={index} />
            );
          })}

          {Data.header.nav_btns.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => navMenuToggle()}
                className="nav_item nav_btns get_quote_btn"
              >
                <HashLink to={"/#" + item.id} onClick={(e) => enquiry(e)}>
                  {item.title}
                </HashLink>
              </li>
            );
          })}
        </ul>
      </div>

      {enq && (
        <div className="enqform">
          <div className="enqf_btn" onClick={closeform}><BiX/></div>
          <iframe
            FrameBorder="0"
            title="contact_form"
            style={{ height: "800px", width: "100%", border: "none" }}
            src="https://forms.zohopublic.in/vrikshhealthcare/form/ContactUs/formperma/iABUpMbxGdwNv_pXxQnLFLZkBSqhEpFgIvav0liML6A"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Navbar;

// {
//   document
//     .querySelector(".nav_menu")
//     .classList.toggle("to_right");

// }
