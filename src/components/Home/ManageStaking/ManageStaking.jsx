import { Link } from "react-router-dom";

import Section from "components/common/Section/Section";
import SectionTitle from "components/common/SectionTitle/SectionTitle";
import classes from "./ManageStaking.module.css";

const ManageStaking = () => {
  return (
    <Section className={classes.manage}>
      <div className={classes.title}>
        <SectionTitle tag={10}>Manage your staking</SectionTitle>
      </div>

      <div className={classes.stakings}>
        <div className={classes.stakingItem}>
          <h4>HiDAO executives</h4>

          <div className={classes.stakingItemContent}>
            <div className={classes.percent1}>
              <div className={classes.mainText}>30%</div>
              <div className={classes.subText}>APY</div>
            </div>
            <div>
              <div className={classes.label}>Duration</div>
              <div className={classes.value}>12 months</div>
            </div>
            <div>
              <div className={classes.label}>Activities</div>
              <div className={classes.value}>1</div>
            </div>
            <div>
              <div className={classes.label}>APY</div>
              <div className={classes.value}>20%</div>
            </div>
            <div>
              <div className={classes.label}>Points</div>
              <div className={classes.value}>1,200,000 BP</div>
            </div>
            <div>
              <div className={classes.label}>Earning Rate</div>
              <div className={classes.value}>0.03% daily</div>
            </div>
            <div>
              <div className={classes.label}>Total staked</div>
              <div className={classes.value}>100,000,00 BST</div>
              <div className={classes.value}>
                ≈ <span className={classes.green}>$17056.5</span>
              </div>
            </div>
            <div>
              <div className={classes.label}>My earnings</div>
              <div className={classes.value}>100,000,00 BST</div>
              <div className={classes.value}>
                ≈ <span className={classes.green}>$17056.5</span>
              </div>
            </div>
            <div className={classes.actionsWrap}>
              <div className={classes.actions}>
                <button>Harvest All</button>
                <button>Manage</button>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.stakingItem}>
          <h4>Legacy</h4>

          <div className={classes.stakingItemContent}>
            <div className={classes.percent2}>
              <div className={classes.mainText}>13%</div>
              <div className={classes.subText}>APY</div>
            </div>
            <div>
              <div className={classes.label}>Duration</div>
              <div className={classes.value}>12 months</div>
            </div>
            <div>
              <div className={classes.label}>Activities</div>
              <div className={classes.value}>1</div>
            </div>
            <div>
              <div className={classes.label}>APY</div>
              <div className={classes.value}>20%</div>
            </div>
            <div>
              <div className={classes.label}>Points</div>
              <div className={classes.value}>1,200,000 BP</div>
            </div>
            <div>
              <div className={classes.label}>Earning Rate</div>
              <div className={classes.value}>0.03% daily</div>
            </div>
            <div>
              <div className={classes.label}>Total staked</div>
              <div className={classes.value}>100,000,00 BST</div>
              <div className={classes.value}>
                ≈ <span className={classes.green}>$17056.5</span>
              </div>
            </div>
            <div>
              <div className={classes.label}>My earnings</div>
              <div className={classes.value}>100,000,00 BST</div>
              <div className={classes.value}>
                ≈ <span className={classes.green}>$17056.5</span>
              </div>
            </div>
            <div className={classes.actionsWrap}>
              <div className={classes.actions}>
                <button>Harvest All</button>
                <button>Manage</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.stakingTable}>
        <table>
          <thead>
            <tr>
              <th>Staking Pool</th>
              <th>Pool Advantage</th>
              <th>Pool Requirement</th>
              <th>Pool Multiplier</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                hiDAO Executives
                <div className={classes.light}>(Contributors round)</div>
              </td>
              <td>
                <ul>
                  <li>Guaranteed Allocation</li>
                  <li>eligible for private sales</li>
                  <li>exclusive access for Gold sales</li>
                  <li> vote on incubation</li>
                  <li> vote on Governance</li>
                </ul>
              </td>
              <td>
                <div className={classes.box}>
                  Determined by Percentage ownership stake/DAO contribution.
                  <Link to="/">Learn more</Link>
                </div>
              </td>
              <td>6x fixed multiplier</td>
            </tr>
            <tr>
              <td>
                Staking Pool
                <div className={classes.light}>(Staking Round)</div>
              </td>
              <td>
                <ul>
                  <li>Guaranteed Allocation</li>
                  <li>eligible for private sales</li>
                  <li>
                    exclusive access for Gold sales
                    <div className={classes.light}>
                      (Cullinan and Legacy Only)
                    </div>
                  </li>
                  <li> vote on Governance</li>
                </ul>
              </td>
              <td>
                <div className={classes.box}>
                  You are required to stake a minimum of 250 $BST tokens to
                  qualify for registration
                  <Link to="/"> Learn more</Link>
                </div>
              </td>
              <td>
                <div className={classes.box}>
                  <div className={classes.boxItem}>
                    <div>Cullinan:</div>
                    <div>3.5x</div>
                  </div>
                  <div className={classes.boxItem}>
                    <div>Legacy:</div>
                    <div>2x</div>
                  </div>
                  <div className={classes.boxItem}>
                    <div>Regal:</div>
                    <div>1.5x</div>
                  </div>
                  <div className={classes.boxItem}>
                    <div>Standard:</div>
                    <div>1x</div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                Community round
                <div className={classes.light}>(Staking Not required)</div>
              </td>
              <td className="text-center"> FCFS</td>
              <td>
                <div className={classes.box}>
                  NoThere’s no allocation slot for this round except in cases
                  where there’re unsold tokens after Contributor and stakers
                  round
                </div>
              </td>
              <td className="text-center">FCFS</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default ManageStaking;
