import React, { Fragment } from 'react';
import classes from './Layout.css';
import BurgerBuilder from '../../Container/BurgerBuilder'
const layout = ()=>{
    return(
        <Fragment>
            <div className={classes.Layout}>Tools,Navigation,SideDrawer</div>
            <div className={classes.Layout}><BurgerBuilder/></div>
        </Fragment>
    )
}

export default layout