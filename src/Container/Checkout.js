import React, { Component } from "react";
import { connect } from "react-redux";

import CheckoutSummary from "../Components/Burger/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData";

import { Route, Redirect } from "react-router-dom";

class Checkout extends Component {
  checkOutCancelHandler = () => {
    this.props.history.goBack();
  };

  checkOutContineHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    let summary = <Redirect to="/burger" />;
    if (this.props.ings)  {
      const relod = this.props.purchased ? <Redirect to = '/burger' />:null;
      summary = (
        <div>
          {relod}
          <CheckoutSummary
            ingredients={this.props.ings}
            CheckOutCancel={this.checkOutCancelHandler}
            CheckOutContinue={this.checkOutContineHandler}
          />
          <Route
            path={this.props.match.path + "/contact-data"}
            component={ContactData}
          />
        </div>
      );
    }
    return (
      summary 
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased:state.order.purchased,
  };
};

export default connect(mapStateToProps)(Checkout);
