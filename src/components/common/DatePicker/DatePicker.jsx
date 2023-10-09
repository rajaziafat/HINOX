import { calendar } from "images";
import DatePicker from "react-datepicker";
import classes from "./Date.module.css";

const StartDate = ({ placeholder, value, ...rest }) => {
  return (
    <div className={classes.datePickerRoot}>
      <DatePicker selected={value} placeholderText={placeholder} {...rest} />
      <img src={calendar} alt="calendar" />
    </div>
  );
};

export default StartDate;
