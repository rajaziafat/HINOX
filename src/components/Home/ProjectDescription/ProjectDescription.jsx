import { useState } from "react";

import Section from "components/common/Section/Section";
import classes from "./ProjectDescription.module.css";
import {
  claimingSystem,
  claimingSystemBg,
  fair,
  fairBg,
  governance,
  governanceBg,
  person,
  projectIntroTitle,
  protectedIdobg,
  protectedIdoo,
  youtubeLogo,
} from "images";

const ProjectDescription = () => {
  const [videoClicked, setVideoClicked] = useState(false);

  return (
    <Section>
      <div className={classes.main}>
        <div className={classes.left}>
          <div className={classes.box}>
            <img src={claimingSystem} alt="claimingSystem" />
            <img
              className={classes.bg}
              src={claimingSystemBg}
              alt="claimingSystemBg"
            />
            <h3>Claiming system</h3>
          </div>
          <div className={classes.box}>
            <img src={protectedIdoo} alt="protectedIdo" />
            <img
              className={classes.bg}
              src={protectedIdobg}
              alt="protectedIdobg"
            />
            <h3>Protected IDOs</h3>
          </div>
          <div className={classes.box}>
            <img src={governance} alt="governance" />
            <img className={classes.bg} src={governanceBg} alt="governanceBg" />
            <h3>Governance</h3>
          </div>
          <div className={classes.box}>
            <img src={fair} alt="fair" />
            <img className={classes.bg} src={fairBg} alt="fairBg" />
            <h3>Fair & Secure</h3>
          </div>
        </div>
        <div className={classes.right}>
          <h3>PROJECT INTRO</h3>

          <div className={classes.box}>
            {!videoClicked ? (
              <div
                className={classes.boxMain}
                onClick={() => setVideoClicked(true)}
              >
                <img className={classes.yt} src={youtubeLogo} alt="" />
                <img
                  className={classes.title}
                  src={projectIntroTitle}
                  alt="project-title"
                />

                <div className={classes.people}>
                  <div className={classes.peopleItem}>
                    <img src={person} alt="person" />
                    <div>
                      <h6 className={classes.name}>Michael Michael</h6>
                      <p>hinox CMO</p>
                    </div>
                  </div>
                  <div className={classes.peopleItem}>
                    <img src={person} alt="person" />
                    <div>
                      <h6 className={classes.name}>Michael Michael</h6>
                      <p>hinox CMO</p>
                    </div>
                  </div>
                  <div className={classes.peopleItem}>
                    <img src={person} alt="person" />
                    <div>
                      <h6 className={classes.name}>Michael Michael</h6>
                      <p>hinox CMO</p>
                    </div>
                  </div>
                  <div className={classes.peopleItemDescs}>
                    <div>
                      <div className={classes.descItem}>
                        <p>Venue: </p>
                        <h6>Twitter</h6>
                      </div>
                      <div className={classes.descItem}>
                        <p>Reward:</p> <h6>200 USDT</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/tQUzJCmkJ_M?si=YniqhlI9j-LZjSIG&autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProjectDescription;
