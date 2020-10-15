import React, { Fragment } from "react";
import classes from "./SideDrawer.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {
  return (
    <Fragment>
      <Backdrop show />
      <div className={classes.SideDrawer}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <NavigationItems />
      </div>
    </Fragment>
  );
};

export default sideDrawer;
