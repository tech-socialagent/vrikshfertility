import "../styles/Navbar.css";
import { HashLink } from "react-router-hash-link";
import { BiX, BiMenu } from "react-icons/bi";
import { useEffect, useState } from "react";
import MenuItems from "./MenuItems";
import Data from "../Data.json";
import "../styles/Dropdown.css";
import { useDispatch, useSelector } from "react-redux";
import { openForm,closeForm } from "../App";

const Navbar = (props) => {
  const enq=useSelector(state=>state.enform.value);
  const dispatch=useDispatch();

  // const [enq, setEnq] = useState(false);
  const [menuBtn, setMenuBtn] = useState(false);
  const navMenuToggle = () => {
    setMenuBtn(!menuBtn);
    document.querySelector(".nav_menu").classList.toggle("to_right");
  };

  const enquiry = (e) => {
    if (e.target.innerText === "Enquire Now") {
      // setEnq(true);
      dispatch(openForm())
    }
  };

  const closeform = () => {
    // setEnq(false);
    dispatch(closeForm())
  };

  useEffect(()=>{
    if(props.enq) enquiry()
  })
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

          <li
            // onClick={() => navMenuToggle()}
            className="nav_item nav_btns get_quote_btn"
          >
            <HashLink
              to={"/#" + Data.header.nav_btns[0].id}
              onClick={(e) => enquiry(e)}
            >
              {Data.header.nav_btns[0].title}
            </HashLink>
          </li>
          <li
            onClick={() => navMenuToggle()}
            className="nav_item nav_btns get_quote_btn"
          >
            <HashLink
              to={"#"}
              onClick={(e) => enquiry(e)}
            >
              {Data.header.nav_btns[1].title}
            </HashLink>
          </li>
          
        </ul>
      </div>

      {enq && (
        <div className="enqform">
          <div className="enqf_btn" onClick={closeform}>
            <BiX />
          </div>
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
