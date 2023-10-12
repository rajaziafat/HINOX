import {
  binanceCoin,
  dribbble,
  messenger,
  upcoming,
  whatsapp,
  youtube,
} from "images";
import Section from "components/common/Section/Section";
import classes from "./Hero.module.css";

import { bnb } from "images";
import clsx from "clsx";
import TrueFalse from "components/common/TrueFalse/TrueFalse";
import { useTimer } from "react-timer-hook";

const time = new Date();
time.setSeconds(time.getSeconds() + 60 * 60 * 25 + 60 * 60);

const Hero = () => {
  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp: time,
  });

  return (
    <Section>
      <div className={classes.hero}>
        <div className={classes.heroMain}>
          <div className={classes.card1}>
            <div className={classes.cardTitle}>
              <div className={classes.cardLeft}>
                <img src={binanceCoin} alt="binance coin" />
                <div>
                  <h4>Binance Chain</h4>
                  <p>
                    <small>Token Symbol:</small> BNB
                  </p>
                </div>
              </div>
              <div className={classes.cardRight}>
                <div className={classes.upcoming}>
                  <img src={upcoming} alt="upcoming" /> Upcoming
                </div>
                <p className={classes.approx}>
                  <small>1 BNB ≈</small> 0.58 USDT
                </p>
              </div>
            </div>
            <div className={classes.cardBody}>
              <p>
                Introducing Panda, the cryptocurrency project with a user
                interface design that stands out like no other! Get ready to
                embark on a journey of seamless transactions, effortless
                navigation, and beautiful aesthetics. Panda is here to make your
                cryptocurrency experience smoother, faster, and more enjoyable.
              </p>
            </div>
            <div className={classes.cardFooter}>
              <div className={classes.top}>
                <div className={classes.bnbContainer}>
                  <div className={classes.btn}>
                    <img src={bnb} alt="bnb" />
                  </div>
                  <div className={classes.text}>
                    <div className={classes.light}>IDO ON:</div>
                    <div className={classes.white}>BSC</div>
                  </div>
                </div>

                <button className={clsx(classes.btn, classes.lg)}>
                  Read Whitepaper
                </button>
              </div>
              <div className={classes.bottom}>
                <button className={classes.btn}>
                  <img src={dribbble} alt="dribbble" />
                </button>
                <button className={classes.btn}>
                  <img src={youtube} alt="youtube" />
                </button>
                <button className={classes.btn}>
                  <img src={whatsapp} alt="whatsapp" />
                </button>
                <button className={classes.btn}>
                  <img src={messenger} alt="messenger" />
                </button>
              </div>
            </div>
          </div>
          <div className={classes.card2}>
            <div className={classes.cardTitle}>
              <TrueFalse />
              <div className={classes.cardTitleRight}>
                <div className={classes.IdoBtn}>
                  <div className={classes.IdoBtnTxt}>PROTECTED IDO</div>
                </div>
                <div className={classes.roundEnds}>Round Ends</div>
                <div className={classes.roundTime}>
                  {hours}h:{minutes}m:{seconds}s
                </div>
              </div>
            </div>
            <div className={classes.cardBody}>
              <div className={classes.loaderTop}>
                <div>Round</div>
                <div className={classes.white}>Community</div>
              </div>

              <div className={classes.loaderContainer}>
                <div className={classes.loaderMain}></div>
                <div className={classes.text}>sales:60%</div>
              </div>

              <div className={classes.loaderBottom}>
                <div>
                  sold Token: <span className={classes.white}>600k/1.25M</span>
                </div>
                <div>
                  Raise: <span className={classes.white}>600k/1.25M</span>
                </div>
              </div>
            </div>
            <div className={classes.cardFooter}>
              <button>Register</button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
