import React from 'react';
import classes from './NavigationItem.css';

const navigationItem = (props)=>{
    return(
    <li className={classes.NavigationItem}>
        <a href={props.Link} className={props.active ? classes.active:null}>{props.children}</a>
    </li>
    )
}

export default navigationItem;