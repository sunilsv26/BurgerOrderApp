import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientsOrderSummary = Object.keys(props.ingredients).map(
    (igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
          {props.ingredients[igKey]}
        </li>
      );
    }
  );

  return (
    <Fragment>
      <h3>Your Order Summary</h3>
      <p>Here is your delecious Burger with following Ingredients:</p>
      <ul>{ingredientsOrderSummary}</ul>
      <strong>Total Price : {props.price}</strong>
      <p>Continue to Checkout!</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        Contiue
      </Button>
    </Fragment>
  );
};

export default orderSummary;
