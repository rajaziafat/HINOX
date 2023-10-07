import Section from "components/common/Section/Section";

import classes from "./UpcomingProjects.module.css";
import {
  arbitrum,
  arrowRightCircle,
  hidaoWorthy,
  hinoxEcosystem,
} from "images";
import SectionTitle from "components/common/SectionTitle/SectionTitle";

const UpcomingProjects = () => {
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
                <div className={classes.approx}>1 BUSD≈ 16.75 HIT</div>
              </div>
            </div>

            <p>
              Introducing Panda, the cryptocurrency project with a user
              interface design that stands out like no other! Get ready to
              embark on a journey of seamless transactions, effortless
              navigation, and beautiful aesthetics. Panda is here to make your
              cryptocurrency experience smoother, faster, and more enjoyable.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default UpcomingProjects;
