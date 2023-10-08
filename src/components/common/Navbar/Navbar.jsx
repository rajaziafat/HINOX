import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Section from "components/common/Section/Section";
import { hamburger, logo, modalCross, sun, user } from "images";
import classes from "./Navbar.module.css";
import clsx from "clsx";

const links = [
  {
    label: "Launchpad",
    to: "/",
  },
  {
    label: "INO Launchpad",
    to: "/ino-",
  },
  {
    label: "Staking",
    to: "/staking",
  },
  {
    label: "DAO",
    to: "/",
  },
  {
    label: "Claims",
    to: "/",
  },
  {
    label: "Others",
    to: "/",
  },
];

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <Section className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <img
          className={classes.menu}
          src={hamburger}
          alt="hamburger"
          onClick={() => setIsMenuActive(true)}
        />
        <div className={clsx(classes.sidebar, isMenuActive && classes.active)}>
          <img
            className={classes.cross}
            src={modalCross}
            alt="cross"
            onClick={() => setIsMenuActive(false)}
          />
          <div className={classes.links}>
            {links.map((el, idx) => {
              return (
                <NavLink key={"link-" + el.label} to={el.to}>
                  {el.label}
                </NavLink>
              );
            })}
          </div>
          <button className={classes.btn}>
            <img src={user} alt="user" />
          </button>
          <button className={classes.btn}>
            <img src={sun} alt="sun" />
          </button>
          <button className={classes.connect}>Connect Wallet</button>
        </div>
      </div>
    </Section>
  );
};

export default Navbar;
