import Section from "components/common/Section/Section";

import classes from "./Navbar.module.css";
import { logo, sun, user } from "images";
import { Link, NavLink } from "react-router-dom";

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
  return (
    <Section className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
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
    </Section>
  );
};

export default Navbar;
