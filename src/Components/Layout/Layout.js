import React, { Fragment } from 'react';
import classes from './Layout.css'
const layout = ()=>{
    return(
        <Fragment>
            <div className={classes.Layout}>Tools,Navigation,SideDrawer</div>
            <div className={classes.Layout}>Burger,Burger Builder</div>
        </Fragment>
    )
}

export default layout