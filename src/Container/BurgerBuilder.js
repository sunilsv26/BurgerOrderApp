import React, { Component, Fragment } from "react";
import Burger from '../Components/Burger/Burger'
class BurgerBuilder extends Component {
    state={
        ingredients:{
            meat:1,
            cheese:1,
            salad:2,
            bacon:1
        }
    }
  render() {   
    return (
      <Fragment>
        <div><Burger ingredients={this.state.ingredients} /></div>
        <div>Build controls</div>
      </Fragment>
    );
  }
}

export default BurgerBuilder;
