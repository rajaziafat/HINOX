import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

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
import Pagination from "components/common/Pagination/Pagination";

const tableRows = [
  {
    icon: tableProjectItem,
    name: "AHinox Ecosystem unique",
    hit: true,
    participants: 1000000,
    access: "Private",
    idoPrice: 1,
    currentPrice: 2,
    ath: 3,
    athIDORoi: 17.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000000,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "BHinox Ecosystem",
    hit: true,
    participants: 1000001,
    access: "Private",
    idoPrice: 4,
    currentPrice: 5,
    ath: 6,
    athIDORoi: 18.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000001,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 4, 27),
  },
  {
    icon: tableProjectItem,
    name: "CHinox Ecosystem",
    hit: true,
    participants: 1000002,
    access: "Private",
    idoPrice: 7,
    currentPrice: 8,
    ath: 9,
    athIDORoi: 19.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000002,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 5, 27),
  },
  {
    icon: tableProjectItem,
    name: "DHinox Ecosystem",
    hit: true,
    participants: 1000003,
    access: "Private",
    idoPrice: 10,
    currentPrice: 11,
    ath: 12,
    athIDORoi: 20.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000003,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 6, 27),
  },
  {
    icon: tableProjectItem,
    name: "EHinox Ecosystem",
    hit: true,
    participants: 1000004,
    access: "Private",
    idoPrice: 13,
    currentPrice: 14,
    ath: 15,
    athIDORoi: 21.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000004,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 7, 27),
  },
  {
    icon: tableProjectItem,
    name: "FHinox Ecosystem",
    hit: true,
    participants: 1000005,
    access: "Private",
    idoPrice: 16,
    currentPrice: 17,
    ath: 18,
    athIDORoi: 22.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000005,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 8, 27),
  },
  {
    icon: tableProjectItem,
    name: "GHinox Ecosystem",
    hit: true,
    participants: 1000006,
    access: "Private",
    idoPrice: 19,
    currentPrice: 20,
    ath: 21,
    athIDORoi: 23.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000006,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000007,
    access: "Private",
    idoPrice: 22,
    currentPrice: 23,
    ath: 24,
    athIDORoi: 24.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000007,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "JHinox Ecosystem",
    hit: true,
    participants: 1000008,
    access: "Private",
    idoPrice: 25,
    currentPrice: 26,
    ath: 27,
    athIDORoi: 25.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000008,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "KHinox Ecosystem",
    hit: true,
    participants: 1000009,
    access: "Private",
    idoPrice: 28,
    currentPrice: 29,
    ath: 30,
    athIDORoi: 26.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000009,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "KHinox Ecosystem",
    hit: true,
    participants: 1000010,
    access: "Private",
    idoPrice: 31,
    currentPrice: 32,
    ath: 33,
    athIDORoi: 27.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000010,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000011,
    access: "Private",
    idoPrice: 34,
    currentPrice: 35,
    ath: 36,
    athIDORoi: 28.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000011,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000012,
    access: "Private",
    idoPrice: 37,
    currentPrice: 38,
    ath: 39,
    athIDORoi: 29.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000012,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000013,
    access: "Private",
    idoPrice: 40,
    currentPrice: 41,
    ath: 42,
    athIDORoi: 30.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000013,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000014,
    access: "Private",
    idoPrice: 43,
    currentPrice: 44,
    ath: 45,
    athIDORoi: 31.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000014,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000015,
    access: "Private",
    idoPrice: 46,
    currentPrice: 47,
    ath: 48,
    athIDORoi: 32.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000015,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000016,
    access: "Private",
    idoPrice: 49,
    currentPrice: 50,
    ath: 51,
    athIDORoi: 33.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000016,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000017,
    access: "Private",
    idoPrice: 52,
    currentPrice: 53,
    ath: 54,
    athIDORoi: 34.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000017,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000018,
    access: "Private",
    idoPrice: 55,
    currentPrice: 56,
    ath: 57,
    athIDORoi: 35.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000018,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000019,
    access: "Private",
    idoPrice: 58,
    currentPrice: 59,
    ath: 60,
    athIDORoi: 36.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000019,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem unique",
    hit: true,
    participants: 1000020,
    access: "Private",
    idoPrice: 61,
    currentPrice: 62,
    ath: 63,
    athIDORoi: 37.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000020,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000021,
    access: "Private",
    idoPrice: 64,
    currentPrice: 65,
    ath: 66,
    athIDORoi: 38.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000021,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000022,
    access: "Private",
    idoPrice: 67,
    currentPrice: 68,
    ath: 69,
    athIDORoi: 39.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000022,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000023,
    access: "Private",
    idoPrice: 70,
    currentPrice: 71,
    ath: 72,
    athIDORoi: 40.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000023,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000024,
    access: "Private",
    idoPrice: 73,
    currentPrice: 74,
    ath: 75,
    athIDORoi: 41.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000024,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000025,
    access: "Private",
    idoPrice: 76,
    currentPrice: 77,
    ath: 78,
    athIDORoi: 42.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000025,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000026,
    access: "Private",
    idoPrice: 79,
    currentPrice: 80,
    ath: 81,
    athIDORoi: 43.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000026,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000027,
    access: "Private",
    idoPrice: 82,
    currentPrice: 83,
    ath: 84,
    athIDORoi: 44.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000027,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000028,
    access: "Private",
    idoPrice: 85,
    currentPrice: 86,
    ath: 87,
    athIDORoi: 45.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000028,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000029,
    access: "Private",
    idoPrice: 88,
    currentPrice: 89,
    ath: 90,
    athIDORoi: 46.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000029,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000030,
    access: "Private",
    idoPrice: 91,
    currentPrice: 92,
    ath: 93,
    athIDORoi: 47.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000030,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000031,
    access: "Private",
    idoPrice: 94,
    currentPrice: 95,
    ath: 96,
    athIDORoi: 48.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000031,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000032,
    access: "Private",
    idoPrice: 97,
    currentPrice: 98,
    ath: 99,
    athIDORoi: 49.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000032,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000033,
    access: "Private",
    idoPrice: 100,
    currentPrice: 101,
    ath: 102,
    athIDORoi: 50.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000033,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000034,
    access: "Private",
    idoPrice: 103,
    currentPrice: 104,
    ath: 105,
    athIDORoi: 51.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000034,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000035,
    access: "Private",
    idoPrice: 106,
    currentPrice: 107,
    ath: 108,
    athIDORoi: 52.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000035,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000036,
    access: "Private",
    idoPrice: 109,
    currentPrice: 110,
    ath: 111,
    athIDORoi: 53.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000036,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000037,
    access: "Private",
    idoPrice: 112,
    currentPrice: 113,
    ath: 114,
    athIDORoi: 54.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000037,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000038,
    access: "Private",
    idoPrice: 115,
    currentPrice: 116,
    ath: 117,
    athIDORoi: 55.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000038,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000039,
    access: "Private",
    idoPrice: 118,
    currentPrice: 119,
    ath: 120,
    athIDORoi: 56.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000039,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem unique",
    hit: true,
    participants: 1000040,
    access: "Private",
    idoPrice: 121,
    currentPrice: 122,
    ath: 123,
    athIDORoi: 57.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000040,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000041,
    access: "Private",
    idoPrice: 124,
    currentPrice: 125,
    ath: 126,
    athIDORoi: 58.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000041,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000042,
    access: "Private",
    idoPrice: 127,
    currentPrice: 128,
    ath: 129,
    athIDORoi: 59.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000042,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000043,
    access: "Private",
    idoPrice: 130,
    currentPrice: 131,
    ath: 132,
    athIDORoi: 60.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000043,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000044,
    access: "Private",
    idoPrice: 133,
    currentPrice: 134,
    ath: 135,
    athIDORoi: 61.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000044,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000045,
    access: "Private",
    idoPrice: 136,
    currentPrice: 137,
    ath: 138,
    athIDORoi: 62.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000045,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000046,
    access: "Private",
    idoPrice: 139,
    currentPrice: 140,
    ath: 141,
    athIDORoi: 63.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000046,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000047,
    access: "Private",
    idoPrice: 142,
    currentPrice: 143,
    ath: 144,
    athIDORoi: 64.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000047,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000048,
    access: "Private",
    idoPrice: 145,
    currentPrice: 146,
    ath: 147,
    athIDORoi: 65.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000048,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000049,
    access: "Private",
    idoPrice: 148,
    currentPrice: 149,
    ath: 150,
    athIDORoi: 66.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000049,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000050,
    access: "Private",
    idoPrice: 151,
    currentPrice: 152,
    ath: 153,
    athIDORoi: 67.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000050,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000051,
    access: "Private",
    idoPrice: 154,
    currentPrice: 155,
    ath: 156,
    athIDORoi: 68.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000051,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000052,
    access: "Private",
    idoPrice: 157,
    currentPrice: 158,
    ath: 159,
    athIDORoi: 69.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000052,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000053,
    access: "Private",
    idoPrice: 160,
    currentPrice: 161,
    ath: 162,
    athIDORoi: 70.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000053,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000054,
    access: "Private",
    idoPrice: 163,
    currentPrice: 164,
    ath: 165,
    athIDORoi: 71.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000054,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000055,
    access: "Private",
    idoPrice: 166,
    currentPrice: 167,
    ath: 168,
    athIDORoi: 72.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000055,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000056,
    access: "Private",
    idoPrice: 169,
    currentPrice: 170,
    ath: 171,
    athIDORoi: 73.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000056,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000057,
    access: "Private",
    idoPrice: 172,
    currentPrice: 173,
    ath: 174,
    athIDORoi: 74.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000057,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000058,
    access: "Private",
    idoPrice: 175,
    currentPrice: 176,
    ath: 177,
    athIDORoi: 75.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000058,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000059,
    access: "Private",
    idoPrice: 178,
    currentPrice: 179,
    ath: 180,
    athIDORoi: 76.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000059,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem unique",
    hit: true,
    participants: 1000060,
    access: "Private",
    idoPrice: 181,
    currentPrice: 182,
    ath: 183,
    athIDORoi: 77.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000060,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000061,
    access: "Private",
    idoPrice: 184,
    currentPrice: 185,
    ath: 186,
    athIDORoi: 78.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000061,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000062,
    access: "Private",
    idoPrice: 187,
    currentPrice: 188,
    ath: 189,
    athIDORoi: 79.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000062,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000063,
    access: "Private",
    idoPrice: 190,
    currentPrice: 191,
    ath: 192,
    athIDORoi: 80.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000063,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "Hinox Ecosystem",
    hit: true,
    participants: 1000064,
    access: "Private",
    idoPrice: 193,
    currentPrice: 194,
    ath: 195,
    athIDORoi: 81.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000064,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "LHinox Ecosystem",
    hit: true,
    participants: 1000065,
    access: "Private",
    idoPrice: 196,
    currentPrice: 197,
    ath: 198,
    athIDORoi: 82.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000065,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "MHinox Ecosystem",
    hit: true,
    participants: 1000066,
    access: "Private",
    idoPrice: 199,
    currentPrice: 200,
    ath: 201,
    athIDORoi: 83.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000066,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "NHinox Ecosystem",
    hit: true,
    participants: 1000067,
    access: "Private",
    idoPrice: 202,
    currentPrice: 203,
    ath: 204,
    athIDORoi: 84.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000067,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "OHinox Ecosystem",
    hit: true,
    participants: 1000068,
    access: "Private",
    idoPrice: 205,
    currentPrice: 206,
    ath: 207,
    athIDORoi: 85.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000068,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "PHinox Ecosystem",
    hit: true,
    participants: 1000069,
    access: "Private",
    idoPrice: 208,
    currentPrice: 209,
    ath: 210,
    athIDORoi: 86.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000069,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "QHinox Ecosystem",
    hit: true,
    participants: 1000070,
    access: "Private",
    idoPrice: 211,
    currentPrice: 212,
    ath: 213,
    athIDORoi: 87.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000070,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "RHinox Ecosystem",
    hit: true,
    participants: 1000071,
    access: "Private",
    idoPrice: 214,
    currentPrice: 215,
    ath: 216,
    athIDORoi: 88.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000071,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "SHinox Ecosystem",
    hit: true,
    participants: 1000072,
    access: "Private",
    idoPrice: 217,
    currentPrice: 218,
    ath: 219,
    athIDORoi: 89.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000072,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "THinox Ecosystem",
    hit: true,
    participants: 1000073,
    access: "Private",
    idoPrice: 220,
    currentPrice: 221,
    ath: 222,
    athIDORoi: 90.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000073,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "UHinox Ecosystem",
    hit: true,
    participants: 1000074,
    access: "Private",
    idoPrice: 223,
    currentPrice: 224,
    ath: 225,
    athIDORoi: 91.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000074,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "VHinox Ecosystem",
    hit: true,
    participants: 1000075,
    access: "Private",
    idoPrice: 226,
    currentPrice: 227,
    ath: 228,
    athIDORoi: 92.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000075,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "WHinox Ecosystem",
    hit: true,
    participants: 1000076,
    access: "Private",
    idoPrice: 229,
    currentPrice: 230,
    ath: 231,
    athIDORoi: 93.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000076,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "XHinox Ecosystem",
    hit: true,
    participants: 1000077,
    access: "Private",
    idoPrice: 232,
    currentPrice: 233,
    ath: 234,
    athIDORoi: 94.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000077,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "YHinox Ecosystem",
    hit: true,
    participants: 1000078,
    access: "Private",
    idoPrice: 235,
    currentPrice: 236,
    ath: 237,
    athIDORoi: 95.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000078,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
  {
    icon: tableProjectItem,
    name: "ZHinox Ecosystem",
    hit: true,
    participants: 1000079,
    access: "Private",
    idoPrice: 238,
    currentPrice: 239,
    ath: 240,
    athIDORoi: 96.46,
    athIDORoiGreen: "(+17056.5%)",
    hinox: 2000079,
    leadVcIcon: tableProjectItem,
    leadVc: "Binance",
    salesDate: new Date(2023, 3, 27),
  },
];

const tags = [
  {
    label: "All",
  },
  {
    label: "Public Sales",
  },
  {
    label: "Private Sales",
  },
  {
    label: "DAO Incubated",
  },
];

const CompletedProjects = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedSorter, setSelectedSorter] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState("asc");

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, itemsPerPage, filteredData]);

  useEffect(() => {
    let filtered = tableRows.filter((el, idx) =>
      (
        el.access +
        el.ath +
        el.athIDORoi +
        el.athIDORoiGreen +
        el.athIDORoiGreen +
        el.athIDORoiGreen +
        el.currentPrice +
        el.hinox +
        el.hit +
        el.icon +
        el.idoPrice +
        el.leadVc +
        el.leadVcIcon +
        el.name
      )
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );
    let key, type;
    switch (selectedSorter) {
      case "Project Name":
        key = "projectName";
        type = "string";
        break;
      case "Participants":
        key = "participants";
        type = "number";
        break;
      case "IDO Price":
        key = "idoPrice";
        type = "number";
        break;
      case "Current Price":
        key = "currentPrice";
        type = "number";
        break;
      case "ATH":
        key = "ath";
        type = "number";
        break;
      case "ATH IDO ROI":
        key = "athIDORoi";
        type = "number";
        break;
      case "Raised On Hinox":
        key = "hinox";
        type = "number";
        break;
      case "Sales Date":
        key = "salesDate";
        type = "date";
        break;
      default:
        key = "";
    }
    if (key) {
      if (selectedOrder === "asc") {
        if (type === "string") {
          filtered.sort((a, b) => a[key] - b[key]);
        } else if (type === "number") {
          filtered.sort((a, b) => ("" + a[key]).localeCompare(b[key]));
        } else if (type === "date") {
          filtered.sort((a, b) => a[key].getTime() - b[key].getTime());
        }
      } else {
        if (type === "string") {
          filtered.sort((a, b) => b[key] - a[key]);
        } else if (type === "number") {
          filtered.sort((a, b) => ("" + b[key]).localeCompare(a[key]));
        } else if (type === "date") {
          filtered.sort((a, b) => b[key].getTime() - a[key].getTime());
        }
      }
    }
    setFilteredData(filtered);
  }, [searchValue, selectedSorter, selectedOrder]);

  return (
    <Section>
      <SectionTitle tag={103}>COMPLETED PROJECTS</SectionTitle>

      <div className={classes.filterContainer}>
        <div className={classes.tags}>
          {tags.map((el, idx) => {
            return (
              <button
                key={"tab-" + idx}
                className={clsx(
                  classes.tag,
                  el.label === selectedTag && classes.active
                )}
                onClick={() => setSelectedTag(el.label)}
              >
                {el.label}
              </button>
            );
          })}
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
          <button
            className={clsx(
              classes.tag,
              selectedOrder === "asc" && classes.active
            )}
            onClick={() => setSelectedOrder("asc")}
          >
            Ascending order
          </button>
          <button
            className={clsx(
              classes.tag,
              selectedOrder === "desc" && classes.active
            )}
            onClick={() => setSelectedOrder("desc")}
          >
            Descending order
          </button>
        </div>
        <MenuContainer
          onSelect={(val) => setSelectedSorter(val.label)}
          options={[
            { label: "Project Name" },
            { label: "Participants" },
            // { label: "Access" },
            { label: "IDO Price" },
            { label: "Current Price" },
            { label: "ATH" },
            { label: "ATH IDO ROI" },
            { label: "Raised On Hinox" },
            { label: "Sales Date" },
          ]}
          defaultSelected={selectedSorter}
        >
          <Dropdown label="Sort by:" defaultSelected={selectedSorter} />
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
            {currentTableData.map((el, idx) => {
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
                  <td>{el.salesDate.toDateString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
          // className="pagination-bar"
          currentPage={currentPage}
          totalCount={filteredData.length}
          pageSize={itemsPerPage}
          onPageChange={(page) => setCurrentPage(page)}
          siblingCount={0}
        />
      </div>

      <div className={classes.stats}>
        <div className={classes.statsCard}>
          <div className={classes.mainText}>
            $
            <CountUp end={530000000}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </div>
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
          <div className={classes.mainText}>
            ${" "}
            <CountUp end={0.098}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            .098
          </div>
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
            <CountUp end={2000}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            .98
            {/* 2000.<span className={classes.light}>98</span> <sup>BP</sup> */}
          </div>
          <div className={classes.iconText}>
            <img src={points} alt="points" />
            My Total Points
          </div>
        </div>
        <div className={classes.statsCard}>
          <div className={classes.mainText}>
            <CountUp end={500555}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            .555
            {/* 500,555.<span className={classes.light}>555</span> <sup>Bst</sup> */}
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
