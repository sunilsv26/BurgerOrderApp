import React from 'react';
import classes from './Logo.css';
import burgesImg from '../../Assets/Images/burger-logo.png'


const logo = ()=>{
    return(
        <div className={classes.Logo}>
            <img src={burgesImg} alt='MyAppLogo'/>
        </div>
    )
}

export default logo;