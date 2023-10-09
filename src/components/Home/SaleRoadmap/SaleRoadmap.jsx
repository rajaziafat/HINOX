import Section from "components/common/Section/Section";
import classes from "./SaleRoadmap.module.css";
import { planet, saleRoadmap, tickCircle, tickCircleGrey } from "images";
import clsx from "clsx";
import Enabled from "components/common/Enabled/Enabled";
import Allocation from "components/common/Allocation/Allocation";
import React, { useState } from "react";

const roadmapItems = [
  {
    title: "REGISTRATION STARTS",
    date: "15 Mar,2023",
    time: "22:11 UTC",
  },
  {
    title: "REGISTRATION ENDS",
    date: "15 Mar,2023",
    time: "22:11 UTC",
  },
  {
    title: "EXECUTIVE ROUND",
    date: "15 Mar,2023",
    time: "22:11 UTC",
  },
  {
    title: "STAKERS ROUND",
    date: "15 Mar,2023",
    time: "22:11 UTC",
  },
  {
    title: "COMMUNITY ONGOING",
    date: "15 Mar,2023",
    time: "22:11 UTC",
  },
  {
    title: "SALES ENDED",
    date: "15 Mar,2023",
    time: "22:11 UTC",
  },
];

const SaleRoadmap = () => {
  const [currentStep, setCurrentStep] = useState(2);

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
          {roadmapItems.map((el, idx) => {
            return (
              <React.Fragment key={"roadmap-item-" + idx}>
                <div
                  className={clsx(
                    classes.step,
                    idx + 1 <= currentStep && classes.complete
                  )}
                  onClick={() => setCurrentStep(idx + 1)}
                >
                  <div className={classes.tickContainer}>
                    <img
                      src={idx + 1 <= currentStep ? tickCircle : tickCircleGrey}
                      alt="tick-circle"
                    />
                  </div>
                  <div className={classes.title}>{el.title}</div>
                  <div className={classes.smallText}>Date: {el.date}</div>
                  <div className={classes.smallText}>Time: {el.time}</div>
                </div>
                {idx < roadmapItems.length - 1 && (
                  <div
                    className={clsx(
                      classes.line,
                      idx + 1 < currentStep && classes.complete,
                      idx + 1 === currentStep && classes.completing
                    )}
                  ></div>
                )}
              </React.Fragment>
            );
          })}
          {/* <div className={clsx(classes.step, classes.complete)}>
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
          </div> */}
        </div>
      </div>
    </Section>
  );
};

export default SaleRoadmap;
