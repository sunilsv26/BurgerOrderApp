import React, { Component, Fragment } from "react";
import classes from "./Layout.css";
import BurgerBuilder from "../../Container/BurgerBuilder";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  sideDrawerCancelHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  render() {
    return (
      <Fragment>
        <div className={classes.Layout}>
          <Toolbar  sideDrawerToggler={this.sideDrawerToggleHandler} />
        </div>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCancelHandler}
        />
        <div className={classes.Layout}>
          <BurgerBuilder />
        </div>
      </Fragment>
    );
  }
}

export default Layout;
