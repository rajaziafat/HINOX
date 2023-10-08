import { contributor, registration, staking } from "images";
import classes from "./TrueFalse.module.css";

const TrueFalse = () => {
  return (
    <div className={classes.cardTitleleft}>
      <div className={classes.item}>
        <div className={classes.itemLeft}>
          <img src={registration} alt="registration" />
          Registration
        </div>
        <div className={classes.false}>False</div>
      </div>
      <div className={classes.item}>
        <div className={classes.itemLeft}>
          <img src={contributor} alt="contributor" />
          Contributor
        </div>
        <div className={classes.false}>False</div>
      </div>
      <div className={classes.item}>
        <div className={classes.itemLeft}>
          <img src={staking} alt="staking" />
          Staking
        </div>
        <div className={classes.true}>True</div>
      </div>
    </div>
  );
};

export default TrueFalse;
