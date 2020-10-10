import React from "react";
import classes from "./BuildControl.css";
const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <label className={classes.Label}>{props.label}</label>
      <button className={classes.Less} onClick={props.remove} disabled={props.disabled}>Less</button>
      <button className={classes.More} onClick={props.add}>More</button>
    </div>
  );
};

export default buildControl;
