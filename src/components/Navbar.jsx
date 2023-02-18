import "../styles/Navbar.css";
import { HashLink } from "react-router-hash-link";
import { BiX, BiMenu } from "react-icons/bi";
import { useState } from "react";
import MenuItems from "./MenuItems";
import Data from "../Data.json";
import "../styles/Dropdown.css";

const Navbar = () => {
  const [menuBtn, setMenuBtn] = useState(false);
  const navMenuToggle = () => {
    setMenuBtn(!menuBtn);
    document.querySelector(".nav_menu").classList.toggle("to_right");
  };

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
                <HashLink to={"/#" + item.id}>{item.title}</HashLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

// {
//   document
//     .querySelector(".nav_menu")
//     .classList.toggle("to_right");
  
// }