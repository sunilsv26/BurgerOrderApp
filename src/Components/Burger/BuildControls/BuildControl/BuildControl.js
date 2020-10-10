import React from "react";
import classes from "./BuildControl.css";
const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <label className={classes.Label}></label>
      <button className={classes.Less}>Less</button>
      <button className={classes.More}>More</button>
    </div>
  );
};

export default buildControl;
