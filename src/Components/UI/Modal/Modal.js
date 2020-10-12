import React from "react";
import classes from './Modal.css'
const modal = (props) => {
  <div className={classes.Modal}>{props.children}</div>;
};

expect default modal