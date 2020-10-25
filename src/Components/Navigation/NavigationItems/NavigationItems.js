import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems=()=>{
    return(
        <ul className={classes.NavigationItems}>
            <NavigationItem Link='/burger'>BurgerBuilder</NavigationItem>
            <div className={classes.DesktopOnly}>
            <NavigationItem Link='/checkout'>Checkout</NavigationItem>
            </div>
        </ul>
    )
}

export default navigationItems