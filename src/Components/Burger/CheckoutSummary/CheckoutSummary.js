import React from 'react';
import  classes from './CheckoutSummary.classes';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button'
const checkoutSummmary =(props)=>{
    return(
        <div className={classes.CheckoutSummary} >
            <h1>Hope you will like the taste of it!!!</h1>
            <div style={{width:'300px',height:'300px',margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType='Danger' clicked>CANCEL</Button>
            <Button btnType='Success' clicked>CONTINUE</Button>
        </div>
    )
}

export default checkoutSummmary