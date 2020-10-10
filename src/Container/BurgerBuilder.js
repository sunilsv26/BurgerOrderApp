import React, { Component, Fragment } from "react";
import Burger from "../Components/Burger/Burger";
import BuildControls from "../Components/Burger/BuildControls/BuildControls";

const ING_PRICES = [{ meat: 2 }, { cheese: 1 }, { salad: 1 }, { bacon: 0.5 }];

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 0,
      cheese: 0,
      salad: 0,
      bacon: 0,
    },
    totalPrice: 0,
  };

  ingredienAddHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    let newCount = oldCount + 1;
    let costAddition = ING_PRICES[type];
    let oldCost = this.state.totalPrice;
    let newCost = costAddition + oldCost;
    let updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;

    this.setState({ ingredients: updatedIngredients, totalPrice: newCost });
  };

  ingredienRemoveHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    let newCount = oldCount - 1;
    let costAddition = ING_PRICES[type];
    let oldCost = this.state.totalPrice;
    let newCost = costAddition - oldCost;
    let updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;

    this.setState({ ingredients: updatedIngredients, totalPrice: newCost });
  };
   

  render() {
    const disableInfo={
      ...this.state.ingredients
    }
    for(let key in disableInfo){
      disableInfo[key]= disableInfo[key]<=0 ;
    }
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addedIngredient={this.ingredienAddHandler}
          removedIngredient={this.ingredienRemoveHandler}
          disabled={disableInfo}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
