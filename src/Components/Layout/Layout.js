import React, { Fragment } from 'react';
import classes from './Layout.css';
import BurgerBuilder from '../../Container/BurgerBuilder';
import Toolbar from '../Navigation/Toolbar/Toolbar'
const layout = ()=>{
    return(
        <Fragment>
            <div className={classes.Layout}><Toolbar/></div>
            <div className={classes.Layout}><BurgerBuilder/></div>
        </Fragment>
    )
}

export default layout