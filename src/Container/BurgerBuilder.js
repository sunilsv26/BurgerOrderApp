import React, { Component, Fragment } from "react";
import Burger from '../Components/Burger/Burger'
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
        <div><Burger ingredients={this.state.ingredients} /></div>
        <div>Build controls</div>
      </Fragment>
    );
  }
}

export default BurgerBuilder;
