import React, { Fragment } from "react";
import classes from "./SideDrawer.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {
  let sideDrawerClasses = [classes.SideDrawer,classes.Close];
  if(props.open){
    sideDrawerClasses=[classes.SideDrawer,classes.Open]
  }
  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={sideDrawerClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <NavigationItems />
      </div>
    </Fragment>
  );
};

export default sideDrawer;
