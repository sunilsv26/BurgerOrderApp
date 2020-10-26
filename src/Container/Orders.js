import React, { Component } from "react";
import Order from "../Components/Burger/OrderSummary/Order/Order";

class Orders extends Component {
  render() {
    return (
      <div style={{marginTop:'55px'}}>
        <Order />
        <Order />
      </div>
    );
  }
}

export default Orders
