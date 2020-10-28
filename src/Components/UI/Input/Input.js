import React from "react";
import classes from "./Input.css";

const input = (props) => {
  let inputEl = null;
  switch (props.elementType) {
    case "input":
      inputEl = (
        <input
          className={classes.InputEl}
          value={props.value}
          {...props.elementConfig}
        />
      );

      break;
    case "textarea":
      inputEl = (
        <textarea
          className={classes.InputEl}
          value={props.value}
          {...props.elementConfig}
        />
      );

      break;
    default:
      inputEl = (
        <input
          className={classes.InputEl}
          value={props.value}
          {...props.elementConfig}
        />
      );
      break;
  }

  return (
    <div className={classes.Input}>
      <label>{props.label}</label>
      {inputEl}
    </div>
  );
};

export default input;
