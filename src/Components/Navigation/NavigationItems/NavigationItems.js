import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems=()=>{
    return(
        <ul className={classes.NavigationItems}>
            <NavigationItem active Link='/'>BurgerBuilder</NavigationItem>
            <div className={classes.DesktopOnly}>
            <NavigationItem Link='./'>Checkout</NavigationItem>
            </div>
            
        </ul>
    )
}

export default navigationItems