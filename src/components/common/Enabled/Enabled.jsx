import { reserveLine, tickGreen } from "images";
import classes from "./Enabled.module.css";

const Enabled = () => {
  return (
    <div className={classes.reserveBoxes}>
      <div className={classes.reserveBox}>
        <img src={tickGreen} alt="tick-green" />
        <div>Enabled</div>
      </div>
      <img src={reserveLine} alt="line" />
      <div className={classes.reserveBox}>
        <img src={tickGreen} alt="tick-green" />
        <div>Executed</div>
      </div>
    </div>
  );
};

export default Enabled;
