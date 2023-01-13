import "../styles/Navbar.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { BiX, BiMenu } from "react-icons/bi";
import { useState } from "react";
import Logo from "../assests/svgs/PurpleLogo.svg";
import Data from "../Data.json";

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
          <img src={require("../assests/svgs/"+Data.header.header_icon)} alt="logo" />
        </a>
      </div>

      <div className="menu_bar" onClick={navMenuToggle}>
        {!menuBtn ? <BiMenu /> : <BiX />}
      </div>

      <div className="nav_menu">
        <ul className="nav_items">
          {Data.header.nav_items.map((item) => {
            return (
              <li className="nav_item">
                <a href={"#"+item.id}>{item.title}</a>
              </li>
            );
          })}
          {/* action buttons */}
          {Data.header.nav_btns.map(item=>{
            return (
                <li className="nav_item nav_btns get_quote_btn">
                    <a href={"#"+item.id}>{item.title}</a>
                </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
