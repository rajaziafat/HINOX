import Section from "components/common/Section/Section";
import classes from "./SaleRoadmap.module.css";
import { planet, saleRoadmap, tickCircle, tickCircleGrey } from "images";
import clsx from "clsx";
import Enabled from "components/common/Enabled/Enabled";
import Allocation from "components/common/Allocation/Allocation";

const SaleRoadmap = () => {
  return (
    <Section>
      <div className={classes.box}>
        <img className={classes.planet} src={planet} alt="planet" />
        <div className={classes.boxTop}>
          <div>
            <img src={saleRoadmap} alt="sale-roadmap" />
          </div>

          <div className={classes.rightSection}>
            <Allocation />

            <div className={classes.amount}>
              <div>400 USD</div>
              <div>3600 USD</div>
            </div>

            <div className={classes.reserveTitle}>Reserve-Spot</div>

            <Enabled />
          </div>
        </div>
        <div className={classes.boxBottom}>
          <div className={clsx(classes.step, classes.complete)}>
            <div className={classes.tickContainer}>
              <img src={tickCircle} alt="tick-circle" />
            </div>
            <div className={classes.title}>REGISTRATION STARTS</div>
            <div className={classes.smallText}>Date: 15 Mar,2023</div>
            <div className={classes.smallText}>Time: 22:11 UTC</div>
          </div>
          <div className={clsx(classes.line, classes.complete)}></div>
          <div className={clsx(classes.step, classes.complete)}>
            <div className={classes.tickContainer}>
              <img src={tickCircleGrey} alt="tick-circle" />
            </div>
            <div className={classes.title}>REGISTRATION ENDS</div>
            <div className={classes.smallText}>Date: 15 Mar,2023</div>
            <div className={classes.smallText}>Time: 22:11 UTC</div>
          </div>
          <div className={clsx(classes.line, classes.completing)}></div>
          <div className={clsx(classes.step)}>
            <div className={classes.tickContainer}>
              <img src={tickCircleGrey} alt="tick-circle" />
            </div>
            <div className={classes.title}>EXECUTIVE ROUND</div>
            <div className={classes.smallText}>Date: 15 Mar,2023</div>
            <div className={classes.smallText}>Time: 22:11 UTC</div>
          </div>
          <div className={classes.line}></div>
          <div className={clsx(classes.step)}>
            <div className={classes.tickContainer}>
              <img src={tickCircleGrey} alt="tick-circle" />
            </div>
            <div className={classes.title}>STAKERS ROUND</div>
            <div className={classes.smallText}>Date: 15 Mar,2023</div>
            <div className={classes.smallText}>Time: 22:11 UTC</div>
          </div>
          <div className={classes.line}></div>
          <div className={clsx(classes.step)}>
            <div className={classes.tickContainer}>
              <img src={tickCircleGrey} alt="tick-circle" />
            </div>
            <div className={classes.title}>COMMUNITY ONGOING</div>
            <div className={classes.smallText}>Date: 15 Mar,2023</div>
            <div className={classes.smallText}>Time: 22:11 UTC</div>
          </div>
          <div className={classes.line}></div>
          <div className={clsx(classes.step)}>
            <div className={classes.tickContainer}>
              <img src={tickCircleGrey} alt="tick-circle" />
            </div>
            <div className={classes.title}>SALES ENDED</div>
            <div className={classes.smallText}>Date: 15 Mar,2023</div>
            <div className={classes.smallText}>Time: 22:11 UTC</div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SaleRoadmap;
