import React, { Component } from 'react';
import classes from './Ingredients.css'

class BurgerIngredients extends Component{
   render(){
       let ingredient = null;

       switch (this.props.type) {
           case 'bread-bottm':
               ingredient=<div className={classes.BreadBottom}></div>
               break;
           case 'bread-top':
               ingredient=<div className={classes.BreadTop}>
                   <div className={classes.Seeds1}></div>
                   <div className={classes.Seeds2}></div>
               </div>
               break;
            
       
           default:
               ingredient=null;
               break;
       }
       return(ingredient)
   }
}

export default BurgerIngredients;