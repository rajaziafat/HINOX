import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

import Section from "components/common/Section/Section";
import classes from "./AirDrop.module.css";
import {
  availableCoin,
  binance,
  binanceNetwork,
  chevronDown,
  coin,
  cryptoProject,
  ethereum,
  fifthNetwork,
  firstNetwork,
  fourthNetwork,
  lockedToken,
  magnifier,
  person,
  sixthNetwork,
  unlockNext,
  vestingCounts,
  videoPlaceholder,
} from "images";
import clsx from "clsx";
import Dropdown from "components/common/Dropdown/Dropdown";
import MenuContainer from "components/common/MenuContainer/MenuContainer";

const rawProjects = [
  {
    name: "CRYPTO PROJECT",
    remainingTokens: "190,000,000 BNB",
    tokenPrice: "1.00",
    claimNetworkIcon: binance,
    claimNetworkName: "Binance",
    claimable: true,
  },
  {
    name: "SECOND PROJECT",
    remainingTokens: "190,000,000 BNB",
    tokenPrice: "1.00",
    claimNetworkIcon: binance,
    claimNetworkName: "First",
    claimable: false,
  },
  {
    name: "THIRD PROJECT",
    remainingTokens: "190,000,000 BNB",
    tokenPrice: "1.00",
    claimNetworkIcon: binance,
    claimNetworkName: "Ethereum",
    claimable: false,
  },
  {
    name: "FOURTH PROJECT",
    remainingTokens: "190,000,000 BNB",
    tokenPrice: "1.00",
    claimNetworkIcon: binance,
    claimNetworkName: "Fourth",
    claimable: false,
  },
  {
    name: "FIFTH PROJECT",
    remainingTokens: "190,000,000 BNB",
    tokenPrice: "1.00",
    claimNetworkIcon: binance,
    claimNetworkName: "Fifth",
    claimable: false,
  },
  {
    name: "SIXTH PROJECT",
    remainingTokens: "190,000,000 BNB",
    tokenPrice: "1.00",
    claimNetworkIcon: binance,
    claimNetworkName: "Sixth",
    claimable: true,
  },
];

const allNetworks = [
  { icon: firstNetwork, name: "First" },
  { icon: ethereum, name: "Ethereum" },
  { icon: binance, name: "Binance" },
  { icon: fourthNetwork, name: "Fourth" },
  { icon: fifthNetwork, name: "Fifth" },
  { icon: sixthNetwork, name: "Sixth" },
];

const time = new Date();
time.setSeconds(time.getSeconds() + 60 * 60 * 25 * 2); // 10 minutes timer

const AirDrop = () => {
  const [selectedFilter, setSelectedFilter] = useState("All Vesting");
  const [videoClicked, setVideoClicked] = useState(false);
  const [formState, setFormState] = useState({
    search: "",
    network: "",
  });
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: time,
  });

  useEffect(() => {
    let filtered = rawProjects.filter((el) => {
      if (!el.name.toLowerCase().includes(formState.search.toLowerCase()))
        return false;

      if (selectedFilter !== "All Vesting") {
        if (selectedFilter === "Claimable Vesting" && !el.claimable)
          return false;
      }

      if (selectedNetwork) {
        if (el.claimNetworkName !== selectedNetwork) return false;
      }

      return true;
    });

    setFilteredProjects(filtered);
  }, [formState, selectedFilter, selectedNetwork]);

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
                <div>{days}</div>
                <div>:</div>
                <div>{hours}</div>
                <div>:</div>
                <div>{minutes}</div>
                <div>:</div>
                <div>{seconds}</div>
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
          {!videoClicked && (
            <img
              src={videoPlaceholder}
              alt=""
              onClick={() => setVideoClicked(true)}
            />
          )}
          {videoClicked && (
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
            <input
              type="text"
              placeholder="Search projects"
              value={formState.search}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, search: e.target.value }))
              }
            />
          </div>
        </div>
        <div className={classes.right}>
          <h4>Select Network</h4>

          <div className={classes.networks}>
            {allNetworks.map((el, idx) => {
              return (
                <div
                  key={"network-" + idx}
                  className={clsx(
                    classes.networkContainer,
                    selectedNetwork === el.name && classes.active
                  )}
                  onClick={() => {
                    if (selectedNetwork === el.name) setSelectedNetwork("");
                    else setSelectedNetwork(el.name);
                  }}
                >
                  <img src={el.icon} alt={el.name} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={classes.projectInfoWrap}>
        {filteredProjects.map((el, idx) => {
          let icon = binance;

          if (el.claimNetworkName === "First") {
            icon = firstNetwork;
          } else if (el.claimNetworkName === "Ethereum") {
            icon = ethereum;
          } else if (el.claimNetworkName === "Fourth") {
            icon = fourthNetwork;
          } else if (el.claimNetworkName === "Fifth") {
            icon = fifthNetwork;
          } else if (el.claimNetworkName === "Sixth") {
            icon = sixthNetwork;
          }

          return (
            <div key={"project-" + idx} className={classes.projectInfo}>
              <div className={classes.top}>
                <div className={classes.left}>
                  <img src={cryptoProject} alt="" />
                  <div>
                    <h5 className={classes.title}>{el.name}</h5>
                    <div className={classes.remaining}>
                      <div>Remaining tokens:</div>
                      <div className={classes.green}>{el.remainingTokens}</div>
                    </div>
                  </div>
                </div>
                <div className={classes.right}>
                  <div className={classes.price}>
                    <div className={classes.shortTitle}>Token price</div>
                    <div className={classes.priceNum}>{el.tokenPrice}</div>
                  </div>
                  <div className={classes.div}></div>
                  <div className={classes.network}>
                    <div className={classes.shortTitle}>Claim network</div>
                    <div className={classes.networkName}>
                      <img src={icon} alt="binance" /> {el.claimNetworkName}{" "}
                      Network
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
          );
        })}
      </div>
    </Section>
  );
};

export default AirDrop;
