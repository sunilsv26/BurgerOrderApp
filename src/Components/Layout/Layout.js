import React, { Fragment } from 'react';
import classes from './Layout.css';
import BurgerBuilder from '../../Container/BurgerBuilder';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer  from '../Navigation/SideDrawer/SideDrawer'

const layout = ()=>{
    return(
        <Fragment>
            <div className={classes.Layout}><Toolbar/></div>
            <SideDrawer />
            <div className={classes.Layout}><BurgerBuilder/></div>
        </Fragment>
    )
}

export default layout