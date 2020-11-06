import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems=(props)=>{
    return(
        <ul className={classes.NavigationItems}>
            <NavigationItem Link='/burger'>BurgerBuilder</NavigationItem>
            {props.isLogIn ? 
            <NavigationItem Link='/auth'>Logout</NavigationItem>
             :<NavigationItem Link='/auth'>Login</NavigationItem>}
            <div className={classes.DesktopOnly}>
            <NavigationItem Link='/orders'>My orders</NavigationItem>
            </div>
        </ul>
    )
}

export default navigationItems