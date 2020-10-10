import React from "react";
import Ingrdients from "./BurggerIngredients/Ingredients";
import classes from "./Burger.css";

const burger = (props) => {
  const transFormedIng = Object.keys(props.ingredients).map((IgKey) => {
    return [...Array(props.ingredients[IgKey])].map((_, i) => {
      return <Ingrdients key={IgKey + i} type={IgKey} />;
    });
  });
  console.log(transFormedIng);
  return (
    <div className={classes.Burger}>
      <Ingrdients type="bread-top" />
      {transFormedIng}
      <Ingrdients type="bread-bottom" />
    </div>
  );
};

export default burger;
