import React from 'react';

import classes from './Toolbar.css'

const toolbar =(props)=>{
    return(
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <div>Logo</div>
        </header>
    )
}

export default toolbar