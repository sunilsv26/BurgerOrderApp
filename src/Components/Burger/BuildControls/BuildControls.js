import React from "react";
import classes from "./BuildControls.css";
import BuildControl from '../BuildControls/BuildControl/BuildControl'
const buildControls = (props) => {
const controls = [{label:'Meat',type:'meat'},{label:'Cheese',type:'cheese'},
{label:'Salad',type:'salad'},{label:'Bacon',type:'bacon'}]
  return (<div className={classes.BuildControls}>
      {controls.map(ct=><BuildControl label={ct.label}  key={ct.type} />)}
  </div>)
};

export default buildControls;
