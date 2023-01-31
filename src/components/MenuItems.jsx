import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "../styles/Dropdown.css";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
   
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
        {/* {console.log(items)} */}
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}
            {depthLevel > 0 ? (
              <span className="arrow_right">  </span> 
            ) : (
              <span className="arrow" ></span>
            )}
          </button>
          <Dropdown
            depthlevel={depthLevel}
            submens={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={`/${items.title.split(" ").join("").toLowerCase()}`}> {items.title} </Link>
      )}
    </li>
  );
};
// &raquo;
export default MenuItems;
