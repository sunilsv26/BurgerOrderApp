import React from "react";
import classes from "./Input.css";

const input = (props) => {
  let inputEl = null;
  let inputClasses =[classes.InputEl];
  if(props.invalid){
      inputClasses.push(classes.Invalid)
  }

  switch (props.elementType) {
    case "input":
      inputEl = (
        <input
          className={inputClasses.join(' ')}
          value={props.value}
          {...props.elementConfig}
         onChange={props.changed} 
        />
      );

      break;
    case "textarea":
      inputEl = (
        <textarea
          className={inputClasses.join(' ')}
          value={props.value}
          {...props.elementConfig}
         onChange={props.changed}
        />
      );

      break;
    case "select":
      inputEl = (
        <select className={inputClasses.join(' ')}
        value={props.value}
        onChange={props.changed}>
          {props.elementConfig.options.map((op) => (
            <option key={op.value} value={op.value}>{op.displayValue}</option>
          ))}
        </select>
      );

      break;
    default:
      inputEl = (
        <input
          className={inputClasses.join(' ')}
          value={props.value}
          {...props.elementConfig}
        />
      );
      break;
  }

  return (
    <div className={classes.Input} >    
     <label>{props.label}</label>
      {inputEl}
    </div>
  );
};

export default input;
