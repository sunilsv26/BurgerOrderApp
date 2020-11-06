import React, { Component, Fragment } from "react";
import {connect} from 'react-redux'
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";


class Layout extends Component {
  state = {
    showSideDrawer: false,
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
          <Toolbar  sideDrawerToggler={this.sideDrawerToggleHandler} 
          isAuth={this.props.isLogin}/>
        </div>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCancelHandler}
          isAuth={this.props.isLogin}
        />
        <div className={classes.Layout}>
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps =state=>{
  return{
    isLogin:state.auth.tokenId !==null,
  }
}

export default connect(mapStateToProps) (Layout);
