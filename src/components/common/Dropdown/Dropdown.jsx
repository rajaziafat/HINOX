import { arrowDropdown } from "images";

import classes from "./Dropdown.module.css";

const Dropdown = ({ label, defaultSelected }) => {
  return (
    <div className={classes.dropdown}>
      <div className={classes.label}>{label}</div>
      <div className={classes.value}>{defaultSelected} </div>
      <img className={classes.arrow} src={arrowDropdown} alt="arrow" />
    </div>
  );
};

export default Dropdown;
