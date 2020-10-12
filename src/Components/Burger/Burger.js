import React from "react";
import Ingrdients from "./BurggerIngredients/Ingredients";
import classes from "./Burger.css";

const burger = (props) => {
  let transFormedIng = Object.keys(props.ingredients).map((IgKey) => {
    return [...Array(props.ingredients[IgKey])].map((_, i) => {
      return <Ingrdients key={IgKey + i} type={IgKey} />;
    });
  }).reduce((prev,cuur)=>{return prev.concat(cuur)});
  if(transFormedIng.length===0){
    transFormedIng = <p>Please start adding Ingredients</p>
  }

  return (
    <div className={classes.Burger}>
      <Ingrdients type="bread-top" />
      {transFormedIng}
      <Ingrdients type="bread-bottom" />
    </div>
  );
};

export default burger;
