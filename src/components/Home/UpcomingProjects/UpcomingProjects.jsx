import Section from "components/common/Section/Section";

import classes from "./UpcomingProjects.module.css";
import {
  arbitrum,
  arrowRightCircle,
  hidaoWorthy,
  hinoxEcosystem,
  pageLeft,
  pageRight,
  protectedIdo2,
} from "images";
import SectionTitle from "components/common/SectionTitle/SectionTitle";
import clsx from "clsx";
import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useTimer } from "react-timer-hook";

const time = new Date();
time.setSeconds(time.getSeconds() + 60 * 60 + 15);

const UpcomingProjects = () => {
  const slider = useRef();
  const { minutes, hours } = useTimer({
    expiryTimestamp: time,
  });

  return (
    <Section>
      <SectionTitle tag={103}>Live and upcoming Projects</SectionTitle>

      <div className={classes.buttons}>
        <button className={classes.btnWhiteOutlined}>
          Add Sales Dates To Calendar
        </button>
        <button className={classes.btnGreen}>
          See All Sales
          <img src={arrowRightCircle} alt="arrow" />
        </button>
      </div>

      <div className={classes.projects}>
        <div className={classes.arrows}>
          <button onClick={() => slider.current.go("-1")}>
            <img src={pageLeft} alt="" />
          </button>
          <button onClick={() => slider.current.go("+1")}>
            <img src={pageRight} alt="" />
          </button>
        </div>
        <Splide
          ref={slider}
          className={classes.slide}
          options={{
            arrows: false,
            perPage: 2,
            gap: 14,

            breakpoints: {
              767: {
                perPage: 1,
              },
            },
          }}
        >
          {new Array(3).fill(0).map((el, idx) => {
            return (
              <React.Fragment key={"project-cad-" + idx}>
                <SplideSlide>
                  <div className={classes.projectCard}>
                    <div className={classes.projectCardHead}>
                      <div className={classes.top}>
                        <div className={classes.left}>
                          <img src={hinoxEcosystem} alt="hinox" />

                          <div>
                            <h5 className={classes.title}>HINOX Ecosystem</h5>
                            <div className={classes.subTitle}>
                              <img src={arbitrum} alt="arbitrum" /> Arbitrum
                            </div>
                          </div>
                        </div>
                        <div className={classes.right}>
                          <img src={hidaoWorthy} alt="hidaoWorthy" />
                          <div className={classes.approx}>
                            1 BUSD≈ 16.75 HIT
                          </div>
                        </div>
                      </div>

                      <p>
                        Introducing Panda, the cryptocurrency project with a
                        user interface design that stands out like no other! Get
                        ready to embark on a journey of seamless transactions,
                        effortless navigation, and beautiful aesthetics. Panda
                        is here to make your cryptocurrency experience smoother,
                        faster, and more enjoyable.
                      </p>
                    </div>
                    <div className={classes.projectCardBody}>
                      <div className={classes.title}>
                        <h4>
                          Time Left:{" "}
                          <span className={classes.white}>
                            {hours}h:{minutes}mins
                          </span>
                        </h4>
                        <button className={classes.live}>
                          <div className={classes.circle}></div>
                          SALES IS LIVE
                        </button>
                      </div>
                      <h6 className={classes.progress}>Progress (34%)</h6>
                      <div className={classes.loader}>
                        <div className={classes.loaderMain}></div>
                      </div>

                      <div className={classes.shortStatsDesc}>
                        <div>$ 680,000</div>
                        <div className={classes.big}>$ 2,000,000</div>
                      </div>

                      <div className={classes.statsDesc}>
                        <div>Acess:</div>
                        <div className={classes.white}>Public</div>
                      </div>

                      <div className={classes.statsDesc}>
                        <div>Token Price:</div>
                        <div className={classes.white}>$ 0.0045</div>
                      </div>

                      <div className={classes.statsDesc}>
                        <div>Token Symbol::</div>
                        <div className={classes.white}>HIT</div>
                      </div>

                      <div className={classes.statsDesc}>
                        <div>Date Started:</div>
                        <div className={classes.white}>
                          Jan 20.23,11:14AM UTC
                        </div>
                      </div>

                      <button className={classes.participate}>
                        Participate
                      </button>
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className={classes.projectCard}>
                    <div className={classes.projectCardHead}>
                      <div className={classes.top}>
                        <div className={classes.left}>
                          <img src={hinoxEcosystem} alt="hinox" />

                          <div>
                            <h5 className={classes.title}>HINOX Ecosystem</h5>
                            <div className={classes.subTitle}>
                              <img src={arbitrum} alt="arbitrum" /> Arbitrum
                            </div>
                          </div>
                        </div>
                        <div className={classes.right}>
                          <div className={classes.flex}>
                            <img src={hours} alt="protectedIdo2" />
                            <img src={protectedIdo2} alt="protectedIdo2" />
                          </div>
                          <div className={classes.approx}>USDT/USDC</div>
                        </div>
                      </div>

                      <p>
                        Introducing Panda, the cryptocurrency project with a
                        user interface design that stands out like no other! Get
                        ready to embark on a journey of seamless transactions,
                        effortless navigation, and beautiful aesthetics. Panda
                        is here to make your cryptocurrency experience smoother,
                        faster, and more enjoyable.
                      </p>
                    </div>
                    <div className={classes.projectCardBody}>
                      <div className={classes.title}>
                        <h4>
                          Time Left:{" "}
                          <span className={classes.white}>
                            {hours}h:{minutes}mins
                          </span>
                        </h4>
                        <button className={classes.open}>
                          <div className={classes.circle}></div>
                          REGISTRATION OPEN
                        </button>
                      </div>

                      <div className={classes.participants}>
                        <div>Participants:</div>
                        <div>5000</div>
                      </div>

                      <div className={classes.shortStatsDesc}>
                        <div>Reserved Spots</div>
                        <div className={clsx(classes.big, classes.green)}>
                          5000
                        </div>
                      </div>

                      <div className={classes.statsDesc}>
                        <div>Target Raise:</div>
                        <div className={classes.green}>$2,000,000</div>
                      </div>

                      <div className={classes.statsDesc}>
                        <div>Access:</div>
                        <div className={classes.white}>Public</div>
                      </div>

                      <div className={classes.statsDesc}>
                        <div>Token Price:</div>
                        <div className={classes.white}>$ 0.0045</div>
                      </div>

                      <div className={classes.statsDesc}>
                        <div>Token Symbol:</div>
                        <div className={classes.white}>HIT</div>
                      </div>

                      <div className={classes.statsDesc}>
                        <div>Date Started:</div>
                        <div className={classes.white}>
                          Jan 20.23,11:14AM UTC
                        </div>
                      </div>

                      <button className={classes.register}>Register</button>
                    </div>
                  </div>
                </SplideSlide>
              </React.Fragment>
            );
          })}
        </Splide>
      </div>
    </Section>
  );
};

export default UpcomingProjects;
