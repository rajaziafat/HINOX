import { useState } from "react";

import Section from "components/common/Section/Section";
import classes from "./Modal.module.css";
import { back, coinInsert, info, modalCross } from "images";
import Enabled from "components/common/Enabled/Enabled";
import TrueFalse from "components/common/TrueFalse/TrueFalse";
import Allocation from "components/common/Allocation/Allocation";
import clsx from "clsx";
import LoadMore from "components/common/LoadMore/LoadMore";

const Modals = () => {
  const [modal1Active, setModal1Active] = useState(false);
  const [modal2Active, setModal2Active] = useState(false);
  const [tabActive, setTabActive] = useState("Unlocked");

  return (
    <Section>
      <div className={classes.modalsSection}>
        <button className={classes.btn} onClick={() => setModal1Active(true)}>
          Modal 1
        </button>
        <button className={classes.btn} onClick={() => setModal2Active(true)}>
          Modal 2
        </button>
        {modal1Active && (
          <>
            <div className={classes.overlay} />
            <div className={classes.tablesModal}>
              <div onClick={() => setModal1Active(false)}>
                <img className={classes.cross} src={modalCross} alt="cross" />
              </div>
              <div className={classes.row1}>
                <div className={classes.percent}>
                  <h3>30%</h3>
                  <div>APY</div>
                </div>
                <div className={classes.stats}>
                  <div className={classes.item}>
                    <h6>Duration</h6>
                    <div>1 year</div>
                  </div>
                  <div className={classes.item}>
                    <h6>Activities</h6>
                    <div>1</div>
                  </div>
                  <div className={classes.item}>
                    <h6>APY</h6>
                    <div>20%</div>
                  </div>
                  <div className={classes.item}>
                    <h6>Earning Rate</h6>
                    <div>0.03% daily</div>
                  </div>
                  <div className={classes.item}>
                    <h6>Total Staked</h6>
                    <div>100,000,00 BST</div>
                    <div>
                      ≈ <span className={classes.green}>$17056.5</span>
                    </div>
                  </div>
                  <div className={classes.item}>
                    <h6>My Earnings</h6>
                    <div>100,000,00 BST</div>
                    <div>
                      ≈ <span className={classes.green}>$17056.5</span>
                    </div>
                  </div>
                </div>

                <div className={classes.backWrap}>
                  <button
                    className={classes.back}
                    onClick={() => setModal1Active(false)}
                  >
                    <img src={back} alt="back" /> Back
                  </button>
                </div>
              </div>

              <div className={classes.tabs}>
                {[
                  { label: "Locked", number: 5 },
                  { label: "Unlocked", number: 5 },
                ].map((el, idx) => {
                  return (
                    <button
                      key={"tab-" + idx}
                      className={clsx(
                        classes.tab,
                        tabActive === el.label && classes.active
                      )}
                      onClick={() => setTabActive(el.label)}
                    >
                      {el.label}{" "}
                      <div className={classes.number}>{el.number}</div>{" "}
                    </button>
                  );
                })}
              </div>

              <div className={classes.otherRows}>
                {new Array(5).fill(0).map((el, idx) => {
                  return (
                    <div key={"other-row-" + idx} className={classes.row}>
                      <div className={classes.percent}>
                        <h3>30%</h3>
                        <div>APY</div>
                      </div>
                      <div className={classes.stats}>
                        <div className={classes.item}>
                          <h6>Duration</h6>
                          <div>1 year</div>
                        </div>
                        <div className={classes.item}>
                          <h6>Activities</h6>
                          <div>1</div>
                        </div>
                        <div className={classes.item}>
                          <h6>APY</h6>
                          <div>20%</div>
                        </div>
                        <div className={classes.item}>
                          <h6>Earning Rate</h6>
                          <div>0.03% daily</div>
                        </div>
                        <div className={classes.item}>
                          <h6>Total Staked</h6>
                          <div>100,000,00 BST</div>
                          <div>
                            ≈ <span className={classes.green}>$17056.5</span>
                          </div>
                        </div>
                        <div className={classes.item}>
                          <h6>My Earnings</h6>
                          <div>100,000,00 BST</div>
                          <div>
                            ≈ <span className={classes.green}>$17056.5</span>
                          </div>
                        </div>
                      </div>
                      <div className={classes.actions}>
                        <button className={classes.withdraw}>
                          Withdraw All
                        </button>
                        <button className={classes.lock}>Lock Again</button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className={classes.foot}>
                <LoadMore />
              </div>
            </div>
          </>
        )}
        {modal2Active && (
          <>
            <div className={classes.overlay} />
            <div className={classes.reserveSpot}>
              <div className={classes.main}>
                <div className={classes.title}>
                  <div></div>
                  <div>Reserve Spot</div>
                  <div onClick={() => setModal2Active(false)}>
                    <img
                      className={classes.cross}
                      src={modalCross}
                      alt="cross"
                    />
                  </div>
                </div>

                <div className={classes.enabledBoxes}>
                  <TrueFalse />
                </div>

                <div className={classes.enabledBoxes}>
                  <Enabled />
                </div>

                <div className={classes.reserveSpotDescription}>
                  <p>
                    <span className={classes.green}> Reserve spot </span> is an
                    automated buy option that will allow a user's allocation to
                    be automatically purchased during the IDO sales window.
                  </p>
                </div>
                <div className={classes.reserveSpotDescription}>
                  <img src={info} alt="info" />
                  <p>
                    <span className={classes.green}>
                      We recommend that you reserve amount you want to buy plus
                      $2 for network fee. Excessive deposits will be refunded
                      automatically.
                    </span>
                  </p>
                </div>

                <div className={classes.box}>
                  <Allocation />
                  <div className={classes.amounts}>
                    <div>6000 USD</div>
                    <div>10,000 USD</div>
                  </div>
                </div>

                <div className={classes.box}>
                  <div className={classes.head}>
                    <div className={classes.amount}>Amount:</div>
                    <div className={classes.max}>Max</div>
                  </div>
                  <div className={classes.numbers}>
                    <img src={coinInsert} alt="" />
                    <div className={classes.num}>10.00</div>
                    <div className={classes.unit}>USDT</div>
                  </div>
                  <div className={classes.additionalInfo}>
                    <div>
                      You will get:
                      <span className={classes.green}> 214,474 UBS</span>
                    </div>
                    <div>
                      Estimated gas fee:
                      <span className={classes.green}> +2 USDT</span>
                    </div>
                  </div>
                </div>
              </div>

              <button className={classes.confirm}>Confirm Reservation</button>
            </div>
          </>
        )}
      </div>
    </Section>
  );
};

export default Modals;
