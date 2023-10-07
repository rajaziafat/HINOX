import { Outlet } from "react-router-dom";

import Navbar from "components/common/Navbar/Navbar";
import classes from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className={classes.main}>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
