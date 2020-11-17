import React from "react";

import clasees from "./Order.css";

const order = (props) => {
  let ingredients  =[];

  for(let ing in props.ingredients){
    ingredients.push({name:ing,amount:props.ingredients[ing]})
  }

let ingredientsOutput = ingredients.map(ing=>{ 
  return <span key={ing.name} style={
    {textTransform:'capitalize',margin:'2px 8px',border:'1px solid grey',padding:'5px 3px',display:'inline-block'}
  }>
    {ing.name}({ing.amount})
    </span>})
  return (
    <div className={clasees.Order}>
      <p>Ingredients:<br />{ingredientsOutput}</p>
      <p>TotalPrice: USD {props.price}</p>
    </div>
  );
};

export default order;
