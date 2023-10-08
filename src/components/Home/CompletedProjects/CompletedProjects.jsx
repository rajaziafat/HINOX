import clsx from "clsx";
import { useEffect, useState } from "react";

import Section from "components/common/Section/Section";
import classes from "./CompletedProjects.module.css";
import SectionTitle from "components/common/SectionTitle/SectionTitle";
import {
  approx,
  arrowDropdown2,
  bst,
  coins,
  magnifier,
  points,
  reward,
  tableProjectItem,
} from "images";
import Dropdown from "components/common/Dropdown/Dropdown";
import LoadMore from "components/common/LoadMore/LoadMore";
import MenuContainer from "components/common/MenuContainer/MenuContainer";

const tableRows = [
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem unique",
    hit: true,
    participants: "100,000",
    access: "Private",
    idoPrice: "0.005",
    currentPrice: "0.005",
    ath: "0.005",
    athIDORoi: "17.46",
    athIDORoiGreen: "(+17056.5%)",
    hinox: "2,000,000",
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "7 April, 2023",
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: "100,000",
    access: "Private",
    idoPrice: "0.005",
    currentPrice: "0.005",
    ath: "0.005",
    athIDORoi: "17.46",
    athIDORoiGreen: "(+17056.5%)",
    hinox: "2,000,000",
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "7 April, 2023",
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: "100,000",
    access: "Private",
    idoPrice: "0.005",
    currentPrice: "0.005",
    ath: "0.005",
    athIDORoi: "17.46",
    athIDORoiGreen: "(+17056.5%)",
    hinox: "2,000,000",
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "7 April, 2023",
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: "100,000",
    access: "Private",
    idoPrice: "0.005",
    currentPrice: "0.005",
    ath: "0.005",
    athIDORoi: "17.46",
    athIDORoiGreen: "(+17056.5%)",
    hinox: "2,000,000",
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "7 April, 2023",
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: "100,000",
    access: "Private",
    idoPrice: "0.005",
    currentPrice: "0.005",
    ath: "0.005",
    athIDORoi: "17.46",
    athIDORoiGreen: "(+17056.5%)",
    hinox: "2,000,000",
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "7 April, 2023",
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: "100,000",
    access: "Private",
    idoPrice: "0.005",
    currentPrice: "0.005",
    ath: "0.005",
    athIDORoi: "17.46",
    athIDORoiGreen: "(+17056.5%)",
    hinox: "2,000,000",
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "7 April, 2023",
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: "100,000",
    access: "Private",
    idoPrice: "0.005",
    currentPrice: "0.005",
    ath: "0.005",
    athIDORoi: "17.46",
    athIDORoiGreen: "(+17056.5%)",
    hinox: "2,000,000",
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "7 April, 2023",
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: "100,000",
    access: "Private",
    idoPrice: "0.005",
    currentPrice: "0.005",
    ath: "0.005",
    athIDORoi: "17.46",
    athIDORoiGreen: "(+17056.5%)",
    hinox: "2,000,000",
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "7 April, 2023",
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: "100,000",
    access: "Private",
    idoPrice: "0.005",
    currentPrice: "0.005",
    ath: "0.005",
    athIDORoi: "17.46",
    athIDORoiGreen: "(+17056.5%)",
    hinox: "2,000,000",
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "7 April, 2023",
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: "100,000",
    access: "Private",
    idoPrice: "0.005",
    currentPrice: "0.005",
    ath: "0.005",
    athIDORoi: "17.46",
    athIDORoiGreen: "(+17056.5%)",
    hinox: "2,000,000",
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "7 April, 2023",
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: "100,000",
    access: "Private",
    idoPrice: "0.005",
    currentPrice: "0.005",
    ath: "0.005",
    athIDORoi: "17.46",
    athIDORoiGreen: "(+17056.5%)",
    hinox: "2,000,000",
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "7 April, 2023",
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: "100,000",
    access: "Private",
    idoPrice: "0.005",
    currentPrice: "0.005",
    ath: "0.005",
    athIDORoi: "17.46",
    athIDORoiGreen: "(+17056.5%)",
    hinox: "2,000,000",
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "7 April, 2023",
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: "100,000",
    access: "Private",
    idoPrice: "0.005",
    currentPrice: "0.005",
    ath: "0.005",
    athIDORoi: "17.46",
    athIDORoiGreen: "(+17056.5%)",
    hinox: "2,000,000",
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "7 April, 2023",
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: "100,000",
    access: "Private",
    idoPrice: "0.005",
    currentPrice: "0.005",
    ath: "0.005",
    athIDORoi: "17.46",
    athIDORoiGreen: "(+17056.5%)",
    hinox: "2,000,000",
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "7 April, 2023",
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: "100,000",
    access: "Private",
    idoPrice: "0.005",
    currentPrice: "0.005",
    ath: "0.005",
    athIDORoi: "17.46",
    athIDORoiGreen: "(+17056.5%)",
    hinox: "2,000,000",
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "7 April, 2023",
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: "100,000",
    access: "Private",
    idoPrice: "0.005",
    currentPrice: "0.005",
    ath: "0.005",
    athIDORoi: "17.46",
    athIDORoiGreen: "(+17056.5%)",
    hinox: "2,000,000",
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "7 April, 2023",
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: "100,000",
    access: "Private",
    idoPrice: "0.005",
    currentPrice: "0.005",
    ath: "0.005",
    athIDORoi: "17.46",
    athIDORoiGreen: "(+17056.5%)",
    hinox: "2,000,000",
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "7 April, 2023",
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: "100,000",
    access: "Private",
    idoPrice: "0.005",
    currentPrice: "0.005",
    ath: "0.005",
    athIDORoi: "17.46",
    athIDORoiGreen: "(+17056.5%)",
    hinox: "2,000,000",
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "7 April, 2023",
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: "100,000",
    access: "Private",
    idoPrice: "0.005",
    currentPrice: "0.005",
    ath: "0.005",
    athIDORoi: "17.46",
    athIDORoiGreen: "(+17056.5%)",
    hinox: "2,000,000",
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "7 April, 2023",
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: "100,000",
    access: "Private",
    idoPrice: "0.005",
    currentPrice: "0.005",
    ath: "0.005",
    athIDORoi: "17.46",
    athIDORoiGreen: "(+17056.5%)",
    hinox: "2,000,000",
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: "7 April, 2023",
  },
];

const CompletedProjects = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");

  useEffect(() => {
    const filtered = tableRows.filter((el, idx) =>
      (el.name + el.leadVc).toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchValue]);

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
            placeholder="Search by project name,Token symbol or Contract address"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
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
        <MenuContainer
          onSelect={(val) => setSelectedFilter(val.label)}
          options={[{ label: "ATH ROI" }, { label: "ATH ROI 2" }]}
          defaultSelected={selectedFilter}
        >
          <Dropdown label="Sort by:" defaultSelected={selectedFilter} />
        </MenuContainer>
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
            {filteredData.map((el, idx) => {
              return (
                <tr key={"table-row-" + idx}>
                  <td>
                    <div className={classes.withImage}>
                      <img src={el.icon} alt="project" />
                      <div>
                        {el.name}
                        {el.hit && <div className={classes.light}>(HIT)</div>}
                      </div>
                    </div>
                  </td>
                  <td>{el.participants}</td>
                  <td>{el.access}</td>
                  <td>{el.idoPrice}</td>
                  <td>{el.currentPrice}</td>
                  <td>{el.ath}</td>
                  <td>
                    {el.athIDORoi}{" "}
                    <div className={classes.green}>{el.athIDORoiGreen}</div>
                  </td>
                  <td>$ {el.hinox}</td>
                  <td>
                    <img src={el.leadVcIcon} alt="project" />
                    <div>{el.leadVc}</div>
                  </td>
                  <td>{el.salesDate}</td>
                </tr>
              );
            })}
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
        <LoadMore />

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
