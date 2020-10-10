import React, { Component, Fragment } from "react";
import Burger from '../Components/Burger/Burger';
import BuildControls from '../Components/Burger/BuildControls/BuildControls'


class BurgerBuilder extends Component {
    state={
        ingredients:{
            meat:1,
            cheese:2,
            salad:1,
            bacon:2
        }
    }
  render() {   
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
