import { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import clsx from "clsx";

import Section from "components/common/Section/Section";
import Dropdown from "components/common/Dropdown/Dropdown";
import DatePicker from "components/common/DatePicker/DatePicker";
import {
  arrowDropdown2,
  magnifier,
  openLink,
  tableHarvested,
  tableLock,
  tableStake,
  tableWithdrawal,
} from "images";
import classes from "./StakingTable.module.css";
import MenuContainer from "components/common/MenuContainer/MenuContainer";
import LoadMore from "components/common/LoadMore/LoadMore";
import Pagination from "components/common/Pagination/Pagination";

const columns = [
  {
    name: "Action",
    selector: (row) => row.action,
    sortable: true,
    minWidth: "230px",
    cell: (row) => (
      <div className={classes.action}>
        <img className={classes.actionImg} src={row.actionImg} alt="" />
        <div className="">
          {row.action.slice(0, 17)} {row.action.length > 17 ? "..." : ""}
        </div>
      </div>
    ),
  },
  {
    name: "Date",
    selector: (row) => row.date,
    sortable: true,
    cell: (row) => <div>{row.date}</div>,
  },
  {
    name: "Amount(BST)",
    cell: (row) => <div>{row.amount}</div>,
  },
  {
    name: "Status",
    minWidth: "120px",
    sortable: true,
    cell: (row) => (
      <div
        className={clsx(
          row.status === "Confirmed" ? classes.green : classes.red
        )}
      >
        {row.status}
      </div>
    ),
  },
  {
    name: "tx ID",
    sortable: true,
    minWidth: "140px",
    cell: (row) => (
      <div className={classes.txId}>
        {row.txId} <img src={openLink} alt="" />
      </div>
    ),
  },
];

const rawData = [
  {
    action: "Stake for 12 months",
    actionImg: tableStake,
    date: "Mar 21, 2022",
    amount: "100,000,000",
    status: "Confirmed",
    txId: "0xf371.....cf47",
  },
  {
    action: "Unstaged from 30 kjasdfasdf",
    actionImg: tableLock,
    date: "Mar 21, 2022",
    amount: "100,000,000",
    status: "Unconfirmed",
    txId: "0xf371.....cf47",
  },
  {
    action: "Harvested from 30 kjasdfasdf",
    actionImg: tableHarvested,
    date: "Mar 21, 2022",
    amount: "100,000,000",
    status: "Unconfirmed",
    txId: "0xf371.....cf47",
  },
  {
    action: "Withdrawal",
    actionImg: tableWithdrawal,
    date: "Mar 21, 2022",
    amount: "100,000,000",
    status: "Confirmed",
    txId: "0xf371.....cf47",
  },
  {
    action: "Stake for 12 months",
    actionImg: tableStake,
    date: "Mar 21, 2022",
    amount: "100,000,000",
    status: "Confirmed",
    txId: "0xf371.....cf47",
  },
  {
    action: "Unstaged from 30 kjasdfasdf",
    actionImg: tableLock,
    date: "Mar 21, 2022",
    amount: "100,000,000",
    status: "Unconfirmed",
    txId: "0xf371.....cf47",
  },
  {
    action: "Harvested from 30 kjasdfasdf",
    actionImg: tableHarvested,
    date: "Mar 21, 2022",
    amount: "100,000,000",
    status: "Unconfirmed",
    txId: "0xf371.....cf47",
  },
  {
    action: "Withdrawal",
    actionImg: tableWithdrawal,
    date: "Mar 21, 2022",
    amount: "100,000,000",
    status: "Confirmed",
    txId: "0xf371.....cf47",
  },
  {
    action: "Stake for 12 months",
    actionImg: tableStake,
    date: "Mar 21, 2022",
    amount: "100,000,000",
    status: "Confirmed",
    txId: "0xf371.....cf47",
  },
  {
    action: "Unstaged from 30 kjasdfasdf",
    actionImg: tableLock,
    date: "Mar 21, 2022",
    amount: "100,000,000",
    status: "Unconfirmed",
    txId: "0xf371.....cf47",
  },
  {
    action: "Harvested from 30 kjasdfasdf",
    actionImg: tableHarvested,
    date: "Mar 21, 2022",
    amount: "100,000,000",
    status: "Unconfirmed",
    txId: "0xf371.....cf47",
  },
  {
    action: "Withdrawal",
    actionImg: tableWithdrawal,
    date: "Mar 21, 2022",
    amount: "100,000,000",
    status: "Confirmed",
    txId: "0xf371.....cf47",
  },
  {
    action: "Stake for 12 months",
    actionImg: tableStake,
    date: "Mar 21, 2022",
    amount: "100,000,000",
    status: "Confirmed",
    txId: "0xf371.....cf47",
  },
  {
    action: "Unstaged from 30 kjasdfasdf",
    actionImg: tableLock,
    date: "Mar 21, 2022",
    amount: "100,000,000",
    status: "Unconfirmed",
    txId: "0xf371.....cf47",
  },
  {
    action: "Harvested from 30 kjasdfasdf",
    actionImg: tableHarvested,
    date: "Mar 21, 2022",
    amount: "100,000,000",
    status: "Unconfirmed",
    txId: "0xf371.....cf47",
  },
  {
    action: "Withdrawal",
    actionImg: tableWithdrawal,
    date: "Mar 21, 2022",
    amount: "100,000,000",
    status: "Confirmed",
    txId: "0xf371.....cf47",
  },
];

const tabs = ["Stake", "Dashboard", "Activities History", "Leaderboard"];

const StakingTable = () => {
  const [searchState, setSearchState] = useState("");
  const [currentItems, setCurrentItems] = useState([]);
  const [selectedTab, setSelectedTab] = useState("Activities History");
  const [selectedFilter, setSelectedFilter] = useState("All Activities");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return currentItems.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, itemsPerPage, currentItems]);

  useEffect(() => {
    const filterd = rawData.filter((el) => {
      return (el.action + el.amount + el.date + el.status + el.txId)
        .toLocaleLowerCase()
        .includes(searchState.toLowerCase());
    });
    setCurrentItems(filterd);
  }, [searchState]);

  return (
    <Section>
      <div className={classes.main}>
        <div className={classes.tabs}>
          {tabs.map((el, idx) => {
            return (
              <button
                key={"tab-item-" + idx}
                className={clsx(
                  classes.tab,
                  selectedTab === el && classes.active
                )}
                onClick={() => setSelectedTab(el)}
              >
                {el}
              </button>
            );
          })}
          <button className={classes.buy}>Buy $BST</button>
        </div>

        <h3 className={classes.pageTitle}>{selectedTab}</h3>

        <div className={classes.tableHeading}>
          <MenuContainer
            onSelect={(val) => setSelectedFilter(val.label)}
            options={[
              { label: "All Activities" },
              { label: "Claimable Activities" },
            ]}
            defaultSelected={selectedFilter}
          >
            <Dropdown label="Sort by:" defaultSelected="All Activities" />
          </MenuContainer>
          <DatePicker placeholder="Start Date" />
          <DatePicker placeholder="End Date" />
          <div className={classes.searchContainer}>
            <img src={magnifier} alt="search" />
            <input
              type="text"
              placeholder="Search by tx ID"
              value={searchState}
              onChange={(e) => setSearchState(e.target.value)}
            />
          </div>
        </div>

        <div className={classes.tableContainer}>
          <DataTable columns={columns} data={currentTableData} />
        </div>

        <div className={classes.actions}>
          <div className={classes.rowsContainer}>
            <div>Row Per Page</div>
            <MenuContainer
              onSelect={(val) => setItemsPerPage(val.label)}
              options={[{ label: 5 }, { label: 10 }, { label: 15 }]}
              defaultSelected={itemsPerPage}
            >
              <div className={classes.rowSelector}>
                {itemsPerPage} <div className={classes.line}></div>{" "}
                <img src={arrowDropdown2} alt="arrow" />
              </div>
            </MenuContainer>
          </div>
          <LoadMore />
          <Pagination
            currentPage={currentPage}
            totalCount={currentItems.length}
            pageSize={itemsPerPage}
            onPageChange={(page) => setCurrentPage(page)}
            siblingCount={0}
          />
        </div>
      </div>
    </Section>
  );
};

export default StakingTable;
