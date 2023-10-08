import { calendar } from "images";
import classes from "./Date.module.css";

const StartDate = ({ ...rest }) => {
  return (
    <div className={classes.datePickerRoot}>
      <input type="date" {...rest} />
      <img src={calendar} alt="calendar" />
    </div>
  );
};

export default StartDate;
