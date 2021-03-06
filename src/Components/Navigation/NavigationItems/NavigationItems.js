import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems=(props)=>{
    return(
        <ul className={classes.NavigationItems}>
            <NavigationItem Link='/burger'>BurgerBuilder</NavigationItem>
            {props.isLogIn ? 
            <NavigationItem Link='/logout'>Logout</NavigationItem>
             :<NavigationItem Link='/auth'>Login</NavigationItem>}
            <div className={classes.DesktopOnly}>
            {props.isLogIn ? <NavigationItem Link='/orders'>My orders</NavigationItem>:null}
            </div>
        </ul>
    )
}

export default navigationItems