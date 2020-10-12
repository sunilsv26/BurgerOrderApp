import React, { Fragment } from 'react';

const orderSummary =(props)=>{
const ingredientsOrderSummary= Object.keys(props.ingredients).map((igKey)=>{return (<li><span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}</li>) })

    return(
        <Fragment>
            <h3>Your Order Summary</h3>
            <p>Here is your delecious Burger with following Ingredients:</p>
            <ul>
             {ingredientsOrderSummary}
            </ul>
        </Fragment>
    )
}

export default orderSummary