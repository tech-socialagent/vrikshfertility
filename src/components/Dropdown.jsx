import MenuItems from "./MenuItems";
import "../styles/Dropdown.css";

const Dropdown = ({ submens, dropdown, depthlevel }) => {
  console.log(depthlevel)
  depthlevel = depthlevel + 1;
  console.log(depthlevel)
  // const dropdownClass = 

  return (
    <ul className={`dropdown ${depthlevel > 1 ? "dropdown-submenu" : ""} ${dropdown ? "show" : ""}`}>
      {submens.map((submenu, index) => {
        {
          console.log(submenu);
        }
         return(
           <MenuItems items={submenu} key={index} depthLevel={depthlevel} />
        );
      })}
    </ul>
  );
};
export default Dropdown;
