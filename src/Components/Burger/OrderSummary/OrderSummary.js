import React, { Component, Fragment } from "react";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  render(){
    const ingredientsOrderSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Fragment>
        <h3>Your Order Summary</h3>
        <p>Here is your delecious Burger with following Ingredients:</p>
        <ul>{ingredientsOrderSummary}</ul>
        <strong>Total Price : {this.props.price}</strong>
        <p>Continue to Checkout!</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          Contiue
        </Button>
      </Fragment>
    );
    
  } 
};

export default OrderSummary;
