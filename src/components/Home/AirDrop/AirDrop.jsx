import Section from "components/common/Section/Section";
import classes from "./AirDrop.module.css";
import {
  availableCoin,
  binance,
  binanceNetwork,
  chevronDown,
  coin,
  cryptoProject,
  lockedToken,
  magnifier,
  network1,
  network2,
  network3,
  network4,
  network5,
  network6,
  person,
  unlockNext,
  vestingCounts,
  videoPlaceholder,
} from "images";
import clsx from "clsx";
import Dropdown from "components/common/Dropdown/Dropdown";
import MenuContainer from "components/common/MenuContainer/MenuContainer";
import { useState } from "react";

const networks = [network1, network2, network3, network4, network5, network6];

const AirDrop = () => {
  const [selectedFilter, setSelectedFilter] = useState("All Vesting");

  return (
    <Section>
      <div className={classes.airdrop}>
        <div className={classes.card}>
          <div className={classes.info}>
            <img src={person} alt="person" />
            <div>
              <h5 className={classes.title}>
                Hinox Point/ANT-P tesnet Airdrop
              </h5>

              <div className={classes.infoItem}>
                <div>Total Claimed $BST:</div>
                <div className={classes.amount}>
                  <div>100,000,00</div>
                  <div className={classes.approx}>
                    ≈ <span className={classes.green}>$17056.5</span>
                  </div>
                </div>
                <div className={classes.token}>Token: BST</div>
              </div>
              <div className={classes.infoItem}>
                <div>Total Unclaimed $BST:</div>
                <div className={classes.amount}>
                  <div>100,000,00</div>
                  <div className={classes.approx}>
                    ≈ <span className={classes.green}>$17056.5</span>
                  </div>
                </div>
                <div className={classes.token}>$BST≈ $0.235</div>
              </div>
            </div>
          </div>

          <div className={classes.description}>
            All Hinox users who participated in testnet and claimed ANT-point
            are eligabile for this airdrop to redeem their ANT point for 1000:1
            and also those who qualifies for free token from crew 3 and others
            campaign during and after the beta testing.
          </div>

          <div className={classes.shortDescItem}>
            <div className={classes.left}>Claim on:</div>
            <div className={classes.right}>
              <img src={binanceNetwork} alt="" /> Binance Network
            </div>
          </div>
          <div className={classes.shortDescItem}>
            <div className={classes.left}>My Unclaimed BST:</div>
            <div className={classes.right}>
              50000 <span className={classes.green}>≈ $1000</span>
            </div>
          </div>

          <div className={classes.vestingBox}>
            <div className={classes.vestingItem}>
              <div className={classes.left}>
                <img src={unlockNext} alt="unlock" />
                <div>Unlock Next:</div>
              </div>
              <div className={classes.right}>
                <div>02</div>
                <div>:</div>
                <div>12</div>
                <div>:</div>
                <div>05</div>
                <div>:</div>
                <div>54</div>
              </div>
            </div>
            <div className={classes.vestingItem}>
              <div className={classes.left}>
                <img src={vestingCounts} alt="counts" />
                <div>Vesting counts:</div>
              </div>
              <div className={classes.right}>
                <div>02</div>
                <div>of</div>
                <div>06</div>
                <div>Months</div>
              </div>
            </div>
            <div className={classes.divider}></div>
            <div className={classes.vestingList}>
              <div className={clsx(classes.highlighted, classes.vestingNum)}>
                Vesting 1
              </div>
              <div className={clsx(classes.highlighted, classes.vestingNum)}>
                Vesting 2
              </div>
              <div className={classes.vestingNum}>Vesting 3</div>
              <div className={classes.vestingNum}>Vesting 4</div>
            </div>
            <button className={classes.viewAll}>View all vesting</button>
          </div>

          <div className={classes.claimBox}>
            <div className={classes.desc}>
              <div className={classes.left}>
                <img src={coin} alt="coin" />
                Available Token:
              </div>
              <div className={classes.right}>
                <div>5806 BNB</div>
                <div>≈</div>
                <div className={classes.green}>$5,000</div>
              </div>
            </div>

            <button className={classes.claim}>Claim Vesting</button>
          </div>
        </div>
        <div className={classes.contribute}>
          <h5 className={classes.heading}>How to Contribute to DAO Treasury</h5>
          <img src={videoPlaceholder} alt="" />
        </div>
      </div>

      <div className={classes.filteration}>
        <div className={classes.left}>
          <div className={classes.sortContainer}>
            <MenuContainer
              onSelect={(val) => setSelectedFilter(val.label)}
              options={[
                { label: "All Vesting" },
                { label: "Claimable Vesting" },
              ]}
              defaultSelected={selectedFilter}
            >
              <Dropdown label="Sort by:" defaultSelected={selectedFilter} />
            </MenuContainer>
          </div>

          <div className={classes.searchContainer}>
            <img src={magnifier} alt="magnifier" />
            <input type="text" placeholder="Search projects" />
          </div>
        </div>
        <div className={classes.right}>
          <h4>Select Network</h4>

          <div className={classes.networks}>
            {networks.map((el, idx) => {
              return <img key={"network-" + idx} src={el} alt="network" />;
            })}
          </div>
        </div>
      </div>

      <div className={classes.projectInfo}>
        <div className={classes.top}>
          <div className={classes.left}>
            <img src={cryptoProject} alt="" />
            <div>
              <h5 className={classes.title}>CRYPTO PROJECT</h5>
              <div className={classes.remaining}>
                <div>Remaining tokens:</div>
                <div className={classes.green}>190,000,000 BNB</div>
              </div>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.price}>
              <div className={classes.shortTitle}>Token price</div>
              <div className={classes.priceNum}>$1.00</div>
            </div>
            <div className={classes.div}></div>
            <div className={classes.network}>
              <div className={classes.shortTitle}>Claim network</div>
              <div className={classes.networkName}>
                <img src={binance} alt="binance" /> Binance Network
              </div>
            </div>
          </div>
        </div>
        <div className={classes.bottom}>
          <div className={classes.left}>
            <div>
              <div className={classes.availableToken}>
                <img src={availableCoin} alt="" />
                Available Token
              </div>
              <div className={classes.bnb}>
                <span className={classes.green}> 0 BNB</span> ≈$ 12,000
              </div>
            </div>
            <div className={classes.actions}>
              <button className={classes.refund}>Claim Refund</button>
              <MenuContainer
                onSelect={(val) => {}}
                options={[{ label: "Yes" }, { label: "No" }]}
                defaultSelected={selectedFilter}
              >
                <button className={classes.claimBtn}>
                  Claim <img src={chevronDown} alt="chevron" />
                </button>
              </MenuContainer>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.price}>
              <div className={classes.shortTitle}>
                <img src={lockedToken} alt="locked token" /> Locked Token
              </div>
              <div className={classes.lockedToken}>
                <div className={classes.green}>0 BNB</div>
                <div>≈</div>
                <div>$ 12,000</div>
              </div>
            </div>
            <div className={classes.div}></div>
            <div className={classes.network}>
              <div className={classes.shortTitle}>
                <img src={vestingCounts} alt="" /> Vesting counts
              </div>
              <div className={classes.vestingCounts}>
                <div>02</div>
                <div>of</div>
                <div>06</div>
                <div>Months</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AirDrop;
