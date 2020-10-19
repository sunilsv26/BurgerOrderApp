import React, { Component, Fragment } from "react";
import Burger from "../Components/Burger/Burger";
import BuildControls from "../Components/Burger/BuildControls/BuildControls";
import Modal from "../Components/UI/Modal/Modal";
import OrderSummary from "../Components/Burger/OrderSummary/OrderSummary";
import axiosOrder from '../axios-order'

const ING_PRICES = { meat: 2, cheese: 1, salad: 1, bacon: 0.5 };

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 0,
      cheese: 0,
      salad: 0,
      bacon: 0,
    },
    totalPrice: 0,
    OrdeBtnDisabled: true,
    purchasing: false,
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseModalRemovehandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    const order ={
      name:'Sunil Sherikar',
      email:'sunilsv26@gmail.com',
      mobNumb:7892069724,
      adress:{
        landmark:'Near Sri Laxmi temple',
        village:'Narayanpur',
        taluqa:'BasavaKalyan',
        dist:'bidar',
        state:'Karnataka',
        country:'India',
        pinCode:585327
      },
      ingredients:this.state.ingredients,
      purchaseValue:this.state.totalPrice
    }
    alert("Sucessfully purchased");
    axiosOrder.post('/orders.json',order)
    .then(response=>console.log(response))
    .catch(error=>console.log(error))
    this.purchaseModalRemovehandler();
  };
  orderBtnstate(price) {
    if (price === 0) {
      this.setState({ OrdeBtnDisabled: true });
    } else {
      this.setState({ OrdeBtnDisabled: false });
    }
  }

  ingredienAddHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;
    const costAddition = ING_PRICES[type];
    const oldCost = this.state.totalPrice;
    const newCost = costAddition + oldCost;
    this.setState({ ingredients: updatedIngredients, totalPrice: newCost });
    this.orderBtnstate(newCost);
  };

  ingredienRemoveHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount - 1;
    const costAddition = ING_PRICES[type];
    const oldCost = this.state.totalPrice;
    const newCost = oldCost - costAddition;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;
    this.setState({ ingredients: updatedIngredients, totalPrice: newCost });
    this.orderBtnstate(newCost);
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients,
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <Fragment>
        <Modal
          show={this.state.purchasing}
          modalRemoved={this.purchaseModalRemovehandler}
        >
          <OrderSummary
            price={`$ ${this.state.totalPrice}`}
            ingredients={this.state.ingredients}
            purchaseCanceled={this.purchaseModalRemovehandler}
            purchaseContinued={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addedIngredient={this.ingredienAddHandler}
          removedIngredient={this.ingredienRemoveHandler}
          disabled={disableInfo}
          price={this.state.totalPrice}
          OrderBtnDisabled={this.state.OrdeBtnDisabled}
          ordered={this.purchaseHandler}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
