import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import SideDrawerToggler from "../../Navigation/SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <SideDrawerToggler clicked={props.sideDrawerToggler} />
      <Logo />
      <div className={classes.DesktopOnly}>
      <NavigationItems />
      </div>
    </header>
  );
};

export default toolbar;
