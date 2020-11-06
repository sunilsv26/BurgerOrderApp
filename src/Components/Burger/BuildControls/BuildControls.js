import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "../BuildControls/BuildControl/BuildControl";
const buildControls = (props) => {
  const controls = [
    { label: "Meat", type: "meat" },
    { label: "Cheese", type: "cheese" },
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
  ];
  return (
    <div className={classes.BuildControls}>
       <p>Current Price:$ <strong >{props.price}</strong></p>
      {controls.map((ct) => (
        <BuildControl label={ct.label} 
        key={ct.type} 
        add={()=>props.addedIngredient(ct.type)}
        remove={()=>props.removedIngredient(ct.type)}
        disabled={props.disabled[ct.type]}
        />
      ))}
      <button disabled={props.OrderBtnDisabled} 
      className={classes.OrderButton}
      onClick={props.ordered}>{props.isAuth ? 'Order Now':'Sign Up to Order'}</button>
    </div>
  );
};

export default buildControls;
