import Section from "components/common/Section/Section";
import classes from "./CompletedProjects.module.css";
import SectionTitle from "components/common/SectionTitle/SectionTitle";
import {
  approx,
  arrowDropdown,
  arrowDropdown2,
  bst,
  coins,
  loadMore,
  magnifier,
  points,
  reward,
  tableProjectItem,
} from "images";
import clsx from "clsx";

const CompletedProjects = () => {
  return (
    <Section>
      <SectionTitle tag={103}>COMPLETED PROJECTS</SectionTitle>

      <div className={classes.filterContainer}>
        <div className={classes.tags}>
          <button className={clsx(classes.tag, classes.active)}>All</button>
          <button className={classes.tag}>Public Sales</button>
          <button className={classes.tag}>Private Sales</button>
          <button className={classes.tag}>DAO Incubated</button>
        </div>

        <div className={classes.searchContainer}>
          <img src={magnifier} alt="magnifier" />
          <input
            type="text"
            placeholder="Search by project name,Token symbol or Contract adrress"
          />
        </div>
      </div>

      <div className={classes.filterContainer2}>
        <div className={classes.tags}>
          <button className={clsx(classes.tag, classes.active)}>
            Ascending order
          </button>
          <button className={classes.tag}>Descending order</button>
        </div>

        <div className={classes.sort}>
          <div className={classes.label}>Sort by:</div>
          <div className={classes.value}>ATH ROI </div>
          <img className={classes.arrow} src={arrowDropdown} alt="arrow" />
        </div>
      </div>

      <div className={classes.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Participants</th>
              <th>Access</th>
              <th>IDO price</th>
              <th>Curre..price</th>
              <th>ATH</th>
              <th>ATH IDO ROI</th>
              <th>Raised on Hinox</th>
              <th>lead VC</th>
              <th>sales Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={classes.withImage}>
                  <img src={tableProjectItem} alt="project" />
                  <div>
                    Hinox <br /> Ecosystem <br />
                    <span className={classes.light}>(HIT)</span>
                  </div>
                </div>
              </td>
              <td>100,000</td>
              <td>Private</td>
              <td>$0.005</td>
              <td>$0.005</td>
              <td>$0.005</td>
              <td>
                17.46x <div className={classes.green}>(+17056.5%)</div>
              </td>
              <td>$ 2,000,000</td>
              <td>
                <img src={tableProjectItem} alt="project" />
                <div>Binance</div>
              </td>
              <td>7 April, 2023</td>
            </tr>
            <tr>
              <td>
                <div className={classes.withImage}>
                  <img src={tableProjectItem} alt="project" />
                  <div>
                    Hinox <br /> Ecosystem <br />
                    <span className={classes.light}>(HIT)</span>
                  </div>
                </div>
              </td>
              <td>100,000</td>
              <td>Private</td>
              <td>$0.005</td>
              <td>$0.005</td>
              <td>$0.005</td>
              <td>
                17.46x <div className={classes.green}>(+17056.5%)</div>
              </td>
              <td>$ 2,000,000</td>
              <td>
                <img src={tableProjectItem} alt="project" />
                <div>Binance</div>
              </td>
              <td>7 April, 2023</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={classes.actions}>
        <div className={classes.rowsContainer}>
          <div>Row Per Page</div>
          <div className={classes.rowSelector}>
            5 <div className={classes.line}></div>{" "}
            <img src={arrowDropdown2} alt="arrow" />
          </div>
        </div>

        <button className={classes.loadMore}>
          <img src={loadMore} alt="loadMore" />
          <div>Load More</div>
        </button>

        <div className={classes.pagination}>
          <button className={clsx(classes.paginationItem, classes.active)}>
            1
          </button>
          <button className={classes.paginationItem}>2</button>
          <button className={classes.paginationItem}>2</button>
          <button className={classes.paginationItem}>...</button>
          <button className={classes.paginationItem}>4</button>
        </div>
      </div>

      <div className={classes.stats}>
        <div className={classes.statsCard}>
          <div className={classes.mainText}>$53,000,0000</div>
          <div className={classes.subText}>
            <img src={approx} alt="approx" /> 170.5k{" "}
            <span className={classes.light}>Bst</span>
          </div>
          <div className={classes.iconText}>
            <img src={coins} alt="coins" />
            Total Value Locked
          </div>
        </div>
        <div className={classes.statsCard}>
          <div className={classes.mainText}>$0.098</div>
          <div className={classes.subText}>
            170.5k <span className={classes.light}>Bst</span>
          </div>
          <div className={classes.iconText}>
            <img src={bst} alt="bst" />
            BST Price
          </div>
        </div>
        <div className={classes.statsCard}>
          <div className={classes.mainText}>
            2000.<span className={classes.light}>98</span> <sup>BP</sup>
          </div>
          <div className={classes.iconText}>
            <img src={points} alt="points" />
            My Total Points
          </div>
        </div>
        <div className={classes.statsCard}>
          <div className={classes.mainText}>
            500,555.<span className={classes.light}>555</span> <sup>Bst</sup>
          </div>
          <div className={classes.subText}>
            <img src={approx} alt="approx" /> $300,000.00
          </div>
          <div className={classes.iconText}>
            <img src={reward} alt="reward" />
            Total Reward Distributed
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CompletedProjects;
