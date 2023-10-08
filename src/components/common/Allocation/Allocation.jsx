import { emptyWalletTick } from "images";
import classes from "./Allocation.module.css";

const Allocation = () => {
  return (
    <>
      <div className={classes.title}>
        <img src={emptyWalletTick} alt="wallet" />
        <div className="text-light-1 font-popins fs-14">My Allocation</div>
      </div>

      <div className={classes.loader}>
        <div className={classes.loaderMain}>
          <div className={classes.loaderBar}></div>
        </div>
      </div>
    </>
  );
};

export default Allocation;
