import React, { Component, Fragment } from "react";
import Burger from '../Components/Burger/Burger'
class BurgerBuilder extends Component {
  render() {
    return (
      <Fragment>
        <div><Burger /></div>
        <div>Build controls</div>
      </Fragment>
    );
  }
}

export default BurgerBuilder;
