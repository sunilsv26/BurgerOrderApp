import React from "react";
import Ingrdients from "./BurggerIngredients/Ingredients";
import classes from "./Burger.css";

const burger = (props) => {
  return (
    <div className={classes.Burger}>
      <Ingrdients type="bread-top" />
      <Ingrdients type='bread-bottom'/>
    </div>
  );
};

export default burger;
