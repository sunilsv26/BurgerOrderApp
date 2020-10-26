import React from "react";

import clasees from "./Order.css";

const order = (props) => {
  return (
    <div className={clasees.Order}>
      <p>Ingredients:salad(1)</p>
      <p>TotalPrice: USD 5.20</p>
    </div>
  );
};

export default order;
